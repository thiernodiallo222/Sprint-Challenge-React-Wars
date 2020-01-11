import React, { useState, useEffect  } from "react";
import axios from "axios";
import StarwarElement from "./StarwarElement";




export default function StarwarList() {
    
    const [Stars, setStars] = useState([]);

useEffect(() => {
    

axios
            .get(`https://swapi.co/api/people/25`)
        

            // using API url to fetch data
            
            .then(res => {

                console.log(res); // displaying data to check its structure

                setStars(res.data);

                // set the state of the photo
    
            })
            .catch(err => {
                console.log(`Sorry, data was not returned !`, err);
            });      
}, []);
    
    // console.log(`Stars are: ${Stars}`); or 
     console.log("My Stars object:", Stars);

    return (
        <div className="Stars">
            
            {
            <StarwarElement
                            // title={photos.title}
                            // hdurl={photos.hdurl}
                            // date={photos.date}
                            // copyright={photos.copyright}
                            // explanation={photos.explanation}
                            // url={photos.url}
                           
                        />    
          }      
                        
         </div>
    );
}
