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
        refreshState();
      })
      .catch((err) => console.error());
  };
  const update = (data) => {
    taskService
      .updateOne(id, data) //Data la info de los botones
      .then(() => {
        refreshState();
      })
      .catch();
  };
  return (
    <SCTask>
      <button className="boton-check" onClick={() => update({ done: !done })}>
        {done ? "☑" : "☐"}
      </button>
      <Text className="text-check">{name}</Text>
      <button
        className="boton-check2"
        onClick={() => update({ priority: !priority })}
      >
        {priority ? "☑  Priority" : "☐ Priority"}
      </button>
      <button className="boton-check3" onClick={() => deleteTask()}>
        ✘
      </button>
    </SCTask>
  );
}
