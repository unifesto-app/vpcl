import Footer from "@/components/Footer";
import Image from "next/image";
import VCPLHero from "@/app/assets/images/vpcl-hero.png";
import AppStoreBadge from "@/app/assets/images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";
import GooglePlayBadge from "@/app/assets/images/GetItOnGooglePlay_Badge_Web_color_English.svg";
import UnifestoIcon from "@/app/assets/images/unifesto-icon.png";
import T2TLogo from "@/app/assets/images/t2t-logo.png";

export default function Home() {
  const marqueeTexts = ["Vibe Coding Premier League", "Get Drafted", "Build", "Win", "VCPL 2026"];
  
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
            {/* Season Badge - P0 Fix #3 */}
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm">
                <span className="text-sm font-medium text-zinc-300">Season 1</span>
                <span className="text-zinc-600">·</span>
                <span className="text-sm font-medium text-zinc-300">Hyderabad</span>
                <span className="text-zinc-600">·</span>
                <span className="text-sm font-medium text-zinc-300">2026</span>
              </div>
            </div>

            {/* Main Headline - Hero Image */}
            <div className="flex justify-center">
              <Image
                src={VCPLHero}
                alt="VCPL - Vibe Coding Premier League"
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
                Sponsor VCPL
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

      {/* What is VCPL Section */}
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
              What is VCPL?
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 text-base md:text-lg text-zinc-300 leading-relaxed">
              <p>
                VCPL is a competitive coding league inspired by franchise sports leagues.
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

      {/* How It Works Section - P0 Fix #2: Add Season Format */}
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

          <div className="grid md:grid-cols-5 gap-6 md:gap-4 mb-16">
            {[
              { 
                step: "1", 
                title: "Register", 
                desc: "Join the player pool." 
              },
              { 
                step: "2", 
                title: "Get Drafted", 
                desc: "Teams build their squad through the VCPL Auction." 
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

          {/* Season Format Details */}
          <div className="max-w-5xl mx-auto space-y-8">
            {/* League Format */}
            <div className="bg-zinc-900 rounded-2xl p-6 md:p-8 border border-zinc-800">
              <h3 className="text-2xl font-bold text-white mb-4">Season Format</h3>
              <div className="space-y-4 text-zinc-300">
                <p className="text-base leading-relaxed">
                  Teams compete in <span className="font-semibold text-white">3 league challenges</span>:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span><strong className="text-white">Build in 48hrs</strong> — Create a working product in 48 hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span><strong className="text-white">Pivot Sprint</strong> — Adapt to a new challenge mid-competition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span><strong className="text-white">Owner's Choice</strong> — Build to your team owner's specifications</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Points & Qualification */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
                <h3 className="text-xl font-bold text-white mb-4">Points System</h3>
                <div className="space-y-2 text-sm text-zinc-300">
                  <p>Points awarded per challenge:</p>
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    <div className="flex justify-between"><span>1st Place:</span><span className="font-bold text-white">20 pts</span></div>
                    <div className="flex justify-between"><span>2nd Place:</span><span className="font-bold text-white">16 pts</span></div>
                    <div className="flex justify-between"><span>3rd Place:</span><span className="font-bold text-white">13 pts</span></div>
                    <div className="flex justify-between"><span>4th Place:</span><span className="font-bold text-white">11 pts</span></div>
                    <div className="flex justify-between"><span>5th Place:</span><span className="font-bold text-white">9 pts</span></div>
                    <div className="flex justify-between"><span>6th Place:</span><span className="font-bold text-white">7 pts</span></div>
                    <div className="flex justify-between"><span>7th Place:</span><span className="font-bold text-white">5 pts</span></div>
                    <div className="flex justify-between"><span>8th Place:</span><span className="font-bold text-white">3 pts</span></div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
                <h3 className="text-xl font-bold text-white mb-4">Playoffs & Finals</h3>
                <div className="space-y-3 text-sm text-zinc-300">
                  <p>
                    <strong className="text-white">Top 4 teams</strong> by total points qualify for playoffs
                  </p>
                  <p>
                    <strong className="text-white">Semi-Finals:</strong> Head-to-head matchups (October 18–19, 2026)
                  </p>
                  <p>
                    <strong className="text-white">Grand Finals:</strong> Championship match in Hyderabad (October 25, 2026)
                  </p>
                </div>
              </div>
            </div>

            {/* Judging Rubric */}
            <div className="bg-zinc-900 rounded-2xl p-6 md:p-8 border border-zinc-800">
              <h3 className="text-2xl font-bold text-white mb-4">Judging Rubric</h3>
              <div className="space-y-3">
                {[
                  { criteria: "Working Product", points: "35 pts", desc: "Functionality, completeness, and deployment" },
                  { criteria: "Problem Clarity", points: "20 pts", desc: "Clear articulation of problem and solution" },
                  { criteria: "Technical Execution", points: "25 pts", desc: "Code quality, architecture, and innovation" },
                  { criteria: "Demo Presentation", points: "10 pts", desc: "Communication and presentation effectiveness" },
                  { criteria: "Surprise Factor", points: "10 pts", desc: "Creativity, uniqueness, and wow factor" }
                ].map((item) => (
                  <div key={item.criteria} className="flex items-start justify-between border-b border-zinc-800 pb-3 last:border-0">
                    <div className="flex-1">
                      <p className="font-semibold text-white">{item.criteria}</p>
                      <p className="text-xs text-zinc-400 mt-1">{item.desc}</p>
                    </div>
                    <span className="font-bold text-yellow-500 ml-4">{item.points}</span>
                  </div>
                ))}
                <div className="pt-3 border-t-2 border-zinc-700 flex justify-between items-center">
                  <span className="font-bold text-white">Total</span>
                  <span className="font-bold text-yellow-500 text-lg">100 pts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Season Timeline Section - P0 Fix #1: Replace TBA with Real Dates */}
      <section className="py-16 sm:py-20 md:py-32 bg-black border-t border-zinc-900">
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
              Season 1 Timeline
            </h2>
            <p className="text-lg text-zinc-400">Mark your calendars</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500 via-orange-500 to-transparent"></div>
              
              <div className="space-y-8">
                {[
                  { 
                    date: "August 15, 2026", 
                    title: "Player Registration Closes", 
                    desc: "Last day to join the player pool for Season 1"
                  },
                  { 
                    date: "August 30, 2026", 
                    title: "Live Draft Auction", 
                    desc: "Watch teams build their squads in real-time"
                  },
                  { 
                    date: "September 6, 2026", 
                    title: "Season 1 Begins", 
                    desc: "First league challenge kicks off"
                  },
                  { 
                    date: "October 18–19, 2026", 
                    title: "Playoffs", 
                    desc: "Top 4 teams compete in semi-finals"
                  },
                  { 
                    date: "October 25, 2026", 
                    title: "Grand Finals — Hyderabad", 
                    desc: "Championship match and trophy ceremony"
                  }
                ].map((milestone, index) => (
                  <div key={index} className="relative flex gap-6 items-start">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-black flex-shrink-0 z-10"
                      style={{ background: "linear-gradient(180deg, #f1d647, #ff8a00)" }}
                    >
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1 bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
                      <p className="text-sm font-semibold text-yellow-500 mb-1">{milestone.date}</p>
                      <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                      <p className="text-sm text-zinc-400">{milestone.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Developers Section - P2 Fix #6: Add Social Proof */}
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
            <p className="text-lg md:text-xl text-zinc-300 mb-6 leading-relaxed">
              Build products. Compete with top talent. Join a team. Become a champion.
            </p>
            
            {/* Social Proof Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-zinc-900/50 border border-zinc-800">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
              <span className="text-sm font-medium text-zinc-300">Join 94+ developers already in the player pool</span>
            </div>

            <p className="text-base text-zinc-400 mb-8">
              Registration closes August 15, 2026
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

      {/* For Team Owners Section - P1 Fix #5: Clarify Value Proposition */}
      <section id="own-team" className="py-16 sm:py-20 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-5xl mx-auto">
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
                For Team Owners
              </h2>
              <p className="text-lg md:text-xl text-zinc-300 mb-2 leading-relaxed">
                Own a franchise. Draft developers. Build your dream team. Compete for the championship.
              </p>
              <p className="text-base text-zinc-400">
                Startups, communities, clubs, and organizations are welcome.
              </p>
            </div>

            {/* Value Proposition Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {/* What You Pay */}
              <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">What You Pay</h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  <strong className="text-white">Negotiable/sweat equity</strong> for Season 1 — no large cash ask. Focus on partnership and collaboration.
                </p>
              </div>

              {/* What You Get */}
              <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
                <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">What You Get</h3>
                <ul className="text-sm text-zinc-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Team naming rights</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Logo on all VCPL materials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>2 judge seats during challenges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span>Full developer performance profiles post-season</span>
                  </li>
                </ul>
              </div>

              {/* What You Do */}
              <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">What You Do</h3>
                <ul className="text-sm text-zinc-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Attend the Draft Auction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Set a brief for Challenge 3</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Promote your team on social media</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong className="text-white">~8-10 hours</strong> total commitment across the season</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
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
        </div>
      </section>

      {/* Sponsors and Partners Section - P1 Fix #4: Remove Placeholder Sponsors */}
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
              Join us in building India's premier coding competition
            </p>
          </div>

          {/* Powered By Section */}
          <div className="mb-16">
            <h3 className="text-lg sm:text-xl font-grandh text-center text-zinc-400 mb-8">
              Powered By
            </h3>
            <div className="flex justify-center items-center">
              {/* Unifesto Logo */}
              <div className="w-48 h-24 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center hover:border-zinc-700 transition-colors p-6">
                <Image
                  src={UnifestoIcon}
                  alt="Unifesto"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Partners Section */}
          <div className="mb-16">
            <h3 className="text-lg sm:text-xl font-grandh text-center text-zinc-400 mb-8">
              Partners
            </h3>
            <div className="flex justify-center items-center">
              {/* Trash2Treasure - Sustainability Partner */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-40 h-20 bg-zinc-900 rounded-lg border border-zinc-800 flex items-center justify-center hover:border-zinc-700 transition-colors p-3">
                  <Image
                    src={T2TLogo}
                    alt="Trash2Treasure"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs text-zinc-600">Sustainability Partner</span>
              </div>
            </div>
          </div>

          {/* Sponsorship Enquiry Block */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl p-8 md:p-10 border border-zinc-800 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Become a Sponsor
              </h3>
              <p className="text-base text-zinc-300 mb-6 max-w-xl mx-auto leading-relaxed">
                Partner with VCPL Season 1 to connect with talented developers, showcase your brand, and support India's developer community.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:vcpl@unifesto.app"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium text-base text-black transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{
                    background: "linear-gradient(180deg, #f1d647, #ff8a00)",
                  }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  vcpl@unifesto.app
                </a>
                
                <a
                  href="https://forms.gle/JetNzejsXP7XmcR37"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 rounded-full font-medium text-base text-white border-2 border-zinc-700 hover:border-zinc-500 hover:bg-zinc-900 transition-all duration-300"
                >
                  Sponsorship Form
                </a>
              </div>

              <p className="text-sm text-zinc-500 mt-6">
                Request our Sponsorship Prospectus for detailed information
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - P2 Fix #8: Update with Real Answers */}
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
                question: "When is Season 1?",
                answer: "Draft Auction is August 30, 2026. Season runs September 6 – October 25, 2026, with Playoffs on October 18-19 and Grand Finals on October 25 in Hyderabad."
              },
              {
                question: "Who can register?",
                answer: "Any developer with a GitHub profile and at least one past project. All skill levels are welcome — from students to professionals."
              },
              {
                question: "How does the draft auction work?",
                answer: "Each owner gets 100 virtual bidding points. Minimum bid is 5 points per player, maximum 40 points. Teams consist of 8-10 players. The live auction takes approximately 2.5 hours."
              },
              {
                question: "How are teams scored?",
                answer: "Each challenge is scored out of 100 points. Teams earn league points based on their ranking: 1st place = 20pts, 2nd = 16pts, 3rd = 13pts, down to 8th = 3pts. Points accumulate over 3 rounds. Top 4 teams advance to playoffs."
              },
              {
                question: "What is the prize?",
                answer: "Winners receive the VCPL Season 1 trophy, championship title, and public recognition. All developer performance profiles are shared with franchise owners post-season for potential opportunities."
              },
              {
                question: "Is registration open?",
                answer: "Yes! Join the player pool before registration closes on August 15, 2026."
              },
              {
                question: "Who can own a team?",
                answer: "Startups, communities, clubs, colleges, and organizations. Season 1 operates on negotiable/sweat equity terms with approximately 8-10 hours total time commitment."
              },
              {
                question: "Where are the events held?",
                answer: "The Draft Auction and Grand Finals will be held in Hyderabad. League challenges are completed remotely by teams."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-zinc-900 rounded-2xl p-6 shadow-sm border border-zinc-800 hover:border-zinc-700 transition-colors">
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-base text-zinc-400 leading-relaxed">{faq.answer}</p>
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
                Stay updated with VCPL and all Unifesto events. Get notifications, track your progress, and connect with the community.
              </p>
            </div>

            {/* App Store Badges */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a
                href="https://apps.apple.com/in/app/unifesto-discover-events/id6767165496"
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
                href="https://play.google.com/store/apps/details?id=com.unifesto.app"
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
