import { Box, Card, CardMedia } from '@mui/material'
import React from 'react'

const Image = () => {
  return (
    <Box width={700} margin="100px 50px ">
      <Card>
        <CardMedia
          component="img"
          height="550"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyq3QRHeHOSgXqWUlgdgOw8It5aHKr4GbnHA&usqp=CAU"
        />
      </Card>
    </Box>
  )
}

export default Image
