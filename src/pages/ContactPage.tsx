import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Send,
  Linkedin,
  Github,
  Twitter,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "94719513803";
const WHATSAPP_PREFILL =
  "Hi MoonBaek team, I'd like to chat about a computer-vision project.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_PREFILL,
)}`;
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

/* ----------------------------- Schema ----------------------------- */

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Enter a valid email address."),
  company: z.string().optional(),
  topic: z.string().min(1, "Pick what brings you in."),
  message: z.string().min(20, "Tell us a bit more, at least 20 characters."),
});

type ContactValues = z.infer<typeof contactSchema>;

const topics = [
  { value: "vision-pilot", label: "VisionBaek pilot or proof-of-concept" },
  { value: "synthbaek", label: "SynthBaek, synthetic data generation" },
  { value: "services", label: "Computer Vision-as-a-Service engagement" },
  { value: "demo-request", label: "Custom demo on my footage" },
  { value: "partnership", label: "Partnership or research collaboration" },
  { value: "other", label: "Something else" },
];

/* ----------------------------- Page ----------------------------- */

export default function ContactPage() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      topic: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactValues) => {
    // No backend wired up, simulate a submit and offer a mailto fallback.
    await new Promise((r) => setTimeout(r, 600));

    const subject = encodeURIComponent(
      `[${topics.find((t) => t.value === values.topic)?.label ?? "Inquiry"}] from ${values.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${values.name}\nCompany: ${values.company || "N/A"}\nEmail: ${values.email}\n\n${values.message}`,
    );
    const mailto = `mailto:hello@moonbaek.com?subject=${subject}&body=${body}`;

    toast({
      title: "Got it, message queued.",
      description: "We'll be in touch within two business days.",
    });

    setSubmitted(true);
    // Open user's mail client as a fallback so the message actually reaches us
    window.location.href = mailto;
    form.reset();
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-10 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-70" style={{ background: "var(--gradient-radial)" }} />
        <div className="absolute inset-0 -z-10 grid-bg opacity-20" />
        <div className="container-custom px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-card text-xs font-mono mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-soft">We reply within two business days</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
              Let's build <span className="gradient-text">something useful</span>.
            </h1>
            <p className="text-soft text-lg leading-relaxed max-w-2xl">
              Bring us a problem worth solving, a stuck pilot, a gnarly inspection
              workflow, an idea that needs a working prototype. We'll come back with a
              direct read on whether and how we can help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + info */}
      <section className="px-6 pb-14 md:pb-16">
        <div className="container-custom grid lg:grid-cols-12 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8"
          >
            <div className="glass-card p-6 md:p-10 relative overflow-hidden">
              <div
                className="absolute inset-0 -z-10 opacity-40"
                style={{ background: "var(--gradient-radial)" }}
              />
              <p className="label-tracking text-primary mb-3">Tell us about it</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                A short brief is plenty.
              </h2>

              {submitted ? (
                <SubmittedState onReset={() => setSubmitted(false)} />
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="label-tracking text-soft">Your name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Jane Doe"
                                className="h-11 bg-secondary/30 border-border focus-visible:ring-primary/40"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="label-tracking text-soft">Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="jane@company.com"
                                className="h-11 bg-secondary/30 border-border focus-visible:ring-primary/40"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="label-tracking text-soft">Company (optional)</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Acme Robotics"
                                className="h-11 bg-secondary/30 border-border focus-visible:ring-primary/40"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="topic"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="label-tracking text-soft">What brings you in?</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-11 bg-secondary/30 border-border focus:ring-primary/40">
                                  <SelectValue placeholder="Pick a topic" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {topics.map((t) => (
                                  <SelectItem key={t.value} value={t.value}>
                                    {t.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="label-tracking text-soft">Brief us</FormLabel>
                          <FormControl>
                            <Textarea
                              rows={6}
                              placeholder="What problem are you trying to solve, what data or footage you have, and where you'd like to be in 90 days."
                              className="bg-secondary/30 border-border focus-visible:ring-primary/40 resize-y"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <button
                        type="submit"
                        disabled={form.formState.isSubmitting}
                        className="btn-primary inline-flex items-center gap-2 disabled:opacity-60"
                      >
                        {form.formState.isSubmitting ? (
                          <>Sending…</>
                        ) : (
                          <>
                            Send message <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                      <span className="text-xs text-dim font-mono">
                        We'll never share your details.
                      </span>
                    </div>
                  </form>
                </Form>
              )}
            </div>
          </motion.div>

          {/* Info column */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 space-y-5"
          >
            <InfoTile
              icon={Mail}
              eyebrow="Email"
              title={<a href="mailto:hello@moonbaek.com" className="hover:text-primary transition-colors">hello@moonbaek.com</a>}
              body="The fastest path. Briefs, footage links, NDAs all welcome."
            />
            <InfoTile
              icon={Clock}
              eyebrow="Response time"
              title="Within 2 business days"
              body="Usually faster. We read every inquiry, not a sales-bot funnel."
            />
            <InfoTile
              icon={MapPin}
              eyebrow="Working hours"
              title="Mon–Fri · 09:00–18:00 IST"
              body="We work asynchronously across time zones, drop a note any time."
            />

            <div className="glass-card p-5">
              <p className="label-tracking text-soft mb-3">Find us</p>
              <div className="flex items-center gap-3">
                {[
                  { icon: Linkedin, label: "LinkedIn", href: "#" },
                  { icon: Twitter, label: "Twitter / X", href: "#" },
                  { icon: Github, label: "GitHub", href: "#" },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-full glass-card-hover flex items-center justify-center text-soft"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* What happens next */}
      <section className="px-6 pb-14 md:pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mb-6">
            <p className="label-tracking text-primary mb-3">What happens next</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
              From your brief to a <span className="gradient-text">working answer</span>.
            </h2>
            <p className="text-soft">
              No long sales loops. Three short steps and you'll know whether we're a fit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card-hover p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-sm text-primary">0{i + 1}</span>
                  <span className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-soft text-sm leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppFab />
    </>
  );
}

/* ----------------------------- Pieces ----------------------------- */

function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp, let's build something useful"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 group inline-flex items-center gap-3 pl-2 pr-5 py-2 rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] hover:bg-[#1ebe5d] hover:scale-[1.03] transition-all duration-200"
    >
      <span className="relative flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/15">
        <span className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
        <FaWhatsapp className="relative w-6 h-6 md:w-7 md:h-7" />
      </span>
      <span className="text-sm md:text-base font-semibold leading-tight">
        Let's build
        <span className="block text-[11px] md:text-xs font-normal opacity-90">
          something useful
        </span>
      </span>
    </a>
  );
}

function InfoTile({
  icon: Icon,
  eyebrow,
  title,
  body,
}: {
  icon: LucideIcon;
  eyebrow: string;
  title: React.ReactNode;
  body: string;
}) {
  return (
    <div className="glass-card p-5">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 flex items-center justify-center shrink-0">
          <Icon className="w-4 h-4 text-primary" />
        </div>
        <div className="flex-1">
          <p className="label-tracking text-soft mb-1">{eyebrow}</p>
          <p className="text-base font-semibold mb-1">{title}</p>
          <p className="text-soft text-sm leading-relaxed">{body}</p>
        </div>
      </div>
    </div>
  );
}

function SubmittedState({ onReset }: { onReset: () => void }) {
  return (
    <div className="text-center py-6">
      <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border border-primary/40 flex items-center justify-center mb-5">
        <CheckCircle2 className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">Message queued.</h3>
      <p className="text-soft mb-6 max-w-md mx-auto">
        Your mail client should have opened with a pre-filled draft. Hit send and we'll
        take it from there.
      </p>
      <button onClick={onReset} className="btn-secondary inline-flex items-center gap-2">
        Send another <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

const steps = [
  {
    title: "We read your brief",
    body: "An engineer (not a BDR) reviews your message and the footage or data you shared.",
  },
  {
    title: "Short scoping call",
    body: "30 minutes to confirm fit, agree on success metrics, and outline a pilot shape.",
  },
  {
    title: "Working prototype",
    body: "Within 2–4 weeks we ship a runnable demo on your data so you can decide for real.",
  },
];
