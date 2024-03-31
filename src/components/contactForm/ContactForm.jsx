import { Formik, Form, Field } from 'formik';
import style from "./contactForm.module.css";


const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) =>{
    console.log(values);
    resetForm();
  }

  return (
    <Formik initialValues={{ name: '', number: ''}} onSubmit={handleSubmit}>
      <Form className={style.form}>
        <label>Name</label>
        <Field type="text" name="name" />
        <label>Number</label>
        <Field type="tel" name="number" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
