

module.exports =function getArea(params) {
	var area
	var l1=parseInt(params[0]);
	var l2=parseInt(params[1]);
	var area;
	//manca il caso in cui gli input siano due stringhe
	if(l1>=0 && l2>=0){
		area=parseInt(l1*l2);
	}
	else{
		area=-1;
	}
	return area

 	
  }

//calcArea([-2,0]);
