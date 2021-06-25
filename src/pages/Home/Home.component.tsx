import React from 'react'
import { Link } from 'react-router-dom';
import Input from 'components/Input/Input.component';

const Home = () => {
    return (
        <div>

            <Input />

            <Link to="/about">
                <h2>Click to about page</h2>
            </Link>
            
        </div>
    )
}

export default Home;
