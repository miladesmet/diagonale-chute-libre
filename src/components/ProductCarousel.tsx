import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface ProductCarouselItemProps {
  image: string
  title: string
  subtitle: string
  description: string
  price: Number
  className: string
  htmlFor: string
  path: string
}

const ProductCarouselItem: React.FC<ProductCarouselItemProps> = ({ image, title, subtitle, description, price, className, htmlFor, path }) => (
  <label
    htmlFor={htmlFor}
    className={`${className} min-w-[310px] max-w-[310px] h-[390px] bg-white duration-[.6s] ease-in-out motion-reduce:transition-none`}
  >
    <img src={image} alt={title} className="h-[50%] w-full object-cover" />
    <div className="h-[50%] flex flex-col justify-around items-center py-4">
      <h3 className="font-bold text-2xl">{title}</h3>
      <h4 className="font-bold">{subtitle}</h4>
      <p>{description}</p>
      <Link to={path} className="font-bold text-white text-2xl bg-[#4C69A399] min-w-[150px] p-1 duration-300 hover:bg-[#4C69A3]">
        {price?.toString()} €
      </Link>
    </div>
  </label>
)

type productItem = {
  image: string
  title: string
  subtitle: string
  description: string
  price: Number
  path: string
}

interface ProductCarouselProps {
  itemList: productItem[]
  inputsName: string
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ itemList, inputsName }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  return (
    <section className="flex flex-col text-[#4C69A3] text-center m-auto">
      <div
        className={`flex justify-center absolute left-[calc(50%-310px/2)] duration-[.6s] ease-in-out motion-reduce:transition-none`}
        // Ne pas utilier de classes tailwind pour la mise en prod
        style={{ transform: `translate(${currentIndex*-310}px, 0px)` }}
      >
        {itemList.map((item, i) => (
          <ProductCarouselItem
            key={i}
            {...item}
            htmlFor={`${inputsName}${i}`}
            className={currentIndex === i ? 'opacity-100' : 'opacity-50 scale-75'}
          />
        ))}
      </div>
      <div className="flex gap-5 justify-center py-5 mt-[390px]">
        {itemList.map((_, i) => (
          <input
            type="radio"
            id={`${inputsName}${i}`}
            name={inputsName}
            value={i}
            key={i}
            defaultChecked={i === 0}
            onChange={e => setCurrentIndex(Number(e.target.value))}
            className="w-4 h-4 cursor-pointer text-[#4C69A3] border-[#4C69A3] border-1 focus:ring-[#4C69A399]"
          />
        ))}
      </div>
    </section>
  )
}

export default ProductCarousel
