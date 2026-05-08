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

export type IndustryApplication = {
  title: string;
  description: string;
  image: string;
};

export type IndustryProductLink = {
  label: string;
  href: string;
  description: string;
};

export type IndustryUseCase = {
  title: string;
  body: string;
};

export type Industry = {
  slug: string;
  icon: LucideIcon;
  name: string;
  tagline: string;
  image: string;
  /** Five short bullets for the overview/cards page. */
  capabilities: string[];
  /** Longer description for the dedicated detail page. */
  description: string;
  /** Curated list of applications relevant to this industry. */
  applications: IndustryApplication[];
  /** Concrete real-world scenarios. */
  useCases: IndustryUseCase[];
  /** Links into related products / demos / resources. */
  productLinks: IndustryProductLink[];
};

export const industries: Industry[] = [
  {
    slug: "manufacturing",
    icon: Factory,
    name: "Manufacturing",
    tagline: "Maximize efficiency and visibility with vision AI",
    image: "/industries/manufacturing.jpeg",
    capabilities: [
      "Vision AI, automate quality inspections and detect imperfections, missing components, and material variations",
      "Workplace safety, alert staff to unsafe equipment, dust build-ups, gas leaks, and people in restricted zones",
      "Packaging & label verification, identify dents, tears, smudged labels, and missing carton items",
      "Predictive ML, forecast equipment failure and surface bottlenecks before they hit throughput",
      "GenAI for ops, root-cause analysis assistants and instant retrieval over manuals, SOPs, and incident logs",
    ],
    description:
      "Manufacturers run on tolerances no human eye can hold across an eight-hour shift. We deploy vision AI on existing line cameras to inspect quality at full speed, watch for unsafe behavior, and feed every observation into the planning systems your operators already use.",
    applications: [
      {
        title: "Defect Detection",
        description:
          "Pinpoints scratches, cracks, dents, and surface anomalies on production lines with sub-millimeter precision.",
        image: "/applications/Defect-Inspection.png",
      },
      {
        title: "Quality Verification",
        description:
          "Cross-checks finished goods against engineering specs, holding tolerance shift after shift without inspector fatigue.",
        image: "/applications/Quality-Verification.jpg",
      },
      {
        title: "Foreign Particle Detection",
        description:
          "Identifies stray fibers, glass shards, metal, or contaminants inside packaged products before they ship.",
        image: "/applications/Foreign-Particle-Detection-merge.jpg",
      },
      {
        title: "Worker Safety Monitoring",
        description:
          "Verifies PPE, hazard-zone breaches, and unsafe postures across factory floors, every shift, every worker.",
        image: "/applications/Worker-Safety-Monitoring.png",
      },
      {
        title: "Label Inspection",
        description:
          "Confirms label placement, print clarity, language, and barcode legibility, stopping mislabeled batches at source.",
        image: "/applications/Label-inspection-V6.jpg",
      },
      {
        title: "Dimension Detection",
        description:
          "Measures part length, width, and tolerances optically, replacing manual calipers with continuous gauging.",
        image: "/applications/Dimension-Detection.jpg",
      },
    ],
    useCases: [
      {
        title: "Zero-defect packaging line",
        body: "A single VisionBaek pipeline inspects every unit for fill, seal, label, and cap, diverting non-conforming product before it leaves the bay.",
      },
      {
        title: "Floor-wide PPE compliance",
        body: "Existing CCTV becomes a real-time PPE auditor, surfacing only the moments that need supervisor attention rather than dumping hours of footage.",
      },
      {
        title: "Predictive throughput planning",
        body: "Vision-derived cycle-time data feeds an ML forecast that flags equipment slowdowns 48 hours before they cap output.",
      },
    ],
    productLinks: [
      {
        label: "Browse VisionBaek catalog",
        href: "/applications",
        description: "All 42 vision applications, sequenced by impact.",
      },
      {
        label: "Live VDE demos",
        href: "/demos#vde",
        description: "See detection, tracking, and segmentation running on real footage.",
      },
    ],
  },
  {
    slug: "healthcare",
    icon: HeartPulse,
    name: "Healthcare",
    tagline: "Streamline care and boost patient outcomes",
    image: "/industries/healthcare.jpeg",
    capabilities: [
      "Vision AI, surgical assistance, PPE monitoring, and diagnostic-imaging triage",
      "Pill recognition, identify medication and dosage from a single image",
      "Clinical screening models, flag high-priority cases for clinician review",
      "GenAI clinical co-pilots, draft notes, summarise charts, and answer questions over patient history",
      "RAG over medical literature, bring evidence-based answers into the point of care",
    ],
    description:
      "Healthcare AI has to be earned, not deployed. Every model we ship into clinical environments goes through privacy review, bias audit, and shadow-mode evaluation before it ever touches a real workflow. SynthBaek lets us train robust models even when patient data is scarce or sensitive.",
    applications: [
      {
        title: "Surgical Instrument Tracking",
        description:
          "Follows tools throughout a procedure to support count verification, workflow analytics, and post-operative review.",
        image: "/applications/Surgical-Instrument-Tracking.png",
      },
      {
        title: "Posture Detection",
        description:
          "Estimates body keypoints to support physiotherapy, ergonomic audits, and athletic recovery monitoring.",
        image: "/applications/Posture-Detection.png",
      },
      {
        title: "Fall Detection",
        description:
          "Pose-based detection of falls in real time, designed for elderly-care facilities and rapid response.",
        image: "/applications/Worker-Safety-Monitoring.png",
      },
      {
        title: "SynthBaek, Brain MRI",
        description:
          "Diffusion-generated brain MRI slices to augment scarce neuro-imaging datasets and balance pathology classes.",
        image: "/demos/synthbaek/brain/brain-01.jpg",
      },
      {
        title: "SynthBaek, Aortic CT",
        description:
          "Cardiovascular CT angiography frames for training detection models with patient privacy preserved.",
        image: "/demos/synthbaek/aortic/aortic-01.jpg",
      },
      {
        title: "SynthBaek, Dermatology",
        description:
          "Diverse synthetic dermatology samples spanning comedones, pustules, and nodules for balanced model training.",
        image: "/demos/synthbaek/acne/acne-01.png",
      },
    ],
    useCases: [
      {
        title: "Privacy-preserving model training",
        body: "When real patient imagery cannot leave the hospital, SynthBaek generates the dataset diversity needed to train robust models off-site.",
      },
      {
        title: "Operating-theatre analytics",
        body: "Surgical instrument tracking quantifies workflow, supports count verification, and feeds objective post-op review.",
      },
      {
        title: "Ambient elderly-care safety",
        body: "Pose-based fall detection delivers immediate alerts to caregivers without dedicated wearables on residents.",
      },
    ],
    productLinks: [
      {
        label: "SynthBaek demos",
        href: "/demos#synthbaek",
        description: "Synthetic medical imagery on demand, brain, aortic, dermatology, veterinary.",
      },
      {
        label: "VisionBaek catalog",
        href: "/applications",
        description: "Posture, surgical tracking, fall detection, and more.",
      },
    ],
  },
  {
    slug: "government",
    icon: ShieldCheck,
    name: "Government",
    tagline: "Improve public-sector operations with applied AI",
    image: "/industries/government.jpeg",
    capabilities: [
      "Document authentication and counterfeit detection across forms and IDs",
      "Identity verification, match faces, signatures, and biometric data at scale",
      "LLM-powered document analysis, extract structured data from forms, body cameras, and surveillance",
      "Citizen-service GenAI assistants, multilingual, grounded in policy and procedure",
      "Agentic workflows for case triage, routing, and signature compliance",
    ],
    description:
      "Public-sector workloads run on documents, identities, and accountability. We build vision and language systems that automate the mechanical parts, verification, extraction, triage, while keeping a clear audit trail and a human in the loop wherever judgment matters.",
    applications: [
      {
        title: "Document Authentication",
        description:
          "Multi-factor visual identity verification combining face, document, and liveness checks for KYC and onboarding.",
        image: "/applications/L2-Authentication-.jpg",
      },
      {
        title: "Tamper Detection",
        description:
          "Identifies signs that documents or packaging have been altered, resealed, or compromised along the chain.",
        image: "/applications/Tamper-Detection-Image-02-5.jpg",
      },
      {
        title: "Facial Verification",
        description:
          "Locates and verifies faces under varied lighting, angles, and occlusion for secure access and visitor analytics.",
        image: "/applications/Facial-Detection.png",
      },
      {
        title: "License Plate Recognition",
        description:
          "Reads plates across angles, weather, and motion blur for tolling, enforcement, and access control.",
        image: "/applications/Automated-License-Plate-Recognition.jpg",
      },
      {
        title: "Suspicious Activity",
        description:
          "Flags loitering, fights, theft, and behavioral anomalies, surfacing only moments needing human review.",
        image: "/applications/Suspicious-Activity.png",
      },
      {
        title: "Restricted Zone Monitoring",
        description:
          "Defines virtual exclusion zones and triggers alerts the moment a person, animal, or object trespasses.",
        image: "/applications/Red-Zone-Monitoring-1.jpg",
      },
    ],
    useCases: [
      {
        title: "End-to-end identity verification",
        body: "Document, face, and liveness checks chained into a single pipeline that issues a single trust signal to downstream systems.",
      },
      {
        title: "Public-space safety analytics",
        body: "Existing CCTV becomes a behavioral anomaly detector, measured suppression of alerts so operators trust the signals they get.",
      },
      {
        title: "LLM-assisted case triage",
        body: "Agentic workflows route incoming cases by content and priority, dramatically reducing time-to-action on urgent items.",
      },
    ],
    productLinks: [
      {
        label: "VisionBaek catalog",
        href: "/applications",
        description: "Identity, tamper, and surveillance applications in one place.",
      },
      {
        label: "Adaptive Re-ID demo",
        href: "/demos#arit",
        description: "Identity-preserving tracking across cameras and occlusion.",
      },
    ],
  },
  {
    slug: "transportation",
    icon: Truck,
    name: "Transportation",
    tagline: "Smarter mobility, end-to-end",
    image: "/industries/transportation.jpeg",
    capabilities: [
      "Real-time traffic intelligence from city-scale video",
      "Road & infrastructure monitoring, alert maintenance teams to damage early",
      "Predictive demand & ETA models for fleets, transit, and last-mile delivery",
      "Agentic incident response, agents that triage, dispatch, and notify the right teams",
      "GenAI ops co-pilots over schedules, manifests, and compliance documentation",
    ],
    description:
      "Roads, fleets, and depots already have cameras, what they lack is structured insight. We turn raw video into traffic counts, plate reads, route patterns, and incident events that flow into the dispatch and planning systems mobility operators actually use.",
    applications: [
      {
        title: "License Plate Recognition",
        description:
          "Reads plates across angles, weather, and motion blur for tolling, parking, and access control with database lookup.",
        image: "/applications/Automated-License-Plate-Recognition.jpg",
      },
      {
        title: "Traffic Counting",
        description:
          "Counts vehicles by type and direction to inform signal timing, capacity planning, and infrastructure investment.",
        image: "/applications/Traffic-Counting-Thumbnail-image.jpg",
      },
      {
        title: "Vehicle Mapping & Tracking",
        description:
          "Follows vehicles across multiple cameras to reconstruct routes, dwell time, and movement patterns at city scale.",
        image: "/applications/Vehicle-Mapping-Tracking-Cover-Image.jpg",
      },
      {
        title: "Smart Parking",
        description:
          "Maps free and occupied bays in real time, guiding drivers and giving operators live occupancy analytics.",
        image: "/applications/Smart-Parking-Thumbnail-Image.jpg",
      },
      {
        title: "Over-Speeding Detection",
        description:
          "Estimates vehicle velocity from a single calibrated camera, flagging violations without dedicated radar.",
        image: "/applications/Over-Speeding-Detection-1.jpg",
      },
      {
        title: "Driver Distraction Detection",
        description:
          "Tracks eye gaze, head pose, and hand position to flag drowsy or distracted drivers before lapses become crashes.",
        image: "/applications/Driver-Distraction-Detection.jpg",
      },
    ],
    useCases: [
      {
        title: "City-scale traffic intelligence",
        body: "Hundreds of road cameras unified into a single dashboard of counts, classifications, and anomaly events.",
      },
      {
        title: "Multi-camera vehicle re-ID",
        body: "Vehicles tracked across non-overlapping cameras using ARIT, reconstructing complete routes for incident review.",
      },
      {
        title: "In-cab driver monitoring",
        body: "Edge inference on commercial fleets flags drowsy and distracted driving before incidents, lowering insurance and risk.",
      },
    ],
    productLinks: [
      {
        label: "ARIT, multi-camera tracking",
        href: "/demos#arit",
        description: "Identity-preserving tracking across occlusion and camera switches.",
      },
      {
        label: "VisionBaek catalog",
        href: "/applications",
        description: "All mobility applications in one place.",
      },
    ],
  },
  {
    slug: "energy",
    icon: Zap,
    name: "Energy & Utilities",
    tagline: "Reduce unscheduled downtime across the asset fleet",
    image: "/industries/energy.jpeg",
    capabilities: [
      "Gauge reading, thermal anomaly detection, and leak alerts via vision AI",
      "Predictive maintenance models, turnaround failure prediction into scheduled work",
      "Drone & robot data pipelines for inspections in remote and hazardous sites",
      "GenAI knowledge agents over P&IDs, technical manuals, and inspection reports",
      "LLM-driven summarisation of field reports for fast operational decisions",
    ],
    description:
      "Energy assets sit far away, run hot, and break expensively. We bring vision intelligence to the gauges, drones, and CCTV that already inspect them, turning sporadic, manual checks into continuous, structured telemetry.",
    applications: [
      {
        title: "Gauge & Meter Reading",
        description:
          "Reads analog and digital gauges from camera feeds, digitizing field measurements without retrofit sensors.",
        image: "/applications/Automated-Gauge-and-Meter-Reading.jpg",
      },
      {
        title: "Drone Monitoring",
        description:
          "Tracks asset condition, vegetation encroachment, and equipment status across remote infrastructure from above.",
        image: "/applications/Drone-Monitoring-1-1.png",
      },
      {
        title: "Worker Safety Monitoring",
        description:
          "Verifies PPE compliance, hazard-zone breaches, and unsafe postures across field operations.",
        image: "/applications/Worker-Safety-Monitoring.png",
      },
      {
        title: "Tamper Detection",
        description:
          "Identifies signs that field equipment has been altered or compromised along the asset chain.",
        image: "/applications/Tamper-Detection-Image-02-5.jpg",
      },
      {
        title: "Fire & Smoke Detection",
        description:
          "Catches the earliest visual signatures of flame and smoke in places where traditional sensors lag.",
        image: "/applications/Fire-Smoke-Detection_web.jpg",
      },
      {
        title: "Restricted Zone Monitoring",
        description:
          "Virtual geofences around heavy machinery, instant alerts when a person enters a danger envelope.",
        image: "/applications/Red-Zone-Monitoring-1.jpg",
      },
    ],
    useCases: [
      {
        title: "Lights-out gauge digitization",
        body: "Hundreds of legacy analog meters become continuous digital telemetry, no SCADA retrofit, just camera feeds.",
      },
      {
        title: "Drone-fleet inspection automation",
        body: "Existing inspection drones get vision AI on the back end, turning hours of footage into structured asset-condition reports.",
      },
      {
        title: "Hazard-zone enforcement",
        body: "Real-time alerts when personnel breach exclusion zones, measurable reduction in near-miss incidents.",
      },
    ],
    productLinks: [
      {
        label: "VisionBaek catalog",
        href: "/applications",
        description: "Gauge reading, monitoring, and safety applications.",
      },
      {
        label: "VDE, vision runtime",
        href: "/demos#vde",
        description: "The unified detection / tracking / segmentation engine behind these tools.",
      },
    ],
  },
  {
    slug: "agriculture",
    icon: Sprout,
    name: "Agriculture",
    tagline: "Increase crop yields and protect your profits",
    image: "/industries/agriculture.jpeg",
    capabilities: [
      "Produce grading, sorting, and size/colour analysis at line speed",
      "Plant, weed, and disease identification across drone, satellite, and in-field imagery",
      "Yield forecasting and demand-planning ML rooted in field-level data",
      "GenAI advisory chatbots for growers, localised, multilingual, and crop-specific",
      "Agentic input optimisation, recommend water, fertiliser, and treatment plans automatically",
    ],
    description:
      "Modern agriculture is a multi-scale data problem, from satellite to drone to packing-line camera. We build vision and ML pipelines that span those scales, turning imagery into yield models, treatment recommendations, and grading decisions that hit the operator's existing UI.",
    applications: [
      {
        title: "Drone Monitoring",
        description:
          "Tracks crop health, vegetation density, and field conditions across remote acreage from above.",
        image: "/applications/Drone-Monitoring-1-1.png",
      },
      {
        title: "Object Detection",
        description:
          "Locates objects of interest with bounding boxes, the building block beneath crop counting and yield estimation.",
        image: "/applications/Object-Detection-1.png",
      },
      {
        title: "Foreign Particle Detection",
        description:
          "Identifies stray contaminants in packaged produce before it ships, critical for export-grade output.",
        image: "/applications/Foreign-Particle-Detection-merge.jpg",
      },
      {
        title: "Quality Verification",
        description:
          "Cross-checks finished produce against grade specs, catching deviations no human eye can hold across a shift.",
        image: "/applications/Quality-Verification.jpg",
      },
      {
        title: "Product Classification",
        description:
          "Categorizes produce SKUs by visual features for inventory, planogram compliance, and automated sorting.",
        image: "/applications/Product-Classification.png",
      },
      {
        title: "Drone Surveillance",
        description:
          "Pairs aerial footage with on-board AI for perimeter security, search-and-rescue, and large-area monitoring.",
        image: "/applications/Drone-Surveillance.jpg",
      },
    ],
    useCases: [
      {
        title: "Field-to-pack yield tracking",
        body: "A single data backbone connects drone-derived crop estimates with packing-line counts, closing the loop on yield prediction.",
      },
      {
        title: "Automated produce grading",
        body: "Vision AI grades each unit by size, shape, and color at line speed, replacing manual inspection in mid-volume packhouses.",
      },
      {
        title: "Disease early-warning",
        body: "Drone imagery feeds a model that flags outbreaks before they spread, recommending treatment plans tailored to the variety.",
      },
    ],
    productLinks: [
      {
        label: "VisionBaek catalog",
        href: "/applications",
        description: "Crop, drone, and quality applications.",
      },
      {
        label: "VDE in motion",
        href: "/demos#vde",
        description: "Detection and segmentation primitives behind agri pipelines.",
      },
    ],
  },
  {
    slug: "food-beverage",
    icon: Utensils,
    name: "Food & Beverage",
    tagline: "Streamline production from raw material to shelf",
    image: "/industries/food.jpeg",
    capabilities: [
      "Detect packaging issues, seal integrity, and fill-level deviations with vision AI",
      "Analyse product quality, ingredient size, shape, and colour",
      "Label compliance, confirm expiry, nutrition, and placement automatically",
      "Demand-forecasting ML to reduce waste and align production to actual demand",
      "GenAI assistants over recipe specs, allergen rules, and food-safety regulations",
    ],
    description:
      "Food and beverage lines move fast, run lean, and live or die by recall risk. We bring vision AI directly to the line, fill, seal, label, foreign matter, dimensional check, with throughput that matches modern packing speeds and audit trails that satisfy regulators.",
    applications: [
      {
        title: "Fill Level Inspection",
        description:
          "Detects under- and over-filled bottles in real time, only correctly filled units progress to labeling.",
        image: "/applications/Fill-level-feature-image-1.jpg",
      },
      {
        title: "Seal Inspection",
        description:
          "Verifies pouch and bottle seals are clean, complete, and free of contamination at high throughput.",
        image: "/applications/seal-inspection-feature-image.jpg",
      },
      {
        title: "Label Inspection",
        description:
          "Confirms label placement, print clarity, language, and barcode legibility on every unit.",
        image: "/applications/Label-inspection-V6.jpg",
      },
      {
        title: "Foreign Particle Detection",
        description:
          "Identifies stray fibers, glass shards, metal, or contaminants before consumer-facing release.",
        image: "/applications/Foreign-Particle-Detection-merge.jpg",
      },
      {
        title: "Cap Closure Inspection",
        description:
          "Checks every bottle for present, properly seated, correctly torqued caps as products move down the line.",
        image: "/applications/Cap-Closure-feature.jpg",
      },
      {
        title: "Packet Anomaly Inspection",
        description:
          "Flags wrinkles, tears, contamination, and deformation across high-speed packet lines.",
        image: "/applications/Packet-Anomaly-Inspection.jpg",
      },
    ],
    useCases: [
      {
        title: "End-to-end packaging integrity",
        body: "A single VisionBaek pipeline inspects fill, cap, label, and seal on every unit, diverting any non-conforming product before it leaves the bay.",
      },
      {
        title: "Allergen-aware label compliance",
        body: "Vision + LLM together verify printed allergen statements match the spec for the SKU running on the line.",
      },
      {
        title: "Demand-driven production planning",
        body: "ML forecasts demand at SKU + region granularity, aligning batch sizes to actual sell-through and reducing waste.",
      },
    ],
    productLinks: [
      {
        label: "VisionBaek catalog",
        href: "/applications",
        description: "Fill, seal, label, foreign-particle and beyond.",
      },
      {
        label: "Live inspection demos",
        href: "/demos",
        description: "VDE, ARIT, and the surveillance suite running on real footage.",
      },
    ],
  },
  {
    slug: "security",
    icon: Eye,
    name: "Security & Surveillance",
    tagline: "Automate threat and risk detection at scale",
    image: "/industries/security.jpeg",
    capabilities: [
      "Theft and loss prevention, package theft, abandoned luggage, slip-and-fall hazards",
      "License plate reading and re-identification across multiple cameras",
      "Intelligent enforcement and access control across restricted zones",
      "Agentic alerting, agents that watch, decide, and escalate only what matters",
      "LLM incident summaries, turn hours of footage and logs into a single clear report",
    ],
    description:
      "Most security ops drown in feeds, not signal. We build vision systems that filter aggressively, only the events worth a human's attention surface, and then summarize the resulting incident into a report ops teams can actually act on.",
    applications: [
      {
        title: "Weapon Detection",
        description:
          "Spots firearms and other weapons in live CCTV, turning passive cameras into active first-line defense.",
        image: "/applications/Weapon-Detection-Thumbnail-Image.jpg",
      },
      {
        title: "Suspicious Activity",
        description:
          "Flags loitering, fights, theft and behavioral anomalies, surfacing only moments needing review.",
        image: "/applications/Suspicious-Activity.png",
      },
      {
        title: "Red Zone Monitoring",
        description:
          "Virtual exclusion zones around heavy machinery and restricted areas, instant alerts on intrusion.",
        image: "/applications/Red-Zone-Monitoring-1.jpg",
      },
      {
        title: "Fire & Smoke Detection",
        description:
          "Earliest visual signatures of flame and smoke, cuts response time down to seconds.",
        image: "/applications/Fire-Smoke-Detection_web.jpg",
      },
      {
        title: "Facial Detection",
        description:
          "Locates and identifies faces under varied lighting and pose for secure access and analytics.",
        image: "/applications/Facial-Detection.png",
      },
      {
        title: "Tamper Detection",
        description:
          "Identifies signs that packaging or assets have been opened, resealed, or compromised.",
        image: "/applications/Tamper-Detection-Image-02-5.jpg",
      },
    ],
    useCases: [
      {
        title: "Operator-grade alert filtering",
        body: "We tune detectors specifically against your environment so the alerts that fire are the ones worth acting on, not the long tail of noise.",
      },
      {
        title: "Cross-camera tracking",
        body: "ARIT keeps subject identity intact across non-overlapping cameras, reconstructing complete movement reports for investigators.",
      },
      {
        title: "Automated incident reports",
        body: "When an event triggers, an LLM turns the surrounding footage and metadata into a single timeline-ordered report.",
      },
    ],
    productLinks: [
      {
        label: "Domain demos",
        href: "/demos#samples",
        description: "Restricted area, occupancy, fall, and gait, all running on standard CCTV input.",
      },
      {
        label: "ARIT, re-ID demo",
        href: "/demos#arit",
        description: "Identity-preserving tracking across occlusion and camera switches.",
      },
    ],
  },
  {
    slug: "aerial-satellite",
    icon: Plane,
    name: "Aerial & Satellite",
    tagline: "Earth-scale insights from drones and satellites",
    image: "/industries/aerial.jpeg",
    capabilities: [
      "Object detection and tracking across vast geographies and imagery archives",
      "Safety and pilot support, vision-based alerts for crews",
      "Deep-learning models for change detection, segmentation, and infrastructure mapping",
      "Agentic mission planning over weather, terrain, and asset priorities",
      "GenAI briefings, turn raw imagery into shareable, narrative intelligence",
    ],
    description:
      "Aerial and satellite imagery is voluminous, sparse in labels, and mission-critical. We design models tuned to that regime, strong detection on tiny targets, robust change detection across temporal stacks, and tooling that lets analysts find what matters in archives no human can scan.",
    applications: [
      {
        title: "Drone Surveillance",
        description:
          "Pairs aerial footage with on-board AI for perimeter security, search-and-rescue, and large-area monitoring.",
        image: "/applications/Drone-Surveillance.jpg",
      },
      {
        title: "Drone Monitoring",
        description:
          "Tracks asset condition, vegetation encroachment, and equipment status across remote infrastructure.",
        image: "/applications/Drone-Monitoring-1-1.png",
      },
      {
        title: "Object Detection",
        description:
          "Locates objects of interest with bounding boxes, the foundation under change-detection and monitoring pipelines.",
        image: "/applications/Object-Detection-1.png",
      },
      {
        title: "Vehicle Mapping & Tracking",
        description:
          "Follows vehicles across multiple frames and cameras to reconstruct routes and movement patterns at scale.",
        image: "/applications/Vehicle-Mapping-Tracking-Cover-Image.jpg",
      },
      {
        title: "Safety Signage Detection",
        description:
          "Audits the presence, condition, and visibility of safety signage across sprawling industrial sites.",
        image: "/applications/Safety-Signage-Anomaly-Detection.jpg",
      },
      {
        title: "Object Localization",
        description:
          "Pinpoints the precise spatial location of a single subject within a frame for measurement and targeting.",
        image: "/applications/Object-Localization-1.png",
      },
    ],
    useCases: [
      {
        title: "Archival change detection",
        body: "Years of satellite imagery stack into a single change layer that highlights infrastructure, encroachment, and disturbance over time.",
      },
      {
        title: "Drone mission analytics",
        body: "Operators upload mission footage and get back structured asset-condition reports, minutes, not days.",
      },
      {
        title: "Tiny-target detection",
        body: "Custom architectures tuned for the few-pixel targets that dominate satellite work, vehicles, vessels, wildlife.",
      },
    ],
    productLinks: [
      {
        label: "VisionBaek catalog",
        href: "/applications",
        description: "Drone and aerial applications.",
      },
      {
        label: "VDE in motion",
        href: "/demos#vde",
        description: "Detection, tracking, segmentation, and pose primitives.",
      },
    ],
  },
];

export const industryBySlug = (slug: string): Industry | undefined =>
  industries.find((i) => i.slug === slug);
