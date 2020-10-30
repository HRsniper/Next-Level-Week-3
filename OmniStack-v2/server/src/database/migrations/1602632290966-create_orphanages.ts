import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1602632290966 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "orphanages",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        unsigned: true,
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "latitude",
                        type: "decimal",
                        scale: 10,
                        precision: 2,
                    },
                    {
                        name: "longitude",
                        type: "decimal",
                        scale: 10,
                        precision: 2,
                    },
                    {
                        name: "about",
                        type: "text",
                    },
                    {
                        name: "instructions",
                        type: "text",
                    },
                    // {
                    //     name: "opening_hours",
                    //     type: "varchar",
                    // },
                    {
                        name: "from",
                        type: "varchar",
                    },
                    {
                        name: "to",
                        type: "varchar",
                    },
                    {
                        name: "open_on_weekends",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name: "pending",
                        type: "boolean",
                        default: true,
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("orphanages");
    }
}
