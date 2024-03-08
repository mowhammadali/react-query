import React from "react";
import styled from "styled-components";
import axios from 'axios';
import Course from "../components/Course";
import Count from "../components/Count";
import { useQuery } from 'react-query';

const Courses = () => {
    const query = useQuery('courses' , fetchCourse , { cacheTime: 5000 });
    const { data , isLoading } = query;

    async function fetchCourse () {
        try {
            const response = await axios.get('http://localhost:3001/courses');
            return response;
        }
        catch (err) {
            return err.message;
        }
    }

    return (
        <div>
            <Title>Course Count: <Count /> </Title>
            <Container>
                {
                    isLoading ? <h5>Loading ....</h5>
                    :
                    data?.data?.map(course => <Course key={course.id} {...course}/>)
                }
            </Container>
        </div>
    );
};

const Container = styled.div`
    margin: 40px 0;
    padding: 0 30px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
`

const Title = styled.h1`
    text-align: center;
`

export default Courses;
