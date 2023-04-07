-- -------------------------------------------------------------
-- TablePlus 4.8.8(450)
--
-- https://tableplus.com/
--
-- Database: dbqf9zfzx5rd2b
-- Generation Time: 2022-09-24 19:25:48.4890
-- -------------------------------------------------------------


DROP TABLE IF EXISTS "public"."GroceryCategory";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."GroceryCategory" (
    "id" text NOT NULL,
    "categoryName" text NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Item";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."Item" (
    "id" text NOT NULL,
    "name" text NOT NULL,
    "categoryId" text NOT NULL,
    "purchased" bool NOT NULL DEFAULT false,
    "userId" text NOT NULL,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."GroceryCategory" ("id", "categoryName") VALUES
('0968cd55-f0f3-4267-88e1-6e983fce6424', 'beverage'),
('0a5d9047-af2e-45c9-9c49-024cfe8f3bca', 'produce'),
('291710ee-2b69-4b4b-83da-80e7de5331c2', 'list'),
('2d4e1cb4-b13c-4dcf-8bb1-fda0966e7605', 'seafood'),
('508d7cfd-bfed-429a-8ce4-5293aaa311cf', 'all'),
('571d21d0-97da-474e-89f8-aa27b7209176', 'meat'),
('78ff1ce2-c61c-49ab-b1d6-48dfbc7923c9', 'dairy'),
('b1f8259e-0d3a-4216-9f35-592c0b0dd592', 'prepared'),
('c0b2f55e-f364-40e0-be0c-50b4fbc7172c', 'snacks'),
('d4bba1f6-bb0b-40f0-bd8e-bac40a6ef64c', 'frozen'),
('da3412f8-f063-4fdd-8f45-516dd6a9eac0', 'pharmacy'),
('e2c908cf-9fc8-48b5-94c4-619e49ad3001', 'household'),
('ed02d5ac-df3c-4c13-ad90-70ee8da91d3f', 'dry'),
('ee7e1236-92a4-4d0a-b3d8-2d1567b0e654', 'bakery');

ALTER TABLE "public"."Item" ADD FOREIGN KEY ("categoryId") REFERENCES "public"."GroceryCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
