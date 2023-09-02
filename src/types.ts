export {
  Option,
  Picture,
  Article,
  Booking
}

type Option = {
  description: string
  id: number
  priceUpdate: number
  title: string
  type: string
}

type Picture = {
  id: number
  originalName: string
}

type Article = {
  Options: Option[]
  Pictures: Picture[]
  description: string
  id: number
  price: number
  title: string
}

type Booking = {
  ArticleId: number
  article: Article
  CartId: number
  id: string
  jumpDate: string
  jumperAge: number
  jumperFirstame: string
  jumperName: string
  jumperWeight: number
}