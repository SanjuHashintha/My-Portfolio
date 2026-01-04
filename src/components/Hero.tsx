import Image from "next/image";
import earthImage from "../assets/earth.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-10 md:py-20 text-center relative"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="absolute inset-0 bg-black/5 pointer-events-none" />

      <div className="relative mb-8">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-cyan-400/50 shadow-2xl">
          <Image
            src={earthImage}
            alt="Sanju"
            width={160}
            height={160}
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute -inset-2 rounded-full bg-cyan-400/20 blur-sm -z-10" />
      </div>

      <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
        Hello, I'm <span className="text-cyan-300">Sanju</span>
      </h1>
      <p className="text-lg md:text-xl text-cyan-100 max-w-2xl leading-relaxed drop-shadow">
        Full-Stack Developer specializing in C#, .NET, TypeScript, and modern
        web applications.
      </p>
    </section>
  );
}
