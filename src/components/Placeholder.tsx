interface PlaceholderProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function Placeholder({ eyebrow, title, description }: PlaceholderProps) {
  return (
    <section className="page-section pt-32">
      <div className="container-custom max-w-3xl">
        <p className="label-tracking text-primary mb-4">{eyebrow}</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">{title}</h1>
        <p className="text-soft text-lg leading-relaxed">{description}</p>
        <div className="mt-12 glass-card p-8 font-mono text-sm text-dim">
          <span className="text-primary">$</span> moonbaek build {eyebrow.toLowerCase()}
          <br />
          <span className="text-soft">Coming next: dynamic content powered by Lovable Cloud.</span>
        </div>
      </div>
    </section>
  );
}
