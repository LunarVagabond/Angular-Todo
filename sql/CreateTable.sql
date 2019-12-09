create table todo (
	todo_id serial NOT NULL,
	title varchar(100) NOT NULL,
	description varchar(500),
	completed boolean DEFAULT false,
	PRIMARY KEY(todo_id)
);

INSERT INTO todo(title,description) VALUES('Test Three','This is the description 3');

SELECT * FROM todo;

DROP TABLE todo;