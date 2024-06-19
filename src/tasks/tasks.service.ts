import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';

import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TaskStatus } from './task.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  create({ title, description }: CreateTaskDto): Task {
    const task: Task = {
      id: randomUUID(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);

    return task;
  }

  list(): Task[] {
    return this.tasks;
  }

  findById(id: string): Task {
    const task = this.tasks.find((task) => task.id === id);

    if (!task) throw new NotFoundException('Task not found.');

    return task;
  }

  delete(id: string): void {
    const index = this.tasks.findIndex((task) => task.id === id);

    if (index === -1) throw new NotFoundException('Task not found.');

    this.tasks.splice(index, 1);
  }
}
