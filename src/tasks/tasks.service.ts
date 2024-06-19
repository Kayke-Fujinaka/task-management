import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = [];

  list() {
    return this.tasks;
  }
}
