import { useState } from "react";
import SectionWrapper from "../../components/SectionWrapper";
import PageHeader from "../../components/PageHeader";
import FAQAccordionItem from "../../components/FAQAccordionItem";
import BackButton from "../../components/ui/BackButton";
import faqs from "../../data/faq.data";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <SectionWrapper>
            <div>
                <BackButton />
            </div>
            <PageHeader
                title="Frequently Asked Questions"
                subtitle="Everything you need to know about Storm Watch."
            />

            <div className="max-w-3xl mx-auto">
                {faqs.map((item, index) => (
                    <FAQAccordionItem
                        key={index}
                        question={item.q}
                        answer={item.a}
                        isOpen={openIndex === index}
                        onToggle={() => toggleFAQ(index)}
                    />
                ))}
            </div>
            <div className="mt-12 text-center text-gray-400">
                <h2>Further Information</h2>
                <p>
                    If you have more questions, feel free to{" "}
                    <a href="/contact" className="text-lime-500 underline">
                        contact our support team
                    </a>
                    .
                </p>
            </div>
        </SectionWrapper>
    );
}
