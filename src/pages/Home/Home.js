import React from 'react'
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <div className="home">
                <h1>Bullet Journal</h1>
                <p>Description</p>
                <div className="home__bottom">
                    <Link to="/profile">
                    <buttom>here</buttom>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;