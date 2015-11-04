-- CS411 A1, Group 1



CREATE SEQUENCE "User_id_seq"
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 9223372036854775807
  START 14
  CACHE 1;
  
CREATE SEQUENCE "File_id_seq"
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 9223372036854775807
  START 14
  CACHE 1;
  
CREATE TABLE files
(
  audio_id int4 NOT NULL DEFAULT nextval('"File_id_seq"'),
  owner_id int4 NOT NULL,
  audio_file bytea NOT NULL,
  audio_name varchar(255),
  creation_date date NOT NULL,
  times_downloaded int4 NOT NULL,
  notes varchar(255),
  CONSTRAINT audio_pk PRIMARY KEY (audio_id)
);
  
CREATE TABLE users
(
  user_id int4 NOT NULL DEFAULT nextval('"User_id_seq"'),
  email varchar(255) NOT NULL UNIQUE,
  password varchar(255) NOT NULL,
  user_name varchar(255) NOT NULL DEFAULT UNIQUE,
  fname char(30),
  lname char(30),
  CONSTRAINT users_pk PRIMARY KEY (user_id)
);

  
