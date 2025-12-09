import { Navigate } from 'react-router-dom'
import { authService } from '@/services/auth-service'
import type { ReactNode } from 'react'

interface ProtectedRouteProps {
	children: ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
	if (!authService.isAuthenticated()) {
		return <Navigate to="/login" replace />
	}

	return <>{children}</>
}
