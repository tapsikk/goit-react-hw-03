// import style from "./ContactList.module.css";
import Contact from "./contact/Contact";

const ContactList = ({ search }) => {
  return (
    <ul>
      {search.map((item) => (
        <Contact
          key={item.id} 
          search={item}
          // handleClickDelete={deleteContacts}
        />
      ))}
    </ul>
  );
};

export default ContactList;
