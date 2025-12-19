export default function SectionWrapper({ children }) {
  return (
    <section className="bg-black min-h-screen text-white py-16 px-6 md:px-20">
      {children}
    </section>
  );
}
