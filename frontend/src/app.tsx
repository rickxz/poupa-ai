import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/sections/hero-section'
import { FeaturesSection } from '@/components/sections/features-section'
import { AIAssistantSection } from '@/components/sections/ai-assistant-section'
import { BudgetSection } from '@/components/sections/budget-section'
import { SmartCardsSection } from '@/components/sections/smart-cards-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { PricingSection } from '@/components/sections/pricing-section'

function App() {
	return (
		<div className="antialiased overflow-x-hidden selection:bg-white/10 selection:text-white text-neutral-100 bg-neutral-950 min-h-screen">
			<Header />
			<main>
				<HeroSection />
				<FeaturesSection />
				<AIAssistantSection />
				<BudgetSection />
				<SmartCardsSection />
				<TestimonialsSection />
				<PricingSection />
			</main>
			<Footer />
		</div>
	)
}

export default App

