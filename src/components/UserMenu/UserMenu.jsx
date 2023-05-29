import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Wrapper, Username, Button } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth;

  const handleLogOut = () => dispatch(logOut());

  return (
    <Wrapper>
      <Username>Welcome, {user.name}</Username>
      <Button type="button" onClick={handleLogOut}>
        Logout
      </Button>
    </Wrapper>
  );
};
