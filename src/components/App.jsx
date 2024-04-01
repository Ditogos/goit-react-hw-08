import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import ContactFilter from "./ContactFilter/ContactFilter";
import { Container } from "./App.styled";
import { fetchContacts } from "../redux/contactsOps";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactFilter />
      <ContactList />
    </Container>
  );
}
