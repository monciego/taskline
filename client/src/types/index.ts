export interface NavLink {
  title: string;
  label?: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Icon should be a React component
  variant: "default" | "ghost";
}

export interface NavProps {
  isCollapsed: boolean;
  links: NavLink[];
}
