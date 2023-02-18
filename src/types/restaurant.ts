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
  user: UserEntity
  text: string
  rating: number
}
export interface UserEntity {
  id: string
  name: string
}
export interface ProductEntity extends MenuEntity {
  restaurantId: string
}
