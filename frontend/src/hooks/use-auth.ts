import { useMutation } from '@tanstack/react-query'
import { authService } from '@/services/auth-service'
import type { LoginRequest, RegisterRequest } from '@/types/api'
import { useNavigate } from 'react-router-dom'

export function useLogin() {
	const navigate = useNavigate()

	return useMutation({
		mutationFn: (data: LoginRequest) => authService.login(data),
		onSuccess: (response) => {
			authService.setToken(response.token)
			navigate('/dashboard')
		},
	})
}

export function useRegister() {
	const navigate = useNavigate()

	return useMutation({
		mutationFn: (data: RegisterRequest) => authService.register(data),
		onSuccess: () => {
			navigate('/login')
		},
	})
}

export function useLogout() {
	const navigate = useNavigate()

	return () => {
		authService.logout()
		navigate('/login')
	}
}
