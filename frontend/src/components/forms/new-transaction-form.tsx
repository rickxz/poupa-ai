import { useForm, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useEffect } from 'react'
import { Modal } from '@/components/ui/modal'

const transactionSchema = z.object({
	type: z.enum(['receita', 'despesa']),
	description: z.string().min(1, 'Descrição é obrigatória'),
	amount: z.number({ error: 'Valor deve ser um número' }).positive('O valor deve ser positivo'),
	date: z.string().min(1, 'Data é obrigatória'),
	category: z.string().optional(),
}).refine((data) => {
	if (data.type === 'despesa' && !data.category) {
		return false
	}
	return true
}, {
	message: 'Categoria é obrigatória para despesas',
	path: ['category'],
})

type TransactionFormData = z.infer<typeof transactionSchema>

interface NewTransactionFormProps {
	isOpen: boolean
	onClose: () => void
}

const categories = [
	{ value: 'alimentacao', label: 'Alimentação' },
	{ value: 'transporte', label: 'Transporte' },
	{ value: 'lazer', label: 'Lazer' },
	{ value: 'saude', label: 'Saúde' },
	{ value: 'educacao', label: 'Educação' },
	{ value: 'moradia', label: 'Moradia' },
	{ value: 'outros', label: 'Outros' },
]

export function NewTransactionForm({ isOpen, onClose }: NewTransactionFormProps) {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
		control
	} = useForm<TransactionFormData>({
		resolver: zodResolver(transactionSchema),
	})

	const transactionType = useWatch({ control, name: 'type' })

	useEffect(() => {
		if (!isOpen) {
			reset()
		}
	}, [isOpen, reset])

	const onSubmit = async (data: TransactionFormData) => {
		console.log('Transaction data:', data)
		reset()
		onClose()
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose} title="Nova Transação">
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
				<div>
					<label className="block text-sm font-medium mb-2 text-neutral-200">
						Tipo
					</label>
					<div className="flex gap-4">
						<label className={`flex items-center justify-center flex-1 px-4 py-3 border-2 rounded-lg cursor-pointer transition-all ${
							transactionType === 'receita'
								? 'bg-emerald-500/20 border-emerald-500'
								: 'bg-neutral-800/50 border-emerald-500/30 hover:border-emerald-500/50'
						}`}>
							<input
								{...register('type')}
								type="radio"
								value="receita"
								className="sr-only"
							/>
							<span className="text-white">Receita</span>
						</label>
						<label className={`flex items-center justify-center flex-1 px-4 py-3 border-2 rounded-lg cursor-pointer transition-all ${
							transactionType === 'despesa'
								? 'bg-red-500/20 border-red-500'
								: 'bg-neutral-800/50 border-red-500/30 hover:border-red-500/50'
						}`}>
							<input
								{...register('type')}
								type="radio"
								value="despesa"
								className="sr-only"
							/>
							<span className="text-white">Despesa</span>
						</label>
					</div>
					{errors.type && (
						<p className="mt-1 text-sm text-red-400">{errors.type.message}</p>
					)}
				</div>

				<div>
					<label htmlFor="description" className="block text-sm font-medium mb-2 text-neutral-200">
						Descrição
					</label>
					<input
						{...register('description')}
						id="description"
						type="text"
						placeholder="Ex: Salário ou Supermercado"
						className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-white placeholder:text-neutral-500"
					/>
					{errors.description && (
						<p className="mt-1 text-sm text-red-400">{errors.description.message}</p>
					)}
				</div>

				<div>
					<label htmlFor="amount" className="block text-sm font-medium mb-2 text-neutral-200">
						Valor
					</label>
					<input
						{...register('amount', { valueAsNumber: true })}
						id="amount"
						type="number"
						step="0.01"
						placeholder="0.00"
						className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-white placeholder:text-neutral-500"
					/>
					{errors.amount && (
						<p className="mt-1 text-sm text-red-400">{errors.amount.message}</p>
					)}
				</div>

				<div>
					<label htmlFor="date" className="block text-sm font-medium mb-2 text-neutral-200">
						Data
					</label>
					<input
						{...register('date')}
						id="date"
						type="date"
						className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-white"
					/>
					{errors.date && (
						<p className="mt-1 text-sm text-red-400">{errors.date.message}</p>
					)}
				</div>

				{transactionType === 'despesa' && (
					<div>
						<label htmlFor="category" className="block text-sm font-medium mb-2 text-neutral-200">
							Categoria
						</label>
						<select
							{...register('category')}
							id="category"
							className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-white"
						>
							<option value="">Selecione uma categoria</option>
							{categories.map((category) => (
								<option key={category.value} value={category.value}>
									{category.label}
								</option>
							))}
						</select>
						{errors.category && (
							<p className="mt-1 text-sm text-red-400">{errors.category.message}</p>
						)}
					</div>
				)}

				<div className="flex gap-3 pt-4">
					<button
						type="button"
						onClick={onClose}
						className="flex-1 px-4 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-medium rounded-lg transition-colors"
					>
						Cancelar
					</button>
					<button
						type="submit"
						disabled={isSubmitting}
						className="flex-1 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500/50 disabled:cursor-not-allowed text-white font-medium py-3 rounded-lg transition-all"
					>
						{isSubmitting ? 'Adicionando...' : 'Adicionar'}
					</button>
				</div>
			</form>
		</Modal>
	)
}
