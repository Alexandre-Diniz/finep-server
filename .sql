create table Profiles (
	id int primary key auto_increment,
	id_str text,
	name text,
    screen_name text,
	description text,
	followers_count int,
	profile_image_url_https text, 
	verified boolean,
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp on update current_timestamp
);

create table Followers (
	id int primary key auto_increment,
	id_str text,
	followers_count int,
	created_at datetime default current_timestamp,
	updated_at datetime default current_timestamp on update current_timestamp
);

create table ProfileUsers (
	id int primary key auto_increment,
    profileID text,
    userID text,
    created_at datetime default current_timestamp,
	updated_at datetime default current_timestamp on update current_timestamp
);

create table engagements (
	id int primary key auto_increment,
    id_str text,
    last_id_str text,
    retweet_count int not null default 0,
    favorite_count int not null default 0,
    consulted_in timestamp default current_timestamp,
    createdAt timestamp default current_timestamp,
    created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp on update current_timestamp
)
;

create table mentions (
	id int primary key auto_increment,
	max_id_str text,
    id_str text,
    count int default 0,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)
;

create table tokens (
	id int primary key auto_increment,
	token text not null,
  email text not null,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);