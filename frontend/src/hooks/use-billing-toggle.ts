import { useState } from 'react'

export type BillingPeriod = 'monthly' | 'annual'

export function useBillingToggle() {
	const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>('monthly')

	const toggleBilling = (period: BillingPeriod) => {
		setBillingPeriod(period)
	}

	return {
		billingPeriod,
		toggleBilling,
	}
}

