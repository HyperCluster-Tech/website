import Header from "../components/header";
import Hero from "../components/hero";
import Research from "../components/research";
import Team from "../components/team";
import Footer from "../components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black -z-10" />
      <Header />
      <main>
        <Hero />
        <Research />
        <Team />
        <section id="contact" className="py-20 px-4 flex justify-center">
          <Button
            variant="secondary"
            className="bg-gradient-to-r from-blue-500 to-violet-500"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
