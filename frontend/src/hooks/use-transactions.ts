import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { transactionService } from '@/services/transaction-service'
import type { CreateTransactionRequest, UpdateTransactionRequest } from '@/types/api'

export function useTransactions() {
	return useQuery({
		queryKey: ['transactions'],
		queryFn: () => transactionService.getTransactions(),
	})
}

export function useTransaction(id: number) {
	return useQuery({
		queryKey: ['transactions', id],
		queryFn: () => transactionService.getTransaction(id),
		enabled: !!id,
	})
}

export function useCreateTransaction() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (data: CreateTransactionRequest) => transactionService.createTransaction(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['transactions'] })
			queryClient.invalidateQueries({ queryKey: ['dashboard'] })
		},
	})
}

export function useUpdateTransaction() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({ id, data }: { id: number; data: UpdateTransactionRequest }) =>
			transactionService.updateTransaction(id, data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['transactions'] })
			queryClient.invalidateQueries({ queryKey: ['dashboard'] })
		},
	})
}

export function useDeleteTransaction() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (id: number) => transactionService.deleteTransaction(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['transactions'] })
			queryClient.invalidateQueries({ queryKey: ['dashboard'] })
		},
	})
}
