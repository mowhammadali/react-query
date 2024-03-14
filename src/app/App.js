import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Home from '../pages/home/Home';
import Commodity from '../pages/commodity/Commodity ';
import Details from '../components/details/Details';
import { Routes , Route } from 'react-router-dom';
import { QueryClient , QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

const App = () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                cacheTime: 5000,
                useErrorBoundary: true,
            }
        }
    });

    return (
        <QueryClientProvider client={ queryClient}>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/products' element={<Commodity />}/>
                <Route path='/product/:productId' element={<Details />}/>
            </Routes>
            <ReactQueryDevtools position='bottom-right'/>
        </QueryClientProvider>
    )
}

export default App;