CREATE TABLE trdpackages(
id              SERIAL PRIMARY KEY
   , vehicleid     INTEGER  NOT NULL
  ,package       VARCHAR(255)
  ,disclaimer    INTEGER 
  ,price         VARCHAR(255) 
  ,details1      VARCHAR(255) 
  ,disclaimer2   INTEGER 
  ,details2      VARCHAR(255) 
  ,disclaimer3   INTEGER 
  ,details3      VARCHAR(255)
  ,disclaimer4   INTEGER 
  ,details4      VARCHAR(255)
  ,modaldetails1 VARCHAR(500)
  ,disclaimer5    INTEGER 
  ,modaldetails2 VARCHAR(255)
  ,disclaimer6   INTEGER 
  ,disclaimer7  INTEGER 
);
INSERT INTO trdpackages(vehicleid,package,disclaimer,price,details1,disclaimer2,details2,disclaimer3,details3,disclaimer4,details4,modaldetails1,disclaimer5,modaldetails2,disclaimer6,disclaimer7) VALUES (4,'V6 Tow Package',49,'650','V6 Tow Package',49,'50 State Emissions',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO trdpackages(vehicleid,package,disclaimer,price,details1,disclaimer2,details2,disclaimer3,details3,disclaimer4,details4,modaldetails1,disclaimer5,modaldetails2,disclaimer6,disclaimer7) VALUES (4,'Hard tri-fold tonneau cover with options',NULL,'1,300','Hard tri-fold tonneau cover',NULL,'V6 Tow Package',49,'50 State Emissions',NULL,NULL,'Hard tri-fold tonneau cover: lockable, weather-resistant, and folds to the cab for bed access',38,NULL,NULL,NULL);
INSERT INTO trdpackages(vehicleid,package,disclaimer,price,details1,disclaimer2,details2,disclaimer3,details3,disclaimer4,details4,modaldetails1,disclaimer5,modaldetails2,disclaimer6,disclaimer7) VALUES (4,'Premium & Technology Package with options',NULL,'2,980','Premium & Technology Package',NULL,'V6 Tow Package',49,'50 State Emissions',NULL,NULL,'Premium & Technology Package (Double Cab): includes front dual zone automatic climate control, heated front seats, rear parking sonar, Blind Spot Monitor (BSM) (replaces chrome rear bumper with color-keyed on Off-Road grade) and Rear Cross-Traffic Alert (RCTA), projector-beam headlights with LED Daytime Running Lights (DRL) with auto on/off feature, and power tilt/slide moonroof',28,NULL,43,51);
INSERT INTO trdpackages(vehicleid,package,disclaimer,price,details1,disclaimer2,details2,disclaimer3,details3,disclaimer4,details4,modaldetails1,disclaimer5,modaldetails2,disclaimer6,disclaimer7) VALUES (4,'Premium & Technology Package with JBL Audio',NULL,'3,035','Premium & Technology Package with JBL Audio',NULL,'50 State Emissions',NULL,NULL,NULL,NULL,'Premium & Technology Package with JBL Audio (Double Cab A/T only): includes features from Premium & Technology Package and adds Entune Premium JBL Audio with Integrated Navigation and App Suite',57,NULL,48,NULL);
INSERT INTO trdpackages(vehicleid,package,disclaimer,price,details1,disclaimer2,details2,disclaimer3,details3,disclaimer4,details4,modaldetails1,disclaimer5,modaldetails2,disclaimer6,disclaimer7) VALUES (4,'Premium & Technology Package with options',NULL,'3,630','Premium & Technology Package',NULL,'Hard tri-fold tonneau cover',NULL,'V6 Tow Package',49,'50 State Emissions','Premium & Technology Package (Double Cab): includes front dual zone automatic climate control, heated front seats, rear parking sonar, Blind Spot Monitor (BSM)  (replaces chrome rear bumper with color-keyed on Off-Road grade) and Rear Cross-Traffic Alert (RCTA),51 projector-beam headlights with LED Daytime Running Lights (DRL) with auto on/off feature, and power tilt/slide moonroof',28,'Hard tri-fold tonneau cover:38 lockable, weather-resistant, and folds to the cab for bed access',43,51);
INSERT INTO trdpackages(vehicleid,package,disclaimer,price,details1,disclaimer2,details2,disclaimer3,details3,disclaimer4,details4,modaldetails1,disclaimer5,modaldetails2,disclaimer6,disclaimer7) VALUES (4,'Premium & Technology Package with JBL Audio with options',NULL,'3,685','Premium & Technology Package with JBL Audio',NULL,'V6 Tow Package',49,'50 State Emissions',NULL,NULL,'Premium & Technology Package with JBL Audio (Double Cab A/T only): includes features from Premium & Technology Package and adds Entune Premium JBL Audio with Integrated Navigation and App Suite',57,NULL,48,NULL);
INSERT INTO trdpackages(vehicleid,package,disclaimer,price,details1,disclaimer2,details2,disclaimer3,details3,disclaimer4,details4,modaldetails1,disclaimer5,modaldetails2,disclaimer6,disclaimer7) VALUES (4,'Premium & Technology Package with JBL Audio with options',NULL,'4,335','Premium & Technology Package with JBL Audio',NULL,'Hard tri-fold tonneau cover',NULL,'V6 Tow Package',49,'50 State Emissions','Premium & Technology Package with JBL Audio (Double Cab A/T only): includes features from Premium & Technology Package and adds Entune Premium JBL Audio with Integrated Navigation and App Suite',57,'Hard tri-fold tonneau cover:38 lockable, weather-resistant, and folds to the cab for bed access',48,NULL);
