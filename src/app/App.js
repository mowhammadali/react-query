import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Home from '../pages/home/Home';
import Commodity from '../pages/commodity/Commodity ';
import { Routes , Route } from 'react-router-dom';
import { QueryClient , QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

const App = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={ queryClient}>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/products' element={<Commodity />}/>
            </Routes>
            <ReactQueryDevtools position='top-right'/>
        </QueryClientProvider>
    )
}

export default App;