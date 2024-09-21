import Navbar from "@/components/Navbar";
import TableInput from "@/components/TableInput";

export default function HomeLayout({ children }) {
  return (
    <section className="min-h-screen w-full bg-zinc-700">
      <Navbar />
      {/* <TableInput /> */}
      {children}
    </section>
  );
}