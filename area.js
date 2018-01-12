

function calcArea(params) {
	var l1=params[0];
	var l2=params[1];
	var area;
	//manca il caso in cui gli input siano due stringhe
	if(l1>=0 && l2>=0){
		area=parseInt(l1*l2);
	}
	else{
		area=-1;
	}
	console.log(area);

 	
  }

calcArea([-2,0]);