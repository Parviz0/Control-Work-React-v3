import React from "react"
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';


function LoadingMoviesData(Component) {
    return function LoadingMoviesData({ isLoading, ...props }) {
        if (!isLoading) return <Component {...props} />

        else return (
            <div>

                <Box sx={{ width: 500 }}>
                  <Skeleton className="SkeletonBruh" />
                  <Skeleton animation="wave" />
                  <Skeleton animation={false} />
                  <Skeleton />
                  <Skeleton animation="wave" />
                  <Skeleton animation={false} />
                </Box>

            </div>
        )
    }
}

export default LoadingMoviesData