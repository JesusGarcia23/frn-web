import { Button } from "@/components/ui/button"
import { ChevronRight, Shield, Zap, BarChart2 } from "lucide-react"
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-gray-800">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-400">New Franc</div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#features" className="hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6 text-blue-400">The New Frontier of Digital Currency</h1>
            <p className="text-xl mb-8">Introducing the New Franc: A dynamic token powered by Binance Chain and secured by OpenZeppelin.</p>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              Explore New Franc <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        <section id="features" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Shield className="h-12 w-12 text-blue-400" />}
                title="Secure Infrastructure"
                description="Built on Binance Chain with OpenZeppelin contracts for enhanced security and reliability."
              />
              <FeatureCard
                icon={<Zap className="h-12 w-12 text-blue-400" />}
                title="High Performance"
                description="Leverage the speed and efficiency of the Binance Chain for quick transactions."
              />
              <FeatureCard
                icon={<BarChart2 className="h-12 w-12 text-blue-400" />}
                title="Dynamic Potential"
                description="Experience the exciting volatility of a true cryptocurrency market."
              />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">Join the New Franc Revolution</h2>
            <p className="text-xl mb-8">Be part of a new era in digital currency. Trade, invest, and grow with New Franc.</p>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              Get Started Now <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-400 py-10">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 New Franc. All rights reserved.</p>
          <p className="mt-2">New Franc is a cryptocurrency token and is not affiliated with any national currency.</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-md text-center hover:bg-gray-600 transition-colors">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-blue-400">{title}</h3>
      <p>{description}</p>
    </div>
  )
}