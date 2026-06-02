import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
export class UpdateTaskDto extends PartialType(CreateTaskDto) {}
export class Task {
    id: string;
    title: string;
    status: 'todo' | 'in-progress' | 'done';
    dueDate?: string;
    createdAt: Date;
    updatedAt: Date;
}