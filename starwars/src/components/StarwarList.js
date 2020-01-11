import React, { useState, useEffect  } from "react";
import axios from "axios";
import StarwarElement from "./StarwarElement";
import styled from "styled-components";

const Container = styled.div`
display: flex;
width: 33%:
height: fit-content;
`;






export default function StarwarList() {
    
    const [Stars, setStars] = useState([]);

useEffect(() => {
    

axios
            .get(`https://swapi.co/api/people/30`)
        

            // using API url to fetch stars
            
            .then(res => {

                // console.log(res); // displaying stars to check its structure

                setStars(res.stars);

                // set the state of the photo
    
            })
            .catch(err => {
                console.log(`Sorry, stars was not returned !`, err);
            });      
}, []);
    
    // console.log(`Stars are: ${Stars}`); or 
    //  console.log("My Stars object:", Stars);

    return (
        <Container>
            
            {
                Stars.map(stars => {
                    return (
                        <StarwarElement
                            key = {stars.mass}
                            name={stars.name}
                            height={stars.height}
                            date={stars.mass}
                            birthyear={stars.birthday}
                            gender={stars.gender}
                            homeworld={stars.homeworld}
                            fils={stars.fils}
                        />
                    );
                
                }  
                )
            }          
                        
        </Container>
    )
}


 