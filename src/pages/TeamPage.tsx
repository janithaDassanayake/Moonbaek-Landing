import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

type Member = {
  name: string;
  role: string;
  skills: string[];
  photo: string;
  linkedin: string;
};

const team: Member[] = [
  {
    name: "Janitha Prathapa",
    role: "Co-Founder, CEO & Vision AI Specialist",
    skills: ["Artificial Intelligence", "Computer Vision", "ML & Deep Learning", "VLMs"],
    photo: "/team/prathapa.jpeg",
    linkedin: "https://www.linkedin.com/in/janitha-prathapa-0b147b1b0/",
  },
  {
    name: "Dinal Fernando",
    role: "Co-founder, CTO & AI Architect",
    skills: ["Backend Engineering", "DevOps & Cloud", "GenAI Integrations", "Frontend Engineering"],
    photo: "/team/dinal.jpeg",
    linkedin: "https://www.linkedin.com/in/dinal-r-fernando/",
  },
  {
    name: "Thanveer Ahamed",
    role: "Co-founder, COO & Gen AI Specialist",
    skills: ["Generative AI", "GenAI App Development", "LLM Integration"],
    photo: "/team/thanveer.jpeg",
    linkedin: "https://www.linkedin.com/in/ahamed-thanveer/",
  },
];

export default function TeamPage() {
  return (
    <section className="page-section pt-32">
      <div className="container-custom">
        <div className="max-w-2xl mb-14">
          <p className="label-tracking text-primary mb-4">Team</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            The minds behind <span className="gradient-text">MoonBaek</span>.
          </h1>
          <p className="text-soft text-lg">
            Seasoned professionals with 7+ years of experience driving innovation and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card-hover p-6 group flex flex-col"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-xl mb-5 border border-border">
                <img
                  src={m.photo}
                  alt={m.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              <h2 className="text-xl font-semibold">{m.name}</h2>
              <p className="text-sm text-primary font-medium mb-4">{m.role}</p>

              <ul className="flex flex-wrap gap-2 mb-5">
                {m.skills.map((s) => (
                  <li
                    key={s}
                    className="px-2.5 py-1 text-xs rounded-md bg-secondary/40 border border-border text-soft"
                  >
                    {s}
                  </li>
                ))}
              </ul>

              <a
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${m.name} on LinkedIn`}
                className="mt-auto inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
