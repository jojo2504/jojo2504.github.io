import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "blockchains",
    description: "From-scratch nodes written in Rust, each using a different consensus engine. Pure educational implementations (PoW, PoS...). No frameworks.",
    language: "Rust",
    tags: ["blockchain", "consensus", "pow", "pos", "nodes"],
    githubUrl: "https://github.com/jojo2504/blockchains",
    category: "web3" as const,
    stars: 1,
  },
  {
    title: "chess-engine",
    description: "High-performance chess engine written in Rust supporting UCI protocol. Designed for speed and accuracy.",
    language: "Rust",
    tags: ["chess", "uci", "engine", "ai", "performance"],
    githubUrl: "https://github.com/jojo2504/chess-engine",
    category: "web2" as const,
  },
  {
    title: "CYCLR",
    description: "Hack4good hackathon project - Building sustainable solutions with XRPLedger.",
    language: "Python",
    tags: ["hackathon", "sustainability", "web"],
    githubUrl: "https://github.com/jojo2504/CYCLR",
    category: "web3" as const,
    isArchived: true,
  },
  {
    title: "StellarLilyChess",
    description: "Another Chess Engine implementation using UCI protocol, written in C# for cross-platform compatibility.",
    language: "C#",
    tags: ["chess", "uci", "engine", "dotnet"],
    githubUrl: "https://github.com/jojo2504/StellarLilyChess",
    category: "web2" as const,
    isArchived: true,
  }
];

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'web2' | 'web3'>('all');

  const filteredProjects = projects.filter(
    project => filter === 'all' || project.category === filter
  );

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-mono font-semibold mb-4">
            ~/projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient-rust">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From blockchain implementations to chess engines — systems programming with a focus on performance and correctness.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {[
            { key: 'all', label: 'All Projects' },
            { key: 'web3', label: 'Web3' },
            { key: 'web2', label: 'Web2' },
          ].map(({ key, label }) => (
            <Button
              key={key}
              variant={filter === key ? "default" : "outline"}
              onClick={() => setFilter(key as typeof filter)}
              className={`font-mono transition-all ${
                filter === key 
                  ? key === 'web3'
                    ? 'bg-gradient-solana hover:opacity-90'
                    : key === 'web2'
                    ? 'bg-gradient-rust hover:opacity-90'
                    : ''
                  : ''
              }`}
            >
              {label}
              <span className="ml-2 text-xs opacity-70">
                ({key === 'all' ? projects.length : projects.filter(p => p.category === key).length})
              </span>
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* View all on GitHub */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="font-mono border-2 hover:border-primary hover:text-primary transition-all"
            asChild
          >
            <a href="https://github.com/jojo2504?tab=repositories" target="_blank" rel="noopener noreferrer">
              View All Repositories →
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;