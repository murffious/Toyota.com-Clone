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
(2017, '86', '26,255', '26,255', 'Cars & Minivans', 'https://www.toyota.com/content/common/img/jellies/global-nav/2017/86/base.png'),
(2017, 'Corolla iM', '18,750', '18,750', 'Cars & Minivans', 'https://www.toyota.com/content/common/img/jellies/global-nav/2017/corollaim/base.png'),
(2017, 'Yaris iA', '15,950', '15,950', 'Cars & Minivans', 'https://www.toyota.com/content/common/img/jellies/global-nav/2017/yarisia/base.png'),
(2017, 'Yaris', '15,250', '18,395', 'Cars & Minivans', 'https://www.toyota.com/content/common/img/jellies/global-nav/2017/yaris/base.png'),
(2017, 'Corolla', '18,500', '21,980', 'Cars & Minivans', 'https://www.toyota.com/content/common/img/jellies/global-nav/2017/corolla/base.png'),
(2016, 'Camry', '23,070', '33,820', 'Cars & Minivans', 'https://www.toyota.com/content/common/img/jellies/global-nav/2016/camry/base.png'),
(2017, 'Camry', '23,070', '33,820', 'Cars & Minivans',  'https://www.toyota.com/content/common/img/jellies/global-nav/2017/camry/base.png'),
(2017, 'Avalon', '33,300', '37,700', 'Cars & Minivans', 'https://www.toyota.com/content/common/img/jellies/global-nav/2017/avalon/base.png'),
(2018, 'Avalon', '33,500', '37,900', 'Cars & Minivans', 'https://www.toyota.com/content/common/img/jellies/global-nav/2018/avalon/base.png'),
(2016, 'Sienna', '28,850', '39,930', 'Cars & Minivans', 'https://www.toyota.com/content/common/img/jellies/global-nav/2016/sienna/base.png'),
(2017, 'Sienna', '29,750', '40,830', 'Cars & Minivans', 'https://www.toyota.com/content/common/img/jellies/global-nav/2017/sienna/base.png'),
(2016, 'Tacoma', '23,660', '34,090', 'Trucks', 'https://www.toyota.com/content/common/img/jellies/global-nav/2016/tacoma/base.png'),
(2017, 'Tacoma', '24,320', '34,905', 'Trucks', 'https://www.toyota.com/content/common/img/jellies/global-nav/2017/tacoma/base.png'),
(2016, 'Tundra', '29,140', '40,670', 'Trucks', 'https://www.toyota.com/content/common/img/jellies/global-nav/2016/tundra/base.png'),
(2017, 'Tundra', '30,120', '41,380', 'Trucks', 'https://www.toyota.com/content/common/img/jellies/global-nav/2017/tundra/base.png'),
(2018, 'C-HR', '22,500', '24,350', 'Crossovers & SUVs', 'https://www.toyota.com/content/common/img/jellies/global-nav/2018/c-hr/base.png'),
(2016, 'RAV4', '24,350', '29,265', 'Crossovers & SUVs', 'https://www.toyota.com/content/common/img/jellies/global-nav/2016/rav4/base.png'),
(2017, 'RAV4', '24,410', '36,150', 'Crossovers & SUVs', 'https://www.toyota.com/content/common/img/jellies/global-nav/2017/rav4/base.png'),
(2016, 'Highlander', '30,490', '40,915', 'Crossovers & SUVs', 'https://www.toyota.com/content/common/img/jellies/global-nav/2016/highlander/base.png'),
(2017, 'Highlander', '30,630', '41,150', 'Crossovers & SUVs', 'https://www.toyota.com/content/common/img/jellies/global-nav/2017/highlander/base.png'),
(2016, '4Runner', '34,010',	'39,595', 'Crossovers & SUVs', 'https://www.toyota.com/content/common/img/jellies/global-nav/2016/4runner/base.png'),
(2017, '4Runner', '34,210', '40,675', 'Crossovers & SUVs', 'https://www.toyota.com/content/common/img/jellies/global-nav/2017/4runner/base.png'),
(2016, 'Sequoia', '44,965', '61,855', 'Crossovers & SUVs', 'https://www.toyota.com/content/common/img/jellies/global-nav/2016/sequoia/base.png'),
(2017, 'Sequoia', '45,560', '62,090', 'Crossovers & SUVs', 'https://www.toyota.com/content/common/img/jellies/global-nav/2017/sequoia/base.png'),
(2017, 'Land Cruiser', '84,775', '84,775', 'Crossovers & SUVs', 'https://www.toyota.com/content/common/img/jellies/global-nav/2017/landcruiser/base.png'),
(2016, 'RAV4 Hybrid', '28,370', '35,045', 'Hybrids & FCV', 'https://www.toyota.com/content/common/img/jellies/global-nav/2016/rav4hybrid/base.png'),
(2017, 'Prius Prime', '27,100',	'28,800', 'Hybrids & FCV', 'https://www.toyota.com/content/common/img/jellies/global-nav/2017/priusprime/base.png'),
(2017, 'RAV4 Hybrid', '29,030', '32,185', 'Hybrids & FCV', 'https://www.toyota.com/content/common/img/jellies/global-nav/2017/rav4hybrid/base.png'),
(2016, 'Prius c', '19,560', '24,495', 'Hybrids & FCV', 'https://www.toyota.com/content/common/img/jellies/global-nav/2016/priusc/base.png'),
(2017, 'Prius c', '20,150',	'25,265', 'Hybrids & FCV', 'https://www.toyota.com/content/common/img/jellies/global-nav/2017/priusc/base.png'),
(2016, 'Prius', '24,200', '32,100', 'Hybrids & FCV', 'https://www.toyota.com/content/common/img/jellies/global-nav/2016/prius/base.png'),
(2017, 'Prius', '24,685',	'32,115', 'Hybrids & FCV', 'https://www.toyota.com/content/common/img/jellies/global-nav/2017/prius/base.png'),
(2016, 'Camry Hybrid', '26,790', '27,995', 'Hybrids & FCV', 'https://www.toyota.com/content/common/img/jellies/global-nav/2016/camryhybrid/base.png'),
(2017, 'Camry Hybrid', '26,790', '27,995', 'Hybrids & FCV', 'https://www.toyota.com/content/common/img/jellies/global-nav/2017/camryhybrid/base.png'),
(2017, 'Prius v', '26,675',	'34,270', 'Hybrids & FCV', 'https://www.toyota.com/content/common/img/jellies/global-nav/2017/priusv/base.png'),
(2017, 'Avalon Hybrid', '37,300', '42,600','Hybrids & FCV', 'https://www.toyota.com/content/common/img/jellies/global-nav/2017/avalonhybrid/base.png'),
(2018, 'Avalon Hybrid', '37,500',	'42,800', 'Hybrids & FCV', 'https://www.toyota.com/content/common/img/jellies/global-nav/2018/avalonhybrid/base.png'),
(2016, 'Highlander Hybrid', '47,870',	'47,870', 'Hybrids & FCV', 'https://www.toyota.com/content/common/img/jellies/global-nav/2016/highlanderhybrid/base.png'),
(2017, 'Highlander Hybrid', '36,270',	'50,085', 'Hybrids & FCV', 'https://www.toyota.com/content/common/img/jellies/global-nav/2017/highlanderhybrid/base.png')
