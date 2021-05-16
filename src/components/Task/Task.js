import React from "react";
import  Text  from "../text";
export default function Task({name, done}) {
  return (
    <div>
    <button>{done ? "Eliminar tarea" : "Listo"}</button>
      <Text>{name}</Text>
    </div>
  );
}
