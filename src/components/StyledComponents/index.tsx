import styled from '@emotion/styled';

import { Button, Container, ListItem } from '@mui/material';

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin-top: 3rem;
  background-color: #f5f5f5;
  border-radius: 10px;
`;

export const TaskInput = styled.div`
  margin: 2rem 0;
  display: flex;
  gap: 1rem;
`;

export const StyledButton = styled(Button)`
  margin-left: 1rem;
`;

export const StyledListItem = styled(ListItem)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

export const EditTaskContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;
