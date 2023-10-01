import { Dayjs } from 'dayjs';

export type Task = {
  id: number;
  title: string;
  date: Dayjs;
};
