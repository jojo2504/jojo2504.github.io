import { Github, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo/Name */}
          <div className="text-center md:text-left">
            <div className="font-mono text-2xl font-bold mb-2">
              <span className="text-primary">@</span>jojo2504
            </div>
            <p className="text-muted-foreground text-sm">
              Rust Developer • Web2 & Web3
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://github.com/jojo2504" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="font-mono">GitHub</span>
            </a>
            <a 
              href="mailto:jojo.duchuy@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="font-mono">Email</span>
            </a>
          </div>

          {/* Tech stack badge */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground font-mono">Built with</span>
            <span className="px-3 py-1 bg-gradient-rust text-primary-foreground rounded-full text-xs font-semibold">
              ❤️ & Rust vibes
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} jojo2504. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2 font-mono">
            ⌛ Life's so short — make it count.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;