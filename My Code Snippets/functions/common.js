function oddOrEvenFactory(request){
	if(request =="odd"){
		return function(num){
			console.log(num%2 != 0);
		}
	} else if(request =="even"){
		return function(num){
			console.log(num%2 == 0);
		}
	} else{
		console.log("Invalid request");
	}
}

let request = "odd";