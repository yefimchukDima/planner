import React from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { TaskItemProps } from '@components/TaskItem/types';
import { ButtonGroup, StyledListItem } from '@components/StyledComponents';

/**
 * TaskItem component that displays an individual task in the list.
 * Provides the capability to edit and delete the task.
 *
 * @param {TaskItemProps} props - The properties for the TaskItem component.
 * @param {Task} props.task - The task object to display.
 * @param {Function} props.onEdit - Handler called when editing the task.
 * @param {Function} props.onDelete - Handler called when deleting the task.
 *
 * @returns {React.ReactElement} Returns the task item component.
 */
const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit, onDelete }) => (
  <StyledListItem key={task.id}>
    {task.title}
    <ButtonGroup>
      <Button startIcon={<EditIcon />} onClick={() => onEdit(task)}>
        Edit
      </Button>
      <Button startIcon={<DeleteIcon />} onClick={() => onDelete(task.id)}>
        Delete
      </Button>
    </ButtonGroup>
  </StyledListItem>
);

export default TaskItem;
