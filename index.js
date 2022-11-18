
const userInput = document.getElementById('user-input')
const guessBtn = document.getElementById('guess-btn')
const userOutput = document.getElementById('user-output')
const prevGuess1 = document.getElementById('prev-guess1')
const prevGuess2 = document.getElementById('prev-guess2')
const prevGuess3 = document.getElementById('prev-guess3')
const prevGuess4 = document.getElementById('prev-guess4')
const prevGuess5 = document.getElementById('prev-guess5')
const previous = document.querySelectorAll('.previous')
const footer = document.getElementById("footer")


let randomNumber = Math.floor(Math.random() * 101)

let counter = 0


const alertMessageBtn = document.querySelector(".alert-message-btn")

	if(userInput.value > 100) {
		// alertMessageBtn.style = "block";
		console.log("Oh no")
	}


guessBtn.addEventListener('click', function () {

	if (userInput.value < randomNumber) {
		userOutput.textContent = `${userInput.value} is too low...`
		userInput.focus()
				
	} else if (userInput.value > randomNumber) {
		userOutput.textContent = `${userInput.value} is too high...`
		userInput.focus()
		
	} else {
		userOutput.textContent = "Genius, you did it! Try again in 5 seconds!" 
		setTimeout(function() {
			document.location.reload(true);
		}, 5000);
			}

			
	counter += 1 

	if (userInput.value !== randomNumber && counter === 1) {
		prevGuess1.textContent += userInput.value
		userInput.value = ""
	}
	if (userInput.value !== randomNumber && counter === 2) {
		prevGuess2.textContent += userInput.value
		userInput.value = ""
	}
	if (userInput.value !== randomNumber && counter === 3) {
		prevGuess3.textContent += userInput.value
		userInput.value = ""
	}
	if (userInput.value !== randomNumber && counter === 4) {
		prevGuess4.textContent += userInput.value
		userInput.value = ""
	}
	if (userInput.value !== randomNumber && counter === 5) {
		prevGuess5.textContent += userInput.value
		userInput.value = ""
	}

	if (counter === 5 && userInput.value !== randomNumber) {
		prevGuess5.textContent += userInput.value
		userInput.classList.add("hide-input")
		guessBtn.classList.add("hide-guess-btn")
		userOutput.textContent = 'You lost! Give it another try!'
		counter = 0
		previous.forEach((guess) => {
		guess.textContent = ""
		
		})

		reset()
			
	}
})

function reset() {
	const resetBtn = document.createElement("button")
	resetBtn.innerText = "Reset"
	footer.insertAdjacentElement("afterbegin", resetBtn) 
	resetBtn.addEventListener("click", function () { 
		location.reload();
	})
}

userInput.addEventListener("keypress", function(event) {
	if(event.key === "Enter") {
		event.preventDefault()
		guessBtn.click()
		clearEnter()
			}
}
)


function clearEnter() {  
userInput.value = " "
}

userInput.addEventListener('click', function () {
	userInput.value = '' 
})

window.onload = function() {
	userInput.focus() 
}

