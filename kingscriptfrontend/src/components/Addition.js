import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container ,Paper,Button} from '@mui/material';


export default function Addition() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[title,setTitle]=useState('')
    const[body,setBody]=useState('')
    const[additions,setAdditions]=useState([])

  const handleClick=(e)=>{
    e.preventDefault()
    const addition={title,body}
    console.log(addition)
    fetch("http://localhost:8080/addition/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(addition)

  }).then(()=>{
    console.log("New Addition added")
  })
}

useEffect(()=>{
  fetch("http://localhost:8080/addition/getAll")
  .then(res=>res.json())
  .then((result)=>{
    setAdditions(result);
  }
)
},[])
  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><u>Add Addition</u></h1>

    <form noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Title" variant="outlined" fullWidth 
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      />
      <TextField id="outlined-basic" label="Body" variant="outlined" fullWidth
      value={body}
      onChange={(e)=>setBody(e.target.value)}
      />
      <Button variant="contained" color="secondary" onClick={handleClick}>
  Submit
</Button>
    </form>
   
    </Paper>
    <h1>Additions</h1>

    <Paper elevation={3} style={paperStyle}>

      {additions.map(addition=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={addition.id}>
         Id:{addition.id}<br/>
         Title:{addition.title}<br/>
         Body:{addition.body}

        </Paper>
      ))
}


    </Paper>



    </Container>
  );
}