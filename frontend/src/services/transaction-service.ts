import { apiClient } from '@/lib/api-client'
import type { Transaction, CreateTransactionRequest, UpdateTransactionRequest } from '@/types/api'

export const transactionService = {
	async getTransactions(): Promise<Transaction[]> {
		const response = await apiClient.get<Transaction[]>('/api/transactions')
		return response.data
	},

	async getTransaction(id: number): Promise<Transaction> {
		const response = await apiClient.get<Transaction>(`/api/transactions/${id}`)
		return response.data
	},

	async createTransaction(data: CreateTransactionRequest): Promise<Transaction> {
		const response = await apiClient.post<Transaction>('/api/transactions', data)
		return response.data
	},

	async updateTransaction(id: number, data: UpdateTransactionRequest): Promise<Transaction> {
		const response = await apiClient.put<Transaction>(`/api/transactions/${id}`, data)
		return response.data
	},

	async deleteTransaction(id: number): Promise<void> {
		await apiClient.delete(`/api/transactions/${id}`)
	},
}
