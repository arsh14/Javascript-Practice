console.log("connected!");
var ans="true";
var arr=[];
while(ans!=="quit"){
	ans=prompt("What would you like to do");
	if (ans=="new"){
		arr.push(prompt("Enter the todo"));
	}
	else if(ans=="list"){
		console.log("*******************************");
		arr.forEach(function(item){
			console.log(arr.indexOf(item)+" : "+item);
		})
		console.log("*******************************");
	}
	else if(ans=="delete"){
		var i=prompt("enter the index of element");
		arr.splice(i,1);
	}
}
console.log("Ok , you quit the app!!!!")