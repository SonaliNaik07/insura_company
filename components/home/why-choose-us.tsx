export function WhyChooseUs() {
  const features = [
    {
      iconUrl: "/icons/SuperiorService.png",
      title: "Superior Service",
      description:
        "At iNSURA.ae Powered by PIONEER INSURANCE, we’re committed to making your insurance journey as smooth as possible with our superior, personalized service."
    },
    {
      iconUrl: "/icons/ReputablePartners.png",
      title: "Reputable Partners",
      description:
        "With iNSURA.ae Powered by PIONEER INSURANCE, you’re supported by a network of trusted partners, ensuring your insurance is both reliable and top-quality."
    },
    {
      iconUrl: "/icons/Satisfaction.png",
      title: "100% Satisfaction",
      description:
        "Your happiness is our top priority—we’re dedicated to making sure you’re completely satisfied with your insurance plan."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-12">
          <p className="text-sky-600 font-semibold">Why Choose Us?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            We’re Committed to Delivering the Best
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white p-10 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-2"
            >

              {/* Updated Blue Curved Corner Badge */}
              <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-[#0BA4E0] 
                rounded-bl-[120px] overflow-hidden flex justify-center items-center shadow-lg">
                <span className="text-white text-[20px] font-extrabold">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="w-14 h-14 mb-8 [perspective:1000px]">
                <div className="relative w-full h-full transition-transform duration-500 group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d]">
                  
                  <img src={feature.iconUrl} alt="front" className="absolute inset-0 w-full h-full [backface-visibility:hidden]" />
                  <img src={feature.iconUrl} alt="back" className="absolute inset-0 w-full h-full rotate-y-180 [backface-visibility:hidden]" />

                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
