import Navbar from "@/components/Navbar";

export default function TableLayout({ children }) {
  return (
    <section className="min-h-screen w-full bg-zinc-700">
      <Navbar />
      {children}
    </section>
  );
}