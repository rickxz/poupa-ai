import type { ReactNode } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface StatCardProps {
	title: string
	value: string
	change: string
	subtitle: string
	icon?: ReactNode
}

export function StatCard({ title, value, change, subtitle, icon }: StatCardProps) {
	return (
		<Card className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10">
			<div className="flex items-center justify-between">
				<p className="text-sm font-geist text-neutral-400">{title}</p>
				{icon && (
					<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
						{icon}
					</span>
				)}
			</div>
			<div className="mt-3 flex items-baseline gap-2">
				<p className="text-3xl sm:text-xl font-semibold tracking-tight font-geist text-white">{value}</p>
				<Badge className="text-xs font-medium font-geist text-neutral-900 bg-emerald-400">{change}</Badge>
			</div>
			<p className="mt-1 text-xs text-neutral-500 font-geist">{subtitle}</p>
		</Card>
	)
}

