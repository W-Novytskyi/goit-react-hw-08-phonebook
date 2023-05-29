import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Username = styled.p`
  font-weight: 700;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: #ffffff;
  color: #000000;
  padding: 5px 20px;
  margin-left: 25px;
  border: 1px solid #000000;
  border-radius: 3px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.25);
  width: 130px;

  &:active {
    background-color: #1b8bcd;
    color: #ffffff;
    border: none;
  }
`;
