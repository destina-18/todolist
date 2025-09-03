import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { MenuController } from './menu/menu.controller';
import { TodosModule } from './todos/todos.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [TodosModule, TodoModule],
  controllers: [AppController, UserController, MenuController],
  providers: [AppService, UserService],
})
export class AppModule {}
