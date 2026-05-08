import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Compass,
  Code2,
  Activity,
  Sparkles,
  BarChart3,
  ShieldCheck,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Tier = {
  name: string;
  tagline: string;
  bullets: string[];
  highlight?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Starter",
    tagline:
      "For teams kicking off their first vision AI initiative. We help frame the problem, scope the data, and stand up an initial proof.",
    bullets: [
      "Discovery workshops and use-case shaping",
      "Hands-on requirements and success-metric definition",
      "Reference architecture and pilot configuration",
    ],
  },
  {
    name: "Advanced",
    tagline:
      "For teams already running vision workloads who need depth, better accuracy, better latency, or a harder problem solved properly.",
    bullets: [
      "Deep technical solutioning with our research team",
      "Embedded specialist support across model and pipeline",
      "Targeted feature engineering, fine-tuning, and benchmarking",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    tagline:
      "For organizations standardizing computer vision across the business, end-to-end ownership from strategy through operate.",
    bullets: [
      "Full solution design, build, and rollout",
      "Custom application engineering and system integration",
      "Ongoing optimization, SLAs, and operational support",
    ],
  },
];

type StagePill = {
  title: string;
  body: string;
};

type Stage = {
  number: string;
  icon: LucideIcon;
  title: string;
  intro: string;
  groups: {
    name: string;
    pills: StagePill[];
  }[];
  art: "strategy" | "development" | "monitoring";
};

const stages: Stage[] = [
  {
    number: "01",
    icon: Compass,
    title: "Industry Acumen & Business Advisory",
    intro:
      "Before we ship code, we study the operation. Strategy work pairs our engineers with your domain leaders to map where vision AI moves the needle, and where it doesn't.",
    groups: [
      {
        name: "Strategic Transformation Planning",
        pills: [
          {
            title: "Current-State Diagnostic",
            body: "We audit your existing data flows, camera estate, compute footprint, and team skills to find the real starting line.",
          },
          {
            title: "Future-State Blueprint",
            body: "We co-design a target architecture that pairs realistic vision AI capabilities with your business outcomes.",
          },
          {
            title: "Closing the Capability Gap",
            body: "We chart the technical and organizational moves that take you from where you are to where you need to be.",
          },
          {
            title: "Roadmap & Milestones",
            body: "Sequenced delivery plan with clear owners, measurable checkpoints, and budget envelopes for each phase.",
          },
        ],
      },
      {
        name: "Strategic Vision AI Approach",
        pills: [
          {
            title: "Outcome-First Framing",
            body: "Every vision project starts from a business KPI, not a model, defects avoided, dwell time reduced, threats caught.",
          },
          {
            title: "Build vs. Buy Analysis",
            body: "We tell you honestly when an off-the-shelf model is enough, and when a custom solution is genuinely justified.",
          },
        ],
      },
      {
        name: "Computer Vision Roadmap",
        pills: [
          {
            title: "Quarterly Capability Releases",
            body: "Roadmap framed around capability releases your operators can actually adopt, not lab-only milestones.",
          },
          {
            title: "Risk & Dependency Mapping",
            body: "We surface the data, hardware, and process dependencies that make or break each release.",
          },
        ],
      },
      {
        name: "Scalable System Design",
        pills: [
          {
            title: "Edge-to-Cloud Architecture",
            body: "Right-sized split between on-camera, on-prem, and cloud, driven by latency, cost, and privacy constraints.",
          },
          {
            title: "Multi-Site Reference Patterns",
            body: "Designs that replicate cleanly from one site to many, without re-platforming each time you scale.",
          },
        ],
      },
    ],
    art: "strategy",
  },
  {
    number: "02",
    icon: Code2,
    title: "Engineering & Development",
    intro:
      "We build the production system, models, pipelines, integrations, and operator tooling, engineered to the spec we agreed in stage one.",
    groups: [
      {
        name: "Validated Requirements & Specs",
        pills: [
          {
            title: "Stakeholder Capture",
            body: "Structured sessions with operators, ops leads, and engineering to lock objectives and acceptance criteria.",
          },
          {
            title: "Technical Specification",
            body: "Rigorous translation of those goals into model architectures, dataset requirements, and interface contracts.",
          },
          {
            title: "Feasibility Assessment",
            body: "Honest review of technical viability, resource needs, and timeline, before a single training run.",
          },
        ],
      },
      {
        name: "Custom Computer Vision Development",
        pills: [
          {
            title: "Model Architecture Design",
            body: "Selection or design of detection, segmentation, tracking, or multi-modal models tuned to your data regime.",
          },
          {
            title: "Annotation & Dataset Engineering",
            body: "Labeling pipelines, active learning loops, and SynthBaek augmentation when real data is scarce.",
          },
          {
            title: "Training, Fine-Tuning & Evaluation",
            body: "Reproducible training infrastructure with rigorous offline and shadow-mode evaluation before any rollout.",
          },
        ],
      },
      {
        name: "Advanced Vision AI Processing",
        pills: [
          {
            title: "Real-Time Inference Pipelines",
            body: "GPU and edge-accelerator pipelines engineered for sub-50ms latency on your target hardware.",
          },
          {
            title: "Multi-Camera & Multi-Modal Fusion",
            body: "Fusion of vision with thermal, depth, and telemetry to make the system robust where any single sensor fails.",
          },
        ],
      },
      {
        name: "Seamless Integration & Customization",
        pills: [
          {
            title: "ERP, MES & VMS Connectors",
            body: "Production-grade integrations with the systems your operators already use to act on alerts and insights.",
          },
          {
            title: "Operator UX & Dashboards",
            body: "Tailored UIs that surface the right information for floor managers, security ops, and executive views.",
          },
        ],
      },
    ],
    art: "development",
  },
  {
    number: "03",
    icon: Activity,
    title: "Operate & System Monitoring",
    intro:
      "Models drift, hardware ages, and the world changes. We keep the deployed system honest with continuous monitoring, retraining, and incident response.",
    groups: [
      {
        name: "Monitoring & Alert Management",
        pills: [
          {
            title: "Live Health Telemetry",
            body: "Real-time tracking of inference latency, GPU/CPU pressure, memory, and network, surfaced in one operator console.",
          },
          {
            title: "Continuous Model Evaluation",
            body: "Ongoing measurement of accuracy, drift, and bias against fresh ground truth so degradation never goes unnoticed.",
          },
          {
            title: "Data-Flow Observability",
            body: "Trace every frame from camera to decision, catching dropped streams, encoder issues, and silent failures fast.",
          },
          {
            title: "Smart Alert Routing",
            body: "Tiered alerts that wake the right team at the right severity, with intelligent suppression of known noise.",
          },
        ],
      },
      {
        name: "Proactive System Maintenance",
        pills: [
          {
            title: "Scheduled Retraining Cycles",
            body: "Periodic refresh of models against newly labeled data, validated in shadow mode before promotion.",
          },
          {
            title: "Camera & Edge Fleet Health",
            body: "Monitoring of lens occlusion, alignment drift, and edge device reliability across the camera estate.",
          },
        ],
      },
      {
        name: "Optimized Infrastructure Setup",
        pills: [
          {
            title: "Capacity & Cost Tuning",
            body: "Right-sizing of compute, storage, and bandwidth so you pay for the throughput you use, not the peaks you imagined.",
          },
          {
            title: "Resilience & Failover",
            body: "Multi-region patterns, gracefully degraded modes, and tested recovery plans for the inevitable outage.",
          },
        ],
      },
    ],
    art: "monitoring",
  },
];

const partnerReasons: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Sparkles,
    title: "Solutions, not templates",
    body: "Every engagement is shaped to your data, your operations, and your acceptance criteria, never a recycled stack.",
  },
  {
    icon: BarChart3,
    title: "Decisions powered by data",
    body: "Our analytics layer turns raw vision output into operator-ready signals that drive measurable business decisions.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible AI by default",
    body: "Privacy reviews, bias audits, and clear human-in-the-loop boundaries are baked into every deployment, not an afterthought.",
  },
  {
    icon: HeartHandshake,
    title: "Lifecycle partnership",
    body: "From whiteboard to 24/7 operate, we stay accountable for outcomes long after the launch announcement.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-10 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-70" style={{ background: "var(--gradient-radial)" }} />
        <div className="absolute inset-0 -z-10 grid-bg opacity-20" />

        <div className="container-custom px-6 grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-card text-xs font-mono mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-soft">VisionBaek, Computer Vision as a Service</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
              Strategic enterprise vision AI,{" "}
              <span className="gradient-text">delivered as a service</span>.
            </h1>

            <p className="text-soft text-lg leading-relaxed max-w-2xl mb-8">
              Most vision AI programs stall not from lack of models, but from lack of operational
              ownership. VisionBaek-as-a-Service hands you a partner that owns the strategy, the
              build, and the live system, so your team focuses on the business outcome, not the
              ML plumbing.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Talk to a solutions engineer <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="#tiers" className="btn-secondary">
                See engagement models
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <HeroEyeArt />
          </motion.div>
        </div>
      </section>

      {/* Empowering Enterprises */}
      <section className="px-6 pb-16 md:pb-20">
        <div className="container-custom px-6 max-w-4xl text-center">
          <p className="label-tracking text-primary mb-4">The mandate</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Empowering enterprises to make computer vision an operating capability.
          </h2>
          <p className="text-soft text-lg leading-relaxed">
            We bring deep, opinionated expertise across the full computer vision stack:
            classical algorithms, modern deep learning, MLOps, and edge deployment. Every
            engagement starts with a structured analysis of your specific use case, your data,
            and the constraints you actually operate under, so the system we ship matches the
            reality of your business.
          </p>
        </div>
      </section>

      {/* Service Tiers */}
      <section id="tiers" className="px-6 pb-16 md:pb-20">
        <div className="container-custom px-6">
          <div className="max-w-3xl mb-12">
            <p className="label-tracking text-primary mb-4">Engagement Models</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-5">
              Three ways to engage, pick the one that matches{" "}
              <span className="gradient-text">your maturity</span>.
            </h2>
            <p className="text-soft text-lg">
              Whether you are exploring your first pilot or scaling vision AI across the
              enterprise, we have a structured engagement that meets you where you are.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`glass-card-hover p-7 flex flex-col ${
                  tier.highlight ? "gradient-border" : ""
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold">{tier.name}</h3>
                  {tier.highlight && (
                    <span className="text-[10px] font-mono px-2 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary">
                      MOST CHOSEN
                    </span>
                  )}
                </div>
                <p className="text-soft text-sm leading-relaxed mb-6 flex-1">{tier.tagline}</p>
                <ul className="space-y-3">
                  {tier.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5 text-sm leading-relaxed">
                      <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                      </span>
                      <span className="text-foreground/90">{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="px-6 pb-16 md:pb-20">
        <div className="container-custom px-6">
          <div className="max-w-3xl mb-14">
            <p className="label-tracking text-primary mb-4">The journey</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-5">
              From strategy to deployment, with{" "}
              <span className="gradient-text">no handoffs that drop the ball</span>.
            </h2>
            <p className="text-soft text-lg">
              Three connected stages, one accountable team. Click any pillar to expand the
              specific work we do underneath it.
            </p>
          </div>

          <div className="space-y-16">
            {stages.map((stage, i) => (
              <StageBlock key={stage.number} stage={stage} reversed={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="px-6 pb-16 md:pb-20">
        <div className="container-custom px-6">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <p className="label-tracking text-primary mb-4">Why VisionBaek</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-5">
              The difference is in how we partner.
            </h2>
            <p className="text-soft text-lg">
              The reasons enterprises choose VisionBaek-as-a-Service to build, run, and scale
              their vision AI capability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {partnerReasons.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="glass-card-hover p-6 group"
              >
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-soft text-sm leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-16 md:pb-20">
        <div className="container-custom px-6">
          <div className="glass-card gradient-border p-10 md:p-14 text-center max-w-4xl mx-auto relative overflow-hidden">
            <div
              className="absolute inset-0 -z-10 opacity-60"
              style={{ background: "var(--gradient-radial)" }}
            />
            <h2 className="text-3xl md:text-5xl font-bold mb-5">
              Ready to make vision AI an operating capability?
            </h2>
            <p className="text-soft text-lg mb-8 max-w-2xl mx-auto">
              Bring us the use case. We will bring the strategy, the engineering, and the
              long-term operate. Let's design the right engagement for your team.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Start the conversation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* Inline brand-matching SVG illustrations, replace stock photos.            */
/* -------------------------------------------------------------------------- */

function StageBlock({ stage, reversed }: { stage: Stage; reversed: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`grid lg:grid-cols-12 gap-8 items-start ${
        reversed ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="lg:col-span-5">
        <StageArt variant={stage.art} icon={stage.icon} />
      </div>
      <div className="lg:col-span-7">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-sm text-primary">{stage.number}</span>
          <span className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-3">{stage.title}</h3>
        <p className="text-soft leading-relaxed mb-6">{stage.intro}</p>

        <Accordion type="single" collapsible defaultValue={stage.groups[0].name}>
          {stage.groups.map((g) => (
            <AccordionItem
              key={g.name}
              value={g.name}
              className="border-b border-border last:border-b-0"
            >
              <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline hover:text-primary transition-colors">
                {g.name}
              </AccordionTrigger>
              <AccordionContent className="pt-1 pb-5">
                <ul className="space-y-3">
                  {g.pills.map((p) => (
                    <li key={p.title} className="flex gap-3">
                      <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-primary to-accent" />
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-0.5">
                          {p.title}
                        </p>
                        <p className="text-sm text-soft leading-relaxed">{p.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.div>
  );
}

function HeroEyeArt() {
  return (
    <div className="relative aspect-[5/4] rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-card to-background">
      <div className="absolute inset-0 grid-bg grid-animated opacity-40" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, hsl(270 91% 55% / 0.45), transparent 60%), radial-gradient(circle at 80% 30%, hsl(290 85% 55% / 0.3), transparent 50%)",
        }}
      />
      <svg
        viewBox="0 0 500 400"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="iris" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(290 85% 70%)" stopOpacity="1" />
            <stop offset="55%" stopColor="hsl(270 91% 55%)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="hsl(270 50% 10%)" stopOpacity="1" />
          </radialGradient>
          <linearGradient id="scan" x1="0" x2="1">
            <stop offset="0%" stopColor="hsl(290 85% 70%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(290 85% 70%)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="hsl(290 85% 70%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* eye outline */}
        <ellipse cx="250" cy="200" rx="180" ry="90" fill="none" stroke="hsl(270 91% 65% / 0.4)" strokeWidth="1.5" />
        <ellipse cx="250" cy="200" rx="160" ry="78" fill="none" stroke="hsl(270 91% 65% / 0.25)" strokeWidth="1" />
        {/* iris */}
        <circle cx="250" cy="200" r="65" fill="url(#iris)" />
        <circle cx="250" cy="200" r="65" fill="none" stroke="hsl(290 85% 70% / 0.6)" strokeWidth="1" />
        {/* iris detail rings */}
        {[20, 35, 50].map((r) => (
          <circle key={r} cx="250" cy="200" r={r} fill="none" stroke="hsl(280 60% 90% / 0.25)" strokeWidth="0.6" />
        ))}
        {/* iris radial lines */}
        {Array.from({ length: 24 }).map((_, idx) => {
          const angle = (idx / 24) * Math.PI * 2;
          const x1 = 250 + Math.cos(angle) * 18;
          const y1 = 200 + Math.sin(angle) * 18;
          const x2 = 250 + Math.cos(angle) * 60;
          const y2 = 200 + Math.sin(angle) * 60;
          return <line key={idx} x1={x1} y1={y1} x2={x2} y2={y2} stroke="hsl(280 60% 90% / 0.3)" strokeWidth="0.4" />;
        })}
        {/* pupil */}
        <circle cx="250" cy="200" r="22" fill="hsl(270 30% 4%)" />
        <circle cx="240" cy="190" r="6" fill="hsl(280 30% 98% / 0.7)" />
        {/* corner targets */}
        {[
          [40, 40],
          [460, 40],
          [40, 360],
          [460, 360],
        ].map(([x, y], i) => (
          <g key={i} stroke="hsl(290 85% 70% / 0.6)" strokeWidth="1.5" fill="none">
            <line x1={x - 12} y1={y} x2={x - 4} y2={y} />
            <line x1={x + 4} y1={y} x2={x + 12} y2={y} />
            <line x1={x} y1={y - 12} x2={x} y2={y - 4} />
            <line x1={x} y1={y + 4} x2={x} y2={y + 12} />
          </g>
        ))}
        {/* scan line animation */}
        <rect x="0" y="0" width="500" height="400" fill="url(#scan)" opacity="0.18">
          <animateTransform
            attributeName="transform"
            type="translate"
            from="-500 0"
            to="500 0"
            dur="4s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
      <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono bg-background/70 backdrop-blur border border-primary/30 text-soft">
        VisionBaek · live inference
      </div>
    </div>
  );
}

function StageArt({ variant, icon: Icon }: { variant: Stage["art"]; icon: LucideIcon }) {
  return (
    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-card to-background">
      <div className="absolute inset-0 grid-bg grid-animated opacity-30" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, hsl(270 91% 55% / 0.45), transparent 55%), radial-gradient(circle at 75% 75%, hsl(290 85% 55% / 0.35), transparent 55%)",
        }}
      />
      {variant === "strategy" && <StrategySvg />}
      {variant === "development" && <DevelopmentSvg />}
      {variant === "monitoring" && <MonitoringSvg />}

      <div className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-primary/15 to-transparent industry-scan pointer-events-none" />

      <div className="absolute top-4 left-4 flex items-center gap-2">
        <div className="w-9 h-9 rounded-xl bg-background/60 border border-primary/40 backdrop-blur-md flex items-center justify-center">
          <Icon className="w-4 h-4 text-primary" />
        </div>
      </div>
    </div>
  );
}

function StrategySvg() {
  return (
    <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full">
      <defs>
        <linearGradient id="path-gradient" x1="0" x2="1">
          <stop offset="0%" stopColor="hsl(270 91% 65%)" />
          <stop offset="100%" stopColor="hsl(290 85% 60%)" />
        </linearGradient>
      </defs>
      <path
        d="M 30 220 Q 110 80 200 160 T 370 90"
        fill="none"
        stroke="url(#path-gradient)"
        strokeWidth="2.5"
        strokeDasharray="6 4"
      >
        <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="2s" repeatCount="indefinite" />
      </path>
      {[
        { x: 30, y: 220, label: "Diagnose" },
        { x: 130, y: 130, label: "Design" },
        { x: 230, y: 165, label: "Pilot" },
        { x: 320, y: 110, label: "Scale" },
      ].map((p, i) => (
        <g key={p.label}>
          <circle cx={p.x} cy={p.y} r="14" fill="hsl(270 35% 8%)" stroke="hsl(270 91% 65%)" strokeWidth="1.5" />
          <circle cx={p.x} cy={p.y} r="5" fill="hsl(290 85% 60%)">
            <animate attributeName="r" values="3;6;3" dur="2.5s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
          </circle>
          <text
            x={p.x}
            y={p.y + 32}
            textAnchor="middle"
            fontSize="10"
            fill="hsl(280 30% 98% / 0.7)"
            fontFamily="JetBrains Mono, monospace"
          >
            {p.label}
          </text>
        </g>
      ))}
      {/* checklist card */}
      <g transform="translate(40, 40)">
        <rect width="130" height="60" rx="8" fill="hsl(270 35% 8% / 0.85)" stroke="hsl(270 91% 65% / 0.3)" />
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(10, ${10 + i * 14})`}>
            <rect width="10" height="10" rx="2" fill="hsl(270 91% 55% / 0.3)" stroke="hsl(270 91% 65%)" />
            <rect x="18" width={70 + i * 8} height="3" rx="1.5" fill="hsl(280 30% 98% / 0.4)" />
            <rect x="18" y="6" width={45 + i * 4} height="2.5" rx="1.25" fill="hsl(280 30% 98% / 0.2)" />
          </g>
        ))}
      </g>
    </svg>
  );
}

function DevelopmentSvg() {
  return (
    <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full">
      {/* neural network nodes */}
      {[
        { layer: 0, count: 4 },
        { layer: 1, count: 6 },
        { layer: 2, count: 6 },
        { layer: 3, count: 3 },
      ].map((l) => {
        const xs = 80 + l.layer * 80;
        return Array.from({ length: l.count }).map((_, i) => {
          const ys = 60 + (i * 180) / (l.count - 1);
          return (
            <circle
              key={`${l.layer}-${i}`}
              cx={xs}
              cy={ys}
              r="6"
              fill="hsl(270 35% 8%)"
              stroke="hsl(270 91% 65%)"
              strokeWidth="1.2"
            >
              <animate attributeName="r" values="5;7;5" dur="2.5s" begin={`${l.layer * 0.25}s`} repeatCount="indefinite" />
            </circle>
          );
        });
      })}
      {/* connections */}
      {[0, 1, 2].map((l) => {
        const counts = [4, 6, 6, 3];
        const x1 = 80 + l * 80;
        const x2 = 80 + (l + 1) * 80;
        return Array.from({ length: counts[l] }).flatMap((_, i) =>
          Array.from({ length: counts[l + 1] }).map((_, j) => {
            const y1 = 60 + (i * 180) / (counts[l] - 1);
            const y2 = 60 + (j * 180) / (counts[l + 1] - 1);
            return (
              <line
                key={`c-${l}-${i}-${j}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="hsl(270 91% 65% / 0.15)"
                strokeWidth="0.6"
              />
            );
          }),
        );
      })}
      {/* code badge */}
      <g transform="translate(20, 230)">
        <rect width="200" height="50" rx="8" fill="hsl(270 35% 8% / 0.9)" stroke="hsl(270 91% 65% / 0.3)" />
        <text x="12" y="20" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="hsl(290 85% 75%)">
          {"> visionbaek build"}
        </text>
        <text x="12" y="35" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="hsl(280 30% 98% / 0.55)">
          training · 84 epochs · 0.94 mAP
        </text>
      </g>
    </svg>
  );
}

function MonitoringSvg() {
  // mock chart data
  const points = [
    [0, 60],
    [40, 50],
    [80, 70],
    [120, 45],
    [160, 60],
    [200, 35],
    [240, 50],
    [280, 25],
    [320, 40],
    [360, 20],
    [400, 30],
  ];
  const pathData = points.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x} ${y + 80}`).join(" ");

  return (
    <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full">
      <defs>
        <linearGradient id="chart-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="hsl(290 85% 60%)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="hsl(270 91% 65%)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* grid */}
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1="0" y1={80 + i * 30} x2="400" y2={80 + i * 30} stroke="hsl(270 91% 65% / 0.1)" />
      ))}
      {/* fill under line */}
      <path d={`${pathData} L 400 220 L 0 220 Z`} fill="url(#chart-fill)" />
      <path d={pathData} fill="none" stroke="hsl(290 85% 70%)" strokeWidth="2" />
      {/* points */}
      {points.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y + 80} r="3" fill="hsl(290 85% 70%)" />
      ))}
      {/* metric chips */}
      {[
        { x: 20, y: 30, label: "p99 latency", value: "42ms", color: "hsl(290 85% 70%)" },
        { x: 140, y: 30, label: "uptime", value: "99.98%", color: "hsl(270 91% 65%)" },
        { x: 260, y: 30, label: "drift", value: "-0.3%", color: "hsl(290 85% 70%)" },
      ].map((m) => (
        <g key={m.label} transform={`translate(${m.x}, ${m.y})`}>
          <rect width="110" height="36" rx="8" fill="hsl(270 35% 8% / 0.9)" stroke="hsl(270 91% 65% / 0.3)" />
          <text x="10" y="14" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="hsl(280 30% 98% / 0.5)">
            {m.label.toUpperCase()}
          </text>
          <text x="10" y="29" fontFamily="JetBrains Mono, monospace" fontSize="13" fill={m.color} fontWeight="600">
            {m.value}
          </text>
        </g>
      ))}
      {/* alert badge */}
      <g transform="translate(310, 240)">
        <circle cx="10" cy="10" r="6" fill="hsl(290 85% 60%)">
          <animate attributeName="opacity" values="1;0.4;1" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <text x="22" y="14" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="hsl(280 30% 98% / 0.7)">
          live monitor
        </text>
      </g>
    </svg>
  );
}
