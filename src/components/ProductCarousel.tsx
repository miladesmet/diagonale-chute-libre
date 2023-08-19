import React, { useState } from 'react'

interface ProductCarouselItemProps {
  image: string
  title: string
  subtitle: string
  description: string
  price: Number
  className: string
}

const ProductCarouselItem: React.FC<ProductCarouselItemProps> = ({ image, title, subtitle, description, price, className }) => (
  <div className={className}>
    <img src={image} alt={title} />
    <div>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <p>{description}</p>
      <button>{price?.toString()} €</button>
    </div>
  </div>
)

type productItem = {
  image: string
  title: string
  subtitle: string
  description: string
  price: Number
}

interface ProductCarouselProps {
  itemList: productItem[]
  inputsName: string
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ itemList, inputsName }) => {
  const [currentIndex, setCurrentIndex] = useState<Number>(0)

  return (
    <section>
      <div>
        {itemList.map((item, i) => (
          <ProductCarouselItem key={i} {...item} className={currentIndex === i ? 'block' : 'hidden'} />
        ))}
      </div>
      <div>
        {itemList.map((_, i) => (
          <input type="radio" name={inputsName} value={i} key={i} defaultChecked={i === 0} onChange={e => setCurrentIndex(Number(e.target.value))} />
        ))}
      </div>
    </section>
  )
}

export default ProductCarousel
