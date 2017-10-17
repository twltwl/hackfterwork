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
    image character varying(255),
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
INSERT INTO articles (name, heading, preamble, text, author_id, image) VALUES ('test1', 'heading1', 'preamble1', 'text1', 1, 'http://img2.tvtome.com/i/u/97bf577dcc3d41a6c129b83cafb9b801.jpg');
INSERT INTO articles (name, heading, preamble, text, author_id, image) VALUES ('test2', 'heading2', 'preamble2', 'text2', 2, 'https://static.stereogum.com/uploads/2017/01/Slayer-1485351270-compressed.jpg');
INSERT INTO articles (name, heading, preamble, text, author_id, image) VALUES ('test3', 'heading3', 'preamble3', 'text3', 1, 'https://raw.githubusercontent.com/jameswyse/pied-piper/master/docs/images/pied-piper.png');
INSERT INTO articles (name, heading, preamble, text, author_id, image) VALUES ('test4', 'heading4', 'preamble4', 'text4', 2, 'http://monkeyswing.se/wp-content/uploads/2017/03/SE_NOCCO_Caribbean_Herobild_170321-1280x640.jpg');

-- Add search function
CREATE FUNCTION search_articles(search text) RETURNS SETOF articles AS $$
  SELECT *
  FROM articles
  WHERE
    name ilike ('%' || search || '%') OR
    heading ilike ('%' || search || '%') OR
    preamble ilike ('%' || search || '%') OR
    text ilike ('%' || search || '%')
  $$ LANGUAGE SQL STABLE;

-- Add 'get articles by author_id' function
CREATE FUNCTION articlesByAuthor(authorId int) RETURNS SETOF articles AS $$
  SELECT *
  FROM articles
  WHERE author_id = authorId
$$ LANGUAGE SQL STABLE;
