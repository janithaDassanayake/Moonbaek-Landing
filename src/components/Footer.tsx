import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-md">
      <div className="container-custom px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-primary-foreground">
                M
              </div>
              <span className="font-semibold tracking-tight text-lg">
                Moon<span className="gradient-text">Baek</span>
              </span>
            </Link>
            <p className="mt-4 text-soft text-sm max-w-md leading-relaxed">
              AI-driven solutions across Generative AI, Agentic AI, Computer Vision,
              Machine Learning, and Deep Learning. Powered by SynthBaek — our proprietary
              synthetic data framework.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Linkedin, Twitter, Github, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full glass-card-hover flex items-center justify-center text-soft"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="label-tracking text-soft mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/solutions" className="text-soft hover:text-foreground transition-colors">Solutions</Link></li>
              <li><Link to="/projects" className="text-soft hover:text-foreground transition-colors">Projects</Link></li>
              <li><Link to="/industries" className="text-soft hover:text-foreground transition-colors">Industries</Link></li>
              <li><Link to="/publications" className="text-soft hover:text-foreground transition-colors">Publications</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="label-tracking text-soft mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/team" className="text-soft hover:text-foreground transition-colors">Team</Link></li>
              <li><Link to="/contact" className="text-soft hover:text-foreground transition-colors">Contact</Link></li>
              <li><a href="mailto:hello@moonbaek.ai" className="text-soft hover:text-foreground transition-colors">hello@moonbaek.ai</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-dim">© {new Date().getFullYear()} MoonBaek. All rights reserved.</p>
          <p className="text-xs text-dim font-mono">Quietly engineering the future of applied AI.</p>
        </div>
      </div>
    </footer>
  );
}
