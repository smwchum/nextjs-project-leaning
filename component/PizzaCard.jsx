import Image from "next/image"
import styles from "../styles/PizzaCard.module.css"

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="500" height="500" />
      <h1 className={styles.title}>Fiori di zucca</h1>
      <span className={styles.price}>$19.50</span>
      <p className={styles.desc}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
      </p>
    </div>
  )
}

export default PizzaCard
