import Footer from "@/components/Footer"
import Contact from "@/components/Contact"
import CTA from "@/components/CTA"
import FAQ from "@/components/FAQ"
import Instructors from "@/components/Instructors"
import Curriculum from "@/components/Curriculum"
import Features from "@/components/Features"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Portfolios from "@/components/Portfolios"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">

      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />
        {/* Features Section */}
        <Features />
        {/* Curriculum Section */}
        <Curriculum />
        {/* Instructors Section */}
        <Instructors />
        {/* Portfolios Section */}
        <Portfolios />
        {/* FAQ Section */}
        <FAQ />
        {/* CTA Section */}
        <CTA />
        {/* Contact Section */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

