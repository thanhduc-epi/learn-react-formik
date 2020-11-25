import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
    name: "",
    email: "",
    channel: "",
    comments: "",
};

const onSubmit = (values) => {
    console.log("Form data", values);
};

const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().required("Required").email("Invalid email format"),
    channel: Yup.string().required("Required"),
});

const YoutubeForm = () => {
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <Field type="text" id="name" name="name" />
                    <ErrorMessage name="name" />
                </div>
                <div className="form-control">
                    <label htmlFor="email">E-mail</label>
                    <Field type="email" id="email" name="email" />
                    <ErrorMessage name="email" />
                </div>
                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <Field type="text" id="channel" name="channel" />
                    <ErrorMessage name="channel" />
                </div>
                <div className="form-control">
                    <label htmlFor="comments">Comments</label>
                    <Field as="textarea" id="comments" name="comments" />
                    <ErrorMessage name="channel" />
                </div>
                <div className="form-control">
                    <label htmlFor="address">Address</label>
                    <Field name="address">
                        {(props) => {
                            const { field, form, meta } = props;
                            return (
                                <div>
                                    <input type="text" id="address" {...field} />
                                    {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                </div>
                            );
                        }}
                    </Field>
                    <ErrorMessage name="channel" />
                </div>

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default YoutubeForm;
