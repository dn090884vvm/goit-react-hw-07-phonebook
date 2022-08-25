import { WrapperDiv, Button, Form } from './PhonebookForm.styled';
import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from 'redux/contactsSliser';

export default function PhonebookForm() {
  const [createContact] = useCreateContactMutation();
  const { data } = useFetchContactsQuery();

  const handleSubmit = e => {
    e.preventDefault();

    const target = e.target.elements;

    const isInContacts = data.find(
      contact => contact.name.toLowerCase() === target.name.value.toLowerCase()
    );

    if (isInContacts) {
      alert(`${target.name.value} is already in contacts`);

      return;
    }

    const formDatas = {
      name: target.name.value,
      phone: target.phone.value,
    };

    createContact(formDatas);

    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <WrapperDiv>
        <p>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </WrapperDiv>
      <WrapperDiv>
        <p>Number</p>
        <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </WrapperDiv>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}
