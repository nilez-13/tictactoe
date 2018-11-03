function StartGame(){

	for (var i =1 ; i <=9 ; i++ ){
		clearBox(i);
	}

	document.turn="x";
	document.winner = null;
	
	SetMessage(document.turn +"  gets to start game")

}
function NextMove(square){
	if (document.winner != null) {
		SetMessage(document.turn + " already won")
	}
	else if(square.innerText ==""){
	square.innerText=document.turn;
	SwitchTurn();
}
else{
	alert("pick a empty square") 
}

}
function SwitchTurn(){
	var dares = ["dare1","dare2","dare3","dare4","dare5"]
	var dareno = Math.floor((Math.random() * 4) );
	if(CheckForWinner(document.turn)){
		document.winner = document.turn;
		alert (document.turn +" won.");
		document.getElementById("dare").innerText= "Loser has to complete this dare: " + dares[dareno] ;
	}

	else if(document.turn == "x"){
		document.turn ="o";
		SetMessage("its  "+ document.turn+"'s turn")
	}
	else{
		document.turn = "x";}
		SetMessage("its  "+ document.turn+"'s turn")
}
function SetMessage(msg){
	document.getElementById("message").innerText=msg ;
}

function CheckForWinner(move){
	var result = false;
	if (CheckRow(1, 2, 3, move) ||
		CheckRow(4, 5, 6, move) ||
		CheckRow(7, 8, 9, move) ||
		CheckRow(1, 5, 9, move) ||
		CheckRow(1, 4, 7, move) ||
		CheckRow(2, 5, 8, move) ||
		CheckRow(3, 6, 9, move) ||
		CheckRow(3, 5, 7, move)){
		result = true;
	}
	console.log(result);
	return result;
}
function CheckRow (a, b, c, move){
var result = false;
if ( GetBox(a) == move && GetBox(b) == move && GetBox(c) == move){
	result = true;
}
return result;
}
function GetBox (number)
{
	 return document.getElementById("S"+number).innerText;
}

function clearBox (number){
	document.getElementById("S"+number).innerText ="";
}