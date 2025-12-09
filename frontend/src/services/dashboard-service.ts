import { apiClient } from '@/lib/api-client'
import type { DashboardSummary } from '@/types/api'

export const dashboardService = {
	async getDashboardSummary(): Promise<DashboardSummary> {
		const response = await apiClient.get<DashboardSummary>('/api/dashboard/summary')
		return response.data
	},
}
