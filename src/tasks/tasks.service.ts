import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

import { Task, TaskStatus } from './task.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  list(): Task[] {
    return this.tasks;
  }

  create(title: string, description: string): Task {
    const task: Task = {
      id: randomUUID(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);

    return task;
  }
}
