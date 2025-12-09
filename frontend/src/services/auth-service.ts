import { apiClient } from '@/lib/api-client'
import type { LoginRequest, LoginResponse, RegisterRequest } from '@/types/api'

export const authService = {
	async login(data: LoginRequest): Promise<LoginResponse> {
		const response = await apiClient.post<LoginResponse>('/auth/login', data)
		return response.data
	},

	async register(data: RegisterRequest): Promise<string> {
		const response = await apiClient.post<string>('/auth/register', data)
		return response.data
	},

	logout() {
		localStorage.removeItem('token')
	},

	getToken(): string | null {
		return localStorage.getItem('token')
	},

	setToken(token: string) {
		localStorage.setItem('token', token)
	},

	isAuthenticated(): boolean {
		return !!this.getToken()
	},
}
