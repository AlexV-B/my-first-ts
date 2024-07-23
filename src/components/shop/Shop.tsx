import { useEffect, useState } from "react"
import styles from './shop.module.css'
import ProductCard from "../productCard/ProductCard";


interface IShopData {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
      rate: number,
      count: number
    }
}

export default function Shop() {


const [shopData, setShopData] = useState<IShopData[]>([]);

const fetchShop = async () => {
    const res = await fetch (`https://fakestoreapi.com/products`);
    const data = await res.json();
    setShopData(data);
}

useEffect(()=> {
    fetchShop()
},[])

  return (
    <>
    <h4>✨ Shop 🔮 </h4>

    {ProductCard.length > 0 && (
        <div className={styles.container}>
        {shopData.map((product) => (
            <div className={styles.shopGrid}>
                <ProductCard 
                title={product.title} 
                description={product.description} 
                category={product.category} 
                image={product.image} 
                id={0} 
                price={0} />
            </div>
    ))}

            
        </div>
    )}
    
    
  </>










  )
}




// ## задание

// 1. Создайте новый компонент Shop.tsx.
// 2. В нем сделайте fetch запрос на `https://fakestoreapi.com/products` с данными о продуктах
// 3. Отобразите данные в карточках с grid стилизацией.
// 4. Вынесите карточку с данными о продукте в отдельный компонент ProductCard.tsx и данные прокидывайте через props.