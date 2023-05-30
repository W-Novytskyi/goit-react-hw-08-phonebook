import styled from '@emotion/styled';

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  max-height: 500px;
  padding: 20px;
  border: 1px solid #000;
  border-radius: 3px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  padding: 0 20px;
`;

export const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  margin-bottom: 12px;
  margin-top: 5px;
`;

export const Label = styled.label`
  padding: 5px;
  font-size: 20px;
`;
