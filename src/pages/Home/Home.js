import React from "react";
import { Link } from "react-router-dom";
import SelectButtom from "../../components/SelectButtom/SelectButtom";
import SCHome from "./Home.styled";
import Text from "./Home.styled";
function Home() {
  return (
    <div>
      <SCHome>
        <div className="div-h1">
          <Text className="h1" as="h1">
            Bullet Journal
          </Text>
          <Text className="description-extends" as="p">
            La App de TAREAS que te hace la vida mas FÁCIL.
          </Text>
          <img className="imagen" src="../../../movil.png" alt="tareas"></img>

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
