import { Button } from "@/components/ui/button"
import { Bookmark } from "lucide-react"

export function WhyChooseInsura() {
  return (
    <section className="mt-10 py-16 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="w-full">
            <img
              src="/car4.webp"
              alt="Why Choose Insura"
              className="w-full h-[420px] object-cover shadow-lg"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="p-6">

            {/* HEADER CARD */}
            <div className="bg-blue-50 p-5 mb-6 shadow-xl text-black">
              <h3 className="text-xl font-bold text-primary mb-2">
                Why Choose iNSURA.ae?
              </h3>
              <p className="text-sm font-bold text-muted-foreground">
                POWERED BY PIONEER
              </p>
            </div>

            {/* DROPDOWNS */}
            <div className="space-y-6 text-black">

              <details className="pb-4 border-b-2 border-black">
                <summary className="cursor-pointer font-semibold">
                  Budget Friendly Coverage
                </summary>
                <p className="mt-2 text-sm text-muted-foreground">
                  iNSURA.ae powered by PIONEER identify the best vehicle insurance
                  in UAE by considering your specific needs and budget and
                  customize insurance plans to align with your requirements.
                </p>
              </details>

              <details className="pb-4 border-b-2 border-black">
                <summary className="cursor-pointer font-semibold">
                  10,000+ Satisfied Customers
                </summary>
                <p className="mt-2 text-sm text-muted-foreground">
                  With over 10,000+ satisfied customers, iNSURA.ae powered by
                  PIONEER is a reliable name in the insurance sector.
                </p>
              </details>

              <details className="pb-4 border-b-2 border-black">
                <summary className="cursor-pointer font-semibold">
                  Comprehensive Coverage
                </summary>
                <p className="mt-2 text-sm text-muted-foreground">
                  We go beyond standard coverage, offering a comprehensive
                  package that includes car maintenance and car wash services.
                </p>
              </details>

            </div>

            {/* TEXT */}
            <p className="mt-6 text-muted-foreground">
              We believe in going above and beyond to ensure your vehicle is not
              only safeguarded on the road but also well-maintained.
            </p>

            {/* BUTTON */}
            <div className="mt-6">
              <a
  href="#"
  onClick={(e) => {
    e.preventDefault()
    window.location.href = window.location.pathname
  }}
  className="
    flex items-center justify-center gap-1
    text-primary font-semibold text-lg
    px-3 py-1 rounded-md
    transition-all duration-200
    hover:bg-primary hover:text-white
  "
>
  Buy Now
</a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}