import { useState } from "react";
import "../css/styles.css";
import styles from "../css/button.module.css";

export default function MyCont() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }

  function diminuir() {
    setContador(contador - 1);
  }

  if (contador > 6) {
    return (
      <div className="container">
        <h1>Valor muito alto! Diminua!</h1>
        <button className={styles.myButton} onClick={aumentar}>
          Aumentar...
        </button>
        <button className={styles.myButton} onClick={diminuir}>
          Diminuir...
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Meu Contador : </h1>
      <h3>{contador}</h3>
      {contador > 29 ? <h1>Valor Grande Demais! Diminua!</h1> : null}
      <button className={styles.myButton} onClick={aumentar}>
        Aumentar...
      </button>
      <button className={styles.myButton} onClick={diminuir}>
        Diminuir...
      </button>
    </div>
  );
}
