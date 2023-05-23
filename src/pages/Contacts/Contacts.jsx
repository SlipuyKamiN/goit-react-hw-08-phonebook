import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ModalForm } from 'components/ModalForm/ModalForm';
import { useState } from 'react';
import { AddContactButton } from './Contacts.styled';

const Contacts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <AddContactButton onClick={toggleModal}>+</AddContactButton>
      <Filter />
      <ContactList />
      {isModalOpen && <ModalForm toggleModal={toggleModal} />}
    </>
  );
};
export default Contacts;
