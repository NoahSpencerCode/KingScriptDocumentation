import React from "react";
import { Paper, Button } from '@mui/material';


export default function Card (props) {

    return (
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left",backgroundColor: "rgb(30,38,45)"}} key={props.id}>
        
        <h2>{props.title}</h2>
        <div class="multiline colored">
            {props.body}
        </div>

        <Button color='secondary' variant="outlined" href='/Documentation'>Documentation {'>'}</Button>

        </Paper>
    )
}