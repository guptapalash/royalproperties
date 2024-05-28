import Navbar from "@/components/Navbar";
import Homepage from "@/pages/Homepage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-normal">
      <Navbar />
      <Homepage />
    </main>
  );
}
