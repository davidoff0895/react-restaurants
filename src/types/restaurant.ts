export interface RestaurantEntity {
  id: string
  name: string
  menu: MenuEntity[]
  reviews: ReviewsEntity[]
}
export interface MenuEntity {
  id: string
  name: string
  price: number
  ingredients: string[]
}
export interface ReviewsEntity {
  id: string
  user: string
  text: string
  rating: number
}
