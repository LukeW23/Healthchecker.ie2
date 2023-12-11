// Carousel

const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots-container");
const dots = document.querySelectorAll(".dot");
const prevSlide = document.querySelector(".btn-prev");
const nextSlide = document.querySelector(".btn-next"); 


// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

moveSlide(curSlide);
moveDot(curSlide);

// add event listener
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  moveSlide(curSlide);
  moveDot(curSlide);
});

// add event listener
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  moveSlide(curSlide);
  moveDot(curSlide);
});

function moveSlide(curSlide) {
  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`; //template literal expression found on css tricks
  });
}

function moveDot(curSlide) {
  // set active dot
  dots.forEach((dot,indx) => {
    dots[indx].setAttribute("class", "dot");
  });
  dots[curSlide].setAttribute("class", "dot active");
}


//BMI Calculator 

var weight, height, measure, bmi, error ;

function calculateBMI() {
	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;
	error = "Please enter some values";
	height /= 100;
	height *= height;
	bmi = weight/height;
	bmi = bmi.toFixed(1);

	
	if (bmi <= 18.4) {
		measure = "Your BMI is " + bmi + " which means " + "you are Underweight";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		measure = "Your BMI is " + bmi + " which means " + "You are a Healthy Weight";
	} else if (bmi >= 25 && bmi <= 29.9) {
		measure = "Your BMI is " + bmi + " which means " + "You are Overweight";
	} else if (bmi >= 30) {
		measure = "Your BMI is " + bmi + " which means " + "You are Obese";
	}
	

	if (weight === 0 ) {
		document.getElementById("results").innerHTML = error;
	} 
	else if (height === 0){
		document.getElementById("results").innerHTML = error;
	}
	 else {
		document.getElementById("results").innerHTML = measure;
	}
	if (weight < 0) {
		document.getElementById("results").innerHTML = "Negative Values not Allowed";
	}
}


//Calorie Calculator

function calculateCalories() {
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const caloriesBurned = parseFloat(document.getElementById('caloriesBurned').value);

    if (gender && !isNaN(age) && !isNaN(weight) && !isNaN(height) && !isNaN(caloriesBurned)) {
        const bmr = calculateBMR(gender, age, weight, height);
        const totalCalories = bmr + caloriesBurned;
        document.getElementById('result').innerText = `Your estimated daily calorie intake: ${totalCalories.toFixed(2)} calories`; //template literal expression found on css tricks
    } else {
        alert('Please fill in all the fields with valid values.');
    }
}

// BMR= Basal Metobolic Rate: is the number of calories your body needs to accomplish its most basic (basal) life-sustaining functions

function calculateBMR(gender, age, weight, height) {
    if (gender === 'male') {
        return 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        return 10 * weight + 6.25 * height - 5 * age - 161;
    }
}