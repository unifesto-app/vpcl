export default function Footer() {
  return (
    <footer className="bg-black relative py-8">
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #f1d647, #ff8a00, transparent)" }}
      />
      
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="py-6 md:py-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Brand */}
            <div className="space-y-3">
              <h3 
                className="text-3xl md:text-4xl font-grandh"
                style={{
                  background: "linear-gradient(180deg, #f1d647, #ff8a00)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                VPCL
              </h3>
              <p className="text-sm text-zinc-400">
                Vibe Coding Premier League
              </p>
              <p className="text-xs text-zinc-500">
                India's First Franchise-Based Vibe Coding Competition
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full border-t border-zinc-900 mt-6">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-xs text-zinc-500">
              Presented by <span className="font-medium text-zinc-400">BeyonD</span>. An Unifesto Initiative.
            </p>
            <p className="text-xs text-zinc-600">
              © 2026 Unifesto Private Limited. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
