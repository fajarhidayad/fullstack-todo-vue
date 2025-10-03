import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'
import { createProduct, deleteProduct, getProducts, updateProduct } from '@/api/products'
import type { Product } from '@/types/types'

const queryKey = ['products']

export function useProducts() {
  return useQuery<Product[]>({
    queryKey,
    queryFn: getProducts,
  })
}

interface Params {
  onSuccessCallback: () => void
  onFailCallback: (message: string) => void
}

export function useCreateProduct(props: Params) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey })
      props.onSuccessCallback()
    },
    onError: (err) => {
      props.onFailCallback(err.message)
    },
  })
}

export function useUpdateProduct(props: Params) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey })
      props.onSuccessCallback()
    },
    onError: (err) => {
      props.onFailCallback(err.message)
    },
  })
}

export function useDeleteProduct(props: Params) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey })
      props.onSuccessCallback()
    },
    onError: (err) => {
      props.onFailCallback(err.message)
    },
  })
}
