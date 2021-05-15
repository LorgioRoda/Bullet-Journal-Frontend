import React from 'react'
import { Link } from "react-router-dom";
import SCHome from './Home.styled';

function Home() {
    return (
        <div>
            <SCHome>
                <h1>Bullet Journal</h1>
                <p>Description</p>
                <div className="home__bottom">
                    <Link to="/task">
                    <buttom>here</buttom>
                    </Link>
                </div>
            </SCHome>
        </div>
    )
}

export default Home;