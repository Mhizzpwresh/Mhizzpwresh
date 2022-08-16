 // for the calculator to pop up 
 document.getElementById('calBtn').addEventListener('click', function(){
     document.querySelector('.bg-modal').style.display = 'flex';
 });

 //for the x to close
 document.querySelector('.close').addEventListener('click', function() {
     document.querySelector('.bg-modal').style.display = 'none';
 });

 //This is another way to get the calculator to pop up 
var model = document.getElementById('myNodal');

//Get the button that opens the modal
var btn = document.getElementById("calBtn");

//Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//when the user clicks the button, open the modal
btn.onclick = function() {
    this.ariaModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function(){
    this.ariaModal.style.display = "none";
}

//when the user clicks anywhere outside of the modal close it 
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

//for the timer
const startingMinutes = 1;
let time = startingMinutes * 60;
console.log(time);
const countdownEl = document.getElementById('countdown');
const happy = document.querySelector(".happy");


let exam = setInterval(updateCountdown, 1000);

function updateCountdown() {
    minutes = Math.floor(time / 60);
   let seconds = (time % 60);

   if (minutes < 10){
    minutes = "0" + minutes;
    }

   if (seconds < 10){
    seconds = "0" + seconds;
    }

  countdownEl.innerHTML = minutes+":"+seconds
   time--;

   if (time < 0){
    clearInterval(exam);
    happy.innerHTML = ` You have successfully completed this exam
    <div class="result">
            <div class="result-box custom-box">
                <h1> Your Result</h1>
                <table>
                    <tr>
                        <td> Total Question</td>
                        <td><span class="total-question"> ${60}</span></td>
                    </tr>
                    <tr>
                        <td> Correct</td>
                        <td><span class="total-correct"></span></td>
                    </tr>
                    <tr>
                        <td> Wrong</td>
                        <td><span class="total-wrong"></span></td>
                    </tr>
                    <tr>
                        <td> Your Total Score </td>
                        <td><span class="total-score"></span></td>
                    </tr>
                    <tr>
                        <td>Percentage</td>
                        <td><span class="percentage"></span></td>
                    </tr>
                </table>
            </div>
        </div>`

}
}


//Question bank (Array of Objects)
const quiz = [
    {
        id: 1,
        number: 'Question 1/60',
        question: 'What is Family',
        options: ['Family is a group of people closely related by blood',
            'Family is a group of people related by culture',
            'Family is a group of ethnic people related by the society',
            'Family is a group of people related by Kinsmen'],
        answer: 0
    },
    {
        id: 2,
        number: 'Question 2/60',
        question: '2 multiplied by 2 is ',
        options: ['2', '4', '8', '9'],
        answer: 1
    },
    {
        id: 3,
        number: 'Question 3/60',
        question: '4 multiplied by 2',
        options: ['16', '6', '8', '2'],
        answer: 2
    },
    {
        id: 4,
        number: 'Question 4/60',
        question: 'Who is the mother of Jesus',
        options: ['Angel', 'Elizabeth', 'Sarah', 'Mary'],
        answer: 3
    },
    {
        id: 5,
        number: 'Question 5/60',
        question: 'How many days did God use to create the world',
        options: ['3', '6', '7', '5'],
        answer: 1
    },

    {
        id: 6,
        number: 'Question 6/60',
        question: 'What is Family',
        options: ['Family is a group of people closely related by blood', 'Family is a group of people related by culture', 'Family is a group of ethnic people related by the society', 'Family is a group of people related by Kinsmen'],
        answer: 0
    },
    {
        id: 7,
        number: 'Question 7/60',
        question: '2 multiplied by 2 is ',
        options: ['2', '4', '8', '9'],
        answer: 1
    },
    {
        id: 8,
        number: 'Question 8/60',
        question: '4 multiplied by 2',
        options: ['16', '6', '8', '2'],
        answer: 2
    },
    {
        id: 9,
        number: 'Question 9/60',
        question: 'Who is the mother of Jesus',
        options: ['Angel', 'Elizabeth', 'Sarah', 'Mary'],
        answer: 3
    },
    {
        id: 10,
        number: 'Question 10/60',
        question: 'How many days did God use to create the world',
        options: ['3', '6', '7', '5'],
        answer: 1
    },

    {
        id: 11,
        number: 'Question 11/60',
        question: 'What is Family',
        options: ['Family is a group of people closely related by blood',
            'Family is a group of people related by culture',
            'Family is a group of ethnic people related by the society',
            'Family is a group of people related by Kinsmen'],
        answer: 0
    },
    {
        id: 12,
        number: 'Question 12/60',
        question: '2 multiplied by 2 is ',
        options: ['2', '4', '8', '9'],
        answer: 1
    },
    {
        id: 13,
        number: 'Question 13/60',
        question: '4 multiplied by 2',
        options: ['16', '6', '8', '2'],
        answer: 2
    },
    {
        id: 14,
        number: 'Question 14/60',
        question: 'Who is the mother of Jesus',
        options: ['Angel', 'Elizabeth', 'Sarah', 'Mary'],
        answer: 3
    },
    {
        id: 15,
        number: 'Question 15/60',
        question: 'How many days did God use to create the world',
        options: ['3', '6', '7', '5'],
        answer: 1
    },

    {
        id: 16,
        number: 'Question 16/60',
        question: 'What is Family',
        options: ['Family is a group of people closely related by blood', 'Family is a group of people related by culture', 'Family is a group of ethnic people related by the society', 'Family is a group of people related by Kinsmen'],
        answer: 0
    },
    {
        id: 17,
        number: 'Question 17/60',
        question: '2 multiplied by 2 is ',
        options: ['2', '4', '8', '9'],
        answer: 1
    },
    {
        id: 18,
        number: 'Question 18/60',
        question: '4 multiplied by 2',
        options: ['16', '6', '8', '2'],
        answer: 2
    },
    {
        id: 19,
        number: 'Question 19/60',
        question: 'Who is the mother of Jesus',
        options: ['Angel', 'Elizabeth', 'Sarah', 'Mary'],
        answer: 3
    },
    {
        id: 20,
        number: 'Question 20/60',
        question: 'How many days did God use to create the world',
        options: ['3', '6', '7', '5'],
        answer: 1
    },

    {
        id: 21,
        number: 'Question 21/60',
        question: 'What is Family',
        options: ['Family is a group of people closely related by blood',
            'Family is a group of people related by culture',
            'Family is a group of ethnic people related by the society',
            'Family is a group of people related by Kinsmen'],
        answer: 0
    },
    {
        id: 22,
        number: 'Question 22/60',
        question: '2 multiplied by 2 is ',
        options: ['2', '4', '8', '9'],
        answer: 1
    },
    {
        id: 23,
        number: 'Question 23/60',
        question: '4 multiplied by 2',
        options: ['16', '6', '8', '2'],
        answer: 2
    },
    {
        id: 24,
        number: 'Question 24/60',
        question: 'Who is the mother of Jesus',
        options: ['Angel', 'Elizabeth', 'Sarah', 'Mary'],
        answer: 3
    },
    {
        id: 25,
        number: 'Question 25/60',
        question: 'How many days did God use to create the world',
        options: ['3', '6', '7', '5'],
        answer: 1
    },

    {
        id: 26,
        number: 'Question 26/60',
        question: 'What is Family',
        options: ['Family is a group of people closely related by blood', 'Family is a group of people related by culture', 'Family is a group of ethnic people related by the society', 'Family is a group of people related by Kinsmen'],
        answer: 0
    },
    {
        id: 27,
        number: 'Question 27/60',
        question: '2 multiplied by 2 is ',
        options: ['2', '4', '8', '9'],
        answer: 1
    },
    {
        id: 28,
        number: 'Question 28/60',
        question: '4 multiplied by 2',
        options: ['16', '6', '8', '2'],
        answer: 2
    },
    {
        id: 29,
        number: 'Question 29/60',
        question: 'Who is the mother of Jesus',
        options: ['Angel', 'Elizabeth', 'Sarah', 'Mary'],
        answer: 3
    },
    {
        id: 30,
        number: 'Question 30/60',
        question: 'How many days did God use to create the world',
        options: ['3', '6', '7', '5'],
        answer: 1
    },
    {
        id: 31,
        number: 'Question 31/60',
        question: 'What is Family',
        options: ['Family is a group of people closely related by blood',
            'Family is a group of people related by culture',
            'Family is a group of ethnic people related by the society',
            'Family is a group of people related by Kinsmen'],
        answer: 0
    },
    {
        id: 32,
        number: 'Question 32/60',
        question: '2 multiplied by 2 is ',
        options: ['2', '4', '8', '9'],
        answer: 1
    },
    {
        id: 33,
        number: 'Question 33/60',
        question: '4 multiplied by 2',
        options: ['16', '6', '8', '2'],
        answer: 2
    },
    {
        id: 34,
        number: 'Question 34/60',
        question: 'Who is the mother of Jesus',
        options: ['Angel', 'Elizabeth', 'Sarah', 'Mary'],
        answer: 3
    },
    {
        id: 35,
        number: 'Question 35/60',
        question: 'How many days did God use to create the world',
        options: ['3', '6', '7', '5'],
        answer: 1
    },

    {
        id: 36,
        number: 'Question 36/60',
        question: 'What is Family',
        options: ['Family is a group of people closely related by blood', 'Family is a group of people related by culture', 'Family is a group of ethnic people related by the society', 'Family is a group of people related by Kinsmen'],
        answer: 0
    },
    {
        id: 37,
        number: 'Question 37/60',
        question: '2 multiplied by 2 is ',
        options: ['2', '4', '8', '9'],
        answer: 1
    },
    {
        id: 38,
        number: 'Question 38/60',
        question: '4 multiplied by 2',
        options: ['16', '6', '8', '2'],
        answer: 2
    },
    {
        id: 39,
        number: 'Question 39/60',
        question: 'Who is the mother of Jesus',
        options: ['Angel', 'Elizabeth', 'Sarah', 'Mary'],
        answer: 3
    },
    {
        id: 40,
        number: 'Question 40/60',
        question: 'How many days did God use to create the world',
        options: ['3', '6', '7', '5'],
        answer: 1
    },
    {
        id: 41,
        number: 'Question 41/60',
        question: 'What is Family',
        options: ['Family is a group of people closely related by blood',
            'Family is a group of people related by culture',
            'Family is a group of ethnic people related by the society',
            'Family is a group of people related by Kinsmen'],
        answer: 0
    },
    {
        id: 42,
        number: 'Question 42/60',
        question: '2 multiplied by 2 is ',
        options: ['2', '4', '8', '9'],
        answer: 1
    },
    {
        id: 43,
        number: 'Question 43/60',
        question: '4 multiplied by 2',
        options: ['16', '6', '8', '2'],
        answer: 2
    },
    {
        id: 44,
        number: 'Question 44/60',
        question: 'Who is the mother of Jesus',
        options: ['Angel', 'Elizabeth', 'Sarah', 'Mary'],
        answer: 3
    },
    {
        id: 45,
        number: 'Question 45/60',
        question: 'How many days did God use to create the world',
        options: ['3', '6', '7', '5'],
        answer: 1
    },

    {
        id: 46,
        number: 'Question 46/60',
        question: 'What is Family',
        options: ['Family is a group of people closely related by blood', 'Family is a group of people related by culture', 'Family is a group of ethnic people related by the society', 'Family is a group of people related by Kinsmen'],
        answer: 0
    },
    {
        id: 47,
        number: 'Question 47/60',
        question: '2 multiplied by 2 is ',
        options: ['2', '4', '8', '9'],
        answer: 1
    },
    {
        id: 48,
        number: 'Question 48/60',
        question: '4 multiplied by 2',
        options: ['16', '6', '8', '2'],
        answer: 2
    },
    {
        id: 49,
        number: 'Question 49/60',
        question: 'Who is the mother of Jesus',
        options: ['Angel', 'Elizabeth', 'Sarah', 'Mary'],
        answer: 3
    },
    {
        id: 50,
        number: 'Question 50/60',
        question: 'How many days did God use to create the world',
        options: ['3', '6', '7', '5'],
        answer: 1
    },
    {
        id: 51,
        number: 'Question 51/60',
        question: 'What is Family',
        options: ['Family is a group of people closely related by blood',
            'Family is a group of people related by culture',
            'Family is a group of ethnic people related by the society',
            'Family is a group of people related by Kinsmen'],
        answer: 0
    },
    {
        id: 52,
        number: 'Question 52/60',
        question: '2 multiplied by 2 is ',
        options: ['2', '4', '8', '9'],
        answer: 1
    },
    {
        id: 53,
        number: 'Question 53/60',
        question: '4 multiplied by 2',
        options: ['16', '6', '8', '2'],
        answer: 2
    },
    {
        id: 54,
        number: 'Question 54/60',
        question: 'Who is the mother of Jesus',
        options: ['Angel', 'Elizabeth', 'Sarah', 'Mary'],
        answer: 3
    },
    {
        id: 55,
        number: 'Question 55/60',
        question: 'How many days did God use to create the world',
        options: ['3', '6', '7', '5'],
        answer: 1
    },

    {
        id: 56,
        number: 'Question 56/60',
        question: 'What is Family',
        options: ['Family is a group of people closely related by blood', 'Family is a group of people related by culture', 'Family is a group of ethnic people related by the society', 'Family is a group of people related by Kinsmen'],
        answer: 0
    },
    {
        id: 57,
        number: 'Question 57/60',
        question: '2 multiplied by 2 is ',
        options: ['2', '4', '8', '9'],
        answer: 1
    },
    {
        id: 58,
        number: 'Question 58/60',
        question: '4 multiplied by 2',
        options: ['16', '6', '8', '2'],
        answer: 2
    },
    {
        id: 59,
        number: 'Question 59/60',
        question: 'Who is the mother of Jesus',
        options: ['Angel', 'Elizabeth', 'Sarah', 'Mary'],
        answer: 3
    },
    {
        id: 60,
        number: 'Question 60/60',
        question: 'How many days did God use to create the world',
        options: ['3', '6', '7', '5'],
        answer: 1
    },



]

const questionNumber = document.getElementById("gold");
const questionText = document.getElementById("silver");
const option1 = document.getElementById("bronze");
const option2 = document.getElementById("sept");
const option3 = document.getElementById("huit");
const option4 = document.getElementById("cent");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.querySelector(".result-box");


//set starting item
let quez = 0;

//loading the Question array
window.addEventListener("DOMContentLoaded", function () {
    showQuestion();
    getResult();
});


// showing the question
function showQuestion() {
    const item = quiz[quez];
    gold.innerHTML = item.number;
    silver.innerHTML = item.question;
    bronze.innerHTML = item.options[0];
    sept.innerHTML = item.options[1];
    huit.innerHTML = item.options[2];
    cent.innerHTML = item.options[3];
}

// showing next question
nextBtn.addEventListener("click", function () {
    quez++;
    showQuestion();
    if (quez > quiz.length - 1) {
        nextBtn.classList.add("hide");
    }
});


// showing previous question
prevBtn.addEventListener("click", function () {
    quez--;
    showQuestion();
});

// for the indicator button 
const btns = document.querySelectorAll(".seed");
       console.log(btns);
btns.forEach(function (seed){
            seed.addEventListener("click", function(e) {
                quez = seed.id;
                showQuestion(quez);
                   });
});
   



