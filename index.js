const scavengerData = [
    { image: "images/coachingRoom.jpg", clue: `Need help with classes? Lost and confused over homework? Just needing extra tutoring?
        Room 006 is filled with coaches for every class. Here you can get answers to any question you need. What is the full name of this room? 
        (hint: its abbreviated to ASCII)`, answer: "Academic Success Center for Information Interchange" }, //coaching room
    { image: "images/registrar.jpg", clue: `Find Lacy Clawson, the head of Registrar, in the Registrar’s Office to register for classes, 
        request your transcripts, or get advice for your projected class schedules. This office is the keeper of all academic records, 
        ensuring your academic journey stays on track. What room number is the head of Registrar located? (hint: You will find the 
        office on the second floor)`, answer: "211" }, //registrar
    { image: "images/studyRoom.jpg", clue: `If you need a quiet place to study there are many spots located around campus. 
        But try the designated study room on the second floor. Provided by USG, it gets updated and new things added quarterly. 
        What is the passcode to get into this room?`, answer: "41488#" }, //study room
    { image: "images/market.jpg", clue: `The neumont market sells food and drinks and is a great place to go if you are feeling thirsty, 
        or looking for a snack between classes. In order to buy things at the market you will need to use the kiosk. Which button on the 
        kiosk do you push to start shopping?`, answer: "Start my order" }, //market
    { image: "images/rlc.jpg", clue: `Are you having roommate troubles or are considering rooming with a friend? Maybe you feel homesick 
        and need guidance on making the most of your home and campus life. This office is where housing decisions are made and community 
        comes to life. Find the Residence Life Coordinator (RLC) here! What is the RLC’s first name?`, answer: "Tori" }, //rlc
    { image: "images/foodCourt.jpg", clue: `If you are looking for food while waiting for that 6 pm class to start the City Creek Food 
        Court is a great place to go. There are many options to choose from. What restaurant is located across from the Sbarro?`, 
        answer: "Chick-fil-A" }, //food court
    { image: "images/busStop.jpg", clue: `This bus route is in between Neumont and City Creek. What bus route at this bus stop will take 
        you to the Trio?`, answer: "Route 4" }, //transit
    { image: "images/degreeChair.jpg", clue: `One of these offices is the domain of neumont’s only professor doctorate degree and the 
        final boss of all math classes. Who is this professor?`, answer: "Doctor Eric Kohler" }, //degree chair
    { image: "images/it.jpg", clue: `If you are having problems with your laptop the student IT window is where you want to go to get 
        help. It is open during certain times of the day. When it is closed what room are you supposed to go to?`, 
        answer: "112" }, //it
    { image: "images/nSouth.jpg", clue: `Neumont uses the third floor of a second building called neumont south for some of its classes. 
        How many classrooms are in neumont south?`, answer: "3" } //neumont south
];

const clueImage = document.getElementById("clueImage");
const clueText = document.getElementById("clueText");
const answerInput = document.getElementById("answerInput");
const submitAnswer = document.getElementById("submitAnswer");
const feedback = document.getElementById("feedback");

let currentClueIndex = 0;

function loadClue(index) {
    const clue = scavengerData[index];
    clueImage.src = clue.image;
    clueText.textContent = clue.clue;
    answerInput.value = "";
    feedback.textContent = "";
}

// Check answer
submitAnswer.onclick = function() {
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = scavengerData[currentClueIndex].answer;

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Moving to the next clue...";
        feedback.style.color = "green";

        currentClueIndex++;

        if (currentClueIndex < scavengerData.length) {
            setTimeout(() => loadClue(currentClueIndex), 2000);
        } else {
            setTimeout(() => {
                clueText.textContent = "Congratulations! You've completed the scavenger hunt!";
                clueImage.src = "";
                feedback.textContent = "";
                answerInput.style.display = "none";
                submitAnswer.style.display = "none";
            }, 2000);
        }
    } else {
        feedback.textContent = "Incorrect. Try again!";
        feedback.style.color = "red";
    }
};

loadClue(currentClueIndex);