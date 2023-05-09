import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import SmoothieService from '../../Services/SmoothieService';

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
    <Button 
      onClick={()=>{
        handleClick
        navigate("/form");
      }}
    >Start</Button>
  )
    }

export default StartPage