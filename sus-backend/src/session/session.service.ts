import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Session } from './session.entity';

export class SessionService {
  constructor(
    @InjectRepository(Session)
    private sessionRepository: Repository<Session>,
  ) {}

  public async findAll() {
    return this.sessionRepository.find();
  }

  public async addOne(body: Session) {
    return this.sessionRepository.save(body);
  }
}
