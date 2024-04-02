import style from "./contactStyle.module.scss";
import { FaUser, FaPhoneAlt } from "react-icons/fa";

const Contact = ({ searchContact, clickDelete }) => {
  const { id, name, number } = searchContact;
  return (
    <li className={style.itemLi}>
      <p>
        <FaUser />
        {name}
      </p>
      <p>
      <a className={style.tel} href={`tel:${number}`}>
        <FaPhoneAlt />
        {number}
        </a>
      </p>
      <button 
      type="button"
      onClick={() => clickDelete(id)}>Delete</button>
    </li>
  );
};

export default Contact;
