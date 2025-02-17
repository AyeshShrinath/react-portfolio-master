export interface TimelineItem {
  company: ReactNode;
  year: string;
  title: string;
  univercity: string;
  description: string;
  icon: 'work' | 'education';
}

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  
  details?: {
    problem?: string;
    solution?: string;
    features?: string[];
    impact?: string;
  };
}