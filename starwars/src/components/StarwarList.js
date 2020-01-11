import React, { useState, useEffect  } from "react";
import axios from "axios";
import StarwarElement from "./StarwarElement";
// import styled from "styled-components";

// const Container = styled.div`
// display: flex;
// width: 33%:
// `;






export default function StarwarList() {
    
    const [stars, setStars] = useState([]);

useEffect(() => {
    

    axios
        .get(`https://swapi.co/api/people/`) // using API url to fetch stars
       
         .then(response => {
       console.log(response.data.results); // displaying stars to check its structure
             setStars(response.data.results); // set the state of the photo
         })
            .catch(err => {
                console.log(`Sorry, stars was not returned !`, err);
            });      
}, []);
    console.log("stars is now: ", stars);

    return (
        <div class = "wrapper">
            
            {
                stars.map(stars => {
                    return (
                        <StarwarElement
                            key = {stars.birth_year % 7}
                            name={stars.name}
                            height={stars.height}
                            mass={stars.mass}
                            birth_year={stars.birth_year}
                            gender={stars.gender}
                            homeworld={stars.homeworld}
                            // films={stars.films}
                        />
                    );
                
                }  
                )
            }          
                        
        </div>
    )
}


 