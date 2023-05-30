import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';
import { getIsLoading } from 'redux/contacts/selectors';
import { ContainerForm, Container, Label, Input } from './ContactForm.styled';
import { Button } from '@chakra-ui/react';

export default function ContactForm() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const contactItems = useSelector(getContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleAddContact = async () => {
    if (name !== '' && number !== '') {
      const isNameExists = contactItems.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );
      if (isNameExists) {
        alert(`${name} is already in contacts.`);
        return;
      } else {
        try {
          await dispatch(addContact({ name, number })).unwrap();
          reset();
        } catch (error) {
          console.log('Error adding contact:', error);
        }
      }
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <ContainerForm>
      <Container>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </Label>
      </Container>
      <Container>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </Label>
      </Container>

      {!isLoading ? (
        <Button
          ml="6"
          size="sm"
          variant="outline"
          height="35px"
          width="120px"
          colorScheme="blue"
          onClick={handleAddContact}
        >
          Add contact
        </Button>
      ) : (
        <Button
          ml="6"
          size="sm"
          height="35px"
          width="120px"
          isLoading
          loadingText="Submitting"
          colorScheme="teal"
          variant="outline"
        >
          Submit
        </Button>
      )}
    </ContainerForm>
  );
}
