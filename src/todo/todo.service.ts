import { Injectable } from '@nestjs/common';
import { Todo } from './todo.model';

@Injectable()
export class TodoService {
    private readonly todos:Todo[] = []

    findAll(){
        return this.todos
    }

    create(td:Todo){
        return this.todos.push(td)
    }
}
