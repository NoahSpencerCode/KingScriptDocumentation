import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';



export default function Addition() {
      
    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
          color: 'purple',
          textColor: 'white'
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'purple',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'rgb(200,200,200)',
            textColor: 'white',
            
          },
          '&:hover fieldset': {
            borderColor: 'purple',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'purple',
          },
        },
      });


    const paperStyle={padding: '50px 20px', width: 600, margin: '20px auto', backgroundColor: 'rgb(26, 35, 40)'}

  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1},
            }}
            noValidate
            autoComplete="off"
        >
            <CssTextField id="outlined-basic" label="Title" variant="outlined" />
            
            <CssTextField id="outlined-basic" label="Body" variant="outlined" />
            
        </Box>
        </Paper>
    </Container>
  );
}




