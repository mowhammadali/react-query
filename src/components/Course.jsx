import React from 'react';
import styled from "styled-components";

const Course = ({name , price}) => {
    return (
        <Card>
            <h2>course name: {name}</h2>
            <p>price: {price}</p>
        </Card>
    )
}

const Card = styled.div`
    width: 30%;
    padding: 10px;
    box-shadow: 2px 2px 3px 3px #e2e2e2;
`

export default Course;