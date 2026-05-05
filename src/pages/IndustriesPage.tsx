import { motion } from "framer-motion";
import {
  Factory,
  HeartPulse,
  ShieldCheck,
  Truck,
  Zap,
  Sprout,
  Utensils,
  Eye,
  Plane,
  type LucideIcon,
} from "lucide-react";

type Industry = {
  icon: LucideIcon;
  name: string;
  tagline: string;
  image: string;
  capabilities: string[];
};

const industries: Industry[] = [
  {
    icon: Factory,
    name: "Manufacturing",
    tagline: "Maximize efficiency and visibility with vision AI",
    image: "/industries/manufacturing.jpeg",
    capabilities: [
      "Vision AI — automate quality inspections and detect imperfections, missing components, and material variations",
      "Workplace safety — alert staff to unsafe equipment, dust build-ups, gas leaks, and people in restricted zones",
      "Packaging & label verification — identify dents, tears, smudged labels, and missing carton items",
      "Predictive ML — forecast equipment failure and surface bottlenecks before they hit throughput",
      "GenAI for ops — root-cause analysis assistants and instant retrieval over manuals, SOPs, and incident logs",
    ],
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    tagline: "Streamline care and boost patient outcomes",
    image: "/industries/healthcare.jpeg",
    capabilities: [
      "Vision AI — surgical assistance, PPE monitoring, and diagnostic-imaging triage",
      "Pill recognition — identify medication and dosage from a single image",
      "Clinical screening models — flag high-priority cases for clinician review",
      "GenAI clinical co-pilots — draft notes, summarise charts, and answer questions over patient history",
      "RAG over medical literature — bring evidence-based answers into the point of care",
    ],
  },
  {
    icon: ShieldCheck,
    name: "Government",
    tagline: "Improve public-sector operations with applied AI",
    image: "/industries/government.jpeg",
    capabilities: [
      "Document authentication and counterfeit detection across forms and IDs",
      "Identity verification — match faces, signatures, and biometric data at scale",
      "LLM-powered document analysis — extract structured data from forms, body cameras, and surveillance",
      "Citizen-service GenAI assistants — multilingual, grounded in policy and procedure",
      "Agentic workflows for case triage, routing, and signature compliance",
    ],
  },
  {
    icon: Truck,
    name: "Transportation",
    tagline: "Smarter mobility, end-to-end",
    image: "/industries/transportation.jpeg",
    capabilities: [
      "Real-time traffic intelligence from city-scale video",
      "Road & infrastructure monitoring — alert maintenance teams to damage early",
      "Predictive demand & ETA models for fleets, transit, and last-mile delivery",
      "Agentic incident response — agents that triage, dispatch, and notify the right teams",
      "GenAI ops co-pilots over schedules, manifests, and compliance documentation",
    ],
  },
  {
    icon: Zap,
    name: "Energy & Utilities",
    tagline: "Reduce unscheduled downtime across the asset fleet",
    image: "/industries/energy.jpeg",
    capabilities: [
      "Gauge reading, thermal anomaly detection, and leak alerts via vision AI",
      "Predictive maintenance models — turnaround failure prediction into scheduled work",
      "Drone & robot data pipelines for inspections in remote and hazardous sites",
      "GenAI knowledge agents over P&IDs, technical manuals, and inspection reports",
      "LLM-driven summarisation of field reports for fast operational decisions",
    ],
  },
  {
    icon: Sprout,
    name: "Agriculture",
    tagline: "Increase crop yields and protect your profits",
    image: "/industries/agriculture.jpeg",
    capabilities: [
      "Produce grading, sorting, and size/colour analysis at line speed",
      "Plant, weed, and disease identification across drone, satellite, and in-field imagery",
      "Yield forecasting and demand-planning ML rooted in field-level data",
      "GenAI advisory chatbots for growers — localised, multilingual, and crop-specific",
      "Agentic input optimisation — recommend water, fertiliser, and treatment plans automatically",
    ],
  },
  {
    icon: Utensils,
    name: "Food & Beverage",
    tagline: "Streamline production from raw material to shelf",
    image: "/industries/food.jpeg",
    capabilities: [
      "Detect packaging issues, seal integrity, and fill-level deviations with vision AI",
      "Analyse product quality, ingredient size, shape, and colour",
      "Label compliance — confirm expiry, nutrition, and placement automatically",
      "Demand-forecasting ML to reduce waste and align production to actual demand",
      "GenAI assistants over recipe specs, allergen rules, and food-safety regulations",
    ],
  },
  {
    icon: Eye,
    name: "Security & Surveillance",
    tagline: "Automate threat and risk detection at scale",
    image: "/industries/security.jpeg",
    capabilities: [
      "Theft and loss prevention — package theft, abandoned luggage, slip-and-fall hazards",
      "License plate reading and re-identification across multiple cameras",
      "Intelligent enforcement and access control across restricted zones",
      "Agentic alerting — agents that watch, decide, and escalate only what matters",
      "LLM incident summaries — turn hours of footage and logs into a single clear report",
    ],
  },
  {
    icon: Plane,
    name: "Aerial & Satellite",
    tagline: "Earth-scale insights from drones and satellites",
    image: "/industries/aerial.jpeg",
    capabilities: [
      "Object detection and tracking across vast geographies and imagery archives",
      "Safety and pilot support — vision-based alerts for crews",
      "Deep-learning models for change detection, segmentation, and infrastructure mapping",
      "Agentic mission planning over weather, terrain, and asset priorities",
      "GenAI briefings — turn raw imagery into shareable, narrative intelligence",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <section className="page-section pt-32">
      <div className="container-custom">
        <div className="max-w-3xl mb-10">
          <p className="label-tracking text-primary mb-4">Industries</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
            Applied AI, deployed across <span className="gradient-text">every vertical</span>.
          </h1>
          <p className="text-soft text-lg leading-relaxed mb-3">
            From the factory floor to the operating room, from public infrastructure to satellite
            imagery — MoonBaek ships production-grade AI systems for the workflows that move real
            industries forward.
          </p>
          <p className="text-soft text-base leading-relaxed">
            Not just computer vision: Generative AI, Agentic AI, classical ML, deep learning, and
            LLM-powered tooling — combined to fit each problem.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {[
              "Computer Vision",
              "Generative AI",
              "Agentic AI",
              "Machine Learning",
              "Deep Learning",
              "LLM Integration",
              "Predictive Analytics",
            ].map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs rounded-full bg-secondary/40 border border-primary/20 text-soft"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <motion.article
              key={ind.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.07 }}
              className="glass-card-hover overflow-hidden group flex flex-col"
            >
              <IndustryArt Icon={ind.icon} index={i} image={ind.image} name={ind.name} />

              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-xl font-semibold mb-1.5">{ind.name}</h2>
                <p className="text-sm text-primary/90 font-medium mb-4">{ind.tagline}</p>
                <ul className="space-y-2.5">
                  {ind.capabilities.map((c) => (
                    <li key={c} className="flex gap-2.5 text-sm text-soft leading-relaxed">
                      <span
                        aria-hidden
                        className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-primary to-accent"
                      />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Per-card photo + purple gradient overlay.
 * - Background photo, slightly desaturated, ken-burns zoom on hover
 * - Purple/magenta gradient layer at varying angles for variety
 * - Animated scan line (left→right) for a "vision AI" feel
 * - Centered icon badge floats above
 */
function IndustryArt({
  Icon,
  index,
  image,
  name,
}: {
  Icon: LucideIcon;
  index: number;
  image: string;
  name: string;
}) {
  const angles = [120, 145, 170, 200, 235, 260, 290, 315, 340];
  const angle = angles[index % angles.length];

  return (
    <div className="relative h-48 w-full overflow-hidden border-b border-border">
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 saturate-50"
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(${angle}deg, hsl(270 91% 50% / 0.55), hsl(290 85% 55% / 0.35) 55%, hsl(270 35% 6% / 0.85) 100%)`,
          mixBlendMode: "multiply",
        }}
      />
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, hsl(290 85% 60% / 0.45), transparent 55%), radial-gradient(circle at 75% 70%, hsl(270 91% 65% / 0.35), transparent 50%)",
        }}
      />
      <div className="absolute inset-0 grid-bg grid-animated opacity-30" />
      <div className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-primary/15 to-transparent industry-scan pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 -m-6 rounded-full bg-gradient-to-br from-primary to-accent opacity-40 blur-2xl animate-pulse-glow" />
          <div className="relative w-16 h-16 rounded-2xl bg-background/60 border border-primary/40 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_hsl(270_91%_65%_/_0.5)]">
            <Icon className="w-7 h-7 text-primary" strokeWidth={1.6} />
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-card to-transparent" />
    </div>
  );
}
