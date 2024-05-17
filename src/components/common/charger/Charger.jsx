import { Skeleton } from '@mui/material'
import React from 'react'


const Charger = () => {
  return (<div className='charger'>
    
				<Skeleton variant="text" sx={{ fontSize: "1rem" }} width={250} />
				<Skeleton variant="rectangular" width={300} height={300} />			
			
    
 </div> )
}

export default Charger