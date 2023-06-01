import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Wrapper, Username } from './UserMenu.styled';
import { Button } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <Wrapper>
      <Username>
        {user.name} __ {user.email}
      </Username>
      {/* <Button type="button" onClick={handleLogOut}>
        Logout
      </Button> */}
      <Button
        ml="6"
        size="sm"
        variant="outline"
        height="35px"
        width="120px"
        colorScheme="blue"
        onClick={handleLogOut}
      >
        Logout
      </Button>
    </Wrapper>
  );
};
