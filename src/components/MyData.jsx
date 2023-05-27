import { useEffect, useState } from "react";

const tarefas = [
  { id: 1, title: "Minha primeira tarefa" },
  { id: 2, title: "Minha segunda tarefa" },
  { id: 3, title: "Minha terceira tarefa" },
  { id: 4, title: "Minha uqarta tarefa" },
];
export default function MyData() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    async function buscarDados() {
      const resultado = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      return await resultado.json();
    }
    buscarDados().then((res) => setTarefas(res));
  }, []);
  return (
    <div>
      <h1>Buscando Dados</h1>
      <ol>
        {tarefas.map((tarefa) => {
          return (
            <div>
              <li key={tarefa.id}>{tarefa.title}</li>
              {tarefa.completed ? " - Tarefa Concluída " : null}
            </div>
          );
        })}
      </ol>
    </div>
  );
}
