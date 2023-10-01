import React from 'react';
import { Button, List, TextField, Typography, Divider } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import {
  ButtonGroup,
  EditTaskContainer,
  StyledButton,
  StyledContainer,
  TaskInput,
} from '@components/StyledComponents';
import useTasks from '@hooks/useTasks.hook';
import TaskItem from '@components/TaskItem';
import { useTranslation } from 'react-i18next';

/**
 * PlannerPage component renders a daily task planner.
 *
 * @component
 * @returns {React.ReactNode} Returns the daily task planner page.
 */
const PlannerPage: React.FC = () => {
  const { t } = useTranslation();
  const {
    tasks,
    selectedDate,
    setEditingTask,
    setSelectedDate,
    editingTask,
    editedTaskInput,
    setEditedTaskInput,
    taskInput,
    setTaskInput,
    saveEditedTask,
    deleteTask,
    addTask,
  } = useTasks();

  /**
   * Handle changes to the main input field.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - The input change event.
   */
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInput(event.target.value);
  };

  /**
   * Handle changes to the edited input field.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - The input change event.
   */
  const handleEditedInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTaskInput(event.target.value);
  };

  /**
   * Handle changes to the date picker input.
   *
   * @param {dayjs.Dayjs | null} date - The selected date or null if none is selected.
   */
  const handleDateChange = (date: dayjs.Dayjs | null) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  return (
    <StyledContainer maxWidth="sm">
      <Typography variant="h5" gutterBottom>
        {t('dailyTaskPlanner')}
      </Typography>
      <Divider variant="middle" />

      <DatePicker label={t('chooseDate')} value={selectedDate} onChange={handleDateChange} />

      <TaskInput>
        <TextField
          fullWidth
          label={t('taskLabel')}
          value={taskInput}
          onChange={handleInputChange}
        />
        <StyledButton
          variant="contained"
          color="primary"
          onClick={() => addTask(selectedDate, taskInput)}
          disabled={taskInput.trim() === ''}
        >
          {t('add')}
        </StyledButton>
      </TaskInput>

      <Typography variant="h6" gutterBottom>
        {t('tasksHeading')}
      </Typography>
      <List>
        {tasks &&
          tasks.length > 0 &&
          tasks
            .filter((task) => dayjs(task.date).isSame(selectedDate, 'day'))
            .map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onEdit={(task) => {
                  setEditingTask(task);
                  setEditedTaskInput(task.title);
                }}
                onDelete={(id) => deleteTask(id)}
              />
            ))}
      </List>

      {editingTask && (
        <EditTaskContainer>
          <TextField
            fullWidth
            label={t('editTaskLabel')}
            value={editedTaskInput}
            onChange={handleEditedInputChange}
          />
          <ButtonGroup>
            <Button startIcon={<SaveIcon />} onClick={saveEditedTask}>
              {t('save')}
            </Button>
            <Button startIcon={<CancelIcon />} onClick={() => setEditingTask(null)}>
              {t('cancel')}
            </Button>
          </ButtonGroup>
        </EditTaskContainer>
      )}
    </StyledContainer>
  );
};

export default PlannerPage;
