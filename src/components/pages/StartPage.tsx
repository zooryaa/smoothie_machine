import {Button, Box, Typography} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import SmoothieService from '../../Services/SmoothieService';
import React from "react";

function StartPage() {

  const navigate = useNavigate();
  const handleClick = () => {
    SmoothieService.start("Process_1adksqn").then(() => {
      SmoothieService.getValues("Process_1adksqn").then((res) => {
        return SmoothieService.completeStart(res.data[0].id )
      });
    }
  )}
  

  return (
      <Box sx={{height: "100vh", width: "100vw", background: "linear-gradient(180deg, rgba(190,218,16,1) 0%, rgba(84,228,10,1) 42%, rgba(0,255,222,1) 100%)", alignItems: "center", justifyContent: "center", overflow: "hidden"}}>
        <Box sx={{height: "50vh", width: "40vw", ml: "30vw", mr: "30vw", mt: "25vh", mb: "25vh"}}>
          <Typography sx={{fontSize: 32, color: "#fff", fontWeight: 600}}>SMOOTHIE MIXER</Typography>
          <Button onClick={()=>{navigate("/form")}} variant="contained">Create your smoothie</Button>
        </Box>
      </Box>
  )
    }

export default StartPage