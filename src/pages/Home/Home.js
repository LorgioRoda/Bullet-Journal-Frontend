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
          <Text as="h1">Bullet Journal</Text>
          <Text as="p">Description</Text>
          <div className="home__container__bottom">
            <Link to="/task">
                <SelectButtom>
                    Ready
                </SelectButtom>
            </Link>
          </div>
        </div>
      </SCHome>
    </div>
  );
}

export default Home;
