import React from "react";
import styled from "styled-components";


// const ImageELement = styled.div`
// width: 90%;
// margin-left: 5%;
// margin-right: 5%;
// height:150px;
// `;

const Title = styled.h1`
color: blue;
line-height: 1.5rem;
background: rgb(222,222,222);
`;

// const TextArea = styled.area`
// display: flex;
// width: 90%;
// margin-left: 5%;
// margin-right: 5%;
// background: rgb(222,222,222);
// line-height: 1.5rem;
// `;

const ObjectProperties = styled.p`
display: flex;

`;

export default function StarwarElemt(props){
    return (
        <>
            
            <Title>
                {props.name}
            </Title>
      
            <ObjectProperties>
                {props.height}
            </ObjectProperties>

             <ObjectProperties>
                {props.mass}
            </ObjectProperties>

            <ObjectProperties>
                {props.bitthyear}
            </ObjectProperties>

             <ObjectProperties>
                {props.gender}
            </ObjectProperties>

             <ObjectProperties>
                {props.homeworld}
            </ObjectProperties>

             <ObjectProperties>
                {props.fils}
            </ObjectProperties>
             
             
        </>
    )
}