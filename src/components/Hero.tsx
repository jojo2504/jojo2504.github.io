import { Github, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-solana opacity-10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-rust opacity-10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-ethereum opacity-5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Terminal-style intro */}
        <div className="inline-block mb-8 animate-fade-in">
          <div className="terminal inline-block text-left">
            <span className="terminal-prompt text-muted-foreground">whoami</span>
            <div className="mt-2 text-primary font-semibold">jojo2504</div>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <span className="text-foreground">Rust Developer</span>
          <br />
          <span className="text-gradient-solana">Web2</span>
          <span className="text-foreground"> & </span>
          <span className="text-gradient-ethereum">Web3</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in font-light" style={{ animationDelay: '0.2s' }}>
          Building performant systems with{" "}
          <span className="text-primary font-medium">Rust</span>
          <br />
          <span className="font-mono text-sm opacity-70">⌛ Life's so short</span>
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {['Rust', 'Solana', 'Ethereum', 'Python'].map((tech, i) => (
            <span
              key={tech}
              className={`px-4 py-2 rounded-full text-sm font-mono font-medium transition-all hover:scale-105 ${
                tech === 'Rust' 
                  ? 'bg-gradient-rust text-primary-foreground glow-rust' 
                  : tech === 'Solana'
                  ? 'bg-gradient-solana text-white glow-solana'
                  : tech === 'Ethereum'
                  ? 'bg-gradient-ethereum text-white'
                  : 'bg-secondary text-secondary-foreground border border-border'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="bg-gradient-rust hover:opacity-90 text-primary-foreground font-semibold px-8 py-6 text-lg glow-rust transition-all hover:scale-105"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-foreground/20 hover:border-primary hover:text-primary font-semibold px-8 py-6 text-lg transition-all hover:scale-105"
            asChild
          >
            <a href="https://github.com/jojo2504" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;