"use client";

import { PageHero } from "@/components/ui/page-hero";

export default function PrivacyPolicyPage() {
  return (
    <main>
      {/* HERO SECTION – like other pages */}
      <section id="privacy-hero">
        <PageHero
          breadcrumb="Privacy Policy"
          title="Privacy Policy"
          description="Need any type of insurance policy across the world? You can contact us without hesitation. Our expert support team will help you."
        />
      </section>

      {/* WHITE CONTENT AREA */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-justify">
          {/* MAIN HEADING */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#003566] mb-6">
            Privacy Policy, including GDPR compliance
          </h1>

          <p className="text-gray-700 mb-4 leading-relaxed">
            At Insura, we are committed to protecting the privacy of our clients.
            We handle your data and personal information responsibly and
            respectfully. This Privacy Policy explains how we collect and use
            personal data from our clients through our website, insura.ae, and
            outlines your choices regarding the use of your information and how
            you can access and update it.
          </p>

          {/* 1. Collection of Personal Data */}
          <h2 className="text-2xl md:text-3xl font-semibold text-[#003566] mt-10 mb-3">
            Collection of Personal Data
          </h2>

          <p className="text-gray-700 mb-3 leading-relaxed">
            We may collect personal data from our clients when they visit our
            website, request a quote, or purchase one of our insurance
            products. The personal data we collect may include the following:
          </p>

          <ul className="list-disc ml-6 space-y-1 text-gray-700 mb-4 leading-relaxed">
            <li>Name</li>
            <li>Contact information (for example: email address, phone number, mailing address)</li>
            <li>Date of birth</li>
            <li>Nationality</li>
            <li>Occupation</li>
            <li>Insurance policy details</li>
            <li>Claims history</li>
            <li>Financial information (for example: card details, bank account information)</li>
          </ul>

          {/* 2. Use of Personal Data */}
          <h2 className="text-2xl md:text-3xl font-semibold text-[#003566] mt-10 mb-3">
            Use of Personal Data
          </h2>

          <p className="text-gray-700 mb-3 leading-relaxed">
            We use the personal data we collect from our clients to provide them
            with insurance products and services, process claims, and respond to
            enquiries. In addition, we may use this information to:
          </p>

          <ul className="list-disc ml-6 space-y-1 text-gray-700 mb-4 leading-relaxed">
            <li>Verify the identity of our clients</li>
            <li>Evaluate and underwrite insurance policies</li>
            <li>Manage and administer insurance policies</li>
            <li>Conduct fraud prevention and detection activities</li>
            <li>Comply with legal and regulatory requirements</li>
          </ul>

          {/* 3. GDPR Compliance */}
          <h2 className="text-2xl md:text-3xl font-semibold text-[#003566] mt-10 mb-3">
            GDPR Compliance
          </h2>

          <p className="text-gray-700 mb-3 leading-relaxed">
            We comply with the EU General Data Protection Regulation (GDPR)
            when processing the personal data of our clients who are located in
            the European Union. This means that we:
          </p>

          <ul className="list-disc ml-6 space-y-1 text-gray-700 mb-4 leading-relaxed">
            <li>
              Only collect and process personal data that is necessary for the
              purposes for which it was collected
            </li>
            <li>
              Provide clear and transparent information about how we use
              personal data
            </li>
            <li>Obtain consent where required by law to do so</li>
            <li>
              Implement appropriate technical and organisational measures to
              ensure the security of personal data
            </li>
            <li>
              Retain personal data for no longer than necessary for the
              purposes for which it was collected
            </li>
          </ul>

          {/* 4. Disclosure of Personal Data */}
          <h2 className="text-2xl md:text-3xl font-semibold text-[#003566] mt-10 mb-3">
            Disclosure of Personal Data
          </h2>

          <p className="text-gray-700 mb-3 leading-relaxed">
            We may disclose personal data to third parties in connection with
            the provision of insurance products and services, such as:
          </p>

          <ul className="list-disc ml-6 space-y-1 text-gray-700 mb-4 leading-relaxed">
            <li>Insurance brokers and agents</li>
            <li>Reinsurers</li>
            <li>Claims adjusters</li>
            <li>Service providers (for example: IT providers, marketing agencies)</li>
            <li>Regulators and law enforcement agencies</li>
          </ul>

          <p className="text-gray-700 mb-4 leading-relaxed">
            We take reasonable steps to ensure that these third parties are
            bound by confidentiality and privacy obligations and use the
            personal data only for the purposes for which it was disclosed.
          </p>

          {/* 5. Security of Personal Data */}
          <h2 className="text-2xl md:text-3xl font-semibold text-[#003566] mt-10 mb-3">
            Security of Personal Data
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            We have implemented appropriate technical and organisational
            measures to protect the personal data we collect from our clients
            against unauthorised access, use, disclosure, or destruction. We
            regularly review and update our security measures to ensure they
            remain effective.
          </p>

          {/* 6. Your Rights */}
          <h2 className="text-2xl md:text-3xl font-semibold text-[#003566] mt-10 mb-3">
            Your Rights
          </h2>

          <p className="text-gray-700 mb-3 leading-relaxed">
            You have certain rights with respect to the personal data that we
            hold about you, including the right to:
          </p>

          <ul className="list-disc ml-6 space-y-1 text-gray-700 mb-4 leading-relaxed">
            <li>Access and receive a copy of your personal data</li>
            <li>Correct any inaccurate or incomplete personal data</li>
            <li>Request deletion of your personal data in certain circumstances</li>
            <li>Object to or restrict the processing of your personal data</li>
          </ul>

          <p className="text-gray-700 mb-4 leading-relaxed">
            To exercise these rights, please contact us using the contact
            details provided below.
          </p>

          {/* 7. Changes to this Privacy Policy */}
          <h2 className="text-2xl md:text-3xl font-semibold text-[#003566] mt-10 mb-3">
            Changes to this Privacy Policy
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify
            our clients of any material changes to this Privacy Policy by
            posting the updated policy on our website.
          </p>

          {/* 8. Contact Us */}
          <h2 className="text-2xl md:text-3xl font-semibold text-[#003566] mt-10 mb-3">
            Contact Us
          </h2>

          <p className="text-gray-700 mb-2 leading-relaxed">
            If you have any questions or concerns about our Privacy Policy or
            our practices regarding the collection, use, or disclosure of
            personal data, please contact us at:
          </p>

          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold">Email:</span> support@insura.ae
          </p>
        </div>
      </section>
    </main>
  );
}
