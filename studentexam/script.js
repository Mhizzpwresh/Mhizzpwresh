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
    happy.innerHTML = `You have successfully completed this exam
    <div class="result">
            <div class="result-box custom-box hide">
                <h1> Your Result</h1>
                <table>
                    <tr>
                        <td> Total Question</td>
                        <td><span class="total-question"></span></td>
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



