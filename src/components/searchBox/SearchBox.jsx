import { Formik, Form, Field } from 'formik';
import style from "./SearchBox.module.css";

const SearchBox = () => {
  const handleSubmit = (values, { resetForm }) =>{
    console.log(values);
    resetForm();
  }

  return (
    <Formik initialValues={{ Search: ''}} onSubmit={handleSubmit}>
      <Form className={style.SearchBox}>
        <label>Find contacts by name</label>
        <Field type="text" name="name" />
      </Form>
    </Formik>
  );
};

export default SearchBox;