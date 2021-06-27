import React from 'react';
import "./NoResult.scss";

const NoResult = (props:any) => {

    const backToHome = () =>{
        props.setError(true);
    }
    
    return (
        <div>
            
            <h1>Sorry the Pokèmon you're looking for doesn't exist!</h1>
            <button onClick={backToHome}>Click here to back to the Home Page!</button>

        </div>
    )
}

export default NoResult;
