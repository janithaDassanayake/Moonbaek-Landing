import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Eye, Sparkles } from "lucide-react";

type Application = {
  title: string;
  description: string;
  image: string;
  category: string;
};

// Applications are intentionally ordered by operational priority:
// safety-critical first, then traffic & access, manufacturing quality,
// logistics, monitoring, healthcare, and foundational vision tasks.
const applications: Application[] = [
  // Tier 1, Safety & Threat Response
  {
    title: "Weapon Detection",
    description:
      "Spots firearms, knives, and improvised weapons in live CCTV streams and instantly notifies security teams, turning passive cameras into an active first line of defense.",
    image: "/applications/Weapon-Detection-Thumbnail-Image.jpg",
    category: "Safety & Security",
  },
  {
    title: "Fire & Smoke Detection",
    description:
      "Catches the earliest visual signatures of flame and smoke in environments where traditional sensors lag, cutting response time down to seconds across factories, forests, and warehouses.",
    image: "/applications/Fire-Smoke-Detection_web.jpg",
    category: "Safety & Security",
  },
  {
    title: "Suspicious Activity",
    description:
      "Flags loitering, fights, theft, and other behavioral anomalies in real time, surfacing only the moments that genuinely need a human review.",
    image: "/applications/Suspicious-Activity.png",
    category: "Safety & Security",
  },
  {
    title: "Accident Detection",
    description:
      "Identifies collisions, falls, and roadway incidents the instant they happen and dispatches alerts to control rooms and emergency contacts automatically.",
    image: "/applications/Accident-detection-1.jpg",
    category: "Safety & Security",
  },
  {
    title: "Worker Safety Monitoring",
    description:
      "Verifies PPE compliance, hazard-zone breaches, and unsafe postures across factory floors and construction sites, every shift, every worker, in real time.",
    image: "/applications/Worker-Safety-Monitoring.png",
    category: "Safety & Security",
  },

  // Tier 2, Vehicle, Traffic & Driver
  {
    title: "Driver Distraction Detection",
    description:
      "Tracks eye gaze, head pose, and hand position to flag drowsy or distracted drivers before momentary lapses turn into preventable crashes.",
    image: "/applications/Driver-Distraction-Detection.jpg",
    category: "Mobility",
  },
  {
    title: "Over-Speeding Detection",
    description:
      "Estimates vehicle velocity from a single calibrated camera and flags violations without the cost or footprint of dedicated radar infrastructure.",
    image: "/applications/Over-Speeding-Detection-1.jpg",
    category: "Mobility",
  },
  {
    title: "Red Zone Monitoring",
    description:
      "Defines virtual exclusion zones around heavy machinery and triggers alarms the moment a person enters a danger envelope, drastically reducing close-call incidents.",
    image: "/applications/Red-Zone-Monitoring-1.jpg",
    category: "Mobility",
  },
  {
    title: "License Plate Recognition",
    description:
      "Reads plates across angles, weather, and motion blur for tolling, parking, and access control, backed by sub-second database lookups.",
    image: "/applications/Automated-License-Plate-Recognition.jpg",
    category: "Mobility",
  },
  {
    title: "Vehicle Mapping & Tracking",
    description:
      "Follows individual vehicles across multiple cameras to reconstruct routes, dwell time, and movement patterns at site or city scale.",
    image: "/applications/Vehicle-Mapping-Tracking-Cover-Image.jpg",
    category: "Mobility",
  },
  {
    title: "Traffic Counting",
    description:
      "Counts vehicles by type and direction to inform signal timing, capacity planning, and long-term infrastructure investment with hard data.",
    image: "/applications/Traffic-Counting-Thumbnail-image.jpg",
    category: "Mobility",
  },
  {
    title: "Smart Parking",
    description:
      "Maps free and occupied bays in real time, guiding drivers to open spaces while giving operators live occupancy and revenue analytics.",
    image: "/applications/Smart-Parking-Thumbnail-Image.jpg",
    category: "Mobility",
  },

  // Tier 3, Identity, Access & Interaction
  {
    title: "Facial Detection",
    description:
      "Locates and identifies faces under varied lighting, angles, and occlusion for secure access, attendance, and visitor analytics.",
    image: "/applications/Facial-Detection.png",
    category: "Identity & Access",
  },
  {
    title: "Authentication",
    description:
      "Multi-factor visual identity verification combining face, document, and liveness checks for KYC, onboarding, and high-trust workflows.",
    image: "/applications/L2-Authentication-.jpg",
    category: "Identity & Access",
  },
  {
    title: "Gesture Detection",
    description:
      "Reads hand poses and dynamic gestures for touchless control surfaces, sign-language assistance, and immersive interfaces.",
    image: "/applications/L2-Gesture-Detection-Thumbnail-Image-2.jpg",
    category: "Identity & Access",
  },

  // Tier 4, Manufacturing Quality & Inspection
  {
    title: "Defect Detection",
    description:
      "Pinpoints scratches, cracks, dents, and surface anomalies on production lines with sub-millimeter precision, holding tolerance no human eye can match.",
    image: "/applications/Defect-Inspection.png",
    category: "Quality Inspection",
  },
  {
    title: "Foreign Particle Detection",
    description:
      "Identifies stray fibers, glass shards, metal, or contaminants inside packaged products before they ever reach a shelf, critical for pharma and food.",
    image: "/applications/Foreign-Particle-Detection-merge.jpg",
    category: "Quality Inspection",
  },
  {
    title: "Blister Pack Inspection",
    description:
      "Verifies pill count, color, shape, and integrity in pharmaceutical blister packs, eliminating the risk of missing or broken doses leaving the line.",
    image: "/applications/Blister-Quality-Inspection.png",
    category: "Quality Inspection",
  },
  {
    title: "Quality Verification",
    description:
      "Cross-checks finished goods against engineering specs, catching deviations shift after shift without the fatigue that erodes manual inspection.",
    image: "/applications/Quality-Verification.jpg",
    category: "Quality Inspection",
  },
  {
    title: "Dimension Detection",
    description:
      "Measures part length, width, and tolerance optically, replacing manual calipers with continuous, contactless gauging at line speed.",
    image: "/applications/Dimension-Detection.jpg",
    category: "Quality Inspection",
  },
  {
    title: "Label Inspection",
    description:
      "Confirms label placement, print clarity, language, and barcode legibility, stopping mislabeled batches at the source instead of the recall.",
    image: "/applications/Label-inspection-V6.jpg",
    category: "Quality Inspection",
  },
  {
    title: "Seal Inspection",
    description:
      "Verifies that pouch and bottle seals are clean, complete, and free of contamination across high-throughput food and pharma packaging lines.",
    image: "/applications/seal-inspection-feature-image.jpg",
    category: "Quality Inspection",
  },
  {
    title: "Thermal Seal Inspection",
    description:
      "Uses thermal imaging to confirm even heat distribution across heat-sealed packaging, preventing leaks, spoilage, and costly recalls.",
    image: "/applications/Thermal-Seal-Inspection.jpg",
    category: "Quality Inspection",
  },
  {
    title: "Cap Closure Inspection",
    description:
      "Checks every bottle for present, properly seated, and correctly torqued caps as products move through filling and capping stations.",
    image: "/applications/Cap-Closure-feature.jpg",
    category: "Quality Inspection",
  },
  {
    title: "Fill Level Inspection",
    description:
      "Detects under- and over-filled bottles in real time, ensuring only correctly filled units progress to labeling, capping, and distribution.",
    image: "/applications/Fill-level-feature-image-1.jpg",
    category: "Quality Inspection",
  },
  {
    title: "Packet Seal Inspection",
    description:
      "Inspects flexible pouch seals for crimp integrity, foreign matter, and bond strength across snack, sachet, and pharma formats.",
    image: "/applications/Packet-seal-Inspection.png",
    category: "Quality Inspection",
  },
  {
    title: "Packet Anomaly Inspection",
    description:
      "Flags wrinkles, tears, contamination, and deformation across high-speed packet lines so off-spec product never leaves the facility.",
    image: "/applications/Packet-Anomaly-Inspection.jpg",
    category: "Quality Inspection",
  },
  {
    title: "Tamper Detection",
    description:
      "Identifies signs that packaging has been opened, resealed, or compromised somewhere along the supply chain, protecting brand and consumer alike.",
    image: "/applications/Tamper-Detection-Image-02-5.jpg",
    category: "Quality Inspection",
  },

  // Tier 5, Logistics & Counting
  {
    title: "Package Inspection",
    description:
      "Scans cartons for damage, deformation, and labeling errors before they leave the warehouse or hit the last mile of delivery.",
    image: "/applications/package-inspection.jpg",
    category: "Logistics",
  },
  {
    title: "Package Classification",
    description:
      "Sorts mixed parcels by size, type, route, or destination, accelerating fulfilment and eliminating manual triage at induction points.",
    image: "/applications/Package-classification.png",
    category: "Logistics",
  },
  {
    title: "Package Counting",
    description:
      "Continuously tallies packages on conveyors and pallets, replacing error-prone manual counts during inbound and outbound shipping audits.",
    image: "/applications/Package-counting-thumbnew.jpg",
    category: "Logistics",
  },
  {
    title: "Product Classification",
    description:
      "Categorizes SKUs by visual features for inventory accuracy, planogram compliance, and frictionless automated checkout.",
    image: "/applications/Product-Classification.png",
    category: "Logistics",
  },
  {
    title: "Product Counting",
    description:
      "Live counts of units on lines, in totes, or on shelves so production data and stock-on-hand stay reconciled with reality, not paperwork.",
    image: "/applications/Product-Counting-Feature-image.jpg",
    category: "Logistics",
  },

  // Tier 6, Aerial & Field Monitoring
  {
    title: "Drone Surveillance",
    description:
      "Pairs aerial footage with on-board AI for perimeter security, search-and-rescue, and large-area monitoring without the cost of a manned patrol.",
    image: "/applications/Drone-Surveillance.jpg",
    category: "Aerial & Field",
  },
  {
    title: "Drone Monitoring",
    description:
      "Tracks asset condition, vegetation encroachment, and equipment status across remote infrastructure from above on a defined cadence.",
    image: "/applications/Drone-Monitoring-1-1.png",
    category: "Aerial & Field",
  },
  {
    title: "Gauge & Meter Reading",
    description:
      "Reads analog and digital gauges from camera feeds, digitizing legacy field measurements without the cost of retrofitting smart sensors.",
    image: "/applications/Automated-Gauge-and-Meter-Reading.jpg",
    category: "Aerial & Field",
  },
  {
    title: "Safety Signage Detection",
    description:
      "Audits the presence, condition, and visibility of mandated safety signage across sprawling industrial sites, turning compliance into telemetry.",
    image: "/applications/Safety-Signage-Anomaly-Detection.jpg",
    category: "Aerial & Field",
  },

  // Tier 7, Healthcare
  {
    title: "Surgical Instrument Tracking",
    description:
      "Follows tools throughout a procedure to support count verification, workflow analytics, and post-operative review in modern operating theatres.",
    image: "/applications/Surgical-Instrument-Tracking.png",
    category: "Healthcare",
  },
  {
    title: "Posture Detection",
    description:
      "Estimates body keypoints to support physiotherapy progress, ergonomic audits, and athletic performance coaching with measurable feedback.",
    image: "/applications/Posture-Detection.png",
    category: "Healthcare",
  },

  // Tier 8, Foundational Vision Capabilities
  {
    title: "Object Detection",
    description:
      "Locates objects of interest with bounding boxes, the foundational building block beneath every higher-level scene-understanding pipeline.",
    image: "/applications/Object-Detection-1.png",
    category: "Foundational Vision",
  },
  {
    title: "Object Localization",
    description:
      "Pinpoints the precise spatial location of a single subject within a frame for measurement, targeting, and downstream geometric reasoning.",
    image: "/applications/Object-Localization-1.png",
    category: "Foundational Vision",
  },
  {
    title: "Object Classification",
    description:
      "Assigns class labels to detected objects, anchoring downstream decisions in semantic understanding rather than raw pixels.",
    image: "/applications/Object-Classification.png",
    category: "Foundational Vision",
  },
];

const heroPreviewImages = [
  "/applications/Weapon-Detection-Thumbnail-Image.jpg",
  "/applications/Fire-Smoke-Detection_web.jpg",
  "/applications/Drone-Surveillance.jpg",
  "/applications/Defect-Inspection.png",
  "/applications/Automated-License-Plate-Recognition.jpg",
];

export default function VisionBaekPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-60" style={{ background: "var(--gradient-radial)" }} />
        <div className="absolute inset-0 -z-10 grid-bg opacity-20" />

        <div className="container-custom px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-card text-xs font-mono mb-6">
                <Eye className="w-3.5 h-3.5 text-primary" />
                <span className="text-soft">VisionBaek, Computer Vision Suite</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
                Turning <span className="gradient-text">pixels into decisions</span>,
                <br className="hidden md:block" /> across every workflow.
              </h1>

              <p className="text-soft text-lg leading-relaxed max-w-2xl mb-8">
                VisionBaek is MoonBaek's production-grade computer vision platform, a curated
                catalog of vision applications you can deploy on existing camera infrastructure to
                automate inspection, secure operations, and unlock the data already moving past
                your lenses.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  Talk to an engineer <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="#applications" className="btn-secondary">
                  Browse 42 applications
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="grid grid-cols-3 gap-3">
                {heroPreviewImages.slice(0, 3).map((src, i) => (
                  <div
                    key={src}
                    className={`relative overflow-hidden rounded-xl border border-border ${
                      i === 1 ? "aspect-[3/4] -translate-y-4" : "aspect-square"
                    }`}
                  >
                    <img
                      src={src}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover saturate-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 mix-blend-overlay" />
                  </div>
                ))}
                {heroPreviewImages.slice(3, 5).map((src) => (
                  <div
                    key={src}
                    className="relative overflow-hidden rounded-xl border border-border aspect-square col-span-1"
                  >
                    <img
                      src={src}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover saturate-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 mix-blend-overlay" />
                  </div>
                ))}
                <div className="relative overflow-hidden rounded-xl border border-primary/40 aspect-square flex items-center justify-center bg-gradient-to-br from-primary/30 to-accent/30 backdrop-blur">
                  <div className="text-center px-2">
                    <Sparkles className="w-5 h-5 text-primary mx-auto mb-1" />
                    <div className="text-xs font-mono text-soft">+ many more</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats / quick value props */}
      <section className="border-y border-border bg-background/40 backdrop-blur-md">
        <div className="container-custom px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "42", label: "Vision applications" },
            { value: "8", label: "Industry verticals" },
            { value: "<50ms", label: "Edge inference latency" },
            { value: "24/7", label: "Production reliability" },
          ].map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold gradient-text">{s.value}</div>
              <div className="text-xs label-tracking text-dim mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Applications grid */}
      <section id="applications" className="page-section">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <p className="label-tracking text-primary mb-4">Applications</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-5">
              Ordered by where vision AI delivers <span className="gradient-text">the most impact first</span>.
            </h2>
            <p className="text-soft text-lg leading-relaxed">
              We've sequenced our catalog by the operational priority our customers most often
              ask for, life-safety and threat response at the top, followed by mobility, identity,
              manufacturing quality, logistics, and the foundational primitives every advanced
              perception system rests on.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {applications.map((app, i) => (
              <motion.article
                key={app.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 6) * 0.04 }}
                className="glass-card-hover overflow-hidden group flex flex-col"
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

                  {/* priority rank badge */}
                  <div className="absolute top-3 left-3 px-2 py-1 rounded-full text-[10px] font-mono bg-background/70 backdrop-blur border border-primary/30 text-soft">
                    #{String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-medium bg-primary/20 backdrop-blur border border-primary/30 text-foreground">
                    {app.category}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {app.title}
                  </h3>
                  <p className="text-sm text-soft leading-relaxed">{app.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-section pt-0">
        <div className="container-custom">
          <div className="glass-card gradient-border p-10 md:p-14 text-center max-w-4xl mx-auto relative overflow-hidden">
            <div
              className="absolute inset-0 -z-10 opacity-60"
              style={{ background: "var(--gradient-radial)" }}
            />
            <h2 className="text-3xl md:text-5xl font-bold mb-5">
              Have a camera feed and a problem worth solving?
            </h2>
            <p className="text-soft text-lg mb-8 max-w-2xl mx-auto">
              Bring us the use case, we'll bring the model, the pipeline, and the production
              hardening. VisionBaek pilots ship in weeks, not quarters.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Start a VisionBaek pilot <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
