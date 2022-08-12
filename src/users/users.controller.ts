import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Inject,
  OnModuleInit,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { ClientKafka } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@ApiTags('Users-engine')
@Controller('users')
export class UsersController implements OnModuleInit {
  constructor(
    private readonly usersService: UsersService,
    @Inject('USER_SERVICE') private readonly clientKafka: ClientKafka,
  ) {}

  async onModuleInit() {
    const requestPatters = [
      'users.create',
      'users.findAll',
      'users.findOne',
      'users.update',
      'users.delete',
    ];
    requestPatters.forEach((topic) => {
      this.clientKafka.subscribeToResponseOf(topic);
      this.clientKafka.connect();
    });
  }

  @Post()
  @HttpCode(200)
  @ApiOperation({ summary: 'Create user' })
  @ApiCreatedResponse({ description: 'Created ok', type: User })
  create(@Body() createUserDto: CreateUserDto): Observable<User> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Find all users' })
  @ApiCreatedResponse({ description: 'Find all ok', type: Array<User> })
  findAll(): Observable<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Find user by id' })
  @ApiCreatedResponse({ description: 'Finded user ok', type: User })
  findOne(@Param('id') id: string): Observable<User> {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update user' })
  @ApiCreatedResponse({ description: 'Updated ok', type: User })
  update(
    @Body() updateUserDto: UpdateUserDto,
    @Param('id') id: string,
  ): Observable<User> {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Delete user' })
  @ApiCreatedResponse({ description: 'Deleted ok', type: User })
  remove(@Param('id') id: string): Observable<User> {
    return this.usersService.remove(id);
  }
}
