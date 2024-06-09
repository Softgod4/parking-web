create table if not exists parkingplace(
placeid SERIAL PRIMARY KEY,
	email VARCHAR(255) NOT NULL,
	fullname VARCHAR(255) NOT NULL,
	placetype VARCHAR(255) NOT NULL,
	starttime VARCHAR(255) NOT NULL,
	endtime VARCHAR(255) NOT NULL
);