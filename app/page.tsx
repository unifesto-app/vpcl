import Footer from "@/components/Footer";
import Image from "next/image";
import VPCLHero from "@/app/assets/images/vpcl-hero.png";
import AppStoreBadge from "@/app/assets/images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";
import GooglePlayBadge from "@/app/assets/images/GetItOnGooglePlay_Badge_Web_color_English.svg";
import UnifestoIcon from "@/app/assets/images/unifesto-icon.png";

export default function Home() {
  const marqueeTexts = ["Get Drafted", "Build", "Win", "VPCL 2026"];
  
  return (
    <div className="flex flex-col flex-1">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-8 md:pt-0">
        {/* Marquee Bar - Bottom */}
        <div className="absolute bottom-[18%] sm:bottom-[15%] rotate-3 w-[150%] sm:w-[120%] -left-[25%] sm:-left-[10%] bg-black py-2 sm:py-2 md:py-3 border-y border-zinc-800 z-0 overflow-hidden shadow-sm">
          <div className="flex whitespace-nowrap animate-marquee-reverse">
            {marqueeTexts.map((text, i) => (
              <span 
                key={i} 
                className="text-[10px] sm:text-xs md:text-sm font-grandh tracking-[0.15em] sm:tracking-[0.2em] mx-4 sm:mx-6"
                style={{
                  background: "linear-gradient(180deg, #f1d647, #ff8a00)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {text}
              </span>
            )).concat(marqueeTexts.map((text, i) => (
              <span 
                key={i + marqueeTexts.length} 
                className="text-[10px] sm:text-xs md:text-sm font-grandh tracking-[0.15em] sm:tracking-[0.2em] mx-4 sm:mx-6"
                style={{
                  background: "linear-gradient(180deg, #f1d647, #ff8a00)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {text}
              </span>
            )))}
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-1/4 -left-48 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ background: "linear-gradient(180deg, #f1d647, #ff8a00)" }}
          ></div>
          <div 
            className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ background: "linear-gradient(180deg, #f1d647, #ff8a00)" }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-16 text-center">
          <div className="space-y-3 md:space-y-4">
            {/* Main Headline - Hero Image */}
            <div className="flex justify-center">
              <Image
                src={VPCLHero}
                alt="VPCL - Vibe Coding Premier League"
                className="w-full max-w-3xl h-auto"
                priority
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center px-4">
              <a
                href="#join-developer"
                className="w-full sm:w-auto group relative px-6 py-3 rounded-full font-medium text-sm text-black overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl text-center"
                style={{
                  background: "linear-gradient(180deg, #f1d647, #ff8a00)",
                }}
              >
                <span className="relative z-10">Join as Developer</span>
              </a>
              
              <a
                href="#own-team"
                className="w-full sm:w-auto px-6 py-3 rounded-full font-medium text-sm text-white border-2 border-zinc-700 hover:border-zinc-500 hover:bg-zinc-900 transition-all duration-300 text-center"
              >
                Own a Team
              </a>

              <a
                href="#sponsor"
                className="w-full sm:w-auto px-6 py-3 rounded-full font-medium text-sm text-white border-2 border-zinc-700 hover:border-zinc-500 hover:bg-zinc-900 transition-all duration-300 text-center"
              >
                Sponsor VPCL
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-16 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg 
            className="w-6 h-6 text-zinc-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </section>

      {/* What is VPCL Section */}
      <section className="py-16 sm:py-20 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-grandh mb-6"
              style={{
                background: "linear-gradient(180deg, #f1d647, #ff8a00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              What is VPCL?
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 text-base md:text-lg text-zinc-300 leading-relaxed">
              <p>
                VPCL is a competitive coding league inspired by franchise sports leagues.
              </p>
              <p>
                Developers enter the player pool and get drafted into teams during a live auction.
              </p>
              <p>
                Teams compete throughout the season by building products, solving challenges, and earning points.
              </p>
              <p>
                The top teams advance to the playoffs and finals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 sm:py-20 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-grandh mb-4"
              style={{
                background: "linear-gradient(180deg, #f1d647, #ff8a00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6 md:gap-4">
            {[
              { 
                step: "1", 
                title: "Register", 
                desc: "Join the player pool." 
              },
              { 
                step: "2", 
                title: "Get Drafted", 
                desc: "Teams build their squad through the VPCL Auction." 
              },
              { 
                step: "3", 
                title: "Compete", 
                desc: "Face off against other teams in build challenges." 
              },
              { 
                step: "4", 
                title: "Climb the Table", 
                desc: "Win matches and qualify for the playoffs." 
              },
              { 
                step: "5", 
                title: "Become Champions", 
                desc: "Compete in the finals for the title." 
              },
            ].map((item) => (
              <div key={item.step} className="bg-zinc-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-zinc-800">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-black text-xl mb-4"
                  style={{ background: "linear-gradient(180deg, #f1d647, #ff8a00)" }}
                >
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Developers Section */}
      <section id="join-developer" className="py-16 sm:py-20 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-grandh mb-6"
              style={{
                background: "linear-gradient(180deg, #f1d647, #ff8a00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              For Developers
            </h2>
            <p className="text-lg md:text-xl text-zinc-300 mb-8 leading-relaxed">
              Build products. Compete with top talent. Join a team. Become a champion.
            </p>
            <p className="text-base text-zinc-400 mb-8">
              Join the waitlist today.
            </p>
            <a
              href="https://forms.gle/KV5Ke5D9cykUWycf6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-full font-medium text-lg text-black transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                background: "linear-gradient(180deg, #f1d647, #ff8a00)",
              }}
            >
              Join as Developer
            </a>
          </div>
        </div>
      </section>

      {/* For Team Owners Section */}
      <section id="own-team" className="py-16 sm:py-20 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-grandh mb-6"
              style={{
                background: "linear-gradient(180deg, #f1d647, #ff8a00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              For Team Owners
            </h2>
            <p className="text-lg md:text-xl text-zinc-300 mb-6 leading-relaxed">
              Own a franchise. Draft developers. Build your dream team. Compete for the championship.
            </p>
            <p className="text-base text-zinc-400 mb-8">
              Startups, communities, clubs, and organizations are welcome.
            </p>
            <a
              href="https://forms.gle/t1rU5xr1GHkFYQ1Y7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-full font-medium text-lg text-white border-2 border-zinc-700 hover:border-zinc-500 hover:bg-zinc-900 transition-all duration-300"
            >
              Own a Team
            </a>
          </div>
        </div>
      </section>

      {/* Sponsors and Partners Section */}
      <section id="sponsor" className="py-16 sm:py-20 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-grandh mb-4"
              style={{
                background: "linear-gradient(180deg, #f1d647, #ff8a00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Sponsors & Partners
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
              Powered by leading organizations in technology and innovation
            </p>
          </div>

          {/* Title Sponsors */}
          <div className="mb-16">
            <h3 className="text-xl sm:text-2xl font-grandh text-center text-zinc-300 mb-8">
              Title Sponsors
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {/* Placeholder for sponsor logos */}
              <div className="w-48 h-24 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center hover:border-zinc-700 transition-colors">
                <span className="text-zinc-600 text-sm">Get Your Logo Here</span>
              </div>
              <div className="w-48 h-24 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center hover:border-zinc-700 transition-colors">
                <span className="text-zinc-600 text-sm">Get Your Logo Here</span>
              </div>
            </div>
          </div>

          {/* Powered By Sponsors */}
          <div className="mb-16">
            <h3 className="text-lg sm:text-xl font-grandh text-center text-zinc-400 mb-8">
              Powered By
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
              {/* Unifesto Logo */}
              <div className="w-36 h-20 bg-zinc-900 rounded-lg border border-zinc-800 flex items-center justify-center hover:border-zinc-700 transition-colors p-4">
                <Image
                  src={UnifestoIcon}
                  alt="Unifesto"
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Placeholder for other sponsor logos */}
              {[1, 2, 3].map((i) => (
                <div 
                  key={i}
                  className="w-36 h-20 bg-zinc-900 rounded-lg border border-zinc-800 flex items-center justify-center hover:border-zinc-700 transition-colors"
                >
                  <span className="text-zinc-600 text-xs">Get Your Logo Here</span>
                </div>
              ))}
            </div>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-lg sm:text-xl font-grandh text-center text-zinc-400 mb-8">
              Partners
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
              {/* Placeholder for partner logos */}
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div 
                  key={i}
                  className="w-32 h-16 bg-zinc-900 rounded-lg border border-zinc-800 flex items-center justify-center hover:border-zinc-700 transition-colors"
                >
                  <span className="text-zinc-600 text-xs">Get Your Logo Here</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-sm text-zinc-500 mb-4">
              Interested in partnering with VPCL?
            </p>
            <a
              href="https://forms.gle/JetNzejsXP7XmcR37"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-full font-medium text-sm text-black transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                background: "linear-gradient(180deg, #f1d647, #ff8a00)",
              }}
            >
              Become a Sponsor
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 sm:py-20 md:py-32 bg-black">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-grandh mb-4"
              style={{
                background: "linear-gradient(180deg, #f1d647, #ff8a00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Is registration open?",
                answer: "Not yet. Join the waitlist to receive updates."
              },
              {
                question: "Who can participate?",
                answer: "Students, developers, builders, and professionals."
              },
              {
                question: "Who can own a team?",
                answer: "Startups, communities, clubs, colleges, and organizations."
              },
              {
                question: "When is Season 1?",
                answer: "To be announced."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-zinc-900 rounded-2xl p-6 shadow-sm border border-zinc-800">
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-base text-zinc-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Unifesto App Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-black border-t border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl font-grandh"
                style={{
                  background: "linear-gradient(180deg, #f1d647, #ff8a00)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Download Unifesto App
              </h2>
              <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
                Stay updated with VPCL and all Unifesto events. Get notifications, track your progress, and connect with the community.
              </p>
            </div>

            {/* App Store Badges */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={AppStoreBadge}
                  alt="Download on the App Store"
                  className="h-12 sm:h-14 w-auto"
                />
              </a>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={GooglePlayBadge}
                  alt="Get it on Google Play"
                  className="h-12 sm:h-14 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <Footer />
    </div>
  );
}
