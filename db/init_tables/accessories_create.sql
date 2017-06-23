CREATE TABLE IF NOT EXISTS VehiclesBuildAll (
  id SERIAL PRIMARY KEY NOT NULL,
  Year integer,
  Model varchar(255),
  PriceStartingMSRP varchar(255),
  PriceAsShown varchar(255),
  Type varchar(255),	
  ImageUrl varchar(255)

);


INSERT INTO VehiclesBuildAll (Year, Model, PriceStartingMSRP, PriceAsShown, Type, ImageUrl)
VALUES