// Import Third-Party Modules
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

// Import User-Defined Modules

/**
 * This module is a migration which acts as a contract to interact and updated
 * database schmea for User Module.
 */
export class UserMigration1681311413983 implements MigrationInterface {
  /**
   * This is migration method which is used to define the changes for database schmea
   * to apply the migration.
   * @param queryRunner This is used to run SQL queries to database.
   */
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'int',
            isGenerated: true,
            isPrimary: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
          },
          {
            name: 'password',
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
    await queryRunner.dropTable('users');
  }
}
