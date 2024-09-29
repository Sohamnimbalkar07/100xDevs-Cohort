DELIMITER $$

CREATE PROCEDURE insert_users_and_posts()
BEGIN
    DECLARE i INT DEFAULT 1;
    DECLARE j INT DEFAULT 1;
    DECLARE returned_user_id INT;

    -- Insert 5 users
    WHILE i <= 5 DO
        INSERT INTO users (email, password, name) 
        VALUES (CONCAT('user', i, '@example.com'), CONCAT('pass', i), CONCAT('User ', i));

        -- Get the last inserted user_id
        SET returned_user_id = LAST_INSERT_ID();

        -- Insert 500,000 posts for each user
        SET j = 1;
        WHILE j <= 500000 DO
            INSERT INTO posts (user_id, title, description)
            VALUES (returned_user_id, CONCAT('Title ', j), CONCAT('Description for post ', j));
            SET j = j + 1;
        END WHILE;

        SET i = i + 1;
    END WHILE;
END $$

DELIMITER ;
CALL insert_users_and_posts();

