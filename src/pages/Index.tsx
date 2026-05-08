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
  Layers,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiFastapi,
  SiPytorch,
  SiTensorflow,
  SiKeras,
  SiOpencv,
  SiHuggingface,
  SiOnnx,
  SiNvidia,
  SiDocker,
  SiKubernetes,
  SiCloudflare,
  SiTerraform,
  SiGooglecloud,
  SiPostgresql,
  SiSupabase,
  SiRedis,
  SiMongodb,
  SiGit,
  SiGithub,
  SiLinux,
  SiVercel,
  SiTailwindcss,
  SiVite,
  SiThreedotjs,
} from "react-icons/si";
import type { IconType } from "react-icons";

/* ---------- Products ---------- */

type Product = {
  icon: LucideIcon;
  title: string;
  desc: string;
  href: string;
  cta: string;
  accent: "primary" | "accent";
};

const products: Product[] = [
  {
    icon: Eye,
    title: "VisionBaek",
    desc: "42 production-grade computer vision applications you can deploy on existing camera infrastructure, from defect detection to crowd safety.",
    href: "/applications",
    cta: "Browse 42 applications",
    accent: "primary",
  },
  {
    icon: Layers,
    title: "Vision Dynamics Engine (VDE)",
    desc: "Our unified runtime that fuses detection, tracking, segmentation, pose, and re-ID into one engine. Five live capability cuts to explore.",
    href: "/demos#vde",
    cta: "See VDE in motion",
    accent: "primary",
  },
  {
    icon: Workflow,
    title: "Adaptive Re-ID Tracking",
    desc: "Identity-preserving tracking that survives occlusion, motion blur, and frame drops via temporal memory of each subject.",
    href: "/demos#arit",
    cta: "Watch ARIT demo",
    accent: "primary",
  },
  {
    icon: Database,
    title: "SynthBaek",
    desc: "Diffusion-powered synthetic data pipeline for clinical, veterinary, and industrial domains, when real data is scarce or sensitive.",
    href: "/demos#synthbaek",
    cta: "Explore SynthBaek",
    accent: "accent",
  },
];

/* ---------- Capabilities ---------- */

const capabilities = [
  { icon: Sparkles, title: "Generative AI", desc: "Custom LLMs, RAG systems, and content generation pipelines tailored to your domain." },
  { icon: Bot, title: "Agentic AI", desc: "Autonomous agents that plan, reason, and execute multi-step workflows end-to-end." },
  { icon: Eye, title: "Computer Vision", desc: "Detection, tracking, segmentation, OCR, and scene understanding for the real world." },
  { icon: Brain, title: "Machine Learning", desc: "Predictive models, forecasting, and decision systems built on production-grade MLOps." },
  { icon: Cpu, title: "Deep Learning", desc: "Custom neural architectures for the hardest perception and reasoning problems." },
  { icon: Zap, title: "Edge & Real-Time", desc: "Sub-50ms inference pipelines on edge accelerators, GPUs, and on-prem hardware." },
];

/* ---------- Industries ---------- */

const industries = [
  { icon: Truck, name: "Transportation" },
  { icon: Boxes, name: "Logistics" },
  { icon: Plane, name: "Aerial & Drones" },
  { icon: ShoppingBag, name: "Retail" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: ShieldCheck, name: "Surveillance" },
];

/* ---------- Stats ---------- */

const stats = [
  { value: "42", label: "Vision applications" },
  { value: "20+", label: "Live demos" },
  { value: "8", label: "Industries served" },
  { value: "<50ms", label: "Edge inference" },
];

/* ---------- Tech stack ---------- */

type TechItem = { icon: IconType; name: string; color: string };

// Two flat rows for the infinite marquee, split for visual variety, not categorization.
const techRowA: TechItem[] = [
  { icon: SiPython, name: "Python", color: "#3776AB" },
  { icon: SiPytorch, name: "PyTorch", color: "#EE4C2C" },
  { icon: SiTensorflow, name: "TensorFlow", color: "#FF6F00" },
  { icon: SiKeras, name: "Keras", color: "#D00000" },
  { icon: SiOpencv, name: "OpenCV", color: "#5C3EE8" },
  { icon: SiHuggingface, name: "Hugging Face", color: "#FFD21E" },
  { icon: SiOnnx, name: "ONNX", color: "#005CED" },
  { icon: SiNvidia, name: "NVIDIA / CUDA", color: "#76B900" },
  { icon: SiFastapi, name: "FastAPI", color: "#009688" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiThreedotjs, name: "Three.js", color: "#cccccc" },
];

const techRowB: TechItem[] = [
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
  { icon: SiKubernetes, name: "Kubernetes", color: "#326CE5" },
  { icon: SiTerraform, name: "Terraform", color: "#7B42BC" },
  { icon: SiGooglecloud, name: "GCP", color: "#4285F4" },
  { icon: SiCloudflare, name: "Cloudflare", color: "#F38020" },
  { icon: SiVercel, name: "Vercel", color: "#ffffff" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { icon: SiSupabase, name: "Supabase", color: "#3ECF8E" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiRedis, name: "Redis", color: "#DC382D" },
  { icon: SiLinux, name: "Linux", color: "#FCC624" },
  { icon: SiGit, name: "Git", color: "#F05032" },
  { icon: SiGithub, name: "GitHub", color: "#ffffff" },
  { icon: SiVite, name: "Vite", color: "#646CFF" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
];

function TechMarquee({ items, durationSec }: { items: TechItem[]; durationSec: number }) {
  // Duplicate the list once so the marquee can seamlessly wrap from right to left.
  const doubled = [...items, ...items];
  return (
    <div className="marquee-mask overflow-hidden">
      <div className="marquee-track gap-3" style={{ animationDuration: `${durationSec}s` }}>
        {doubled.map((t, i) => (
          <div
            key={`${t.name}-${i}`}
            className="shrink-0 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-border bg-secondary/30 hover:bg-secondary/50 hover:border-primary/30 transition-colors"
            title={t.name}
          >
            <t.icon className="w-5 h-5 shrink-0" style={{ color: t.color }} aria-hidden="true" />
            <span className="text-sm font-medium text-foreground/90 whitespace-nowrap">
              {t.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Page ---------- */

const Index = () => {
  const isMobile = useIsMobile();
  const heroVideoSrc = isMobile ? "/hero-clip-mobile.mp4" : "/hero-clip.mp4";
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    // iOS strictly checks muted state at play() time
    v.muted = true;
    v.defaultMuted = true;
    v.setAttribute("muted", "");
    v.playsInline = true;

    const tryPlay = () => {
      // ignore promise rejections (e.g. iOS Low Power Mode); the user can tap to play
      v.play().catch(() => {});
    };

    tryPlay();
    v.addEventListener("canplay", tryPlay);
    v.addEventListener("loadedmetadata", tryPlay);
    v.addEventListener("loadeddata", tryPlay);

    const onFirstTouch = () => tryPlay();
    document.addEventListener("touchstart", onFirstTouch, { once: true, passive: true });
    document.addEventListener("click", onFirstTouch, { once: true });

    const onVisible = () => {
      if (document.visibilityState === "visible") tryPlay();
    };
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      v.removeEventListener("canplay", tryPlay);
      v.removeEventListener("loadedmetadata", tryPlay);
      v.removeEventListener("loadeddata", tryPlay);
      document.removeEventListener("touchstart", onFirstTouch);
      document.removeEventListener("click", onFirstTouch);
      document.removeEventListener("visibilitychange", onVisible);
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
            poster={isMobile ? "/hero-clip-mobile-poster.jpg" : "/hero-clip-poster.jpg"}
            autoPlay
            loop
            muted
            playsInline
            {...{ "webkit-playsinline": "true" }}
            preload="auto"
            disablePictureInPicture
            disableRemotePlayback
            controls={false}
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
              <span className="text-soft">MoonBaek · AI That Sees Beyond</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6 whitespace-nowrap">
              Engineering <span className="gradient-text">applied AI</span>
              <br />
              for the real world.
            </h1>

            <p className="text-lg md:text-xl text-soft max-w-2xl leading-relaxed mb-10">
              MoonBaek ships production-grade computer vision and synthetic data systems,
              powered by VisionBaek, SynthBaek, and our Vision Dynamics Engine, across
              transportation, healthcare, retail, manufacturing, and beyond.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link to="/applications" className="btn-primary inline-flex items-center gap-2">
                Browse 42 applications <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/demos" className="btn-secondary">
                Watch live demos
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

      {/* Products */}
      <section className="px-6 py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-2xl mb-10">
            <p className="label-tracking text-primary mb-4">Our products</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Tools we built so the <span className="gradient-text">work ships faster</span>.
            </h2>
            <p className="text-soft text-lg">
              Four flagship products that anchor every engagement, from camera feed to
              decision, from scarce data to robust models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {products.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="glass-card-hover p-7 group flex flex-col"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center group-hover:scale-110 transition-transform ${
                      p.accent === "primary"
                        ? "bg-gradient-to-br from-primary/30 to-accent/30 border-primary/40"
                        : "bg-gradient-to-br from-accent/30 to-primary/30 border-accent/40"
                    }`}
                  >
                    <p.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">{p.title}</h3>
                </div>
                <p className="text-soft leading-relaxed mb-5 flex-1">{p.desc}</p>
                <Link
                  to={p.href}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  {p.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-6 pb-16 md:pb-20">
        <div className="container-custom">
          <div className="max-w-2xl mb-10">
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
                viewport={{ once: true, margin: "-40px" }}
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

      {/* Tech stack, infinite marquee */}
      <section className="px-6 pb-16 md:pb-20">
        <div className="container-custom">
          <div className="max-w-2xl mb-8">
            <p className="label-tracking text-primary mb-4">Tech stack</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The toolbox behind the <span className="gradient-text">work</span>.
            </h2>
            <p className="text-soft text-lg">
              Languages, ML frameworks, infra, flowing through every shipment.
            </p>
          </div>

          <div className="space-y-4">
            <TechMarquee items={techRowA} durationSec={50} />
            <TechMarquee items={techRowB} durationSec={60} />
          </div>
        </div>
      </section>

      {/* Industries strip */}
      <section className="px-6 pb-16 md:pb-20">
        <div className="container-custom">
          <div className="glass-card p-10 md:p-14 relative overflow-hidden">
            <div className="absolute inset-0 -z-10 opacity-50" style={{ background: "var(--gradient-radial)" }} />
            <div className="grid lg:grid-cols-3 gap-10 items-center">
              <div className="lg:col-span-1">
                <p className="label-tracking text-primary mb-4">Industries</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Tailored to your vertical.
                </h2>
                <p className="text-soft mb-6">
                  Dedicated playbooks for each industry, built around the workflows,
                  data, and constraints that actually matter on the ground.
                </p>
                <Link
                  to="/industries"
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
                >
                  See all industries <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {industries.map((ind) => (
                  <div
                    key={ind.name}
                    className="flex items-center gap-3 p-4 rounded-lg bg-secondary/40 border border-border hover:border-primary/40 transition-colors"
                  >
                    <ind.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">{ind.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demos teaser */}
      <section className="px-6 pb-16 md:pb-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-10 items-center glass-card p-10 md:p-14 gradient-border">
            <div>
              <p className="label-tracking text-accent mb-4">Live demos</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                See the models <span className="gradient-text">actually running</span>.
              </h2>
              <p className="text-soft leading-relaxed mb-5">
                Skip the slideshow. Twenty-plus rendered clips from VDE, ARIT,
                SynthBaek, and our surveillance suite, running on real footage.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/demos#vde" className="btn-primary inline-flex items-center gap-2 text-sm">
                  VDE demos <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/demos#synthbaek" className="btn-secondary text-sm">
                  SynthBaek samples
                </Link>
                <Link to="/demos#samples" className="btn-secondary text-sm">
                  Domain samples
                </Link>
              </div>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden border border-border">
              <div className="absolute inset-0 grid-bg grid-animated" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent blur-2xl opacity-60 animate-pulse-glow" />
                <div className="absolute font-mono text-sm text-soft">{`> visionbaek --play`}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 md:py-20">
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
