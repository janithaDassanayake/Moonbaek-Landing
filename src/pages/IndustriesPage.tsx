import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { industries, type Industry } from "@/data/industries";

export default function IndustriesPage() {
  return (
    <section className="px-6 pt-28 pb-16 md:pb-20">
      <div className="container-custom">
        <div className="max-w-3xl mb-10">
          <p className="label-tracking text-primary mb-4">Industries</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
            Applied AI, deployed across <span className="gradient-text">every vertical</span>.
          </h1>
          <p className="text-soft text-lg leading-relaxed mb-3">
            From the factory floor to the operating room, from public infrastructure to satellite
            imagery, MoonBaek ships production-grade AI systems for the workflows that move real
            industries forward.
          </p>
          <p className="text-soft text-base leading-relaxed">
            Not just computer vision: Generative AI, Agentic AI, classical ML, deep learning, and
            LLM-powered tooling, combined to fit each problem.
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
            <motion.div
              key={ind.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.07 }}
            >
              <Link
                to={`/industries/${ind.slug}`}
                className="glass-card-hover overflow-hidden group flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-primary/40 rounded-xl app-card"
              >
                <IndustryHero industry={ind} index={i} />

                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-semibold mb-1.5">{ind.name}</h2>
                  <p className="text-sm text-primary/90 font-medium mb-4">{ind.tagline}</p>
                  <ul className="space-y-2.5 mb-5 flex-1">
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
                  <span className="inline-flex items-center gap-2 text-xs font-medium text-primary group-hover:gap-3 transition-all">
                    Explore {ind.name} solutions <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Hero image for an industry card, matches the Applications page presentation:
 * clean photo, soft bottom fade, light primary/accent overlay, badges in corners.
 */
function IndustryHero({ industry, index }: { industry: Industry; index: number }) {
  const Icon: LucideIcon = industry.icon;
  return (
    <div className="relative h-48 overflow-hidden border-b border-border">
      <img
        src={industry.image}
        alt={industry.name}
        loading={index < 3 ? "eager" : "lazy"}
        decoding="async"
        className="app-card-img absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out md:group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-90" />

      <div className="absolute top-3 left-3 px-2 py-1 rounded-full text-[10px] font-mono bg-background/70 backdrop-blur border border-primary/30 text-soft">
        #{String(index + 1).padStart(2, "0")}
      </div>

      <div className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-background/70 backdrop-blur border border-primary/30 flex items-center justify-center">
        <Icon className="w-4 h-4 text-primary" />
      </div>
    </div>
  );
}
