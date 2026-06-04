import Link from "next/link";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col items-center justify-center bg-white relative overflow-hidden px-6 py-64">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-1/4 -left-48 w-96 h-96 rounded-full blur-3xl opacity-[0.15]"
            style={{ background: "linear-gradient(to bottom, #3491ff, #0062ff)" }}
          ></div>
          <div 
            className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full blur-3xl opacity-[0.15]"
            style={{ background: "linear-gradient(to bottom, #bdadff, #8666fa)" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h1 
            className="text-8xl md:text-9xl font-grandh mb-4"
            style={{
              background: "linear-gradient(135deg, #3491ff, #0062ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
            Page Not Found
          </h2>
          <p className="text-lg text-zinc-600 mb-10 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="px-8 py-3.5 rounded-full font-medium text-base text-white transition-all duration-300 hover:scale-105 hover:shadow-xl text-center min-w-[200px]"
              style={{
                background: "linear-gradient(135deg, #3491ff, #0062ff)",
              }}
            >
              Back to Home
            </Link>
            <Link
              href="/hackathon"
              className="px-8 py-3.5 rounded-full font-medium text-base text-zinc-900 border-2 border-zinc-300 hover:border-zinc-400 hover:bg-zinc-50 transition-all duration-300 text-center min-w-[200px]"
            >
              View Programs
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
