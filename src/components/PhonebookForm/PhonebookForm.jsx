import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/phonebookActions';
import { WrapperDiv, Button, Form } from './PhonebookForm.styled';
export default function PhonebookForm() {
  const dispatch = useDispatch();

  const contactsForChecking = useSelector(
    state => state.phonebookReducer.contacts
  );

  const handleSubmit = e => {
    e.preventDefault();

    const target = e.target.elements;

    const isInContacts = contactsForChecking.find(
      contact => contact.name.toLowerCase() === target.name.value.toLowerCase()
    );

    if (isInContacts) {
      alert(`${target.name.value} is already in contacts`);
      // target.name.value = '';
      // target.phone.value = '';
      return;
    }

    const formDatas = {
      id: nanoid(),
      name: target.name.value,
      phone: target.phone.value,
    };

    dispatch(addContact(formDatas));

    e.target.elements.name.value = '';
    e.target.elements.phone.value = '';
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
