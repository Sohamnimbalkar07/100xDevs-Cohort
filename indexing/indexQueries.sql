CREATE INDEX idx_user_id ON posts (user_id);

CREATE INDEX idx_posts_user_id_title ON posts (description, title);
