-- 1. Create the pgcrypto extension (if not already enabled)
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- 2. Create the users table to store usernames, hashed passwords, MAC, and salt
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    password_salt TEXT NOT NULL,  -- Column to store the salt
    password_mac TEXT NOT NULL   -- Column to store the MAC
);

-- 3. Insert a user with a hashed password, salt, and MAC
INSERT INTO users (username, password_hash, password_salt, password_mac)
VALUES (
    'john_doe', 
    crypt('securepassword123', gen_salt('bf')),  -- Password hash
    gen_salt('bf'),                             -- Salt
    encode(hmac('sha256', 'securepassword123', gen_salt('bf')), 'hex')  -- MAC (HMAC with SHA-256)
);

-- 4. Validate the user's password by comparing the hash and MAC
SELECT username
FROM users
WHERE username = 'john_doe'
  AND password_hash = crypt('securepassword123', password_salt)  -- Compare hash
  AND password_mac = encode(hmac('sha256', 'securepassword123', password_salt), 'hex');  -- Compare MAC
-- Note: The above query assumes that the salt used for hashing and MAC is the same.

-- salt is used for both hashing and MAC
-- value of zero is used for the salt
-- 1 means the salt is used for both hashing and MAC
-- 0 means the salt is used for hashing only
-- checking if salt is less than 8 .
-- only active encryption should be include in result.

-- encryptions
-- account_id   salt              is_active
-- 1            cc20ad47815       0
-- 1            eb4a0bb0b3        0
-- 1            3be6c4d2a1644b   0
-- 1            339c8ee8856c28   0
-- 1            27d2075           0
-- 1            960c872e5dc      0
-- 1            531ca7f4d        1
-- 1            
SELECT
    accounts.mac,
    COUNT(encryptions.salt) AS salts
FROM
    accounts
    JOIN encryptions ON accounts.id = encryptions.account_id
WHERE
    encryptions.is_active = 1
    AND LENGTH(encryptions.salt) < 8
GROUP BY
    accounts.mac
ORDER BY
    accounts.mac ASC;
    