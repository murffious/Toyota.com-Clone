
CREATE TABLE tacomacabsbeds(
      id              SERIAL PRIMARY KEY NOT NULL
  ,vehicleId   INTEGER  NOT NULL
  ,Type        VARCHAR(255) 
  ,feature1    VARCHAR(255) 
  ,feature2    VARCHAR(255) 
  ,feature3    VARCHAR(255) 
  ,feature4    VARCHAR(255) 
  ,feature5    VARCHAR(255) 
  ,feature6    VARCHAR(255) 
  ,bedfeature1 VARCHAR(255) 
  ,bedfeature2 VARCHAR(255) 
  ,bedfeature3 VARCHAR(255) 
);
INSERT INTO tacomacabsbeds(vehicleId,Type,feature1,feature2,feature3,feature4,feature5,feature6,bedfeature1,bedfeature2,bedfeature3) VALUES (4,'Access Cab with 6-ft. Long Bed','Access Cab','Seating for four','Fiber-reinforced Sheet-Molded Composite (SMC) inner bed','Deck rail system','Easy lower, lockable and removable tailgate','6-ft. Long Bed','73.7 inches long','41.5 inches between the wheel wells','19.1 inches deep');
INSERT INTO tacomacabsbeds(vehicleId,Type,feature1,feature2,feature3,feature4,feature5,feature6,bedfeature1,bedfeature2,bedfeature3) VALUES (4,'Double Cab with 5-ft. Short Bed','Double Cab','Seating for five','Fiber-reinforced Sheet-Molded Composite (SMC) inner bed','Deck rail system','Easy lower, lockable and removable tailgate',NULL,'60.5 inches long','41.5 inches between the wheel wells','19.1 inches deep');
INSERT INTO tacomacabsbeds(vehicleId,Type,feature1,feature2,feature3,feature4,feature5,feature6,bedfeature1,bedfeature2,bedfeature3) VALUES (4,'Double Cab with 6-ft. Long Bed','Double Cab','Seating for five','Fiber-reinforced Sheet-Molded Composite (SMC) inner bed','Deck rail system','Easy lower, lockable and removable tailgate',NULL,'73.7 inches long','41.5 inches between the wheel wells','19.1 inches deep');
