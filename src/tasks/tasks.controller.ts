import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TaskStatus } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  create(@Body() body: CreateTaskDto): Task {
    return this.tasksService.create(body);
  }

  @Get()
  list(): Task[] {
    return this.tasksService.list();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.tasksService.findById(id);
  }

  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body('status') status: TaskStatus) {
    return this.tasksService.updateStatus(id, status);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string) {
    return this.tasksService.delete(id);
  }
}
