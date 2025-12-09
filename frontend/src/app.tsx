import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from '@/pages/landing-page'
import { LoginPage } from '@/pages/login-page'
import { SignupPage } from '@/pages/signup-page'
import { DashboardPage } from '@/pages/dashboard-page'
import { NotFoundPage } from '@/pages/not-found'
import { ProtectedRoute } from '@/components/auth/protected-route'
import { AuthProvider } from '@/contexts/auth-context'

function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/signup" element={<SignupPage />} />
					<Route
						path="/dashboard"
						element={
							<ProtectedRoute>
								<DashboardPage />
							</ProtectedRoute>
						}
					/>
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</AuthProvider>
		</BrowserRouter>
	)
}

export default App

