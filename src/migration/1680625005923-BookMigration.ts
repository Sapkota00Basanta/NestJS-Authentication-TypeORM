// Import Third-Party Modules
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

/**
 * This module is a migration which acts as a contract to interact and update
 * database schema.
 */
export class BookMigration1680625005923 implements MigrationInterface {
  /**
   * This is migration method which is used to define the changes for database schema
   * to apply the migration.
   * @param queryRunner This is used to run SQL queries to database
   */
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'books',
        columns: [
          {
            name: 'id',
            type: 'int',
            isGenerated: true,
            isPrimary: true,
            generationStrategy: 'increment',
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'thumbnail',
            type: 'varchar',
          },
          {
            name: 'author',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
      true,
    );
  }

  /**
   * This is migration method which is used to define how to undo the changes of up method
   * in case of migration rollback.
   * @param queryRunner This is used to run SQL queries to database.
   */
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('books');
  }
}
