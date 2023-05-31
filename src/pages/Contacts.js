import { useEffect, useSelector } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { getOperation, getError } from '../redux/contacts/selectors';
import { fetchContacts } from '../redux/contacts/operations';
import { Helmet } from 'react-helmet';
import { Container, Flex, Box, HStack, Text } from '@chakra-ui/react';

export default function Contacts() {
  const dispatch = useDispatch();
  const operation = useSelector(getOperation);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container maxW="7xl" padding="5">
      <Flex>
        <HStack spacing="12px">
          <Helmet>
            <title>Your contacts</title>
          </Helmet>

          <Box w="470px" h="300">
            <Text fontSize="2xl" as="b">
              Phonebook
            </Text>
            <ContactForm />
          </Box>

          <Box>
            <Text fontSize="2xl" as="b">
              Contacts
            </Text>
            <Filter />
            {operation === 'fetch' && !error ? (
              <b>Request in progress...</b>
            ) : (
              <ContactList />
            )}
          </Box>
        </HStack>
      </Flex>
    </Container>
  );
}
