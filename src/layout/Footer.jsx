import { Github, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/ShreCodes2809", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/shreyashsahare/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/shreyash._.s2809", label: "Instagram" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight accent-link">
              SS<span className="accent-text">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Shreyash Sahare. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass accent-icon transition-all hover:bg-surface/70"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
