select trdcolors.images 
from trdcolors 
join tacomagrades on trdcolors.vehicleid = tacomagrades.id 
where trdcolors.vehicleid = $1 AND trdcolors.exteriorname ='Black'