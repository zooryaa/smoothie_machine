import { Button, FormControlLabel, Switch } from '@mui/material';
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
    <div>
      <h1>Smoothie done:</h1>
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

          <Button type="submit" disabled={!toggle}>Receive Smoothie</Button>
        </Form>
      )}
    </Formik>
    </div>
  )
}

export default ReceivePage