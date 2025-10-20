import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/Prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor (private prisma: PrismaService){}

  async create(createUserDto: CreateUserDto) {
    try{
      const {name, email, password } = createUserDto;
      const createUser = await this.prisma.user.create({
        data: {
          name,
          email,
          password
        }
      })
      return {
        success: true,
        message:"user create successfully",
        data: createUser
      }
    } catch (error) {
      return {
        success: false,
        message: `Something went wrong: ${error.message}`,
        data: null
      }
    }
  }
  
  async findAll() {
    try {
      const users=await this.prisma.user.findMany()
      return {
        success: true,
        message: "user data found succesfully",
        data: users
      }
    } catch (error) {
      return{
        seccess: false,
        message: `error when get user: ${error.message}`,
      }
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try{
      const {name, email, password} = updateUserDto
      const findUser = await this.prisma.user.findFirst({
        where: {id:id }
      })
      if (!findUser){
        return {
          success: false,
          message: `user does not exits`,
          data: null
        }
      }

      const updateUser = await this.prisma.user.update({
        where: { id: id},
        data: {
          name: name ?? findUser.name,
          email: email ?? findUser.email,
          password: password ?? findUser.password,
          // password: password ? await this.bcrypt.hashPassword(password)
        }
      });

      return{
        success: true,
        message: `New User has update`,
        data: updateUser
      }

    } catch (error) {
      return {
        success: false,
        message: `error when update user: ${error.message}`,
        data: null
      }

    }
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
