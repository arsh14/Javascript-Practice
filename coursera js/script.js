var message = "in global";
console.log("global:message "+message );
var a= function () {
	var message="inside a";
	console.log("a: message "+ message);
	b();
	function b(){
	console.log("b : message="+ message)
}
	// body...
}



a();
var x;
x=5;
if(x == undefined)
	{console.log("x is undef");}
else {console.log("x is def");}
//math operation
console.log((5+4)/3);
console.log(undefined/5);
//equality
var x=4,y=4;
if(x==y){
	console.log("x==y");
}
x="4";
if(x==y){
	console.log("x==y");
}
if(x===y){
	console.log("x===y");
}
else{
	console.log("x not equal y");
}

function orderchick(sidedish) {
	sidedish= sidedish || "whatever!";
	console.log("chicken with "+ sidedish);
}
orderchick("noodles");
orderchick();

var company = new Object();
company.name="facebook";
console.log(company);
company.ceo = new Object();
company.ceo.firstname="mark";
company.ceo.favcolor="blue";
console.log(company);
console.log(company.ceo);
console.log(company["name"]);
company["stock of company"]=110;
console.log(company);

