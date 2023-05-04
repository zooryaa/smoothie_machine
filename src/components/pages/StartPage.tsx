import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function StartPage() {

  const navigate = useNavigate();

  return (
    <Button onClick={()=>{navigate("/form")}}>Start</Button>
  )
}

export default StartPage