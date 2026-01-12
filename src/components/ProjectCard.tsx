import { ExternalLink, Github, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  language: string;
  tags: string[];
  githubUrl: string;
  category: 'web3' | 'web2';
  stars?: number;
  isArchived?: boolean;
}

const ProjectCard = ({ 
  title, 
  description, 
  language, 
  tags, 
  githubUrl, 
  category,
  stars,
  isArchived 
}: ProjectCardProps) => {
  const languageColors: Record<string, string> = {
    'Rust': 'bg-gradient-rust text-primary-foreground',
    'TypeScript': 'bg-blue-500 text-white',
    'Python': 'bg-yellow-500 text-black',
    'C#': 'bg-purple-600 text-white',
    'JavaScript': 'bg-yellow-400 text-black',
  };

  return (
    <Card className={`group card-hover relative overflow-hidden border-2 transition-all duration-300 ${
      category === 'web3' 
        ? 'hover:border-accent/50 hover:glow-solana' 
        : 'hover:border-primary/50 hover:glow-rust'
    }`}>
      {/* Category indicator */}
      <div className={`absolute top-0 right-0 w-20 h-20 -translate-y-1/2 translate-x-1/2 rounded-full blur-2xl opacity-20 ${
        category === 'web3' ? 'bg-gradient-solana' : 'bg-gradient-rust'
      }`} />
      
      <CardHeader className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge 
                variant="outline" 
                className={`text-xs font-mono uppercase tracking-wider ${
                  category === 'web3' 
                    ? 'border-accent text-accent' 
                    : 'border-primary text-primary'
                }`}
              >
                {category}
              </Badge>
              {isArchived && (
                <Badge variant="secondary" className="text-xs">
                  Archived
                </Badge>
              )}
            </div>
            <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors font-mono">
              {title}
            </CardTitle>
          </div>
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
        <CardDescription className="text-muted-foreground mt-2 line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-1 text-xs font-mono bg-muted rounded-md text-muted-foreground"
            >
              #{tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${languageColors[language] || 'bg-muted text-muted-foreground'}`}>
            {language}
          </span>
          {stars !== undefined && stars > 0 && (
            <div className="flex items-center gap-1 text-muted-foreground">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-mono">{stars}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;