import React from 'react'
import ProductCarousel from './ProductCarousel'
import GoToButton from './GoToButton'

type productItem = {
  image: string
  title: string
  subtitle: string
  description: string
  price: Number
  path: string
}

interface Props {
  title: string
  image: string
  description: string
  itemList: productItem[]
  buttonText: string
  buttonPath: string
}

const ProductPresentation: React.FC<Props> = ({ title, image, description, itemList, buttonText, buttonPath }) => {
  return (
    <section className='bg-[#C7D8F2]'>
      <div className="overflow-hidden w-full h-64">
        <img className="object-cover w-full md:h-96 duration-500 hover:scale-125" src={image} alt={title} />
      </div>
      <div className="flex flex-col items-center gap-5 p-10 text-center">
        <h2 className='text-white text-4xl font-bold'>{title}</h2>
        <p className='text-[#0E4595] text-lg'>{description}</p>
        <ProductCarousel itemList={itemList} inputsName={title} />
        <GoToButton text={buttonText} path={buttonPath} />
      </div>
    </section>
  )
}

export default ProductPresentation
