import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Activity,
  Crosshair,
  Sparkles,
  ShieldAlert,
  Dog,
  ShoppingCart,
  Trophy,
  PlayCircle,
  type LucideIcon,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/* ----------------------------- Data ----------------------------- */

type VdeClip = { value: string; label: string; src: string; caption: string };

const vdeClips: VdeClip[] = [
  {
    value: "detection",
    label: "Detection",
    src: "/demos/vde/detection.mp4",
    caption:
      "Multi-class object detection running on raw video, the foundation our higher-order modules build on top of.",
  },
  {
    value: "tracking",
    label: "Tracking",
    src: "/demos/vde/tracking.mp4",
    caption:
      "Identity-preserving multi-object tracking across motion, scale change, and partial occlusion.",
  },
  {
    value: "keypoints",
    label: "Keypoints & Pose",
    src: "/demos/vde/keypoints.mp4",
    caption:
      "Skeletal keypoint extraction for pose, biomechanics, and movement-quality scoring.",
  },
  {
    value: "instance",
    label: "Instance Segmentation",
    src: "/demos/vde/instance-segmentation.mp4",
    caption:
      "Per-pixel masks separating individual instances, the input to fine-grained spatial analytics.",
  },
  {
    value: "semantic",
    label: "Semantic Segmentation",
    src: "/demos/vde/semantic-segmentation.mp4",
    caption:
      "Whole-scene class labeling that turns raw frames into structured geographic understanding.",
  },
];

const vdeCapabilities = [
  "Object Detection",
  "Object Tracking",
  "Keypoint Detection",
  "Pose Estimation",
  "Semantic Segmentation",
  "Instance Segmentation",
  "Re-Identification",
  "Motion Intelligence",
  "Spatial Analytics",
];

type SynthCat = { value: string; label: string; folder: string; count: number; ext: string; blurb: string };

const synthCategories: SynthCat[] = [
  {
    value: "brain",
    label: "Brain MRI",
    folder: "brain",
    count: 8,
    ext: "jpg",
    blurb:
      "Synthetic brain MRI slices generated to augment scarce neuro-imaging datasets and balance pathology classes.",
  },
  {
    value: "aortic",
    label: "Aortic Aneurysm CT",
    folder: "aortic",
    count: 6,
    ext: "jpg",
    blurb:
      "Cardiovascular CT angiography frames for training segmentation and detection of aortic aneurysms with privacy preserved.",
  },
  {
    value: "acne",
    label: "Acne & Dermatology",
    folder: "acne",
    count: 10,
    ext: "png",
    blurb:
      "Diverse synthetic dermatology samples spanning comedones, pustules, and nodules, sized to balance underrepresented presentations.",
  },
  {
    value: "dog-skin",
    label: "Veterinary Skin",
    folder: "dog-skin",
    count: 13,
    ext: "jpg",
    blurb:
      "Veterinary dermatology generation pipeline, extends our medical work into companion-animal diagnostics.",
  },
];

type SurveillanceDemo = {
  icon: LucideIcon;
  title: string;
  src: string;
  body: string;
};

const surveillanceDemos: SurveillanceDemo[] = [
  {
    icon: ShieldAlert,
    title: "Restricted Area Monitoring",
    src: "/demos/surveillance/restricted/restricted-area.mp4",
    body: "Operators draw arbitrary exclusion zones on the live feed. The moment a person, animal, or object crosses the boundary the system flags an intrusion event for triage, flexible enough for plant safety, pet tracking, and perimeter security alike.",
  },
  {
    icon: Activity,
    title: "Occupancy Monitoring",
    src: "/demos/surveillance/occupancy/occupancy.mp4",
    body: "Live count of how many people are inside a defined region, useful for capacity caps, queueing analytics, and after-hours zone audits without dedicated turnstile hardware.",
  },
  {
    icon: PlayCircle,
    title: "Fall Detection",
    src: "/demos/surveillance/fall/fall-1.mp4",
    body: "Pose-based detection of falls in real time, designed for elderly-care facilities, factory floors, and any environment where rapid response prevents serious injury.",
  },
  {
    icon: Crosshair,
    title: "Gait Analysis",
    src: "/demos/surveillance/gait/gait-1.mp4",
    body: "Frame-by-frame skeletal analysis quantifies cadence, symmetry, and stride to support clinical assessment, rehabilitation tracking, and athletic performance work.",
  },
];

/* ------------------------- Helpers ------------------------- */

function useLazyAutoplay() {
  const ref = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) v.play().catch(() => {});
          else v.pause();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return ref;
}

function DemoVideo({
  src,
  className = "",
  controls = false,
  autoPlay = false,
  loop = true,
  muted = true,
  poster,
}: {
  src: string;
  className?: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  poster?: string;
}) {
  const lazyRef = useLazyAutoplay();
  return (
    <video
      ref={autoPlay ? lazyRef : undefined}
      src={src}
      poster={poster}
      controls={controls}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      playsInline
      preload="metadata"
      className={`w-full h-full object-cover ${className}`}
    />
  );
}

/* ------------------------- Page ------------------------- */

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-10 overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-70"
          style={{ background: "var(--gradient-radial)" }}
        />
        <div className="absolute inset-0 -z-10 grid-bg opacity-20" />
        <div className="container-custom px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-card text-xs font-mono mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-soft">Live demos · running models, real footage</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
              See it{" "}
              <span className="gradient-text">moving, not in slides</span>.
            </h1>
            <p className="text-soft text-lg leading-relaxed max-w-2xl mb-8">
              Every clip below is rendered output from a model we built and shipped, pulled
              straight from internal benchmarks, partner pilots, and live deployments. Skim
              the highlight reel or dive into a specific capability.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#vde" className="btn-primary inline-flex items-center gap-2">
                Explore demos <ArrowRight className="w-4 h-4" />
              </a>
              <Link to="/contact" className="btn-secondary">
                Request a custom demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VDE, flagship */}
      <VdeSection />

      {/* ARIT */}
      <AritSection />

      {/* SynthBaek */}
      <SynthSection />

      {/* Surveillance Suite + small demos (shares heading) */}
      <SurveillanceSection />

      {/* CTA */}
      <section className="px-6 pb-14 md:pb-16">
        <div className="container-custom px-6">
          <div className="glass-card gradient-border p-10 md:p-14 text-center max-w-4xl mx-auto relative overflow-hidden">
            <div
              className="absolute inset-0 -z-10 opacity-60"
              style={{ background: "var(--gradient-radial)" }}
            />
            <h2 className="text-3xl md:text-5xl font-bold mb-5">
              Want to see your problem running on real footage?
            </h2>
            <p className="text-soft text-lg mb-8 max-w-2xl mx-auto">
              Send us a sample video and a target metric. We'll come back with a working
              demo, not a deck.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Brief us on your use case <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ------------------------- VDE ------------------------- */

function VdeSection() {
  return (
    <section id="vde" className="px-6 pb-14 md:pb-16">
      <div className="container-custom px-6">
        <div className="grid lg:grid-cols-12 gap-6 mb-6 items-end">
          <div className="lg:col-span-7">
            <p className="label-tracking text-primary mb-3">Flagship platform</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Vision Dynamics Engine{" "}
              <span className="text-soft text-2xl md:text-3xl font-normal">(VDE)</span>
            </h2>
            <p className="text-soft text-lg leading-relaxed">
              VDE is our internal computer-vision runtime, a unified pipeline that fuses
              detection, tracking, segmentation, pose, and re-identification into a single
              addressable engine. Below are five live capability cuts from one shared
              backbone.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="flex flex-wrap gap-2">
              {vdeCapabilities.map((c) => (
                <span
                  key={c}
                  className="px-3 py-1.5 text-xs rounded-full bg-secondary/40 border border-primary/20 text-soft"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Tabs defaultValue="detection" className="glass-card p-4 md:p-6">
          <TabsList className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 bg-transparent h-auto p-0 mb-5">
            {vdeClips.map((c) => (
              <TabsTrigger
                key={c.value}
                value={c.value}
                className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-primary/30 data-[state=active]:to-accent/30 data-[state=active]:border-primary/40 data-[state=active]:text-foreground border border-border bg-secondary/30 text-soft py-2.5 text-xs sm:text-sm"
              >
                {c.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {vdeClips.map((c) => (
            <TabsContent key={c.value} value={c.value} className="mt-0">
              <div className="grid lg:grid-cols-3 gap-6 items-start">
                <div className="lg:col-span-2 relative rounded-xl overflow-hidden border border-border aspect-video bg-black">
                  <DemoVideo src={c.src} autoPlay />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{c.label}</h3>
                  <p className="text-soft leading-relaxed">{c.caption}</p>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Sports application callout */}
        <div className="mt-8 glass-card p-6 md:p-8 grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-2 flex justify-center">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 border border-primary/40 flex items-center justify-center">
              <Trophy className="w-6 h-6 text-primary" />
            </div>
          </div>
          <div className="md:col-span-10">
            <p className="label-tracking text-accent mb-2">Where we apply VDE</p>
            <p className="text-soft leading-relaxed">
              Sports analytics, athlete performance review, ball and player tracking,
              referee assistance, automated scoring, and tactical insights, VDE adapts to
              football, cricket, basketball, tennis, athletics, swimming, combat sports,
              and beyond. The same backbone powers industrial monitoring, surveillance, and
              healthcare deployments elsewhere on this page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------- ARIT ------------------------- */

function AritSection() {
  return (
    <section id="arit" className="px-6 pb-14 md:pb-16">
      <div className="container-custom px-6">
        <div className="glass-card p-6 md:p-10 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 relative rounded-xl overflow-hidden border border-border aspect-video bg-black">
            <DemoVideo src="/demos/arit/arit.mp4" autoPlay />
          </div>
          <div className="lg:col-span-5">
            <p className="label-tracking text-primary mb-3">Adaptive Re-Identification</p>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Tracking that <span className="gradient-text">survives the messy moments</span>.
            </h2>
            <p className="text-soft leading-relaxed mb-5">
              ARIT keeps a temporal memory of each subject, appearance, motion pattern,
              trajectory, behavioral signature, so when occlusion, motion blur, frame
              drops, or a temporary exit interrupts the feed, the system re-identifies the
              same target rather than spawning a new one.
            </p>
            <ul className="space-y-2 mb-5">
              {[
                "Identity preserved across occlusion and rapid motion",
                "Memory selection that's adaptive, not naive frame matching",
                "Segmentation + tracking fused for richer-than-bbox output",
                "One unified pipeline from segmentation to tracking to memory",
              ].map((b) => (
                <li key={b} className="flex gap-2 text-sm text-soft leading-relaxed">
                  <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-primary to-accent" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {["Sports analytics", "Surveillance", "Robotics", "Autonomous systems"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-[11px] rounded-full bg-secondary/40 border border-primary/20 text-soft"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------- SynthBaek ------------------------- */

function SynthSection() {
  const [activeCat, setActiveCat] = useState<string>(synthCategories[0].value);
  const cat = synthCategories.find((c) => c.value === activeCat)!;

  const images = Array.from({ length: Math.min(cat.count, 6) }).map((_, i) => {
    const idx = (i + 1).toString().padStart(2, "0");
    return `/demos/synthbaek/${cat.folder}/${cat.folder}-${idx}.${cat.ext}`;
  });

  return (
    <section id="synthbaek" className="px-6 pb-14 md:pb-16">
      <div className="container-custom px-6">
        <div className="grid lg:grid-cols-12 gap-6 mb-6 items-end">
          <div className="lg:col-span-7">
            <p className="label-tracking text-accent mb-3">Proprietary framework</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">SynthBaek</span>, synthetic data, on demand.
            </h2>
            <p className="text-soft text-lg leading-relaxed">
              When real-world data is scarce, imbalanced, sensitive, or stuck behind
              privacy walls, SynthBaek generates realistic, domain-faithful samples on
              tap. Diffusion-based, prompt-controllable, and tuned to clinical,
              veterinary, and industrial domains.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-wrap gap-2 justify-start lg:justify-end">
            {synthCategories.map((c) => (
              <button
                key={c.value}
                onClick={() => setActiveCat(c.value)}
                className={`px-4 py-2 rounded-full text-sm border transition-all ${
                  activeCat === c.value
                    ? "bg-gradient-to-br from-primary/30 to-accent/30 border-primary/40 text-foreground"
                    : "border-border bg-secondary/30 text-soft hover:text-foreground"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={cat.value}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-card p-5 md:p-7"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 border border-primary/40 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{cat.label}</h3>
              <p className="text-sm text-soft">{cat.blurb}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {images.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.025 }}
                className="relative aspect-square rounded-lg overflow-hidden border border-border bg-black/40"
              >
                <img
                  src={src}
                  alt={`${cat.label} synthetic sample ${i + 1}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded text-[9px] font-mono bg-background/70 backdrop-blur border border-primary/30 text-soft">
                  synthetic
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------- Surveillance ------------------------- */

function SurveillanceSection() {
  return (
    <section id="samples" className="px-6 pb-14 md:pb-16">
      <div className="container-custom px-6">
        <div className="max-w-3xl mb-6">
          <p className="label-tracking text-primary mb-3">VisionBaek samples</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 lg:whitespace-nowrap">
            VisionBaek sample demos <span className="gradient-text">shaped to your problem</span>.
          </h2>
          <p className="text-soft text-lg">
            Reference implementations, not deployed products. Each one runs on standard
            camera input and can be reshaped for facilities, healthcare, retail,
            veterinary, sports, or any domain where the underlying capability fits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {surveillanceDemos.map((d, i) => (
            <motion.article
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass-card-hover overflow-hidden flex flex-col"
            >
              <div className="relative aspect-video bg-black border-b border-border">
                <DemoVideo src={d.src} autoPlay />
              </div>
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 flex items-center justify-center">
                    <d.icon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{d.title}</h3>
                </div>
                <p className="text-soft text-sm leading-relaxed">{d.body}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <SmallDemosGrid />
      </div>
    </section>
  );
}

/* ------------------------- Small Demos ------------------------- */

function SmallDemosGrid() {
  type Card = {
    icon: LucideIcon;
    eyebrow: string;
    title: string;
    body: string;
    media: { kind: "video" | "image"; src: string };
  };

  const cards: Card[] = [
    {
      icon: Dog,
      eyebrow: "Veterinary",
      title: "Pet Posture Monitoring",
      body: "Continuous posture and gait analysis on companion animals, early-warning signal for pain, lameness, and orthopedic conditions long before a clinical visit would catch them.",
      media: { kind: "video", src: "/demos/pet-posture/dog-posture.mp4" },
    },
    {
      icon: ShoppingCart,
      eyebrow: "Retail",
      title: "Queue Management",
      body: "Live queue counting and dwell-time analytics from existing store cameras, giving operators real-time signals to open lanes before customers walk away.",
      media: { kind: "video", src: "/demos/retail/queue.mp4" },
    },
    {
      icon: Trophy,
      eyebrow: "Sports",
      title: "Sprint Biomechanics",
      body: "Frame-accurate sprint analysis, stride length, cadence, ground contact time, turning a single race camera into a coach-grade performance lab.",
      media: { kind: "image", src: "/demos/sport/sprint.gif" },
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
      {cards.map((c, i) => (
        <motion.article
          key={c.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: i * 0.06 }}
          className="glass-card-hover overflow-hidden flex flex-col"
        >
          <div className="relative aspect-video bg-black border-b border-border overflow-hidden">
            {c.media.kind === "video" ? (
              <DemoVideo src={c.media.src} autoPlay />
            ) : (
              <img
                src={c.media.src}
                alt={c.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
          </div>
          <div className="p-5 md:p-6 flex flex-col flex-1">
            <p className="label-tracking text-primary mb-2">{c.eyebrow}</p>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 flex items-center justify-center">
                <c.icon className="w-4 h-4 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">{c.title}</h3>
            </div>
            <p className="text-soft text-sm leading-relaxed">{c.body}</p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
