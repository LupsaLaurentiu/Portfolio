import { useEffect } from "react";

export default function LoaderSlime({ onFinish }: { onFinish?: () => void }) {
  useEffect(() => {
    // Loader durează 2.8 secunde, apoi dispare (poți schimba cât vrei)
    const t = setTimeout(() => onFinish?.(), 2800);
    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-neutral-900 z-50 flex flex-col items-center justify-center">
      {/* SVG blobs animate cu CSS */}
      <svg width="520" height="320" viewBox="0 0 520 320" fill="none" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{zIndex: 0}}>
        <g>
          <Blob animate="blob1" color="#fff" />
          <Blob animate="blob2" color="#fff" />
          <Blob animate="blob3" color="#fff" />
        </g>
      </svg>

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-xl mb-2 tracking-wider">
          Turning <span className="text-primary">ideas</span> into
          <br />
          <span className="text-primary">creative solutions</span>
        </h1>
      </div>

      {/* Animatie stil slime */}
      <style>{`
        @keyframes blob1 {
          0%   { transform: translate(30px,60px) scale(1.1,1) rotate(0deg);}
          25%  { transform: translate(50px,90px) scale(1.2,1.1) rotate(10deg);}
          50%  { transform: translate(10px,120px) scale(1.1,1.2) rotate(-10deg);}
          75%  { transform: translate(40px,100px) scale(1,1.1) rotate(6deg);}
          100% { transform: translate(30px,60px) scale(1.1,1) rotate(0deg);}
        }
        @keyframes blob2 {
          0%   { transform: translate(290px,160px) scale(1.2,1.1) rotate(0deg);}
          25%  { transform: translate(310px,180px) scale(1.1,1.2) rotate(-8deg);}
          50%  { transform: translate(280px,140px) scale(1,1.1) rotate(7deg);}
          75%  { transform: translate(320px,130px) scale(1.2,1.1) rotate(12deg);}
          100% { transform: translate(290px,160px) scale(1.2,1.1) rotate(0deg);}
        }
        @keyframes blob3 {
          0%   { transform: translate(160px, 200px) scale(1.05,1.08) rotate(-2deg);}
          25%  { transform: translate(140px, 210px) scale(1.08,1.02) rotate(9deg);}
          50%  { transform: translate(170px, 250px) scale(1.02,1.09) rotate(-7deg);}
          75%  { transform: translate(190px, 230px) scale(1.04,1.1) rotate(7deg);}
          100% { transform: translate(160px, 200px) scale(1.05,1.08) rotate(-2deg);}
        }
        .blob1 { animation: blob1 3.5s linear infinite; }
        .blob2 { animation: blob2 3.9s linear infinite; }
        .blob3 { animation: blob3 3.7s linear infinite; }
      `}</style>
    </div>
  );
}

// Un blob SVG cu forma fluidă
function Blob({ animate, color = "#fff" }: { animate: string, color?: string }) {
  return (
    <path
      className={`blob${animate === "blob1" ? "1" : animate === "blob2" ? "2" : "3"}`}
      d={animate === "blob1"
        ? "M120,60 Q170,10 240,70 Q290,90 240,130 Q170,190 120,120 Q90,100 120,60Z"
        : animate === "blob2"
        ? "M220,140 Q250,110 300,150 Q340,160 320,200 Q270,250 230,210 Q210,190 220,140Z"
        : "M180,220 Q210,200 260,230 Q290,250 250,280 Q200,320 170,270 Q150,250 180,220Z"
      }
      fill={color}
      opacity="0.96"
    />
  );
}
