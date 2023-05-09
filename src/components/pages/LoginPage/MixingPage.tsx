import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {Box, Button, Typography} from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

function MixingPage() {
  
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/receive"), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (  <Box sx={{height: "100vh", width: "100vw", background: "linear-gradient(180deg, rgba(190,218,16,1) 0%, rgba(84,228,10,1) 42%, rgba(0,255,222,1) 100%)", alignItems: "center", justifyContent: "center", overflow: "hidden"}}>
        <Box sx={{height: "50vh", width: "40vw", ml: "30vw", mr: "30vw", mt: "25vh", mb: "25vh"}}>
          <Typography sx={{fontSize: 32, color: "#fff", fontWeight: 600}}>YOUR SMOOTHIE IS MIXING</Typography>
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        </Box>
      </Box>
  )
}

export default MixingPage