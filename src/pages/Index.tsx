import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  ArrowRight,
  Brain,
  Bot,
  Eye,
  Cpu,
  Database,
  Sparkles,
  Truck,
  ShoppingBag,
  HeartPulse,
  ShieldCheck,
  Boxes,
  Plane,
} from "lucide-react";

const capabilities = [
  { icon: Sparkles, title: "Generative AI", desc: "Custom LLMs, RAG systems, and content generation pipelines tailored to your domain." },
  { icon: Bot, title: "Agentic AI", desc: "Autonomous agents that plan, reason, and execute multi-step workflows end-to-end." },
  { icon: Eye, title: "Computer Vision", desc: "Detection, tracking, OCR, and scene understanding for real-world environments." },
  { icon: Brain, title: "Machine Learning", desc: "Predictive models, forecasting, and decision systems built on production-grade MLOps." },
  { icon: Cpu, title: "Deep Learning", desc: "Custom neural architectures for the hardest perception and reasoning problems." },
  { icon: Database, title: "SynthBaek", desc: "Proprietary synthetic data framework for when real-world data is scarce or sensitive." },
];

const industries = [
  { icon: Truck, name: "Transportation" },
  { icon: Boxes, name: "Logistics" },
  { icon: Plane, name: "Shipping" },
  { icon: ShoppingBag, name: "Retail" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: ShieldCheck, name: "Surveillance" },
];

const stats = [
  { value: "15+", label: "Projects delivered" },
  { value: "10+", label: "Research publications" },
  { value: "8", label: "Industries served" },
  { value: "5", label: "Core AI disciplines" },
];

const Index = () => {
  const isMobile = useIsMobile();
  const heroVideoSrc = isMobile ? "/hero-clip-mobile.mp4" : "/hero-clip.mp4";
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    const tryPlay = () => v.play().catch(() => {});
    tryPlay();
    v.addEventListener("loadeddata", tryPlay);
    const onFirstTouch = () => tryPlay();
    document.addEventListener("touchstart", onFirstTouch, { once: true, passive: true });
    document.addEventListener("click", onFirstTouch, { once: true });
    return () => {
      v.removeEventListener("loadeddata", tryPlay);
      document.removeEventListener("touchstart", onFirstTouch);
      document.removeEventListener("click", onFirstTouch);
    };
  }, [heroVideoSrc]);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 isolate">
        <div className="absolute inset-0 z-0 bg-background">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src={heroVideoSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            disableRemotePlayback
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background pointer-events-none" />
          <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        </div>

        <div className="container-custom px-6 py-20 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-card text-xs font-mono mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-soft">AI-driven solutions company</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6">
              Engineering <span className="gradient-text">applied AI</span>
              <br />
              for the real world.
            </h1>

            <p className="text-lg md:text-xl text-soft max-w-2xl leading-relaxed mb-10">
              MoonBaek builds production-grade Generative AI, Agentic AI, Computer Vision,
              and Deep Learning systems for transportation, logistics, retail, healthcare,
              and beyond.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link to="/solutions" className="btn-primary inline-flex items-center gap-2">
                Explore solutions <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/projects" className="btn-secondary">
                View projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-background/40 backdrop-blur-md">
        <div className="container-custom px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold gradient-text">{s.value}</div>
              <div className="text-xs label-tracking text-dim mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="page-section">
        <div className="container-custom">
          <div className="max-w-2xl mb-14">
            <p className="label-tracking text-primary mb-4">Capabilities</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              End-to-end AI, from research to production.
            </h2>
            <p className="text-soft text-lg">
              We blend frontier research with rigorous engineering to deliver systems that
              perform reliably at scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glass-card-hover p-6 group"
              >
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <c.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
                <p className="text-soft text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries strip */}
      <section className="page-section pt-0">
        <div className="container-custom">
          <div className="glass-card p-10 md:p-14 relative overflow-hidden">
            <div className="absolute inset-0 -z-10 opacity-50"
              style={{ background: "var(--gradient-radial)" }} />
            <div className="grid lg:grid-cols-3 gap-10 items-center">
              <div className="lg:col-span-1">
                <p className="label-tracking text-primary mb-4">Industries</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Tailored to your vertical.
                </h2>
                <p className="text-soft mb-6">
                  Dedicated playbooks for each industry — built around the workflows,
                  data, and constraints that actually matter on the ground.
                </p>
                <Link to="/industries" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
                  See all industries <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {industries.map((ind) => (
                  <div key={ind.name} className="flex items-center gap-3 p-4 rounded-lg bg-secondary/40 border border-border hover:border-primary/40 transition-colors">
                    <ind.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">{ind.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SynthBaek callout */}
      <section className="page-section pt-0">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-10 items-center glass-card p-10 md:p-14 gradient-border">
            <div>
              <p className="label-tracking text-accent mb-4">Proprietary Framework</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet <span className="gradient-text">SynthBaek</span>.
              </h2>
              <p className="text-soft leading-relaxed mb-4">
                When real-world data is limited, biased, or sensitive, SynthBaek generates
                high-fidelity synthetic datasets that close the gap — enabling robust,
                privacy-preserving models that scale.
              </p>
              <p className="text-dim text-sm font-mono">
                Domain randomization · simulation pipelines · diffusion-based augmentation
              </p>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden border border-border">
              <div className="absolute inset-0 grid-bg grid-animated" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent blur-2xl opacity-60 animate-pulse-glow" />
                <div className="absolute font-mono text-sm text-soft">{`> synthbaek --generate`}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-section">
        <div className="container-custom text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Have an AI problem worth solving?
          </h2>
          <p className="text-soft text-lg mb-8">
            From discovery to deployment, we partner with teams to ship AI that actually works.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Start a conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
