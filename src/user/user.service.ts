import { Injectable } from '@nestjs/common';
import { Use } from './user.interface';

@Injectable()
export class UserService {
    private readonly users = [];

    create(user: Use ){
        this.users.push()
    }
    
    findAll(): string[] {
        return this.users;
    }
}