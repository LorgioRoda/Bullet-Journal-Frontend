import React from "react";
import TaskService from "../../Services/task.service";
import Text from "../text";
import SCTask from "./Task.styles";

export default function Task({ name, done, priority, id, refreshState }) {
  //Props
  const taskService = new TaskService(); //Llamamos a task de la base de datos
  const deleteTask = () => {
    //Eliminamos cada tarea
    taskService
      .deleteOne(id)
      .then(() => {
        console.log("Delete");
        refreshState()
      })
      .catch((err) => console.error());
  };
  const update = (data) => {
    taskService
      .updateOne(id, data) //Data la info de los botones
      .then(() => {
        console.log("Updated");
        refreshState();
      })
      .catch();
  };
  return (
    <SCTask>
      <button onClick={() => update({ done: !done })}>
        {done ? "Eliminar tarea" : "Listo"}
      </button>
      <Text>{name}</Text>
      <button onClick={() => update({ priority: !priority })}>
        {priority ? "Marcar como no prioritario" : "Marcar como prioritario"}
      </button>
      <button onClick={() => deleteTask()}>Eliminar</button>
    </SCTask>
  );
}
