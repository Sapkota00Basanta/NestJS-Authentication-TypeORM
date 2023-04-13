// Import Third-Party Modules
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

// Import User-Defined Modules
import { Users } from 'src/components/users/entities/user.entity';

/**
 * This module is an entity specific to Book Module to represent it's own repository.
 */
@Entity('books')
export class Books {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users, (user) => user.books)
  user: Users;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  thumbnail: string;

  @Column()
  author: string;

  @Column({ default: null, type: 'timestamp' })
  created_at?: Date;

  @Column({ default: null, type: 'timestamp' })
  updated_at?: Date;
}
