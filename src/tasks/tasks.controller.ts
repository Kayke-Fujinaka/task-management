import { Controller, Get } from '@nestjs/common';

import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  list(): Task[] {
    return this.tasksService.list();
  }
}
