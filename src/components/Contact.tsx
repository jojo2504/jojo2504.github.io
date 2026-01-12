import { Github, Mail, ExternalLink, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("jojo2504@github.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-solana opacity-5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-rust opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-ethereum/10 text-ethereum rounded-full text-sm font-mono font-semibold mb-4">
            ~/contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient-ethereum">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Interested in collaborating on Rust or blockchain projects? 
            Always open to discussing new opportunities.
          </p>
        </div>

        {/* Contact card */}
        <div className="bg-card rounded-2xl border-2 border-border p-8 md:p-12 text-center card-hover">
          {/* Terminal-style message */}
          <div className="terminal max-w-md mx-auto mb-8 text-left">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <code className="text-sm">
              <span className="text-primary">$</span> echo "Let's build something amazing"<br />
              <span className="text-muted-foreground">→ Ready to collaborate!</span>
            </code>
          </div>

          {/* Contact buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-rust hover:opacity-90 font-mono glow-rust transition-all hover:scale-105"
              asChild
            >
              <a href="https://github.com/jojo2504" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                Follow on GitHub
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 font-mono hover:border-primary hover:text-primary transition-all hover:scale-105"
              onClick={handleCopyEmail}
            >
              {copied ? (
                <>
                  <Check className="mr-2 h-5 w-5 text-green-500" />
                  Copied!
                </>
              ) : (
                <>
                  <Mail className="mr-2 h-5 w-5" />
                  Contact via GitHub
                </>
              )}
            </Button>
          </div>

          {/* Social proof */}
          <p className="text-sm text-muted-foreground mt-8 font-mono">
            <span className="text-primary">4</span> followers • 
            <span className="text-accent ml-1">10+</span> public repositories •
            <span className="text-ethereum ml-1">GitHub Pro</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;