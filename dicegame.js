///Dice Game



let	playerOne = 0;
let	playerTwo = 0;
while(playerOne < 1000 && playerTwo <1000){
	roll();
	alert("Player One score is "+playerOne);
	if(playerOne >= 1000){
		alert("Player One wins");
	}
	
	roll2();
	alert("Player Two score is "+playerTwo);
	if(playerTwo>=1000){
		alert("Player Two wins")
	}

//Player One

		function roll(){
	

			alert('Player One roll')
			let diceRoll = Math.floor( Math.random() * 4) +1;
				alert('You got ' + diceRoll + ' from a 4 sided dice');
			let diceRoll2 = Math.floor( Math.random() * 6) +1;
				alert('You got ' + diceRoll2 + ' from a 6 sided dice');
			let diceRoll3 = Math.floor( Math.random() * 8) +1;
				alert('You got ' + diceRoll3 + ' from a 8 sided dice');
			let diceRoll4 = Math.floor( Math.random() * 10) +1;
				alert('You got ' + diceRoll4 + ' from a 10 sided dice');
			let diceRoll5 = Math.floor( Math.random() * 12) +1;
				alert('You got ' + diceRoll5 + ' from a 12 sided dice');
			let diceRoll6 = Math.floor( Math.random() * 20) +1;
				alert('You got ' + diceRoll6 + ' from a 20 sided dice');

				var arr = new Array(diceRoll, diceRoll2, diceRoll3, diceRoll4, diceRoll5, diceRoll6);
				// console.log(arr);

				var arr2 = new Array(diceRoll, diceRoll2, diceRoll3, diceRoll4, diceRoll5, diceRoll6);
				// console.log(arr2);

				arr.sort(function(a, b) {
 				   return a % 2 - b % 2 || a - b;
				});

				arr2.sort(function(a, b) {
 				   return a - b;
				});


				function evenAmount(evenNumbers = arr){
					let evenCounter = "";
			
					for(let i = 0; i <= evenNumbers.length; i++){
					let counterEven = 0;
					while(evenNumbers[i] % 2 == 0){
						counterEven++;
						i++;
					}
					evenCounter += counterEven;
					
					return evenCounter;
				}
			}

				


				function oneAmount(oneNumbers = arr2){
					let oneCounter = "";
					for(let i = 0; i <= oneNumbers.length; i++){
					let counterOne = 0;
					while(oneNumbers[i] === 1){
						counterOne++;
						i++;
					}
					oneCounter += counterOne;
					
				return oneCounter;
				}
			}

		

			let numberOnes = oneAmount();
			let evenNumber = evenAmount();
			
			let pointsNeg1000 = (-1000)
			let pointsNeg500 = (-500)
			let pointsNeg250 = (-250)
			let points100 = (100)
			let points250 = (250)
			let points650 = (650)
			let points750 = (900)

		if(diceRoll === 4 && diceRoll2 === 6 && diceRoll3 === 8 && diceRoll4 === 10 && diceRoll5 === 12 && diceRoll6 === 20){
			 return playerOne += 1000000;
			
			}
		else if (diceRoll % 2 === 0 && diceRoll2 % 2 === 0 && diceRoll3 % 2 === 0 && diceRoll4 % 2 === 0 && diceRoll5 % 2 === 0 && diceRoll6 % 2 === 0) {
			
			
			return playerOne +=points650;
			}
		else if (diceRoll == 1 && diceRoll2 == 1 && diceRoll3  == 1 && diceRoll4  == 1 && diceRoll5 == 1 && diceRoll6 == 1){
			
			return playerOne +=pointsNeg1000;
			
			}
		else if(diceRoll % 2 !== 0 && diceRoll2 % 2 !== 0 && diceRoll3 % 2 !== 0 && diceRoll4 % 2 !== 0 && diceRoll5 % 2 !== 0 && diceRoll6 % 2 !== 0){
			
			return playerOne +=points650;
			}

		else if(numberOnes == 5){
			
			return playerOne +=pointsNeg500;
		}	

		else if(numberOnes == 4){ 
			
			return playerOne +=pointsNeg250;
		}

		else if(numberOnes === 3){ 
			
			return playerOne = 0;
		}

	

		else if(evenNumber == 3){
			
			return playerOne +=points250;
		}

		else if(evenNumber == 4 || evenNumber == 5|| evenNumber == 2|| evenNumber == 1){
			
			return playerOne +=points100;
		}

	
			
		else if(evenNumber == 6){
			
			return playerOne +=points650;
		}
		

	}


//Player Two

	function roll2(){


		alert('Player Two roll')
		let diceRoll = Math.floor( Math.random() * 4) +1;
				alert('You got ' + diceRoll + ' from a 4 sided dice');
			let diceRoll2 = Math.floor( Math.random() * 6) +1;
				alert('You got ' + diceRoll2 + ' from a 6 sided dice');
			let diceRoll3 = Math.floor( Math.random() * 8) +1;
				alert('You got ' + diceRoll3 + ' from a 8 sided dice');
			let diceRoll4 = Math.floor( Math.random() * 10) +1;
				alert('You got ' + diceRoll4 + ' from a 10 sided dice');
			let diceRoll5 = Math.floor( Math.random() * 12) +1;
				alert('You got ' + diceRoll5 + ' from a 12 sided dice');
			let diceRoll6 = Math.floor( Math.random() * 20) +1;
				alert('You got ' + diceRoll6 + ' from a 20 sided dice');

			var arr = new Array(diceRoll, diceRoll2, diceRoll3, diceRoll4, diceRoll5, diceRoll6);
		

			var arr2 = new Array(diceRoll, diceRoll2, diceRoll3, diceRoll4, diceRoll5, diceRoll6);
			

			arr.sort(function(a, b) {
 			   return a % 2 - b % 2 || a - b;
			});

			arr2.sort(function(a, b) {
 			   return a - b;
			});


			function evenAmount(evenNumbers = arr){
				let evenCounter = "";
			
					for(let i = 0; i <= evenNumbers.length; i++){
					let counterEven = 0;
					while(evenNumbers[i] % 2 == 0){
						counterEven++;
						i++;
					}
					evenCounter += counterEven;
				
				return evenCounter;
				}
			}

		


					function oneAmount(oneNumbers = arr2){
				let oneCounter = "";
			


				for(let i = 0; i <= oneNumbers.length; i++){
					let counterOne = 0;
					while(oneNumbers[i] === 1){
						counterOne++;
						i++;
					}
					oneCounter += counterOne;
					
				return oneCounter;
				}
			}

			

			let numberOnes = oneAmount();
			let evenNumber = evenAmount();
			
			let pointsNeg1000 = (-1000)
			let pointsNeg500 = (-500)
			let pointsNeg250 = (-250)
			let points100 = (100)
			let points250 = (250)
			let points650 = (650)
			let points750 = (900)

		if(diceRoll === 4 && diceRoll2 === 6 && diceRoll3 === 8 && diceRoll4 === 10 && diceRoll5 === 12 && diceRoll6 === 20){
			return playerTwo+=10000000;
			
			}
		else if (diceRoll % 2 === 0 && diceRoll2 % 2 === 0 && diceRoll3 % 2 === 0 && diceRoll4 % 2 === 0 && diceRoll5 % 2 === 0 && diceRoll6 % 2 === 0) {
			
		
			return playerTwo +=points650;
			}
		else if (diceRoll == 1 && diceRoll2 == 1 && diceRoll3  == 1 && diceRoll4  == 1 && diceRoll5 == 1 && diceRoll6 == 1){
		
			return playerTwo +=pointsNeg1000;
			
			}
		else if(diceRoll % 2 !== 0 && diceRoll2 % 2 !== 0 && diceRoll3 % 2 !== 0 && diceRoll4 % 2 !== 0 && diceRoll5 % 2 !== 0 && diceRoll6 % 2 !== 0){
			
			return playerTwo +=points650;
			}

		else if(numberOnes == 5){
			
			return playerTwo +=pointsNeg500;
		}	

		else if(numberOnes == 4){ 
		
			return playerTwo +=pointsNeg250;
		}
		else if(numberOnes === 3){ 
		
			return playerTwo = 0;
		}
	
		

		else if(evenNumber == 3){
			
			return playerTwo +=points650;
		}

		else if(evenNumber == 4 || evenNumber == 5|| evenNumber == 2|| evenNumber == 1){
		
			return playerTwo +=points100;
		}

		
			
		else if(evenNumber == 6){
		
			return playerTwo +=points650;
		}
		

	}

}
