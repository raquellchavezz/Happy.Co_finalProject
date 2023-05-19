--
-- PostgreSQL database dump
--

-- Dumped from database version 14.6 (Homebrew)
-- Dumped by pg_dump version 14.6 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: favorites; Type: TABLE; Schema: public; Owner: tpl622_4
--

CREATE TABLE public.favorites (
    id integer NOT NULL,
    product_id integer,
    isfav boolean,
    email text
);


ALTER TABLE public.favorites OWNER TO tpl622_4;

--
-- Name: favorites_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl622_4
--

CREATE SEQUENCE public.favorites_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.favorites_id_seq OWNER TO tpl622_4;

--
-- Name: favorites_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl622_4
--

ALTER SEQUENCE public.favorites_id_seq OWNED BY public.favorites.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: tpl622_4
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    first_name text,
    email text NOT NULL
);


ALTER TABLE public.users OWNER TO tpl622_4;

--
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl622_4
--

CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_user_id_seq OWNER TO tpl622_4;

--
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl622_4
--

ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;


--
-- Name: favorites id; Type: DEFAULT; Schema: public; Owner: tpl622_4
--

ALTER TABLE ONLY public.favorites ALTER COLUMN id SET DEFAULT nextval('public.favorites_id_seq'::regclass);


--
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: tpl622_4
--

ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);


--
-- Data for Name: favorites; Type: TABLE DATA; Schema: public; Owner: tpl622_4
--

INSERT INTO public.favorites (id, product_id, isfav, email) VALUES (233, 1, NULL, 'rcchavez413@gmail.com');
INSERT INTO public.favorites (id, product_id, isfav, email) VALUES (235, 1, NULL, 'chavez.raquel413@gmail.com');
INSERT INTO public.favorites (id, product_id, isfav, email) VALUES (239, 1, NULL, 'chavez.raquel413@gmail.com');
INSERT INTO public.favorites (id, product_id, isfav, email) VALUES (240, 2, NULL, 'chavez.raquel413@gmail.com');
INSERT INTO public.favorites (id, product_id, isfav, email) VALUES (241, 6, NULL, 'chavez.raquel413@gmail.com');
INSERT INTO public.favorites (id, product_id, isfav, email) VALUES (208, 6, NULL, 'rcchavez413@gmail.com');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: tpl622_4
--

INSERT INTO public.users (user_id, first_name, email) VALUES (508, 'Raquel', 'rcchavez413@gmail.com');
INSERT INTO public.users (user_id, first_name, email) VALUES (509, 'Raquel', 'chavez.raquel413@gmail.com');


--
-- Name: favorites_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl622_4
--

SELECT pg_catalog.setval('public.favorites_id_seq', 242, true);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl622_4
--

SELECT pg_catalog.setval('public.users_user_id_seq', 509, true);


--
-- Name: favorites favorites_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl622_4
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_pkey PRIMARY KEY (id);


--
-- Name: users unique_email; Type: CONSTRAINT; Schema: public; Owner: tpl622_4
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT unique_email UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl622_4
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- Name: favorites favorites_email_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tpl622_4
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_email_fkey FOREIGN KEY (email) REFERENCES public.users(email);


--
-- PostgreSQL database dump complete
--

