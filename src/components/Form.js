import axios from 'axios';
import React, { useEffect } from 'react';


const Form = () => {
    
   
 
   

    return (
        <div className="form-component">
            <div className="form-container">
                <form>
                    <input type="text" placeholder="Enter song title" id="search-input" />
                    <input type="submit" value="Search" />
                   
                </form>
            </div>
           
        </div>
        
    );
};

export default Form;