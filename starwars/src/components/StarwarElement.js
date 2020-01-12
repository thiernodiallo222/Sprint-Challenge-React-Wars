import React from "react";
import styled from "styled-components";


const Title = styled.h3`
width: 90%;
display: flex;
color: blue;
line-height: 1.4rem;
`;



const ObjectProperties = styled.p`
// overflow-wrap: break-word;
display: flex;
width: 90%;
line-height: 1rem;
margin-top: 2px;
align-items: left;
// flex-wrap:wrap;
word-break: break-all;
`;

export default function StarwarElement(props){
    return (
        <>

            <Title>
                Name: {props.name}
            </Title>
      
            <ObjectProperties>
                Height: {props.height} Feet
            </ObjectProperties>

             <ObjectProperties>
                Weight: {props.mass} Lbs
            </ObjectProperties>

            <ObjectProperties>
              Year of birth: {props.birth_year}
            </ObjectProperties>

             <ObjectProperties>
               Gender: {props.gender}
            </ObjectProperties>

             <ObjectProperties>
               Home world: {props.homeworld}
            </ObjectProperties>

             <ObjectProperties>
               Films: {props.films}
            </ObjectProperties>
               
        </>
    )
}