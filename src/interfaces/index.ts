export interface ProductType{
  id: number
  title: string
  price: any
  description: string
  category: string
  quantity: number
  image: string
  rating: {rate: number, count: number}
}