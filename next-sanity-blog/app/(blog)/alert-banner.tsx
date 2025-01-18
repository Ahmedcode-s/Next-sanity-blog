import Link from "next/link";



export default function AlertBanner() {

  return (
    <div className="fixed top-0 left-0 z-50 w-full border-b bg-black text-white lack backdrop-blur flex items-center justify-between px-4 h-16">
      <div className="py-2 text-center text-sm font-2xl">
        <h1>BLogs </h1>
      </div>
      <nav className="flex space-x-6 text-sm font-medium">
        <Link href={"/"} className="hover:text-[#ff4343]">Home</Link>
        <Link href={"/about"} className="hover:text-[#ff4343]">About</Link>
        <Link href={"/contact"} className="hover:text-[#ff4343]">Contact</Link>
      </nav>
    </div>
  );
}
