import React from "react";
import styled from "styled-components";


// const ImageELement = styled.div`
// width: 90%;
// margin-left: 5%;
// margin-right: 5%;
// height:150px;
// `;

const Title = styled.h3`
width: 90%;
display: flex;
color: blue;
line-height: 1.4rem;
`;



const ObjectProperties = styled.p`
display: flex;
width: 90%;
line-height: 1rem;
margin-top: 2px;
align-items: left;
`;

export default function StarwarElement(props){
    return (
        <>

            {/* <ObjectProperties>
                {props.mass % 7}
            </ObjectProperties>
             */}
            <Title>
                Name: {props.name}
            </Title>
      
            <ObjectProperties>
                Height: {props.height} Ft
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

             {/* <FilmSection>
               Films: {props.films}
            </FilmSection>
                */}
        </>
    )
}