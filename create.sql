CREATE DATABASE ebtekarthon;
use ebtekarthon ;
CREATE TABLE ebtekarthon_event (
    id int NOT NULL AUTO_INCREMENT,
    headerlogo varchar(255),
    homeimg varchar(255),
    hometitle varchar(255),
    homelocation varchar(255),
    homedate varchar(255),
    aboutdescr varchar(255),
    aboutvidoe varchar(255),
    location varchar(255),
    numphone int ,
    email varchar(255),
    PRIMARY KEY (id)
);
CREATE TABLE day_inf (
    id int NOT NULL AUTO_INCREMENT ,
    day_date varchar(255) ,
    ebt_id int,
    PRIMARY KEY (id),
    FOREIGN KEY (ebt_id) REFERENCES ebtekarthon_event(id)
);
CREATE TABLE event_inf(
    event_id int NOT NULL AUTO_INCREMENT,
    time int ,
    title varchar(255),
    day_id int ,
    PRIMARY KEY (event_id),
    FOREIGN KEY (day_id) REFERENCES day_inf(id)
);
CREATE TABLE speaker_inf (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255),
    position varchar(255),
    email varchar(255),
    bio varchar(255),
    PRIMARY KEY (id)
) ;
CREATE TABLE speaker_event(
    speaker_id int, 
    ebt_id int ,
    FOREIGN KEY (speaker_id) REFERENCES speaker_inf(id),
    FOREIGN KEY (ebt_id) REFERENCES ebtekarthon_event(id)
);
CREATE TABLE jurie_inf (
    id int NOT NULL AUTO_INCREMENT ,
    name varchar(255),
    position varchar(255),
    email varchar(255),
    bio varchar(255),
    PRIMARY KEY (id)
);
CREATE TABLE jurie_event(
    jurie_id int, 
    ebt_id int ,
    FOREIGN KEY (jurie_id) REFERENCES jurie_inf(id),
    FOREIGN KEY (ebt_id) REFERENCES ebtekarthon_event(id)
);
CREATE TABLE contact_inf (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255),
    position varchar(255),
    email varchar(255),
    bio varchar(255),
    PRIMARY KEY (id)
);
CREATE TABLE contact_event(
    contact_id int, 
    ebt_id int ,
    FOREIGN KEY (contact_id) REFERENCES contact_inf(id),
    FOREIGN KEY (ebt_id) REFERENCES ebtekarthon_event(id)
);
CREATE TABLE partner_inf (
    id int NOT NULL AUTO_INCREMENT,
    img varchar(255),
    wsite varchar(255),
    PRIMARY KEY (id)
);
CREATE TABLE partner_event(
    partner_id int, 
    ebt_id int ,
    FOREIGN KEY (partner_id) REFERENCES partner_inf(id),
    FOREIGN KEY (ebt_id) REFERENCES ebtekarthon_event(id)
);
CREATE TABLE social_media (
    id int NOT NULL AUTO_INCREMENT ,
    wsite varchar(255),
    ebt_id int ,
    PRIMARY KEY (id),
    FOREIGN KEY (ebt_id) REFERENCES ebtekarthon_event(id)
);