import SectionWrapper from "../../components/SectionWrapper";
import PageHeader from "../../components/PageHeader";

export default function TermsAndConditions() {
  return (
    <SectionWrapper>
      <PageHeader
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using Storm Watch."
      />

      <div className="max-w-4xl mx-auto space-y-10 text-gray-300 text-sm leading-relaxed">
        
        {/* Introduction */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            1. Introduction
          </h2>
          <p>
            Welcome to Storm Watch. By accessing or using our website, products,
            or services, you agree to be bound by these Terms and Conditions.
            If you do not agree, please do not use our services.
          </p>
        </section>

        {/* Eligibility */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            2. Eligibility
          </h2>
          <p>
            You must be at least 18 years old or have parental consent to use
            Storm Watch products and services.
          </p>
        </section>

        {/* Orders & Payments */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            3. Orders & Payments
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>All prices are displayed in USD unless stated otherwise.</li>
            <li>Pre-orders are subject to availability.</li>
            <li>Payments must be completed before order confirmation.</li>
          </ul>
        </section>

        {/* Shipping */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            4. Shipping & Delivery
          </h2>
          <p>
            Shipping timelines are estimates and may vary due to location,
            customs, or external factors beyond our control.
          </p>
        </section>

        {/* Returns */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            5. Returns & Refunds
          </h2>
          <p>
            Customers may request returns in accordance with our Return Policy.
            Products must be unused and in original packaging.
          </p>
        </section>

        {/* Warranty */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            6. Warranty
          </h2>
          <p>
            Storm Watch products include a limited one-year warranty covering
            manufacturing defects. This warranty does not cover misuse or
            unauthorized modifications.
          </p>
        </section>

        {/* User Responsibilities */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            7. User Responsibilities
          </h2>
          <p>
            Users agree not to misuse the website, attempt unauthorized access,
            or engage in activities that may harm Storm Watch or other users.
          </p>
        </section>

        {/* Intellectual Property */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            8. Intellectual Property
          </h2>
          <p>
            All content, trademarks, logos, and designs on this website are the
            property of Storm Watch and may not be used without permission.
          </p>
        </section>

        {/* Limitation */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            9. Limitation of Liability
          </h2>
          <p>
            Storm Watch shall not be liable for any indirect, incidental, or
            consequential damages resulting from the use of our products or
            services.
          </p>
        </section>

        {/* Changes */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            10. Changes to Terms
          </h2>
          <p>
            We reserve the right to update these Terms and Conditions at any
            time. Continued use of our services constitutes acceptance of
            updated terms.
          </p>
        </section>

        {/* Contact */}
        <section className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-white mb-3">
            11. Contact Information
          </h2>
          <p>
            If you have any questions regarding these Terms, please contact us:
          </p>
          <p className="mt-2">
            📧 support@stormwatch.com
          </p>
        </section>

        {/* Footer note */}
        <p className="text-xs text-gray-500 pt-6 border-t border-gray-800">
          Last updated: October 2025
        </p>
      </div>
    </SectionWrapper>
  );
}
