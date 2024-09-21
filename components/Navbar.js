import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full h-14 bg-zinc-800">
      <div className="w-full max-w-screen-lg h-full mx-auto flex justify-center items-center">
        <Link href="/table_input" className="w-24 h-full grid place-content-center font-bold text-white shadow-[inset_0_0_0_0_white] transition-all duration-300 ease-in-out hover:shadow-[inset_0_100px_0_0_white] hover:text-zinc-800">
          Input
        </Link>
        <Link href="/home" className="w-24 h-full grid place-content-center font-bold text-white shadow-[inset_0_0_0_0_white] transition-all duration-300 ease-in-out hover:shadow-[inset_0_100px_0_0_white] hover:text-zinc-800">
          Display
        </Link>
      </div>
    </nav>
  )
}