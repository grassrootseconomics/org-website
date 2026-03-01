export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export const navItems: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Sarafu", href: "/sarafu-network" },
  {
    label: "Ecosystem",
    href: "https://grassecon.substack.com/p/ecosystem-stewardship",
    external: true,
  },
  { label: "Research", href: "/research" },
  { label: "Docs", href: "https://docs.grassecon.org", external: true },
  { label: "Blog", href: "/blog" },
  { label: "Support", href: "/support" },
  { label: "Contact", href: "/contact" },
];
