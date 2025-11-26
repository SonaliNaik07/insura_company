import { Check } from "lucide-react"

interface CoverageListProps {
  title: string
  items: string[]
  variant?: "check" | "bullet"
}

export function CoverageList({ title, items, variant = "check" }: CoverageListProps) {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground mb-6">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              {variant === "check" ? (
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
              ) : (
                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
              )}
              <span className="text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
