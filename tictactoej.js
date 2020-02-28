// JavaScript Document

	
	/* 
	numbering of tic tac toe squares
	
	1 | 2 | 3
	----------
	4 | 5 | 6
	----------
	7 | 8 | 9
	
	*/
	//global variables
	
	var canvas;
	var ctx;
	var s1 = 0;
	var s2 = 0;
	var s3 = 0;
	var s4 = 0;
	var s5 = 0;
	var s6 = 0;
	var s7 = 0;
	var s8 = 0;
	var s9 = 0 ;
	var playerTurn = 1 //1 for x. 2 for y
	
	function loaded(){// start of loaded
		
		canvas = document.getElementById("canvas")	
		ctx = canvas.getContext("2d")
		canvas.addEventListener("click",ticTacToe,false)
		resetGlobals()
		makeBoard()
		
		
	}// end of loaded
	
	
	
	function ticTacToe(e){// start of ticTacToe
		/*
			INPUTS - none
			OUTPUTS - none
			main gameplay that triggers when the board is clicked
		*/
		var x = e.x;
		var y = e.y;
		x -= canvas.offsetLeft;
		y -= canvas.offsetTop;
		var square
		var result
		square = squareClicked(x,y,canvas.width,canvas.height)
		//squareNotUsed()
		if(squareNotUsed(square)==true){
			// a valid move was made		
			if(playerTurn ==1){
				//x's turn, change the appropriate global variable to 10
				switch(square){
					case 1:
						// draw an X
						s1 = 10
						break;
					case 2:
						// draw an X
						s2 = 10
						break;
					case 3:
						// draw an X
						s3 = 10
						break;
					case 4:
						// draw an X
						s4 = 10
						break;
					case 5:
						// draw an X
						s5 = 10
						break;
					case 6:
						// draw an X
						s6 = 10
						break;
					case 7:
						// draw an X
						s7 = 10
						break;
					case 8:
						// draw an X
						s8 = 10
						break;
					case 9:
						// draw an X
						s9 = 10
						break;
					
				}// end of switch
				// draw the X
				drawX(square)
				// change it to O's turn
				playerTurn = 2
				
			}else{
				// y's turn, change the appropriate global variable to 100
				switch(square){
					case 1:
						// draw an O
						s1 = 100
						break;
					case 2:
						// draw an O
						s2 = 100
						break;
					case 3:
						// draw an O
						s3 = 100
						break;
					case 4:
						// draw an O
						s4 = 100
						break;
					case 5:
						// draw an O
						s5 = 100
						break;
					case 6:
						// draw an O
						s6 = 100
						break;
					case 7:
						// draw an O
						s7 = 100
						break;
					case 8:
						// draw an O
						s8 = 100
						break;
					case 9:
						// draw an O
						s9 = 100
						break;

				}//End of switch
				// draw the O
				drawO(square)
				// change it to x's turn
				playerTurn = 1
				
			}//End of Os turn
			
			if(checkResults()==1){
				
				alert("X Wins")
			}else if(checkResults()==2){
				
				alert("O Wins")
			}else if(checkResults()==3){
				
				alert("Tie Game")
			}
			// get the results
			 //= ???
			// display a message and start over if the game is over based on the value of result
		}else{
			
			alert("Invalid Move")
		}
	}// end of ticTacToe
	function squareNotUsed(square){// start of squareNotUsed
		/*
			INPUTS - square - integer representing the square to check
			OUTPUTS - true if not used, false if it is used
			checks to see if a square is not already used and returns true if not used otherwise false
		*/
		switch(square){
				
			case 1:
				if(s1==0){
					
					return true;
				}else{
					
					return false;
				}
				break //must be the last line in a switch command
		
		
		case 2:
				if(s2==0){
					
					return true;
				}else{
					
					return false;
				}
				break
		
	
		case 3:
				if(s3==0){
					
					return true;
				}else{
					
					return false;
				}
				break
		case 4:
				if(s4==0){
					
					return true;
				}else{
					
					return false;
				}
				break
		case 5:
				if(s5==0){
					
					return true;
				}else{
					
					return false;
				}
				break
		case 6:
				if(s6==0){
					
					return true;
				}else{
					
					return false;
				}
				break
		case 7:
				if(s7==0){
					
					return true;
				}else{
					
					return false;
				}
				break
		case 8:
				if(s8==0){
					
					return true;
				}else{
					
					return false;
				}
				break
		case 9:
				if(s9==0){
					
					return true;
				}else{
					
					return false;
				}
				break
		
	}
	
	}// end of squareNotUsed
	function squareClicked(x,y,width,height){
		/*
			INPUTS
				x - x location of click
				y  - y location of click
				width - width of canvas
				height - height of canvas
			OUTPUTS 
				number representing the square clicked on (1,2,3,4,5,6,7,8,9)
		*/
		
		
		if(x>=0 && y>=0 && x<=canvas.width/3 && y<=canvas.height/3){
			
			return 1
		}else if(x>=((canvas.width/3)+1) && y>=0 && x<=canvas.width*(2/3) && y<=canvas.height/3){
			
			return 2
		}else if(x>=(canvas.width*(2/3)+1) && y>=0 && x<=canvas.width && y<=canvas.height/3){
			
			return 3
		}else if(x>=0 && y>=canvas.height/3 && x<=canvas.width/3 && y<=canvas.height*(2/3)){
			
			return 4
		}else if(x>=(canvas.width/3) && y>=canvas.height/3 && x<=(canvas.width*2/3) && y<=canvas.height*(2/3)){
			
			return 5
		}else if(x>=(canvas.width*(2/3)) && y>=canvas.height/3 && x<=canvas.width && y<=canvas.height*(2/3)){
			
			return 6
		}else if(x>=0 && y>=canvas.height*(2/3) && x<=canvas.width/3 && y<=canvas.height){
			
			return 7
		}else if(x>=(canvas.width/3) && y>=canvas.height*(2/3) && x<=canvas.width*(2/3) && y<=canvas.height){
			
			return 8
		}else if(x>=(canvas.width*(2/3)) && y>=canvas.height*(2/3) && x<=canvas.width && y<=canvas.height){
				  return 9
		}
	
		
		
	}// end of squareClicked
	
	function resetGlobals(){// start of resetGlobals
		/*
			INPUTS - none
			OUTPUTS - none
			resets global variables to starting values
		*/
	
		s1 = 0
		s2 = 0
		s3 = 0
		s4 = 0
		s5 = 0
		s6 = 0
		s7 = 0
		s8 = 0
		s9 = 0
		
		makeBoard()
		playerturn = 1
		
	}// end resetGlobals
	function makeBoard(){//start of boardSetup
		/*
			INPUTS - none
			OUTPUTS - none
			creates a blank the tick tac toe board
		*/
		
		canvas.width = 600	
		canvas.height = 600
		
		//draw the board
		
		
		ctx.beginPath
		ctx.rect(0,0,canvas.width,canvas.height)
		ctx.closePath
		ctx.fillStyle=("Grey")
		ctx.fill()
		
		ctx.lineWidth = 5
		ctx.beginPath()
		ctx.moveTo(canvas.width/3,0)
		ctx.lineTo(canvas.width/3,canvas.height)
		ctx.closePath()
		ctx.stroke()
		
		ctx.lineWidth = 5
		ctx.beginPath()
		ctx.moveTo(canvas.width*(2/3),0)
		ctx.lineTo(canvas.width*(2/3),canvas.height)
		ctx.closePath()
		ctx.stroke()
		
		ctx.lineWidth = 5
		ctx.beginPath()
		ctx.moveTo(0,canvas.height/3)
		ctx.lineTo(canvas.width,canvas.height/3)
		ctx.closePath()
		ctx.stroke()
		
		ctx.lineWidth = 5
		ctx.beginPath()
		ctx.moveTo(0,canvas.height*(2/3))
		ctx.lineTo(canvas.width,canvas.height*(2/3))
		ctx.closePath()
		ctx.stroke()
		
		
	}  //end of boardSetup
	
	function drawX(square){
		/*
			INPUTS - square , number for the square to draw in
			OUTPUTS - none
			draw an X in the given square
		*/
		var x
		var y
		// determine the starting x and y location
		
		if(square %3 == 1){
			//first collum
			x = 0+(canvas.width*0.1)
		}else if(square %3 == 2){
			//second collum
			x = canvas.width/3+(canvas.width*0.1)
		}else {		
			//third collum
			x = (canvas.width*(2/3))+(canvas.width*0.1)
		}
		
		if(square <= 3){
			//first row
			y = 0+(canvas.height*0.1)
		}else if(square <= 6){
			//second row
			y = canvas.height/3+(canvas.height*0.1)
		}else {
			//third row
			y = (canvas.height*(2/3))+(canvas.height*0.1)
		}
		
		
		
		// draw the X
		ctx.strokeStyle = "red"
		ctx.beginPath()
		ctx.moveTo(x+(canvas.width*(1/6)),y+(canvas.height*(1/6)))
		ctx.lineTo(x,y)
		ctx.closePath()
		ctx.stroke()
		
		
		ctx.beginPath()
		ctx.moveTo(x+(canvas.width*(1/6)),y)
		ctx.lineTo(x,y+(canvas.height*(1/6)))
		ctx.closePath()
		ctx.stroke()
	}// end of drawX
	function drawO(square){// start of drawLetter
		/*
			INPUTS - square , number for the square to draw in
			OUTPUTS - none
			draw an O in the given square
		*/
		var x
		var y
		// determine the starting x and y location
		if(square %3 == 1){
			//first collum
			x = 0+(canvas.width*0.1)
			x = 0+(canvas.width*0.1)
		}else if(square %3 == 2){
			//second collum
			x = canvas.width/3+(canvas.width*0.1)
		}else {
			//third collum
			x = canvas.width*(2/3)+(canvas.width*0.1)
		}
		
		if(square <= 3){
			//first row
			y = 0+(canvas.height*0.1)
		}else if(square <= 6){
			//second row
			y = canvas.height/3+(canvas.height*0.1)
		}else {
			//third row
			y = canvas.height*(2/3)+(canvas.height*0.1)
		}
		
		// draw the O
		ctx.strokeStyle = "blue"
		ctx.beginPath()
		ctx.arc(x+(canvas.height*(1/15)),y+(canvas.height*(1/15)),canvas.width*(2/15),0,2*Math.PI)
		ctx.closePath()
		ctx.stroke()
		
	} // end of drawO
	
	
	
	function checkResults(){ // start checkResults
		/*
			INPUTS - none
			OUTPUTS - 1 for x wins
					- 2 for y wins
					- 3 for tie
					- 4 for game continues
			uses global variables to determin the result after a move
		*/
		var	row1Sum
		var row2Sum
		var row3Sum
		var col1Sum
		var col2Sum
		var col3Sum
		var d1Sum
		var d2Sum
		
		row1Sum = s1+s2+s3
		row2Sum = s4+s5+s6
		row3Sum = s7+s8+s9
		col1Sum = s1+s4+s7
		col2Sum = s2+s5+s8
		col3Sum = s3+s6+s9
		d1Sum = s1+s5+s9
		d2Sum = s3+s5+s7
		sumRow = s1+s2+s3+s4+s5+s6+s7+s8+s9
		// mathematical calculations for rows, columns and diagnols
		
		if(row1Sum==30){
			return 1
			
		}else if(row1Sum==300){
			
			return 2
		}else if(row2Sum==30){
			
			return 1
		}else if(row2Sum==300){
			
			return 2
		}else if(row3Sum==30){
			
			return 1
		}else if(row3Sum==300){
			
			return 2
		}else if(col1Sum==30){
			
			return 1
		}else if(col1Sum==300){
			
			return 2
		}else if(col2Sum==30){
			
			return 1
		}else if(col2Sum==300){
			
			return 2
		}else if(col3Sum==30){
			
			return 1
		}else if(col3Sum==300){
			
			return 2
		}else if(d1Sum==30){
			
			return 1
		}else if(d1Sum==300){
			
			return 2
		}else if(d2Sum==30){
			
			return 1
		}else if(d2Sum==300){
			
			return 2
		}else if(s1>=10 && s2>=10 && s3>=10 && s4>=10 && s5>=10 && s6>=10 && s7>=10 && s8>=10 && s9>=10){
			
			return 3
		}
		
		
		
		
		// did X win???
		
		
		// did Y win???
		
		// is it a tie or continue??
			
	}// end checkResults
	
	
	