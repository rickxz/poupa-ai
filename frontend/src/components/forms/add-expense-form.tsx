import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useEffect, useState } from 'react'
import { Modal } from '@/components/ui/modal'
import { useCreateTransaction } from '@/hooks/use-transactions'
import { useCategories } from '@/hooks/use-categories'

const expenseSchema = z.object({
	description: z.string().min(1, 'Descrição é obrigatória'),
	amount: z.number({ error: 'Valor deve ser um número' }).positive('O valor deve ser positivo'),
	date: z.string().min(1, 'Data é obrigatória'),
	categoryId: z.string().optional(),
})

type ExpenseFormData = z.infer<typeof expenseSchema>

interface AddExpenseFormProps {
	isOpen: boolean
	onClose: () => void
}

export function AddExpenseForm({ isOpen, onClose }: AddExpenseFormProps) {
	const [errorMessage, setErrorMessage] = useState<string | null>(null)
	const createTransactionMutation = useCreateTransaction()
	const { data: categories, isLoading: categoriesLoading } = useCategories()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ExpenseFormData>({
		resolver: zodResolver(expenseSchema),
	})

	useEffect(() => {
		if (!isOpen) {
			reset()
			setErrorMessage(null)
		}
	}, [isOpen, reset])

	const onSubmit = async (data: ExpenseFormData) => {
		setErrorMessage(null)
		try {
			await createTransactionMutation.mutateAsync({
				description: data.description,
				amount: data.amount,
				date: data.date,
				type: 'EXPENSE',
				categoryId: data.categoryId ? parseInt(data.categoryId) : undefined,
			})
			reset()
			onClose()
		} catch (error: any) {
			setErrorMessage(
				error.response?.data?.message || 'Erro ao adicionar despesa. Tente novamente.'
			)
		}
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose} title="Adicionar Despesa">
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
				{errorMessage && (
					<div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
						<p className="text-sm text-red-400">{errorMessage}</p>
					</div>
				)}

				<div>
					<label htmlFor="description" className="block text-sm font-medium mb-2 text-neutral-200">
						Descrição
					</label>
					<input
						{...register('description')}
						id="description"
						type="text"
						placeholder="Ex: Supermercado"
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

				<div>
					<label htmlFor="categoryId" className="block text-sm font-medium mb-2 text-neutral-200">
						Categoria (opcional)
					</label>
					<select
						{...register('categoryId')}
						id="categoryId"
						disabled={categoriesLoading}
						className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-white [&>option]:bg-neutral-800 [&>option]:text-white disabled:opacity-50"
					>
						<option value="">Selecione uma categoria</option>
						{categories?.map((category) => (
							<option key={category.id} value={category.id}>
								{category.name}
							</option>
						))}
					</select>
					{errors.categoryId && (
						<p className="mt-1 text-sm text-red-400">{errors.categoryId.message}</p>
					)}
				</div>

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
						disabled={createTransactionMutation.isPending}
						className="flex-1 bg-red-500 hover:bg-red-600 disabled:bg-red-500/50 disabled:cursor-not-allowed text-white font-medium py-3 rounded-lg transition-all"
					>
						{createTransactionMutation.isPending ? 'Adicionando...' : 'Adicionar'}
					</button>
				</div>
			</form>
		</Modal>
	)
}
