import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function MixingPage() {
  
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/receive"), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>MixingPage</div>
  )
}

export default MixingPage