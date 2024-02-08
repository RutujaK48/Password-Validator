import React from 'react'
import { Formik, Form, Field } from 'formik'
export default function FormDemo() {
    return (
        <div>
            <Formik initialValues={{name:'',Email:'',number:''}} onSubmit={(values,actions)=>{alert(JSON.stringify(values))}}  >
                <Form>
                    <label>Name</label>
                    <Field type="text" name="name"></Field><br/>
                    <label>Email ID:</label>
                    <Field type="email" name="Email"></Field><br/>
                    <label>age</label>
                    <Field type="number" name="number" ></Field><br/>
                    <button type='submit'>submit</button>
                </Form>
            </Formik>


        </div>
    )
}
