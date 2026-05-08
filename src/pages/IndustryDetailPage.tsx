import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, type LucideIcon } from "lucide-react";
import { industryBySlug, type IndustryApplication } from "@/data/industries";

export default function IndustryDetailPage() {
  const { slug = "" } = useParams();
  const industry = industryBySlug(slug);

  if (!industry) return <Navigate to="/industries" replace />;

  const Icon: LucideIcon = industry.icon;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-12 overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-60"
          style={{ background: "var(--gradient-radial)" }}
        />
        <div className="absolute inset-0 -z-10 grid-bg opacity-20" />

        <div className="container-custom px-6">
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-sm text-soft hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> All industries
          </Link>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 glass-card text-xs font-mono mb-5">
                <Icon className="w-3.5 h-3.5 text-primary" />
                <span className="text-soft">{industry.name}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] mb-5">
                {industry.name}{" "}
                <span className="gradient-text">solutions</span>.
              </h1>

              <p className="text-primary/90 font-medium text-lg mb-4">{industry.tagline}</p>
              <p className="text-soft text-lg leading-relaxed max-w-2xl mb-8">
                {industry.description}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  Talk to a solutions engineer <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="#applications" className="btn-secondary">
                  See applications
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="relative aspect-[5/4] rounded-2xl overflow-hidden border border-border">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 mix-blend-overlay" />
                <div className="absolute top-4 right-4 w-11 h-11 rounded-xl bg-background/70 backdrop-blur border border-primary/30 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities, same five bullets shown on the overview card, expanded */}
      <section className="px-6 pb-16 md:pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mb-8">
            <p className="label-tracking text-primary mb-3">What we do for {industry.name}</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              The capabilities we lean on.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {industry.capabilities.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.05 }}
                className="glass-card-hover p-5 flex gap-3"
              >
                <span
                  aria-hidden
                  className="mt-2 shrink-0 w-2 h-2 rounded-full bg-gradient-to-br from-primary to-accent"
                />
                <p className="text-soft leading-relaxed">{c}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications, Application-card style */}
      <section id="applications" className="px-6 pb-16 md:pb-20">
        <div className="container-custom">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
            <div className="max-w-2xl">
              <p className="label-tracking text-primary mb-3">Applications</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                Vision applications relevant to {industry.name}.
              </h2>
              <p className="text-soft">
                A focused subset of the catalog, picked for the workflows we see most often
                in this vertical.
              </p>
            </div>
            <Link
              to="/applications"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
            >
              Browse all 42 applications <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industry.applications.map((app, i) => (
              <ApplicationCard key={app.title} app={app} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="px-6 pb-16 md:pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mb-8">
            <p className="label-tracking text-accent mb-3">Use cases</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
              Where <span className="gradient-text">vision AI moves the needle</span>.
            </h2>
            <p className="text-soft">
              Concrete scenarios we have built or are actively delivering for {industry.name}{" "}
              partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {industry.useCases.map((u, i) => (
              <motion.div
                key={u.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="glass-card-hover p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-sm text-primary">0{i + 1}</span>
                  <span className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{u.title}</h3>
                <p className="text-soft text-sm leading-relaxed">{u.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="px-6 pb-16 md:pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mb-8">
            <p className="label-tracking text-primary mb-3">Related products</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
              The toolbox behind these solutions.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {industry.productLinks.map((p) => (
              <Link
                key={p.label}
                to={p.href}
                className="glass-card-hover p-6 group flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 flex items-center justify-center shrink-0">
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                    {p.label}
                  </h3>
                  <p className="text-soft text-sm leading-relaxed">{p.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-16 md:pb-20">
        <div className="container-custom">
          <div className="glass-card gradient-border p-10 md:p-14 text-center max-w-4xl mx-auto relative overflow-hidden">
            <div
              className="absolute inset-0 -z-10 opacity-60"
              style={{ background: "var(--gradient-radial)" }}
            />
            <h2 className="text-2xl md:text-4xl font-bold mb-5">
              Have a {industry.name.toLowerCase()} problem worth solving?
            </h2>
            <p className="text-soft text-lg mb-8 max-w-2xl mx-auto">
              Send us the use case and a sample of your data. We'll come back with a
              working prototype, not a deck.
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

function ApplicationCard({ app, index }: { app: IndustryApplication; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: (index % 6) * 0.04 }}
      className="glass-card-hover overflow-hidden flex flex-col group"
    >
      <div className="relative h-44 overflow-hidden border-b border-border">
        <img
          src={app.image}
          alt={app.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/15 mix-blend-overlay opacity-80" />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
          {app.title}
        </h3>
        <p className="text-sm text-soft leading-relaxed">{app.description}</p>
      </div>
    </motion.article>
  );
}
