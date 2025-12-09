import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { authService } from '@/services/auth-service'

interface AuthContextType {
	isAuthenticated: boolean
	setIsAuthenticated: (value: boolean) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
	const [isAuthenticated, setIsAuthenticated] = useState(authService.isAuthenticated())

	useEffect(() => {
		setIsAuthenticated(authService.isAuthenticated())
	}, [])

	return (
		<AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
			{children}
		</AuthContext.Provider>
	)
}

export function useAuthContext() {
	const context = useContext(AuthContext)
	if (!context) {
		throw new Error('useAuthContext must be used within AuthProvider')
	}
	return context
}
