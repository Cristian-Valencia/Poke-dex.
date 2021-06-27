import React from 'react';
import { Link } from 'react-router-dom';
import "./NoResult.scss";

const NoResult = (props:any) => {

    const backToHome = () =>{
        props.setError(false);
    }
    
    return (
        <div>
            
            <h1>Sorry the Pokèmon you're looking for doesn't exist!</h1>

            <Link to="/">
                <button onClick={()=>backToHome()}>Click here to back to the Home Page!</button>
            </Link>
            

        </div>
    )
}

export default NoResult;
