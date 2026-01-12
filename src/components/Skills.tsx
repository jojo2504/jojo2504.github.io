const skills = [
  {
    category: "Languages",
    items: [
      { name: "Rust", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg" },
      { name: "Solidity", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    ]
  },
  {
    category: "Blockchain",
    items: [
      { name: "Solana", logo: "https://cryptologos.cc/logos/solana-sol-logo.svg?v=029" },
      { name: "Ethereum", logo: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=029" },
      { name: "Smart Contracts", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
      { name: "Consensus Algorithms", logo: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png" },
    ]
  },
  {
    category: "Tools & Systems",
    items: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "CI/CD", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    ]
  }
];

const Skills = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-mono font-semibold mb-4">
            ~/skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient-solana">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Specialized in systems programming and blockchain development with a passion for performance optimization.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <div 
              key={skillGroup.category}
              className="bg-card rounded-2xl p-6 border border-border animate-fade-in"
              style={{ animationDelay: `${groupIndex * 0.15}s` }}
            >
              <h3 className="text-xl font-bold mb-6 font-mono text-primary">
                {skillGroup.category}
              </h3>
              <div className="space-y-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-all hover:scale-105 animate-slide-in-left"
                    style={{ animationDelay: `${(groupIndex * 0.15) + (skillIndex * 0.1)}s` }}
                  >
                    <img 
                      src={skill.logo} 
                      alt={skill.name}
                      className="w-8 h-8 object-contain"
                    />
                    <span className="font-medium text-foreground">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: "4+", label: "Years Coding" },
            { value: "20+", label: "Projects" },
            { value: "Rust", label: "Main Language" },
            { value: "Web3", label: "Focus Area" },
          ].map((stat, i) => (
            <div 
              key={stat.label}
              className="text-center p-6 bg-card rounded-xl border border-border animate-scale-in"
              style={{ animationDelay: `${0.5 + i * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient-rust mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;