import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from '@/pages/landing-page'
import { LoginPage } from '@/pages/login-page'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App

