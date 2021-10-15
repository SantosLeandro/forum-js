-- Table: public.users

DROP TABLE IF EXISTS public.users;

CREATE TABLE IF NOT EXISTS public.users
(
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password CHAR(60),
    role CHAR,
	posts INTEGER,
	topics INTEGER,
	rank INTEGER,
	avatar VARCHAR(255),
	created_at timestamp without time zone,
    modified_at timestamp without time zone
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to postgres;