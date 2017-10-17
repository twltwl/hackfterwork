CREATE TABLE brands (
    id SERIAL PRIMARY KEY,
    name character varying(255)
);

CREATE TABLE authors (
    id SERIAL PRIMARY KEY,
    name character varying(255),
    brand_id int REFERENCES brands(id)
);

CREATE TABLE articles (
    id SERIAL PRIMARY KEY,
    name character varying(255),
    heading character varying(255),
    preamble text,
    text text,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now(),
    author_id int REFERENCES authors(id)
);

-- Add brands
INSERT INTO brands (name) VALUES ('Brand1');
INSERT INTO brands (name) VALUES ('Brand2');

-- Add authors
INSERT INTO authors (name, brand_id) VALUES ('Name1', 1);
INSERT INTO authors (name, brand_id) VALUES ('Name2', 2);

-- Add articles
INSERT INTO articles (name, heading, preamble, text, author_id) VALUES ('test1', 'heading1', 'preamble1', 'text1', 1);
INSERT INTO articles (name, heading, preamble, text, author_id) VALUES ('test2', 'heading2', 'preamble2', 'text2', 2);
INSERT INTO articles (name, heading, preamble, text, author_id) VALUES ('test3', 'heading3', 'preamble3', 'text3', 1);
INSERT INTO articles (name, heading, preamble, text, author_id) VALUES ('test4', 'heading4', 'preamble4', 'text4', 2);