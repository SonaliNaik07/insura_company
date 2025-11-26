interface RichSectionProps {
  title: string
  content: string | string[]
  variant?: "default" | "highlight"
}

export function RichSection({ title, content, variant = "default" }: RichSectionProps) {
  const contentArray = Array.isArray(content) ? content : [content]

  return (
    <section className={`py-12 ${variant === "highlight" ? "bg-muted" : "bg-background"}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground mb-6">{title}</h2>
        <div className="prose prose-lg max-w-none text-muted-foreground">
          {contentArray.map((para, index) => (
            <p key={index} className="mb-4 leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
