/*jshint multistr:true */

var unit3 = function(){
	var text = "Keonwoo Kim Keonwoo Kim Keonwoo";
	var myName = "Keonwoo Kim";
	var hits = [];

	for(var i=0; i<text.length; i++){
		if(text[i] === myName[i]){
			for(var j = i; j<i+myName.length; j++){  
				hits.push(myName[j]);
				break;
			}
		}
	}

	if(hits.length === 0){
		console.log("Your name wasn't found!");
	} else{
		console.log(hits);
	}
}