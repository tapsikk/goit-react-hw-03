import { Formik, Form, Field, ErrorMessage } from "formik";
import { v4 as uuidv4 } from 'uuid';
import style from "./contactForm.module.scss";
import * as Yup from "yup";

const TourChema = Yup.object().shape({
  name: Yup.string().trim().min(3).max(50).required(),
  number: Yup.string().trim().min(3).max(50).required(),
});


  const nameFieldId = uuidv4();
  const phoneFieldId = uuidv4();
  const buttonFieldId = uuidv4();

  const ContactForm = () => {
    const handleSubmit = (values, { resetForm }) => {
      const nextSubmit = {
        ...values,
        id: uuidv4(),
        name: values.name.trim(),
        number: values.name.trim(),
      };
      // onAddTour(nextSubmit);
      // onSubmit(nextSubmit); 
      console.log(nextSubmit);
      resetForm();
    };

    

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={TourChema}
    >
      <Form className={style.form}>
        <label>Name</label>
        <Field type="text" name="name" id={nameFieldId} />
        <ErrorMessage name="name" component={"p"} style={{ color: 'red' }}/>
        <label>Number</label>
        <Field type="tel" name="number" id={phoneFieldId} />
        <ErrorMessage name="number" component={"p"} style={{ color: 'red' }}/>
        <button type="submit" id={buttonFieldId}>
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
