import { Body, Controller, Get, Post} from '@nestjs/common';
import { TodoService } from 'src/todo/todo.service';
import type { Todo } from './todo.model';

@Controller('todo')
export class TodoController {
    constructor(private readonly td: TodoService){}

    @Get()
    findAll(){
        return {
            status : 'done',
            status_code : 200,
            message : ' data berhasil di dapatkan',
            data : this.td.findAll()
        }
    }

    @Post()
    create(@Body() td: Todo){
        return{
            status : 'done',
            status_code : 200,
            message : ' data berhasil di dapatkan',
            data : this.td.create(td)
        }
    }
}
