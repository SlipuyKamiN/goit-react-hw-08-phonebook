import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ModalForm } from 'components/ModalForm/ModalForm';
import { useState } from 'react';
import { ContactsWrapper } from './Contacts.styled';

const Contacts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <ContactsWrapper>
      <Filter toggleModal={toggleModal} />
      <ContactList />
      {isModalOpen && <ModalForm toggleModal={toggleModal} />}
    </ContactsWrapper>
  );
};
export default Contacts;
