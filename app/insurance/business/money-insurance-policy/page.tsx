"use client";

import { useState, type ReactNode, type FormEvent } from "react";
import { PageHero } from "@/components/ui/page-hero";
import { Sidebar } from "@/components/content/sidebar";
import { Home, Bookmark } from "lucide-react";

type FAQItem = {
  question: string;
  answer: ReactNode;
};



const faqItems: FAQItem[] = [
  {
    question: "Who required Money insurance in the UAE?",
    answer: (
      <p>
       Banks, retail establishments, restaurants, and other financial institutions are just a few examples of businesses that want to think about obtaining money insurance in the United Arab Emirates. This insurance coverage helps shield companies from monetary damages brought on by robbery, theft, and other unanticipated circumstances.c:\Users\lizvi\Downloads\group.webp
      </p>
    ),
  },
  {
    question: "What things covers in Money Insurance in UAE?",
    answer: (
      <p>
       Cash, coins, currency notes, and other negotiable items like cheques and money orders are usually covered by money insurance policies in the United Arab Emirates. Losses resulting from theft or robbery can be covered while money is being moved, stored in a safe or vault, or used in a commercial context. Additionally, it can compensate for damages brought on by natural calamities like flooding or fire.
      </p>
    ),
  },
  {
    question: "How can I apply for Money Insurance in UAE?",
    answer: (
      <div>
        <p>Visit iNSURA.ae then go to Business Insurance at the menu of website, where you get an sub menu option of Money Insurance Policy. Click on it then it will redirect you to the page of Money Insurance where you need to fill up the form then submit. Wait for our Insurance Manager Response they will be connect with you ASAP!</p>
       
      </div>
    ),
  },
  {
    question: "How much coverage do I need for my business?",
    answer: (
      <div>
        <p>
         The volume of cash transactions you handle and the degree of risk involved will determine how much coverage you need for your company. Working with a knowledgeable insurance company, such as iNSURA.ae, is essential to figuring out how much coverage is right for your particular business requirements.
        </p>
       
      </div>
    ),
  },
  {
    question: "What should I look for in a Money insurance provider in the UAE?",
    answer: (
      <p>
        It’s critical to pick a trustworthy supplier with experience in offering coverage to companies handling cash transactions when looking for money insurance in the United Arab Emirates. In addition to offering low rates and extensive coverage, the policy should have safeguards against newly identified risks in the financial sector.
      </p>
    ),
  },
];

type FormErrors = {
  company?: string;
  person?: string;
  mobile?: string;
  email?: string;
};

export default function WorkmenCompensationPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [whyOpen, setWhyOpen] = useState<boolean[]>([true, false, false, false]);
  const [errors, setErrors] = useState<FormErrors>({});

  const toggleWhy = (index: number) => {
    setWhyOpen((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  const scrollToHero = () => {
    const el = document.getElementById("medical-hero");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const company = (formData.get("company") as string | null)?.trim() || "";
    const person = (formData.get("person") as string | null)?.trim() || "";
    const mobile = (formData.get("mobile") as string | null)?.trim() || "";
    const email = (formData.get("email") as string | null)?.trim() || "";

    const newErrors: FormErrors = {};
   
    if (!person) newErrors.person = "This field is required. Please input your name.";
    if (!mobile) newErrors.mobile = "This field is required. Please input a phone number.";
    if (!email) newErrors.email = "This field is required. Please input a valid email.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // replace this with real API call later
      alert("Form submitted successfully!");
    }
  };

  return (
    <main>
      {/* HERO (BLUE BANNER) */}
      <section id="medical-hero">
        <PageHero
          breadcrumb="Money Insurance Policy"
          title="Money Insurance Policy"
          description="Get Money Insurance Policy in UAE to Protect Your Business from Theft & Robbery. Protected Business is Always Run Happily Independently."
        />
      </section>

      {/* WHITE SECTION */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* PAGE HEADING UNDER HERO */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#003566] mb-4">
            Money Insurance Policy - Because its All about Your Business Protection
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-2 space-y-12 text-justify">

              {/* FORM SECTION */}
              <section className="space-y-6">
               

                <form className="space-y-8" onSubmit={handleSubmit}>
                  {/* ROW 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Company Name */}
                    <div>
                      <label className="block text-sm text-[#797575] font-semibold mb-2">
                        Company name 
                      </label>
                      <input
                        name="company"
                        type="text"
                        placeholder="Enter company name..."
                        className="w-full p-3 rounded-lg bg-[#eef6ff] text-[#003566] placeholder:text-gray-400 outline-none"
                      />
                      {errors.company && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.company}
                        </p>
                      )}
                    </div>

                    {/* Concern Person */}
                    <div>
                      <label className="block text-sm text-[#797575] font-semibold mb-2">
                        Concern Person name{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="person"
                        type="text"
                        placeholder="Concern person name..."
                        className="w-full p-3 rounded-lg bg-[#eef6ff] text-[#003566] placeholder:text-gray-400 outline-none"
                      />
                      {errors.person && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.person}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* ROW 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Mobile Number */}
                    <div>
                      <label className="block text-sm text-[#797575] font-semibold mb-2">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="mobile"
                        type="text"
                        placeholder="enter mobile number..."
                        className="w-full p-3 rounded-lg bg-[#eef6ff] text-[#003566] placeholder:text-gray-400 outline-none"
                      />
                      {errors.mobile && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.mobile}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm text-[#797575] font-semibold mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        placeholder="enter email id..."
                        className="w-full p-3 rounded-lg bg-[#eef6ff] text-[#003566] placeholder:text-gray-400 outline-none"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Business Category Dropdown */}
                  <div>
                    <label className="block text-sm text-[#797575] font-semibold mb-2">
                      Business Category
                    </label>
                    <select className="w-full p-3 rounded-lg bg-[#23b5ff] text-white outline-none">
                      <option>Event Inurance</option>
                      <option>Marine Cargo</option>
                      <option>Property all risks</option>
                    </select>
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#0052cc] text-white font-semibold rounded-md shadow"
                  >
                    Send Application
                  </button>
                </form>
              </section>

              {/* FLIP CARDS */}
             
              {/* ============ NEW SECTION AFTER CARDS (IMAGE 1 CONTENT) ============ */}
              <section className="space-y-4 mt-10">
                <h2 className="text-2xl md:text-4xl font-semibold text-[#003566]">
                 What is Money Insurance Policy?
                </h2>

                <p className="text-muted-foreground">
                  Theft or robbery of money carried by you or authorized individuals while in transit or on your company property is covered by money insurance.
                </p>

                
                     <p className="text-muted-foreground">Cash, bank drafts, currency notes, treasury bags, checks, postal orders, and current postage stamps are all considered forms of money under these policies. On request, they can even incorporate other products, with policies tailored to your specific needs. 
                      </p>
                      <p className="text-muted-foreground">Large sums of money can be a source of tension and concern when handling them, whether they are in a safe or during travel, because of the possibility of unforeseen losses from theft or robbery.</p>
                  <p className="text-muted-foreground">Extensive coverage against any such setback is provided by the Union Insurance Money Insurance policy, and there is never any need for concern thanks to our 24/7 customer support and easy claims procedure.</p>
                    <p className=" text-muted-foreground">This is sort of insurance policy known as money insurance covers currency or money lost while being used, stored, or transported. This insurance can guard against the financial losses brought on by theft, burglary, robbery, and other unanticipated incidents, making it particularly crucial for establishments that deal with cash transactions, such banks, retail stores, and restaurants.</p>
              </section>

              {/* ============ LEGAL FRAMEWORK SECTION (IMAGE 2 CONTENT) ============ */}
              <section className="space-y-4 mt-10">
                <h2 className="text-2xl md:text-4xl font-semibold text-[#003566]">
                Your Money is Safe Now!
                </h2>

                <div className="space-y-4 text-muted-foreground">
                  <div>
                   
                    <p>
                     Financial transactions are essential to the operation of any firm. No matter how cautious you are, there is always a chance of losing money while moving cash, drafts, postal orders, checks, etc. With our Money Insurance Policy, you can finally feel safe knowing that your money is protected 24/7.
                    </p>
                  </div>

                

                
                </div>
              </section>

              {/* ============ WHY CHOOSE INSURA (KEPT SAME) ============ */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-16">
                {/* LEFT IMAGE */}
                <div className="flex justify-center md:justify-start h-full">
                  <img
                    src="/services-details-img1.webp"
                    alt="Workmen Compensation Insurance"
                    className="rounded-lg w-full max-w-md object-contain"
                  />
                </div>

                {/* RIGHT ACCORDION */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-[#003566] mb-4">
                    Why Choose iNSURA?
                  </h2>

                  <div className="space-y-4">
                    {/* 1 – Comprehensive Coverage */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => toggleWhy(0)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-bold text-[#4d4e4e]">
                          Comprehensive Coverage
                        </span>
                        <span className="text-lg text-[#003566]">
                          {whyOpen[0] ? "▲" : "▼"}
                        </span>
                      </button>

                      {whyOpen[0] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          At Insura.ae, we understand that the stakes are high
                          when it comes to medical malpractice insurance. Our
                          policies offer comprehensive coverage designed to
                          protect healthcare professionals from a range of risks
                          associated with medical malpractice claims.
                        </div>
                      )}
                    </div>

                    {/* 2 – Tailored Solutions */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => toggleWhy(1)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-bold text-[#4d4e4e]">
                          Tailored Solutions
                        </span>
                        <span className="text-lg text-[#003566]">
                          {whyOpen[1] ? "▲" : "▼"}
                        </span>
                      </button>

                      {whyOpen[1] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          Every healthcare provider’s needs are unique, and so
                          are the risks they face. Insura.ae offers tailored
                          insurance solutions to match your specific
                          requirements.
                        </div>
                      )}
                    </div>

                    {/* 3 – Expertise in UAE Market */}
                    <div className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => toggleWhy(2)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-bold text-[#4d4e4e]">
                          Expertise in the UAE Market
                        </span>
                        <span className="text-lg text-[#003566]">
                          {whyOpen[2] ? "▲" : "▼"}
                        </span>
                      </button>

                      {whyOpen[2] && (
                        <div className="mt-3 text-muted-foreground leading-relaxed">
                          Insura.ae specializes in the UAE insurance market,
                          with deep understanding of local regulations, industry
                          standards, and healthcare practices.
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground mt-4">
                    Choosing Insura.ae for your medical malpractice insurance
                    needs in the UAE offers a range of benefits and strong
                    protection for your practice.
                  </p>

                  <button
                    onClick={scrollToHero}
                    className="px-6 py-2 bg-[#003566] text-[#ffd34d] font-semibold rounded-md shadow mt-4"
                  >
                    Buy Now
                  </button>
                </div>
              </section>

              {/* ============ BENEFITS SECTION – PART 1 (IMAGE 3) ============ */}
              <section className="space-y-6 mt-16">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#003566]">
                 Benefits of Money Insurance:
                </h2>

               
                
                    <span className="font-bold text-[#4b4c4c]">
                      Individual coverage for money and monetary transactions – 
                    </span>
                    <p className="text-muted-foreground">
                    The benefit of purchasing money insurance is that, in addition to the customization option offered when purchasing a single policy, you can choose the terms and conditions of the policy. Although cash insurance coverage can be added to other insurance plans and shop insurance as well, it cannot be customized to meet your specific needs. When purchased as a standalone policy, you have the ability to add on extras, but when purchasing money insurance cover through a shop insurance, you may not have many options or all of the addons you would need.
                    </p>
                  

                
                    <span className="font-bold text-[#4b4c4c]">
                      Premium based on cash fund transaction only – 
                    </span>
                    <p className="text-muted-foreground">
                      One additional benefit of money insurance is that the premium is determined by the cash transactions that take place inside the policy period. For instance, you may very likely apply for an endorsement under the insurance if your cash transactions are larger or lower than those specified in the policy. You will have to pay an extra premium if you have overused the coverage. However, the policy provides for a pro-rata reimbursement in the event that you have underutilized it.
                    </p>
                 
                    <span className="font-bold text-[#4b4c4c]">
                      Adjustment of premiums at every year end – 
                    </span>
                    <p className="text-muted-foreground">
                      The ability to modify the premium at the time of completion of the policy year is another fantastic benefit of cash value insurance. The insured is required by this policy to provide regular updates on the transits conducted in accordance with the policy. The insurance company would conduct an endorsement for the same if the sum insured was over or underutilized, and you would be required to pay an additional premium or receive a refund.
                    </p>
                 
                   
              </section>

              {/* CAR IMAGE BANNER */}
              <section className="mt-16 w-full">
                <img
                  src="/Money.webp"
                  alt="Top-Notch Vehicle Insurance in UAE"
                  className="w-full rounded-lg object-cover"
                />
              </section>

             

              {/* FAQ – accordion, starts right under the video */}
              <section className="space-y-4 mt-4">
                <h2 className="text-2xl md:text-2xl font-extrabold text-[#003566] text-center mb-4">
                  
Money Insurance FAQ
                </h2>

                <div className="space-y-1 max-w-4xl mx-auto">
                  {faqItems.map((faq, index) => {
                    const isOpen = openIndex === index;

                    return (
                      <div key={faq.question}>
                        {/* Question row */}
                        <button
                          type="button"
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                          className="w-full flex items-center justify-between px-4 py-3 bg-[#02182d] text-white font-semibold text-xl md:text-xl"
                        >
                          <span className="flex items-center gap-3">
                            <span className="text-lg">
                              {isOpen ? "−" : "+"}
                            </span>
                            <span>{faq.question}</span>
                          </span>
                        </button>

                        {/* Answer */}
                        {isOpen && (
                          <div className="bg-white text-muted-foreground px-6 py-4 border border-t-0 border-[#003566]">
                            <div className="text-xl md:text-xl leading-relaxed">
                              {faq.answer}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>

            {/* RIGHT COLUMN – Sidebar */}
            <div>
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
