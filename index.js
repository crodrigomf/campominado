const express = require ('express');
const app = express();

var campo = [
[0,0,0,0,0],
[0,0,0,0,0],
[0,0,0,0,0],
[0,0,0,0,0],
[0,0,0,0,0]
];

var gabarito = [
[0,1,1,1,0],
[0,1,9,2,1],
[0,2,2,3,9],
[0,1,9,1,1],
[0,1,1,1,0]
];

app.get('/', function(req, res){
	var html= 
	`<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Campo Minado</title>

<style>
	div.a { text-align: center;
	}
	table{
		margin: auto;
		border: 1px solid black;
		border-collapse: collapse;
	}
	td{
		width: 2em;
		height: 2em;
		border: 1px solid black;
		border-collapse: collapse;
	}

	.fechado {
		background-color: #A9A9A9;
	}
	.negrito {
 	font-weight: bold;
	}
	.negritosafe {
 	font-weight: bold;
 	color: #006400;
	}
	a:hover { background: #F5DEB3; font-weight: bold;}
	border0{border: opx; }

</style>
</head>
<body bgcolor="#F8F8FF" text="#2F4F4F">
<div class="a">	
<h1> You're in easy mode! </h1> 
</div>
	<table border="0" align="center">
        <tr>
        <th><a href="campominadoeasy.html" style="color: #2F4F4F">Easy</a></th>
        <th><a href="campominadohard.html" style="color: #2F4F4F">Hard</a></th>
        <th><a href="campominadosobre.html"style="color: #2F4F4F">About</a></th>
    </tr>
	<table>`;
	for (i = 0; i < 5; i++) {
		html += "<tr>";
	for (j = 0; j < 5; j++){
		var numero = gabarito[i][j];
		/*if([i][j]!= 0){
			console.log ({numero[i][j]})
		}
		if([i][j] = 9){
			alert("Game Over")
		html += `<td>${numero}</td>`;
		} else {
			console.log ({numero[i][j]})
		}*/
		html += `<td>${numero}</td>`;
		
	}	
		html += "</tr>"; 
	}
	html += "</table></body></html>";

	res.send(html)
});

app.listen(3000);