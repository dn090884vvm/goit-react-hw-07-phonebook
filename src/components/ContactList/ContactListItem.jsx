import { ListElement, Button } from './ContactList.styled';

export default function ContactListItem({ contact, onDelete, deleting }) {
  const { id, name, phone } = contact;

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
