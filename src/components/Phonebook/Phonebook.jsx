import React from 'react';
import { Wrapper } from './Phonebook.styled';

import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import PhonebookFilter from 'components/PhonebookFilter/PhonebookFilter';
import ContactList from 'components/ContactList/ContactList';

const Phonebook = () => {
  return (
    <>
      <Wrapper>
        <PhonebookForm />
        <PhonebookFilter />
      </Wrapper>

      <Wrapper>
        <ContactList />
      </Wrapper>
    </>
  );
};

export default Phonebook;
