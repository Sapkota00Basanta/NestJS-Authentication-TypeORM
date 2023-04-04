// Import Third-Party Modules
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/**
 * This module is an entity specific to Book Module to represent it's own repository.
 */
@Entity('books')
export class Books {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  thumbnail: string;

  @Column()
  author: string;

  @Column({ default: null, type: 'timestamp' })
  created_at: string;

  @Column({ default: null, type: 'timestamp' })
  updated_at: string;
}
