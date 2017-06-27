CREATE TABLE tacomaconfiguration(
        id              SERIAL PRIMARY KEY  
 ,vehicleid    INTEGER  NOT NULL
  ,motorcombo   VARCHAR(255) 
  ,transmission VARCHAR(255) 
  ,details1     VARCHAR(255) 
  ,details2     VARCHAR(255) 
  ,details3     VARCHAR(255) 
  ,details4     VARCHAR(255) 
  ,details5     VARCHAR(255)
  ,details6     VARCHAR(255)
  ,disclaimer   INTEGER 
);
INSERT INTO tacomaconfiguration(vehicleid,motorcombo,transmission,details1,details2,details3,details4,details5,details6,disclaimer) VALUES (4,'3.5L V6 Engine with 4x2','6-Speed Automatic','278 hp @ 6000 rpm','265 lb.-ft. @ 4600 rpm','DOHC 24-Valve direct-injection Atkinson-cycle engine','VVT-i D4S self-cleaning injectors','Electronically Controlled automatic overdrive Transmission with intelligence (ECT-i)','Rear-Wheel Drive with Automatic Limited-Slip Differential (Auto LSD)',30);
INSERT INTO tacomaconfiguration(vehicleid,motorcombo,transmission,details1,details2,details3,details4,details5,details6,disclaimer) VALUES (4,'3.5L V6 Engine with 4x4','6-Speed Automatic','278 hp @ 6000 rpm','265 lb.-ft. @ 4600 rpm','DOHC 24-Valve direct-injection Atkinson-cycle engine','VVT-i D4S self-cleaning injectors','Electronically Controlled automatic overdrive Transmission with intelligence (ECT-i)','4WDemand part-time 4WD',NULL);
INSERT INTO tacomaconfiguration(vehicleid,motorcombo,transmission,details1,details2,details3,details4,details5,details6,disclaimer) VALUES (4,'3.5L V6 Engine with 4x4','6-Speed Manual Transmission','278 hp @ 6000 rpm','265 lb.-ft. @ 4600 rpm','DOHC 24-Valve direct-injection Atkinson-cycle engine','VVT-i D4S self-cleaning injectors','4WDemand part-time 4WD',NULL,NULL);
