import React from "react";
import { Paper, Button } from '@mui/material';


export default function Card (props) {

    return (
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left",backgroundColor: "rgb(30,38,45)", display:'flex', justifyContent: 'space-between'}} key={props.id}>
        
        <div>

        <h2>{props.title}</h2>
        <div class="multiline colored">
            {props.body}
        </div>

        </div>

        <div>

        <Button sx={{height:'40px', marginRight:'10px'}} color='secondary' variant="contained" href='/Documentation'>Edit</Button>
        <Button sx={{height:'40px', backgroundColor:'red'}} color='secondary' variant="contained" href='/Documentation'>Delete</Button>
        </div>

        </Paper>
    )
}