import axios from 'axios'
import z from 'zod'

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL!}/api/products`,
})

// GET all products
export const getProducts = async () => {
  const res = await api.get(`/`)
  const { data } = res.data

  return data
}

// GET single product
export const getProduct = async (id: number) => {
  const res = await api.get(`//${id}`)

  const { data } = res.data

  return data
}

export const productSchema = z.object({
  name: z.string({ required_error: 'Name is required' }).min(3),
  description: z.string().nullish(),
  price: z.number().min(1),
  stock: z.number().gte(0),
})

type ProductPayload = z.infer<typeof productSchema>

// CREATE product
export const createProduct = async (payload: ProductPayload) => {
  const res = await api.post('/', payload)
  const { data } = res.data

  return data
}

// UPDATE product
export const updateProduct = async ({ id, payload }: { id: number; payload: ProductPayload }) => {
  const res = await api.put(`/${id}`, payload)
  const { data } = res.data

  return data
}

// DELETE product
export const deleteProduct = async (id: number) => {
  const res = await api.delete(`/${id}`)
  const { data } = res.data

  return data
}
