CREATE TABLE tacomagrades(
 id              SERIAL PRIMARY KEY
   ,Year            INTEGER  NOT NULL
  ,model           VARCHAR(15) NOT NULL
  ,grade           VARCHAR(25) NOT NULL
  ,Price           VARCHAR(10) NOT NULL
  ,Fuel_Efficiency VARCHAR(8) NOT NULL
  ,Type            VARCHAR(25) NOT NULL
  ,mpgdisclaimer   INTEGER  NOT NULL
  ,Details_1       VARCHAR(255) NOT NULL
  ,Details_2       VARCHAR(255) NOT NULL
  ,Imageurl        VARCHAR(255) NOT NULL
  ,availcab        VARCHAR(40) NOT NULL
  ,availBed        VARCHAR(40) NOT NULL
);
INSERT INTO tacomagrades(Year,model,grade,Price,Fuel_Efficiency,Type,mpgdisclaimer,Details_1,Details_2,Imageurl,availcab,availBed) VALUES (2017,'Tacoma','SR','24,320','19/23','Tacoma Build',2,'2.7L 4-cylinder or 3.5L V6','Available in Rear-Wheel Drive or 4WDemand part-time 4WD','./app/images/build-tacoma-home/tacomagrades1.png','ACCESS CAB, DOUBLE CAB','SHORT BED');
INSERT INTO tacomagrades(Year,model,grade,Price,Fuel_Efficiency,Type,mpgdisclaimer,Details_1,Details_2,Imageurl,availcab,availBed) VALUES (2017,'Tacoma','SR5','26,405','19/23','Tacoma Build',2,'2.7L 4-cylinder or 3.5L V6','Available in Rear-Wheel Drive or 4WDemand part-time 4WD','./app/images/build-tacoma-home/tacomagrades2.png','ACCESS CAB, DOUBLE CAB','SHORT BED, LONG BED');
INSERT INTO tacomagrades(Year,model,grade,Price,Fuel_Efficiency,Type,mpgdisclaimer,Details_1,Details_2,Imageurl,availcab,availBed) VALUES (2017,'Tacoma','TRD Sport','30,685','19/24','Tacoma Build',2,'3.5L V6','Available in Rear-Wheel Drive or 4WDemand part-time 4WD','./app/images/build-tacoma-home/tacomagrades3.png','ACCESS CAB, DOUBLE CAB','SHORT BED, LONG BED');
INSERT INTO tacomagrades(Year,model,grade,Price,Fuel_Efficiency,Type,mpgdisclaimer,Details_1,Details_2,Imageurl,availcab,availBed) VALUES (2017,'Tacoma','TRD Off-Road','31,940','19/24','Tacoma Build',2,'3.5L V6','Available in Rear-Wheel Drive or 4WDemand part-time 4WD','./app/images/build-tacoma-home/tacomagrades4.png','ACCESS CAB, DOUBLE CAB','SHORT BED, LONG BED');
INSERT INTO tacomagrades(Year,model,grade,Price,Fuel_Efficiency,Type,mpgdisclaimer,Details_1,Details_2,Imageurl,availcab,availBed) VALUES (2017,'Tacoma','Limited','38,995','18/23','Tacoma Build',2,'3.5L V6','Available in Rear-Wheel Drive or 4WDemand part-time 4WD','./app/images/build-tacoma-home/tacomagrades5.png','DOUBLE CAB','SHORT BED');
INSERT INTO tacomagrades(Year,model,grade,Price,Fuel_Efficiency,Type,mpgdisclaimer,Details_1,Details_2,Imageurl,availcab,availBed) VALUES (2017,'Tacoma','TRD Pro','40,960','17/20','Tacoma Build',2,'3.5L V6','Available in 4WDemand part-time 4WD','./app/images/build-tacoma-home/tacomagrades6.png','DOUBLE CAB','SHORT BED');
