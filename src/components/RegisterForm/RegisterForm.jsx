import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/operations';
import { getIsLoading } from 'redux/contacts/selectors';
import { Form, Label, Input } from './RegisterForm.styled';
import { Button } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    if (isLoading) {
      form.reset();
    }
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <Input type="text" name="name" />
      </Label>
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      {/* <Button type="submit">Register</Button> */}
      <Button
        ml="100"
        size="sm"
        variant="outline"
        height="35px"
        width="120px"
        colorScheme="blue"
        type="submit"
      >
        Register
      </Button>
    </Form>
  );
};
