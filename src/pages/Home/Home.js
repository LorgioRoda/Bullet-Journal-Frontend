import React from "react";
import { Link } from "react-router-dom";
import SelectButtom from "../../components/SelectButtom/SelectButtom";
import SCHome from "./Home.styled";
import Text from "./Home.styled";
function Home() {
  return (
    <div>
      <SCHome>
        <div className="home">
          <Text className="h1-home" as="h1">
            Bullet Journal
          </Text>
          <img
            className="imagen"
            src="https://s3.amazonaws.com/ft-docs/en/to-do-list-2.jpg"
            alt="tareas"
          ></img>
          <Text className="description" as="p">
            Descripción:
          </Text>
          <Text className="description-extends" as="p">
            Aplicación para crear listas de Tareas y Habitos de vida.<br></br>
            Nunca mas se te olvidara nada.
          </Text>
          <div className="home-container-bottom">
            <Link to="/task">
              <SelectButtom className="boton-ready">Ready</SelectButtom>
            </Link>
          </div>
        </div>
      </SCHome>
    </div>
  );
}

export default Home;
