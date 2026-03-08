export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export const navItems: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "How", href: "/how-it-works" },
  { label: "Research", href: "/research" },
  { label: "Blog", href: "/blog" },
  { label: "Support", href: "/support" },
  { label: "Contact", href: "/contact" },
  { label: "Docs", href: "https://docs.grassecon.org", external: true },
  { label: "Sarafu Network", href: "https://sarafu.network", external: true },
  {
    label: "Cosmo-Local DAO",
    href: "https://cosmolocal.credit",
    external: true,
  },
  {
    label: "Heal Ecosystems",
    href: "https://grassecon.substack.com/p/ecosystem-stewardship",
    external: true,
  },
  
];
