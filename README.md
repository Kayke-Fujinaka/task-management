# Application Strutucture
- AppModule (Root)
  - TasksModule
    - TasksController
    - TasksService
    - Status ValidationPipe
    - TaskEntity
    - TaskRepository
    - ...
  - AuthModule
    - AuthController
    - AuthService
    - UserEntity
    - UserRepository
    - JwtStrategy
    - ...

# API Endpoints
- Tasks
  - tasks/ (GET) : Get tasks (include filters)
  - tasks/:id (GET) : Get a tasks
  - tasks/ (POST) : Create a task
  - tasks/:id/ (DELETE) : Delete a task
  - tasks/:id/status/ (PATCH) : Update a task status
- Auth
  - auth/signup/ (POST) : Sign up
  - auth/signin/ (POST) : Sign in