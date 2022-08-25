import { useSelector } from 'react-redux';
import { List } from './ContactList.styled';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactsSliser';

import ContactListItem from './ContactListItem';

export default function ContactList() {
  const { data, isFetching } = useFetchContactsQuery();

  // console.log(data);

  const filterWord = useSelector(state => state.phonebookReducer.filter);
  // const contacts = useSelector(state => state.phonebookReducer.contacts);

  // const gettedContacts = contacts;
  const contactsfromAPI = data;
  // console.log(contactsfromAPI);
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const xxx = () => {
    const normalFilter = filterWord.toLowerCase();
    const yyy = contactsfromAPI.filter(contact =>
      contact.name.toLowerCase().includes(normalFilter)
    );
    return yyy;
  };

  // console.log(xxx());

  // const getFilteredContacts = () => {
  //   const normalizedFilter = filterWord.toLowerCase();

  //   return gettedContacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  return (
    <>
      {/* <ul>
        {data.map(element => (
          <li key={element.id}>
            <p>{element.name}</p>
            <p>{element.phone}</p>
          </li>
        ))}
      </ul> */}
      {isFetching && <div> Loading... </div>}
      <List>
        {data &&
          xxx().map(contact => (
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
