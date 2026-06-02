import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  create(dto: CreateTaskDto): Task {
    // TODO
  }
  findAll(): Task[] {
    // TODO
  }
  findOne(id: string): Task {
    // TODO — lever NotFoundException si introuvable
  }
  update(id: string, dto: UpdateTaskDto): Task {
    // TODO
  }
  remove(id: string): void {
    // TODO
  }
}