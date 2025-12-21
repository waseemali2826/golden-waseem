interface Props { title: string; description?: string }
export default function PagePlaceholder({ title, description }: Props) {
  return (
    <section className="container mx-auto py-24">
      <div className="rounded-2xl border border-border bg-card/60 p-10 shadow">
        <h1 className="text-3xl font-serif text-primary">{title}</h1>
        {description ? (
          <p className="mt-3 text-muted-foreground max-w-2xl">{description}</p>
        ) : null}
        <p className="mt-6 text-sm text-muted-foreground">
          This page is a placeholder. Ask to fill it with custom content when ready.
        </p>
      </div>
    </section>
  );
}
