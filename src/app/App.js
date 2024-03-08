import React from 'react';
import { Routes , Route } from 'react-router-dom';
import { QueryClientProvider , QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Courses from '../pages/Courses';

const App = () => {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/courses' element={<Courses />}/>
            </Routes>
            <ReactQueryDevtools position='top-right'/>
        </QueryClientProvider>
    )
}

export default App;