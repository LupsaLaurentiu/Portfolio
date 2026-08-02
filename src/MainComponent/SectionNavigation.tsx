import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MutableRefObject,
} from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Technical Skills" },
  { id: "education", label: "Education" },
] as const;

type SectionId = (typeof sections)[number]["id"];
type ScrollContainer = Window | HTMLElement;

interface SectionPosition {
  id: SectionId;
  top: number;
  bottom: number;
}

const SCROLL_OFFSET = 32;
const SCROLL_DURATION = 700;

function isWindow(container: ScrollContainer): container is Window {
  return container === window;
}

function isScrollable(element: HTMLElement) {
  const styles = window.getComputedStyle(element);
  const overflowY = styles.overflowY;

  return (
    (overflowY === "auto" || overflowY === "scroll") &&
    element.scrollHeight > element.clientHeight
  );
}

function findScrollContainer(
  element: HTMLElement,
): ScrollContainer {
  let parent = element.parentElement;

  while (parent) {
    if (isScrollable(parent)) {
      return parent;
    }

    parent = parent.parentElement;
  }

  return window;
}

function getScrollTop(container: ScrollContainer) {
  return isWindow(container)
    ? window.scrollY
    : container.scrollTop;
}

function getViewportHeight(container: ScrollContainer) {
  return isWindow(container)
    ? window.innerHeight
    : container.clientHeight;
}

function getContainerTop(container: ScrollContainer) {
  return isWindow(container)
    ? 0
    : container.getBoundingClientRect().top;
}

function getTargetScrollTop(
  element: HTMLElement,
  container: ScrollContainer,
) {
  if (isWindow(container)) {
    return (
      element.getBoundingClientRect().top +
      window.scrollY -
      SCROLL_OFFSET
    );
  }

  const containerRect = container.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();

  return (
    container.scrollTop +
    elementRect.top -
    containerRect.top -
    SCROLL_OFFSET
  );
}

function easeInOutCubic(progress: number) {
  return progress < 0.5
    ? 4 * progress * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 3) / 2;
}

function animateScroll(
  container: ScrollContainer,
  target: number,
  duration: number,
  animationRef: MutableRefObject<number | null>,
  onComplete?: () => void,
) {
  if (animationRef.current !== null) {
    cancelAnimationFrame(animationRef.current);
  }

  const start = getScrollTop(container);
  const distance = target - start;
  const startTime = performance.now();

  const frame = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutCubic(progress);
    const nextPosition = start + distance * easedProgress;

    if (isWindow(container)) {
      window.scrollTo(0, nextPosition);
    } else {
      container.scrollTop = nextPosition;
    }

    if (progress < 1) {
      animationRef.current = requestAnimationFrame(frame);
      return;
    }

    animationRef.current = null;
    onComplete?.();
  };

  animationRef.current = requestAnimationFrame(frame);
}

export default function SectionNavigation() {
  const [activeSection, setActiveSection] =
    useState<SectionId>("about");

  const scrollContainerRef =
    useRef<ScrollContainer | null>(null);

  const animationFrameRef = useRef<number | null>(null);
  const scrollUpdateFrameRef = useRef<number | null>(null);
  const isProgrammaticScrollRef = useRef(false);

  const resolveScrollContainer = useCallback(() => {
    const firstSection = document.getElementById(
      sections[0].id,
    );

    if (!firstSection) {
      scrollContainerRef.current = window;
      return window;
    }

    const container = findScrollContainer(firstSection);
    scrollContainerRef.current = container;

    return container;
  }, []);

  const updateActiveSection = useCallback(() => {
    if (isProgrammaticScrollRef.current) return;

    if (scrollUpdateFrameRef.current !== null) {
      cancelAnimationFrame(scrollUpdateFrameRef.current);
    }

    scrollUpdateFrameRef.current = requestAnimationFrame(() => {
      const container =
        scrollContainerRef.current ??
        resolveScrollContainer();

      const containerTop = getContainerTop(container);
      const activationLine =
        containerTop + getViewportHeight(container) * 0.32;

      const availableSections: SectionPosition[] =
        sections.flatMap((section) => {
          const element = document.getElementById(section.id);

          if (!element) return [];

          const rect = element.getBoundingClientRect();

          return [
            {
              id: section.id,
              top: rect.top,
              bottom: rect.bottom,
            },
          ];
        });

      if (availableSections.length === 0) return;

      const intersectingSection = availableSections.find(
        (section) =>
          section.top <= activationLine &&
          section.bottom > activationLine,
      );

      if (intersectingSection) {
        setActiveSection(intersectingSection.id);
        return;
      }

      const passedSections = availableSections.filter(
        (section) => section.top <= activationLine,
      );

      const fallbackSection =
        passedSections[passedSections.length - 1] ??
        availableSections[0];

      setActiveSection(fallbackSection.id);
    });
  }, [resolveScrollContainer]);

  useEffect(() => {
    const container = resolveScrollContainer();
    const eventTarget: Window | HTMLElement =
      isWindow(container) ? window : container;

    updateActiveSection();

    eventTarget.addEventListener(
      "scroll",
      updateActiveSection,
      { passive: true },
    );

    window.addEventListener(
      "resize",
      updateActiveSection,
    );

    return () => {
      eventTarget.removeEventListener(
        "scroll",
        updateActiveSection,
      );

      window.removeEventListener(
        "resize",
        updateActiveSection,
      );

      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      if (scrollUpdateFrameRef.current !== null) {
        cancelAnimationFrame(scrollUpdateFrameRef.current);
      }
    };
  }, [resolveScrollContainer, updateActiveSection]);

  const scrollToSection = (sectionId: SectionId) => {
    const element = document.getElementById(sectionId);

    if (!element) {
      console.error(
        `Missing section with id: #${sectionId}`,
      );
      return;
    }

    const container =
      scrollContainerRef.current ??
      resolveScrollContainer();

    const targetPosition = Math.max(
      0,
      getTargetScrollTop(element, container),
    );

    setActiveSection(sectionId);
    isProgrammaticScrollRef.current = true;

    animateScroll(
      container,
      targetPosition,
      SCROLL_DURATION,
      animationFrameRef,
      () => {
        isProgrammaticScrollRef.current = false;
        updateActiveSection();

        window.history.replaceState(
          null,
          "",
          `${window.location.pathname}${window.location.search}#${sectionId}`,
        );
      },
    );
  };

  return (
    <nav
      aria-label="Portfolio sections"
      className="fixed right-8 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
    >
      <ul className="space-y-4">
        {sections.map((section) => {
          const isActive =
            activeSection === section.id;

          return (
            <li key={section.id}>
              <button
                type="button"
                onClick={() =>
                  scrollToSection(section.id)
                }
                aria-current={
                  isActive ? "location" : undefined
                }
                className={`group flex w-full items-center justify-end gap-3 text-sm transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-neutral-500 hover:text-neutral-200"
                }`}
              >
                <span
                  className={`transition-all duration-200 ${
                    isActive
                      ? "translate-x-0 opacity-100"
                      : "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                  }`}
                >
                  {section.label}
                </span>

                <span
                  className={`rounded-full transition-all duration-200 ${
                    isActive
                      ? "h-2.5 w-2.5 bg-white"
                      : "h-2 w-2 bg-neutral-600 group-hover:bg-neutral-300"
                  }`}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}