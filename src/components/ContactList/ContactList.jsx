import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import {
  getContacts,
  getStatusFilter,
  getOperation,
} from 'redux/contacts/selectors';
import { Container } from './ContactList.styled';
import { AiFillDelete } from 'react-icons/ai';
import { GridLoader } from 'react-spinners';
import { Box, Text, Button } from '@chakra-ui/react';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);
  const operation = useSelector(getOperation);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = contacts.filter(contact => {
    const normalizedFilter = filter ? filter.toLowerCase() : '';

    return contact.name.toLowerCase().includes(normalizedFilter);
  });

  return (
    <Container>
      {filteredContacts.map(({ name, number, id }) => (
        <Text key={id}>
          <Box>
            {`${name}: ${number}`}
            {/* <Button onClick={() => handleDeleteContact(id)}>Delete</Button> */}

            <Button
              ml="6"
              size="sm"
              variant="outline"
              height="35px"
              width="120px"
              colorScheme="blue"
              onClick={() => handleDeleteContact(id)}
            >
              {operation === id ? (
                <GridLoader size={2} color="#2b6cb0" />
              ) : (
                <AiFillDelete size={25} color="#2b6cb0" />
              )}
            </Button>
          </Box>
        </Text>
      ))}
    </Container>
  );
}
