import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 text-center border-t border-border/30">
      <div className="flex justify-center gap-6 mb-6">
        {[
          { icon: Github, href: "https://github.com/ccencabo", label: "GitHub" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/cara-carmel-encabo-779645286", label: "LinkedIn" },
          { icon: Mail, href: "mailto:caraencabo012301@gmail.com", label: "Email" },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
      <p className="font-sans text-xs text-muted-foreground/60">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
