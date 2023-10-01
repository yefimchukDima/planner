import { useState, useEffect } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { Task } from '@pages/PlannerPage/types';
import {
  addTaskToServer,
  deleteTaskFromServer,
  fetchTasks,
  saveEditedTaskToServer,
} from '@shared/api/api';
import { FAILED_MESSAGES } from '@shared/constants';

/**
 * Custom hook to manage tasks.
 *
 *
 * Provides functionality for fetching, adding, editing, and deleting tasks.
 * Manages state for tasks, task input, edited task input, selected date, and any occurring errors.
 *
 * @returns Object containing tasks, error, and various utility functions.
 */
function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [taskInput, setTaskInput] = useState<string>('');
  const [editedTaskInput, setEditedTaskInput] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());

  /**
   * Fetch tasks from server and update the tasks state.
   */
  useEffect(() => {
    const getTasks = async () => {
      try {
        const tasksFromServer = await fetchTasks();
        setTasks(tasksFromServer);
      } catch (error) {
        console.error(FAILED_MESSAGES.failedFetch, error);
      }
    };

    getTasks();
  }, []);

  /**
   * Add a task.
   * @param date - The date of the task.
   * @param title - The title of the task.
   */
  const addTask = async (date: Dayjs, title: string) => {
    try {
      const newTask = await addTaskToServer(date, title);
      setTasks([...tasks, newTask]);
      setTaskInput('');
    } catch (error) {
      console.error(FAILED_MESSAGES.failedAdd, error);
    }
  };

  /**
   * Delete a task by ID.
   * @param id - The ID of the task to delete.
   */
  const deleteTask = async (id: number) => {
    try {
      await deleteTaskFromServer(id);
      const updatedTasks = tasks.filter((task) => task.id !== id);
      setTasks(updatedTasks);
    } catch (error) {
      console.error(FAILED_MESSAGES.failedDelete, error);
    }
  };

  /**
   * Save changes to an edited task.
   */

  const saveEditedTask = async () => {
    if (editingTask && editedTaskInput) {
      try {
        const updatedTask = await saveEditedTaskToServer(
          editingTask.id,
          editingTask.date,
          editedTaskInput,
        );
        const updatedTasks = tasks.map((task) => (task.id === editingTask.id ? updatedTask : task));
        setTasks(updatedTasks);
        setEditingTask(null);
      } catch (error) {
        console.error(FAILED_MESSAGES.failedSave, error);
      }
    }
  };

  return {
    tasks,
    selectedDate,
    setSelectedDate,
    editingTask,
    taskInput,
    setTaskInput,
    setEditingTask,
    saveEditedTask,
    deleteTask,
    setEditedTaskInput,
    editedTaskInput,
    addTask,
  };
}

export default useTasks;
