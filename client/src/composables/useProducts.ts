import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from '@/api/products'
import type { Product } from '@/types/types'

const queryKey = ['products']

export function useProductById(id: number) {
  return useQuery<Product>({
    queryKey,
    queryFn: () => getProduct(id),
  })
}

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
      // @ts-ignore
      props.onFailCallback(err.response.data.message)
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
      // @ts-ignore
      props.onFailCallback(err.response.data.message)
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
      // @ts-ignore
      props.onFailCallback(err.response.data.message)
    },
  })
}
