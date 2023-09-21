import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({ text, func }) => {

  return (

    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2, backgroundColor: '#90bb3e' }}
      onClick={() => func && func()}
    >
      {text}
    </Button>

  )
}
export default CustomButton