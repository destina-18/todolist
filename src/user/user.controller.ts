import { Controller, Get, Req, Param, Post, Put, Delete, Query } from '@nestjs/common';
import type { Request } from 'express';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private UserService: UserService){}

    @Get ('all')
    findAll(@Req() request: Request) {
    return this.UserService.findAll();
}

@Get(':name')
findOne(@Param() params: any):string {
    return `This action returns ${params.name} user`;
}

@Get()
async find(@Query('age') age: number, @Query('breed') breed: string) {
  return `This action returns all cats filtered by age: ${age} and breed: ${breed}`;
}

@Post()
Creator(): string{
    return `this action adds a new user`;
}

@Put(':id')
update(@Param('id')id: string): string{
    return `This action update user id ${id}`;
}

@Delete(':id')
delete(@Param('id') id:string): string{
    return `This action delete user id ${id}`;
}
}
