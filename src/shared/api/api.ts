import axios from 'axios';
import { Dayjs } from 'dayjs';
import { Task } from '@pages/PlannerPage/types';

/**
 * Base URL for the API.
 * @constant {string}
 */
const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000';

/**
 * API Endpoints.
 * @constant {Object}
 */
const ENDPOINTS = {
  TASKS: '/api/tasks',
  TASK: (id: number) => `/api/tasks/${id}`,
};

/**
 * Axios instance configuration.
 * @constant {Object}
 */
const axiosConfig = {
  baseURL: BASE_URL,
};

const axiosInstance = axios.create(axiosConfig);

/**
 * Fetch tasks from server.
 *
 * @async
 * @function
 * @returns {Promise<Task[]>} Array of tasks.
 * @throws {Error} Throws error if any occurs during API call.
 */
export const fetchTasks = async (): Promise<Task[]> => {
  try {
    const response = await axiosInstance.get(ENDPOINTS.TASKS);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Add a task to the server.
 *
 * @async
 * @function
 * @param {Dayjs} date - Date for the task.
 * @param {string} title - Title for the task.
 * @returns {Promise<Task>} Newly added task.
 * @throws {Error} Throws error if any occurs during API call.
 */
export const addTaskToServer = async (date: Dayjs, title: string): Promise<Task> => {
  try {
    const response = await axiosInstance.post(ENDPOINTS.TASKS, { date, title });
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Delete a task from the server.
 *
 * @async
 * @function
 * @param {number} id - ID of the task to be deleted.
 * @returns {Promise<void>}
 * @throws {Error} Throws error if any occurs during API call.
 */
export const deleteTaskFromServer = async (id: number): Promise<void> => {
  try {
    await axiosInstance.delete(ENDPOINTS.TASK(id));
  } catch (error) {
    throw error;
  }
};

/**
 * Save edited task to the server.
 *
 * @async
 * @function
 * @param {number} taskId - ID of the task to be edited.
 * @param {Dayjs} date - New date for the task.
 * @param {string} title - New title for the task.
 * @returns {Promise<Task>} Edited task.
 * @throws {Error} Throws error if any occurs during API call.
 */
export const saveEditedTaskToServer = async (
  taskId: number,
  date: Dayjs,
  title: string,
): Promise<Task> => {
  try {
    const response = await axiosInstance.put(ENDPOINTS.TASK(taskId), {
      title,
      date,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
