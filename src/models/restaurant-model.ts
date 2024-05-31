class RestaurantClass {
  image: string
  title: string
  infos: string[]
  description: string
  id: number
  constructor(
    image: string,
    title: string,
    infos: string[],
    description: string,
    id: number
  ) {
    this.image = image
    this.title = title
    this.infos = infos
    this.description = description
    this.id = id
  }
}
export default RestaurantClass
