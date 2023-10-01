import { Task } from '../../../pages/PlannerPage/types';

export interface TaskItemProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;
}
