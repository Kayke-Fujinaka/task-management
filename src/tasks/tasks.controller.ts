import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  list(): Task[] {
    return this.tasksService.list();
  }

  @Post()
  create(@Body() body: CreateTaskDto): Task {
    return this.tasksService.create(body);
  }
}
