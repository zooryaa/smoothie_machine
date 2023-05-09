import {Box, Button, FormControlLabel, Switch, Typography} from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ReceivePage() {
  const navigate = useNavigate();

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    toggle ? setToggle(false) : setToggle(true);
    console.log('toggle State: ', toggle);
  };

  return (

        <Box sx={{height: "100vh", width: "100vw", background: "linear-gradient(180deg, rgba(190,218,16,1) 0%, rgba(84,228,10,1) 42%, rgba(0,255,222,1) 100%)", alignItems: "center", justifyContent: "center", overflow: "hidden"}}>
            <Box sx={{height: "50vh", width: "40vw", ml: "30vw", mr: "30vw", mt: "25vh", mb: "25vh"}}>
                <Typography sx={{fontSize: 32, color: "#fff", fontWeight: 600}}>YOUR SMOOTHIE IS DONE</Typography>
                <Formik
                    initialValues={{
                        switch: '',
                    }}
                    onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 500));
                        alert("Thank you for using the smoothie machine");
                        navigate("/start")
                    }}
                >
                    {({ values }) => (
                        <Form>
                            <div role="group" aria-labelledby="my-radio-group">
                                <FormControlLabel
                                    control={
                                        <Field
                                            label="Add Cup"
                                            name="rememberMe"
                                            component={Switch}
                                            onChange={handleToggle}
                                            checked={toggle} // can't set/get state here
                                            // value={toggle} // or here
                                        />
                                    }
                                    label="Add Cup"
                                />
                            </div>

                            <Button type="submit" disabled={!toggle} variant="contained">Receive Smoothie</Button>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Box>

  )
}

export default ReceivePage