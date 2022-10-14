import styles from "../styles/PizzaList.module.css"
import PizzaCard from "./PizzaCard"

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>the best pizza in town</h1>
      <p className={styles.desc}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam nobis
        repellat quibusdam sed modi. Quibusdam, tenetur ratione, harum
        distinctio, recusandae eius adipisci reprehenderit eligendi dolores
        debitis quae. Quas maxime at excepturi velit eligendi soluta eveniet
        natus officiis? Amet voluptatibus nostrum earum temporibus corporis
        dolore repellendus quam, repudiandae facere voluptates libero iusto
        dicta delectus eos tenetur ipsum laudantium cumque non minima! Ipsa sit
        esse, accusantium minus omnis eius et, non incidunt consectetur
        explicabo a, consequatur perspiciatis blanditiis excepturi.
      </p>
      <div className={styles.wrapper}>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
      </div>
    </div>
  )
}

export default PizzaList
