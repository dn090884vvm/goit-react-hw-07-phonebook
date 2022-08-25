// import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/phonebookActions';
import { ListElement, Button } from './ContactList.styled';

export default function ContactListItem({ contact, onDelete, deleting }) {
  const { id, name, phone } = contact;

  // const dispatch = useDispatch();

  // const deletedContact = id => {
  //   dispatch(deleteContact(id));
  // };
  return (
    <ListElement>
      <p>{name}</p>
      <p>{phone}</p>
      <Button onClick={() => onDelete(id)}>
        {deleting ? 'Deleting..' : 'Delete'}
      </Button>
    </ListElement>
  );
}
