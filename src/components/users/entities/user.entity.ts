// Import Third-Party Modules
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

// Import User-Defined Modules
import { Books } from 'src/components/books/entities/book.entity';

/**
 * This book module is specific to User Module to represent it's own repository.
 */
@Entity()
export class Users {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password?: string;

  @Column({ default: null, type: 'datetime' })
  created_at?: Date;

  @Column({ default: null, type: 'datetime' })
  updated_at?: Date;

  @OneToMany(() => Books, (book) => book.user) // Here, () => Books returns the type of class with which we want our relationship
  books?: Books[];
}
