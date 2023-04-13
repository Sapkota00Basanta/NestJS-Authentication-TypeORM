// Import Third-Party Modules
import {
  Column,
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

/**
 * This module is a migration which acts as a contract to interact and update
 * database schema.
 */
export class AddUserIdColumToBookMigration1681312344642
  implements MigrationInterface
{
  /**
   * This is migration method which is used to define the change for database
   * schema to apply the migration.
   * @param queryRunner This is used to run SQL queries to database.
   */
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'books',
      new TableColumn({
        name: 'userId',
        type: 'int',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'books',
      new TableForeignKey({
        columnNames: ['userId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
      }),
    );
  }

  /**
   * This is migration method which is used to define how to undo the changes of up
   * method in case of migration rollback.
   * @param queryRunner
   */
  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('books');
    const foreignKey = table.foreignKeys.find((fk) =>
      fk.columnNames.indexOf('userId'),
    );
    await queryRunner.dropForeignKey('books', foreignKey);
    await queryRunner.dropColumn('books', 'userId');
  }
}
