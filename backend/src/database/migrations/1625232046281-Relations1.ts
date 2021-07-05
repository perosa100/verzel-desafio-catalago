import {MigrationInterface, QueryRunner} from "typeorm";

export class Relations11625232046281 implements MigrationInterface {
    name = 'Relations11625232046281'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "module" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0e20d657f968b051e674fbe3117" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "class" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "modulo" character varying NOT NULL, "dateClass" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0b9024d21bdfba8b1bd1c300eae" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "permissions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_920331560282b8bd21bb02290df" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "roles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "last_logging" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "class_modules_module" ("classId" uuid NOT NULL, "moduleId" uuid NOT NULL, CONSTRAINT "PK_c0ef1bb50037747da2663f7a4c6" PRIMARY KEY ("classId", "moduleId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a1a1eeb0cdfccbc527798c8976" ON "class_modules_module" ("classId") `);
        await queryRunner.query(`CREATE INDEX "IDX_c26177ccf539d506d3c72292a2" ON "class_modules_module" ("moduleId") `);
        await queryRunner.query(`CREATE TABLE "roles_permission_permissions" ("rolesId" uuid NOT NULL, "permissionsId" uuid NOT NULL, CONSTRAINT "PK_4d1112dfbc0eeaf7d826f79814d" PRIMARY KEY ("rolesId", "permissionsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_73f2f11e89b97ee6abfa93cf18" ON "roles_permission_permissions" ("rolesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_339aded292782562ce8163ce40" ON "roles_permission_permissions" ("permissionsId") `);
        await queryRunner.query(`CREATE TABLE "users_roles" ("user_id" uuid NOT NULL, "role_id" uuid NOT NULL, CONSTRAINT "PK_c525e9373d63035b9919e578a9c" PRIMARY KEY ("user_id", "role_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e4435209df12bc1f001e536017" ON "users_roles" ("user_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_1cf664021f00b9cc1ff95e17de" ON "users_roles" ("role_id") `);
        await queryRunner.query(`ALTER TABLE "class_modules_module" ADD CONSTRAINT "FK_a1a1eeb0cdfccbc527798c89769" FOREIGN KEY ("classId") REFERENCES "class"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "class_modules_module" ADD CONSTRAINT "FK_c26177ccf539d506d3c72292a25" FOREIGN KEY ("moduleId") REFERENCES "module"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "roles_permission_permissions" ADD CONSTRAINT "FK_73f2f11e89b97ee6abfa93cf185" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "roles_permission_permissions" ADD CONSTRAINT "FK_339aded292782562ce8163ce409" FOREIGN KEY ("permissionsId") REFERENCES "permissions"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_roles" ADD CONSTRAINT "FK_e4435209df12bc1f001e5360174" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_roles" ADD CONSTRAINT "FK_1cf664021f00b9cc1ff95e17de4" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_roles" DROP CONSTRAINT "FK_1cf664021f00b9cc1ff95e17de4"`);
        await queryRunner.query(`ALTER TABLE "users_roles" DROP CONSTRAINT "FK_e4435209df12bc1f001e5360174"`);
        await queryRunner.query(`ALTER TABLE "roles_permission_permissions" DROP CONSTRAINT "FK_339aded292782562ce8163ce409"`);
        await queryRunner.query(`ALTER TABLE "roles_permission_permissions" DROP CONSTRAINT "FK_73f2f11e89b97ee6abfa93cf185"`);
        await queryRunner.query(`ALTER TABLE "class_modules_module" DROP CONSTRAINT "FK_c26177ccf539d506d3c72292a25"`);
        await queryRunner.query(`ALTER TABLE "class_modules_module" DROP CONSTRAINT "FK_a1a1eeb0cdfccbc527798c89769"`);
        await queryRunner.query(`DROP INDEX "IDX_1cf664021f00b9cc1ff95e17de"`);
        await queryRunner.query(`DROP INDEX "IDX_e4435209df12bc1f001e536017"`);
        await queryRunner.query(`DROP TABLE "users_roles"`);
        await queryRunner.query(`DROP INDEX "IDX_339aded292782562ce8163ce40"`);
        await queryRunner.query(`DROP INDEX "IDX_73f2f11e89b97ee6abfa93cf18"`);
        await queryRunner.query(`DROP TABLE "roles_permission_permissions"`);
        await queryRunner.query(`DROP INDEX "IDX_c26177ccf539d506d3c72292a2"`);
        await queryRunner.query(`DROP INDEX "IDX_a1a1eeb0cdfccbc527798c8976"`);
        await queryRunner.query(`DROP TABLE "class_modules_module"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "roles"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "permissions"`);
        await queryRunner.query(`DROP TABLE "class"`);
        await queryRunner.query(`DROP TABLE "module"`);
    }

}
