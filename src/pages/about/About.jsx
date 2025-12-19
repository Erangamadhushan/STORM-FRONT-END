import SectionWrapper from "../../components/SectionWrapper";
import PageHeader from "../../components/PageHeader";
import BackButton from "../../components/ui/BackButton";


export default function About() {
  return (
    <SectionWrapper>
        <div>
            <BackButton />
        </div>
        <PageHeader
            title="Our Story"
            subtitle="Storm Watch. Built for those who never slow down."
        />

        <div className="max-w-3xl mx-auto space-y-6 text-gray-300">
            <p>
            Storm Watch was created for athletes, creators, and explorers who
            demand more from their smart devices.
            </p>

            <p>
            From early workouts to late-night goals, Storm Watch delivers power,
            precision, and performance without compromise.
            </p>

            <ul className="list-disc ml-6 space-y-2">
            <li>Long-lasting battery life</li>
            <li>Premium durable materials</li>
            <li>Advanced health insights</li>
            <li>Designed for real-world performance</li>
            </ul>

            <p className="font-semibold text-white">
            Storm Watch isn't just a device — it's your daily partner.
            </p>
        </div>
    </SectionWrapper>
  );
}
