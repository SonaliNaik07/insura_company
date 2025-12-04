interface PageHeroProps {
  breadcrumb: string;
  title: string;
  description?: string;
  image?: string; // optional image for different pages
}

export function PageHero({ breadcrumb, title, description, image }: PageHeroProps) {
  const heroImage = image ?? "/business.png"; // default image if none passed

  return (
<<<<<<< Updated upstream
    <section className="relative overflow-hidden">
      {/* BACKGROUND (image + blue gradient) */}
=======
<<<<<<< HEAD
<<<<<<< HEAD
    <section className="relative bg-primary overflow-hidden">
      {/* Background Image */}
=======
    <section className="relative overflow-hidden">
      {/* BACKGROUND (image + blue gradient) */}
>>>>>>> cc38d77c1c280e65a9b0b459fef78191891a0ac4
=======
    <section className="relative overflow-hidden">
      {/* BACKGROUND (image + blue gradient) */}
>>>>>>> cc38d77c1c280e65a9b0b459fef78191891a0ac4
>>>>>>> Stashed changes
      <div className="absolute inset-0">
        {/* Image on the RIGHT, slightly visible */}
        <div
          className="absolute inset-0 bg-cover bg-right opacity-70"
          style={{ backgroundImage: `url(${heroImage})` }}
        />

        {/* Blue gradient from left to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#022B69] via-[#0a4a99cc] to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex items-center gap-2 text-white mb-4 text-sm">
          <span>insura.ae</span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span>{breadcrumb}</span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
          {title}
        </h1>

        {description && (
          <p className="text-base md:text-lg text-white/80 max-w-2xl">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
