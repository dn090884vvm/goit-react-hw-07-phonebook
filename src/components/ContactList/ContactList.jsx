import { useSelector } from 'react-redux';
import { List } from './ContactList.styled';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactsSliser';

import ContactListItem from './ContactListItem';

export default function ContactList() {
  const { data, isFetching } = useFetchContactsQuery();

  const filterWord = useSelector(state => state.phonebookReducer.filter);

  const contactsfromAPI = data;

  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const getfilteredContacts = () => {
    const normalFilter = filterWord.toLowerCase();
    const checkedContacts = contactsfromAPI.filter(contact =>
      contact.name.toLowerCase().includes(normalFilter)
    );
    return checkedContacts;
  };

  return (
    <>
      {isFetching && <div> Loading... </div>}
      <List>
        {data &&
          getfilteredContacts().map(contact => (
            <ContactListItem
              onDelete={deleteContact}
              deleting={isDeleting}
              key={contact.id}
              contact={contact}
            ></ContactListItem>
          ))}
      </List>
    </>
  );
}
