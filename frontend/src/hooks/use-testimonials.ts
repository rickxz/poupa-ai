import { useState, useEffect, useCallback } from 'react'

export interface Testimonial {
	quote: string
	name: string
	role: string
	avatar: string
}

const testimonials: Testimonial[] = [
	{
		quote: 'Finalmente sei para onde meu dinheiro está indo. Os relatórios visuais do Poupa AÍ mudaram meu jogo.',
		name: 'Marcos Silva',
		role: 'Gerente de Operações, São Paulo',
		avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=128&auto=format&fit=crop&ixlib=rb-4.0.3',
	},
	{
		quote: 'Comecei como autônomo e o Poupa AÍ foi essencial para separar minhas contas pessoais das profissionais. Simples e direto.',
		name: 'Ana Santos',
		role: 'Designer Freelancer, Rio de Janeiro',
		avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=128&auto=format&fit=crop&ixlib=rb-4.0.3',
	},
	{
		quote: 'A IA me mostrou padrões de gastos que eu nunca teria percebido. Essencial para quem quer economizar.',
		name: 'Carlos Mendes',
		role: 'Fundador, Café Nube',
		avatar: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=128&auto=format&fit=crop&ixlib=rb-4.0.3',
	},
]

export function useTestimonials() {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [isPaused, setIsPaused] = useState(false)

	const next = useCallback(() => {
		setCurrentIndex((prev) => (prev + 1) % testimonials.length)
	}, [])

	const prev = useCallback(() => {
		setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
	}, [])

	const goTo = useCallback((index: number) => {
		setCurrentIndex(index)
	}, [])

	useEffect(() => {
		if (isPaused) return

		const timer = setInterval(() => {
			next()
		}, 6000)

		return () => clearInterval(timer)
	}, [isPaused, next])

	return {
		testimonials,
		currentTestimonial: testimonials[currentIndex],
		currentIndex,
		next,
		prev,
		goTo,
		setIsPaused,
	}
}

