import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { categoryService } from '@/services/category-service'

export function useCategories() {
	return useQuery({
		queryKey: ['categories'],
		queryFn: () => categoryService.getCategories(),
	})
}

export function useCreateCategory() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (name: string) => categoryService.createCategory(name),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['categories'] })
		},
	})
}

export function useUpdateCategory() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({ id, name }: { id: number; name: string }) =>
			categoryService.updateCategory(id, name),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['categories'] })
		},
	})
}

export function useDeleteCategory() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (id: number) => categoryService.deleteCategory(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['categories'] })
		},
	})
}
