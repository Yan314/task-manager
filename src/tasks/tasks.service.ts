import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  create(dto: CreateTaskDto): Task {
    const timestamp = new Date();
    const task: Task = {
      id: randomUUID(),
      title: dto.title,
      status: dto.status ?? 'todo',
      dueDate: dto.dueDate,
      createdAt: timestamp,
      updatedAt: timestamp,
    };

    this.tasks.push(task);
    return task;
  }

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: string): Task {
    const task = this.tasks.find((item) => item.id === id);
    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    return task;
  }

  update(id: string, dto: UpdateTaskDto): Task {
    const task = this.findOne(id);
    const updatedTask: Task = {
      ...task,
      ...dto,
      updatedAt: new Date(),
    };
    const index = this.tasks.findIndex((item) => item.id === id);
    this.tasks[index] = updatedTask;
    return updatedTask;
  }

  remove(id: string): void {
    const index = this.tasks.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    this.tasks.splice(index, 1);
  }
}
