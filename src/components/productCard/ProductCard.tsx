import styles from './productCard.module.css'

interface IShopDataProps {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string;
    image: string;
    rating?: {
        rate: number,
        count: number};
  } 

function ProductCard({id, title, price, description, category, image}: IShopDataProps) {
  return (
    <div>
      <h4>{title}</h4>
      <p>Description: {description}</p>
      <img width={200} src={image} alt="" />
      <div>

      </div>
      
    </div>
  )
}

export default ProductCard;