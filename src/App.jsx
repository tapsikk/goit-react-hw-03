import { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import ContactForm from "./components/contactForm/ContactForm";
import SearchBox from "./components/searchBox/SearchBox";
import ContactList from "./components/contactList/ContactList";

const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
};
export default App;
