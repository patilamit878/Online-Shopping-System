import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const AddBank = () => {
  return (
    <Box
      width={500}
      height={250}
      boxShadow={2}
      p={2}
      color="blue"
      margin="100px 500px "
      textAlign="center"
    >
      <div>
        <Typography variant="h4" marginBottom={1}>
          Add Bank Details
        </Typography>
        <TextField fullWidth id="outlined-required" label="Account Holder Name" />
        <br />
        <br />
        <TextField fullWidth id="outline-required" label="Account Number" />
        <br />
        <br />
        <Button variant="contained" fullWidth>
          Add Bank
        </Button>
      </div>
    </Box>
  )
}

export default AddBank
