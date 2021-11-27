CREATE TABLE IF NOT EXISTS public.user_account
(
    user_id SERIAL NOT NULL PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    salt char(10),
    password CHAR(60),
    role CHAR DEFAULT 'u',
	posts INTEGER,
	topics INTEGER,
    last_post_id INTEGER,
    last_login TIMESTAMP,
	rank INTEGER,
	avatar VARCHAR(255),
	created_at TIMESTAMP,
    modified_at TIMESTAMP
)


CREATE TABLE IF NOT EXISTS public.category
(
    category_id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(100) UNIQUE,
    description VARCHAR(255),
    created_at TIMESTAMP,
    modified_at TIMESTAMP
)

CREATE TABLE IF NOT EXISTS public.forum
(
    forum_id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(100) UNIQUE,
    description VARCHAR(255),
    category_id INTEGER,
    last_post_id INTEGER,
    created_at TIMESTAMP,
    modified_at TIMESTAMP
)

CREATE TABLE IF NOT EXISTS public.topic
(
    topic_id SERIAL NOT NULL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    forum_id INTEGER NOT NULL,
    title VARCHAR(255),
    rank REAL,
    votes INTEGER,
    created_at TIMESTAMP,
    modified_at TIMESTAMP
)

CREATE TABLE IF NOT EXISTS public.post
(
    post_id SERIAL NOT NULL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    topic_id INTEGER NOT NULL,
    content TEXT,
    votes INTEGER,
    created_at TIMESTAMP,
    modified_at TIMESTAMP
)

ALTER TABLE public.user_account
    ADD FOREIGN KEY (last_post_id) REFERENCES public.post(post_id);

ALTER TABLE public.forum 
     ADD FOREIGN KEY (category_id) REFERENCES public.category(category_id);
     ADD FOREIGN KEY (last_post_id) REFERENCES public.post(post_id);

ALTER TABLE public.topic
    ADD FOREIGN KEY (user_id) REFERENCES public.user_account(user_id),
    ADD FOREIGN KEY (forum_id) REFERENCES public.forum(forum_id);
    

ALTER TABLE post
    ADD FOREIGN KEY (user_id) REFERENCES public.user_account(user_id),
    ADD FOREIGN KEY (topic_id) REFERENCES public.topic(topic_id);
