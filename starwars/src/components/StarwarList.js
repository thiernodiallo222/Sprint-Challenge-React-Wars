import React, { useState, useEffect  } from "react";
import axios from "axios";
import StarwarElement from "./StarwarElement";
import styled from "styled-components";

const Wrapper = styled.div`
width: 100%;
height: vh;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
`;
const Card= styled.div`
display: flex;
flex-direction: column;
width: 33%;
margin-bottom: 5px;
justify-conent: space-evenly;
align-items: center;
background: rgb(231,232,233);
box-sizing: border-box;
border-radius: 5px;


`;





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
        <Wrapper>
            
            {
                stars.map(stars => {
                    return (
                        <Card>
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
                            </Card>
                    );
                
                }  
                )
            }          
                        
        </Wrapper>
    )
}


 