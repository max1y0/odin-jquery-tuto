$(document).ready(function(){
//Begin
	var size = 16
	var columns = ""
	createCanvas ()

	

})

createCanvas = function(){
		size = prompt("Indique la cantidad de cuadrado vite")

		squareSize = 700/size;
		columnSize = squareSize +2 ;
		console.log(squareSize);

		//reseting the columns and the square divs
		var columns = "";
		$('div').remove('.square');

		//creating the canvas
		loadCanvas(size,columns,squareSize,columnSize)
	}

	reset = function(){
		$('.square').css('opacity',0)
	}

loadCanvas = function(n,c,sz,cz){
	//creating the canvas of size n squares
	var i = 0
	while (i < n) {
		var j = 0
		while (j < n-1) {
			$('.canvas').append('<div class ="square"></div>');
			j++;
		}
		$('.canvas').append('<div class ="square"></div>');
		c = c + cz+"px "
		i++;
	}

	// hiding the squares and waitng for mouse to hover on them
	reset();
	$('.square').css('width',sz)
	$('.square').css('height',sz)
	$('.square').mouseenter(function(){
		$(this).css('opacity',1);
	})

	// configuring the grid view of the squares
	$('.canvas').css('display','grid');
	$('.canvas').css('grid-template-columns',c);
}