interface PageHeroProps {
  breadcrumb: string
  title: string
  description?: string
}

export function PageHero({ breadcrumb, title, description }: PageHeroProps) {
  return (
    <section className="relative bg-secondary overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="/happy-family-father-mother-daughter-smiling-togeth.jpg" alt="Hero Background" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 text-white/80 mb-4">
            <span>insura.ae</span>
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span>{breadcrumb}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          {description && <p className="text-white/80 text-lg">{description}</p>}
        </div>
      </div>
    </section>
  )
}
