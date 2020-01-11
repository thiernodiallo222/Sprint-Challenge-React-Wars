import React from "react";
import styled from "styled-components";

const Wrapper = styled.div(`
display: flex;
width: 33%:
heigh: fit-content;
`);

const ImageELement = styled.div(`
width: 90%;
margin-left: 5%;
margin-right: 5%;
height:150px;
`);

const Title = styled.h1(`
color: blue;
line-height: 1.5rem;
background: rgb(222,222,222);
`);

const TextArea = styled.are(`
display: flex;
width: 90%;
margin-left: 5%;
margin-right: 5%;
background: rgb(222,222,222);
line-height: 1.5rem;
`);

const ObjectProperties = styled.p(`
display: flex;

`);

export default function StarwarElemt(props){
    return (
        <Wrapper>
            
            <Title>
                 {/* title place holder */}
            </Title>

            <ImageELement>
                {/* // img place holder */}
            </ImageELement>
      
            <TextArea>
                {/* //text place holder */}
            </TextArea>
            <ObjectProperties>
                {/* //any other  property place holder */}
            </ObjectProperties>
        </Wrapper>
    )
}