import Header from "@/components/layout/Header";
import SplashScreen from "@/components/SplashScreen";
import Hero from "@/components/home/Hero";
import MessagesJar from "@/components/home/MessagesJar";

import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-100">
        <Hero />

        <MessagesJar />
        <SplashScreen />

        
      </main>

      <Footer />
    </>
  );
}