import React from 'react';
import { Skeleton  } from '@mui/material';

const BoxLoading = () => {
  return (
    <div className='product-container'>
        <Skeleton variant="rectangular" width='100%' height={30} 
            sx={{marginBottom: 0.5}}/>
        <Skeleton variant="rectangular" width='100%' height={120} 
             sx={{marginBottom: 2}}/>
        <Skeleton variant="rectangular" width='100%' height={240} 
            sx={{marginBottom: 0.5}}/>
        <Skeleton variant="rectangular" width='100%' height={20} />
    </div>
  )
}

export default BoxLoading;