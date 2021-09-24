document.addEventListener("DOMContentLoaded", function () {
    // Objective 1. Create button on page load not in HTML. Click to display message.
    const createButton1 = document.createElement('button');
    const button1Text = document.createTextNode('1. Nice Message');

    createButton1.className = "first-button";

    createButton1.appendChild(button1Text);
    document.body.appendChild(createButton1);

    createButton1.addEventListener('click', function () {
        alert('1. Objective 1 now complete!');
    });
    //end Objective 1

    //Objective 3: Create div in HTML. Add mouse hover e to change background color. 
    document.getElementById("hoverME").addEventListener("mouseover", mouseOver);
    document.getElementById("hoverME").addEventListener("mouseout", mouseOut);

    function mouseOver() {
        document.getElementById("hoverME").style.backgroundColor = "red";
    }
    function mouseOut() {
        document.getElementById("hoverME").style.backgroundColor = "hotpink";
    }
    // End Objective 3.

    // Objective 4: Add paragraph with text, add eventlistener to change text to random color 
    let paraRandom = document.createElement("p");
    let paraText = document.createTextNode("This is objective 4.");
    document.body.appendChild(paraRandom);
    paraRandom.appendChild(paraText);

    paraRandom.addEventListener('click', function () {
        paraRandom.style.color = getRandomColor();
    });
    //End of Objective 4. See below for rand function

    //Objective 5
    let nameDiv = document.getElementById("nameHere")
    let nameBtn = document.querySelector("#addName");
    nameBtn.addEventListener("click", function () {
        let span = document.createElement("span");
        span.style.float = "left";
        span.innerText = "Tarrin Jenkins";
        span.style.width = "100vw"
        nameDiv.appendChild(span)
        // End of Objective 5
    });
    //can you do while instead of if? 
    let friendBtn = document.querySelector('#friendBtn'); 
    
    friendBtn.addEventListener("click", function(){
        if (counter < friends.length) {
            let friendLi = document.createElement("li");
            friendLi.innerText = friends[counter];
            document.querySelector("ul").appendChild(friendLi);

            counter ++;
        }
    })



});

// Objective 2: Make button/textbox. When clicked alert contents of textbox. 
const createButton2 = document.getElementById("btnSubmit");
let button2Text = document.getElementById("text-field2");

function getInputValue() {
    let inputVal = document.getElementById("text-field2").value;
    alert(inputVal);
}
//end of Objective 2

// Random color function to go with objective 4.
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

let friends = [
    "Bo",
    "Lilly",
    "Grace",
    "Marley",
    "Macey",
    "Dee-Dee",
];

let counter = 0; 
