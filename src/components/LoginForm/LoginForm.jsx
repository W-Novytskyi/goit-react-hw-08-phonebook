import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { getIsLoading } from 'redux/contacts/selectors';
import { Form, Label, Input } from './LoginForm.styled';
import { Button } from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
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
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      {/* <Button type="submit">Log In</Button> */}
      <Button
        ml="100"
        size="sm"
        variant="outline"
        height="35px"
        width="120px"
        colorScheme="blue"
        type="submit"
      >
        Log In
      </Button>
    </Form>
  );
};
