import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_SERVICE') private readonly clientKafka: ClientKafka,
  ) {}

  create(createUserDto: CreateUserDto): Observable<User> {
    return this.clientKafka.send('users.create', createUserDto);
  }

  findAll(): Observable<User[]> {
    return this.clientKafka.send('users.findAll', {});
  }

  findOne(id: string): Observable<User> {
    return this.clientKafka.send('users.findOne', id);
  }

  update(id: string, updateUserDto: UpdateUserDto): Observable<User> {
    return this.clientKafka.send('users.update', {
      id,
      ...updateUserDto,
    });
  }

  remove(id: string): Observable<User> {
    return this.clientKafka.send('users.delete', id);
  }
}
