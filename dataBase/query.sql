---------------- query for tables 

----------------------query for >>>>> contact_inf   <<<<<< 
------- >>>> get 
SELECT * FROM `ebtekarthon`.`contact_inf`;
------- >>>>  post 
INSERT INTO `ebtekarthon`.`contact_inf` (`name`, `position`, `email`, `mobile`, `bio`) VALUES ('eman', 'jordan', 'emanzetawy', '0776655', 'ss/pgj');
------- >>>>  delete 
DELETE FROM `ebtekarthon`.`contact_inf` WHERE `id`='1';


----------------------query for  >>>>>>  ebtekarthon_event  <<<<<
--------- >>> get 
SELECT * FROM `ebtekarthon`.`ebtekarthon_event`;
--------  >>> post
INSERT INTO `ebtekarthon`.`ebtekarthon_event` (`headerlogo`, `homeimg`, `hometitle`, `homelocation`, `homedate`, `aboutdescr`, `aboutvidoe`, `location`, `numphone`, `email`) VALUES ('header', 'ss.pgj', 'hello', 'jordan', '24/5', 'hi ', 'sss.tty', 'mafriq', '0777665544', 'ww.dhgf.com');
------ >>> delete 
DELETE FROM  `ebtekarthon`.`ebtekarthon_event`  WHERE `id`='1';
------- >>> put 
UPDATE `ebtekarthon`.`ebtekarthon_event` SET `headerlogo`='headerlogo', `homeimg`='ss.jpg', `hometitle`='helloworld', `homelocation`='Jordan', `homedate`='5/1 sun', `aboutdescr`='hi  descr', `aboutvidoe`='youtube', `location`='Mafriq', `numphone`='777665554', `email`='wwgm.com' WHERE `id`='1';

-------------------- query for  >>> jurie_inf  <<<
---------- >>> get 
SELECT * FROM `ebtekarthon`.`jurie_inf` ;
--------- >>> post 
INSERT INTO `ebtekarthon`.`jurie_inf` (`name`, `position`, `email`, `bio`) VALUES ('eman', 'jordan', 'ww.com', 'dd.pgj');
------- >>>  delete 
DELETE FROM `ebtekarthon`.`jurie_inf` WHERE `id`='1';


--------------------query  for >>>>>>> partner_inf  <<<<<<
------ >>> get 
SELECT * FROM `ebtekarthon`.`partner_inf`;
-----  >>> post 
INSERT INTO `ebtekarthon`.`partner_inf` (`img`, `wsite`) VALUES ('ss.pgj', 'ww.com');
------  >>> delete 
DELETE FROM `ebtekarthon`.`partner_inf` WHERE `id`='1';


----------------------query for >>>> speaker_inf  <<<<<
------ >>> get 
SELECT * FROM `ebtekarthon`.`speaker_inf` ; 
-----  >>> post 
INSERT INTO `ebtekarthon`.`speaker_inf` (`name`, `position`, `email`, `bio`) VALUES ('eman', 'jordan ', 'www.com', 'ss.pgj');
------  >>> delete 
DELETE FROM `ebtekarthon`.`speaker_inf` WHERE `id`='1';

-------------------query for  >>>>> venue  <<<<<
------- >>>> get 
SELECT * FROM `ebtekarthon`.`venue`;
------  >>>> post 
INSERT INTO `ebtekarthon`.`venue` (`namevenue`, `phone`, `email`, `ebt_id`) VALUES ('jordan', '0777888999', 'ww.com', '1');
------  >>>> put 
UPDATE `ebtekarthon`.`venue` SET `namevenue`=' Jordan ', `phone`='077788899', `email`='www.com' WHERE `id`='1';
-------  >>> delete 
DELETE FROM `ebtekarthon`.`venue` WHERE `id`='1';


--------------- query for  >>>> day_inf <<<<
----- >>> get 
SELECT * FROM `ebtekarthon`.`day_inf`;
----- >>> post 
INSERT INTO `ebtekarthon`.`day_inf` (`day_date`, `ebt_id`) VALUES ('1/5 sun', '1');
----- >>> delete 
DELETE FROM `ebtekarthon`.`day_inf` WHERE `id`='1';

--------------------query for >>>event_inf <<<<
----- >>> get 
SELECT * FROM `ebtekarthon`.`event_inf`;
----- >>>  post 
INSERT INTO `ebtekarthon`.`event_inf` (`time`, `title`, `day_id`) VALUES ('2.00', 'chams', '1');
------  >>> delete 
DELETE FROM `ebtekarthon`.`event_inf` WHERE `event_id`='1';

--------------------- query for  >>>> social_media <<<<
----   >>> get 
SELECT * FROM `ebtekarthon`.`social_media`;
----   >>> post 
INSERT INTO `ebtekarthon`.`social_media` (`wsite`, `ebt_id`) VALUES ('www.com', '1');
----  >>>> delete 
DELETE FROM `ebtekarthon`.`social_media` WHERE `id`='1';

---------------------------------------------------------------------
---------------------------------------------------------------------
------ >>> END <<< -----


-----  contact_event  &  juries_event   &  partner_event   & speaker_event      >>>>>  

SELECT * FROM `ebtekarthon`.`contact_event`;
SELECT * FROM `ebtekarthon`.`jurie_event`;
SELECT * FROM `ebtekarthon`.`partner_event`;
SELECT * FROM `ebtekarthon`.`speaker_event`;

INSERT INTO `ebtekarthon`.`contact_event`(`contact_id` , `ebt_id`)  VALUES (`1`,`1`); 
INSERT INTO `ebtekarthon`.`jurie_event` (`jurie_id`,`ebt_id`)  VALUES (`1`,`1`); 
INSERT INTO `ebtekarthon`.`partner_event`(`partner_id` , `ebt_id` ) VALUES (`1`,`1`);
INSERT INTO `ebtekarthon`.`speaker_event`(`speaker_id` , `ebt_id` )VALUES (`1`,`1`);

--------


