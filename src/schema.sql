CREATE DATABASE BossaBox

CREATE TABLE IF NOT EXISTS tools (
  id serial primary key,
  title text not null,
  link text not null,
  description text not null,
  tags text,
  tools_creator int references users(user_id)
  );

Create table if not exists users(
  user_id serial primary key,
  name varchar(40) not null,
  email text not null unique,
  password text not null
 )