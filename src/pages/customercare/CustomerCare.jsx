import SectionWrapper from "../../components/SectionWrapper";
import PageHeader from "../../components/PageHeader";
import BackButton from "../../components/ui/BackButton";

export default function CustomerCare() {
  return (
    <SectionWrapper>
      <div>
        <BackButton />
      </div>
      <PageHeader
        title="Customer Care"
        subtitle="Your satisfaction is our priority."
      />

      <div className="max-w-3xl mx-auto text-gray-300 space-y-6">
        <p>
          Our support team is here to help with orders, product setup,
          troubleshooting, and warranty services.
        </p>

        <ul className="space-y-3">
          <li>✔ Order tracking & shipping updates</li>
          <li>✔ Product setup & troubleshooting</li>
          <li>✔ Warranty & returns support</li>
        </ul>

        <div className="bg-gray-900 p-6 rounded-xl">
          <p className="font-semibold text-white">Support Channels</p>
          <p>Email: support@stormwatch.com</p>
          <p>Phone: +1 (800) 555-STORM</p>
          <p>Mon - Fri | 9 AM - 6 PM</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
