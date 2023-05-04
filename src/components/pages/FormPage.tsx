import React from 'react'
import { Field, Form, Formik, useFormik } from 'formik';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function FormPage() {

  const navigate = useNavigate();

  return (
    <div>
      <h1>Chose your fruit:</h1>
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
            <div>Picked: {values.picked}</div>
          </div>

          <Button type="submit" disabled={values.picked === ""}>Start mixer</Button>
        </Form>
      )}
    </Formik>
    </div>
  )
}