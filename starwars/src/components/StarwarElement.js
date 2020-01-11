import React from "react";
import styled from "styled-components";


// const ImageELement = styled.div`
// width: 90%;
// margin-left: 5%;
// margin-right: 5%;
// height:150px;
// `;

const Title = styled.h3`
width: 100%;
display: flex;
// flex-direction: column;
color: blue;
line-height: 1.4rem;
// background: rgb(222,222,222);
`;

// const FilmSection = styled.div`
// width: 100%;
// display: flex;
// width: 45px;
// padding: 1%;
// flex-flow: row wrap;

// `;

const Container = styled.div`
display: flex;
flex-direction: column;
width: 60%:
margin: 2px;
border: 1px solid gray;
justify-conent: space-evenly;
align-items: center;
background: green;

`;

const ObjectProperties = styled.p`
display: flex;
// flex-direction: column;
width: 90%;
// flex-wrap: wrap;
line-height: 1rem;
margin: 2px;
// border: 1px solid blue;
align-items: left;
`;

export default function StarwarElement(props){
    return (
        <Container>

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
        </Container>
    )
}