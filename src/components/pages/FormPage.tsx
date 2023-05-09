import React from 'react'
import { Field, Form, Formik, useFormik } from 'formik';
import {Box, Button, Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function FormPage() {

  const navigate = useNavigate();

  return (

        <Box sx={{height: "100vh", width: "100vw", background: "linear-gradient(180deg, rgba(190,218,16,1) 0%, rgba(84,228,10,1) 42%, rgba(0,255,222,1) 100%)", alignItems: "center", justifyContent: "center", overflow: "hidden"}}>
            <Box sx={{height: "50vh", width: "40vw", ml: "30vw", mr: "30vw", mt: "25vh", mb: "25vh"}}>
                <Typography sx={{fontSize: 32, color: "#fff", fontWeight: 600}}>CHOOSE YOUR FRUIT:</Typography>
                <Formik
                    initialValues={{
                        picked: '',
                    }}
                    onSubmit={async () => {
                        await new Promise((r) => setTimeout(r, 500));
                        alert("You started a smoothie")
                        navigate("/mixer")
                    }}
                >
                    {({ values }) => (
                        <Form>
                            <div role="group" aria-labelledby="my-radio-group">
                                <label>
                                    <Field type="radio" name="picked" value="Mango" />
                                    Mango
                                </label>
                                <br/>
                                <label>
                                    <Field type="radio" name="picked" value="Orange" />
                                    Orange
                                </label>
                                <div>
                                <Typography sx={{fontSize: 20, color: "#fff", fontWeight: 500}}>Picked: {values.picked}</Typography>
                                </div>
                            </div>

                            <Button type="submit" disabled={values.picked === ""} variant="contained">Start mixer</Button>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Box>

  )
}