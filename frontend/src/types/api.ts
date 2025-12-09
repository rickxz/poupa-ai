export interface User {
	id: number
	name: string
	email: string
}

export interface LoginRequest {
	email: string
	password: string
}

export interface LoginResponse {
	token: string
	message: string
}

export interface RegisterRequest {
	name: string
	email: string
	password: string
}

export interface Category {
	id: number
	name: string
}

export interface Transaction {
	id: number
	description: string
	amount: number
	date: string
	type: 'INCOME' | 'EXPENSE'
	category: Category | null
}

export interface CreateTransactionRequest {
	description: string
	amount: number
	date: string
	type: 'INCOME' | 'EXPENSE'
	categoryId?: number
}

export interface UpdateTransactionRequest {
	description: string
	amount: number
	date: string
	type: 'INCOME' | 'EXPENSE'
	categoryId?: number
}

export interface DashboardSummary {
	totalIncome: number
	totalExpenses: number
	currentBalance: number
	recentTransactions: Transaction[]
	spendingByCategory: SpendingByCategory[]
}

export interface SpendingByCategory {
	categoryName: string
	totalAmount: number
}
