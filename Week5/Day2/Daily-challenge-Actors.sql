-- Table: public.actors

-- DROP TABLE IF EXISTS public.actors;

CREATE TABLE IF NOT EXISTS public.actors
(
    actor_id integer NOT NULL DEFAULT nextval('actors_actor_id_seq'::regclass),
    first_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    last_name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    age date NOT NULL,
    number_oscars smallint NOT NULL,
    CONSTRAINT actors_pkey PRIMARY KEY (actor_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.actors
    OWNER to postgres;

SELECT COUNT(*) AS actor_count
FROM actors;
