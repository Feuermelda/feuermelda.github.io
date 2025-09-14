// Variables + Data Types
let mood = "mischievous";
const eelName = "Eel";
let hour = new Date().getHours(); // returns 0-23
let day = new Date().getDay();

let message = "";

switch (day) {
    case 0: message = "Sunday is ideal for some Github pushing and Portfolio polishes.";
        break;
    case 1: message = "It's called Cyber Monday for a reason.\nTime for Smooth Cryptics or Cyber Mayhem 101!";
        break;
    case 2: message = "Tuesdays are for trying new things like Assembly.";
        break;
    case 3: message = "On Wednesdays we are vibing with electronics.\nSo grab your Electric Essence or RoBotanica project!";
        break;
    case 4: message = "Devoted Thursdays for Computer Science Foundations and Neural Bloom.";
        break;
    case 5: message = "It's Friday and that means WebDevelopment.\nSo get on your .html, .css and .js. No php yet required.";
        break;
    case 6: message = "Saturday is a perfect chill day to code some awesome projects in Python!";
        break;
}

document.getElementById("weekday").innerText = message;

// time-based logic
let greeting = "";

switch (true) { // now each case is compared to true
    case hour < 12: greeting = "Good morning, explorer!";
        break;
    case hour < 18: greeting = "Good afternoon! Avoid the mustard!";
        break;
    default: greeting = "Good evening - perfect time to debug.";

}
// ouput to the page
document.getElementById("greeting").innerText = `Milk says: "${greeting}"`

console.log(hour < 12 ? "JavaScript breakfast session." : hour < 18 ? "JavaScript lunch with debug and drinks." : "JavaScript dinner time and cozy vibes.");



// Mood Checker UI
const moodSelect = document.getElementById("mood");
const moodResponse = document.getElementById("mood-response");

moodSelect.addEventListener("change", function () {
    const selectedMood = moodSelect.value;
    let response = "";

    switch (selectedMood) {
        case "mischievous":
            response = `${eelName} has rearranged the CSS while you weren't looking.`;
            break;
        case "tired":
            response = `${eelName} went to bed early today, so you're debugging solo.`;
            break;
        case "hyper":
            response = `${eelName} got so excited they slipped into the HTML.`;
            break;
        default:
            response = `${eelName} feels calm. Probably sipping a smoothie.`;
    }
    moodResponse.innerText = response;
});

// bonus: mood logic
if (mood === "mischievous") {
    console.log(`${eelName} has rearranged the CSS while you weren't looking.`);
} else if (mood === "tired") {
    console.log(`${eelName} went to bed early today, so you have to do the debugging on your own.`);
} else if (mood === "hyper") {
    console.log(`${eelName} was so excited to meet you that he slipped through the cracks of the web.`);
} else {
    console.log(`${eelName} feels fine and everything is alright.`);
}

// Compliment generator

const complimentBtn = document.getElementById("compliment-btn");
const complimentResult = document.getElementById("compliment-result");

const compliments = [
    "You're eel-ectrifyingly smart!",
    "Milk says: You're the cream of the crop!",
    "You debug like a legend.",
    "Your curiosity could power a spaceship.",
    "Eel thinks your code has no bugs. Just features.",
    "You're a smooth operator - cryptically speaking.",
    "Even your CSS is impressed by your style.",
    "You're glowing like a freshly charged TP4056 chip."
];

function giveCompliment() {
    const index = Math.floor(Math.random() * compliments.length);
    complimentResult.innerText = compliments[index];

    // Bonus log: show them all once
    for (let line of compliments) {
        console.log(line);
    }
}

complimentBtn.addEventListener("click", giveCompliment);

// Toggle Mode

const hackerBtn = document.getElementById("hacker-toggle");

hackerBtn.addEventListener("click", () => {
    document.body.classList.toggle("hacker-mode");

    // optional: update button text
    hackerBtn.innerText = document.body.classList.contains("hacker-mode")
        ? "Exit Hacker Mode"
        : "Enter Hacker Mode";
});

// Famous Quote Display

const quote = document.getElementById("quote");
const chosenQuote = document.getElementById("quote-display");

quote.addEventListener("change", () => {
    const selectedOption = quote.options[quote.selectedIndex];
    const character = selectedOption.value;
    const text = selectedOption.text;

    switch (character) {
        case "eel":
            chosenQuote.innerText = `${text} - Eel ca. April 2025 after taking part in a chili eating contest during the Roadtrip to the ultimate Smoothie.`;
            break;
        case "milk":
            chosenQuote.innerText = `${text} - Milk ca. June 2025 after mistakingly reading Dairy instead of Diary and read all of Dijonardo's private thoughts.`;
            break;
        case "dijon":
            chosenQuote.innerText = `${text} - Dijonardo ca. May 2025 singing a famous song by Queen, but making a fun play on words.`;
            break;
        default:
            chosenQuote.innerText = "";
    }

});

// DOM Manipulation Basics
const addBtn = document.getElementById("add-task");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    const li = document.createElement("li");
    const task = document.createElement("span");
    task.innerText = taskText;

    const closeBtn = document.createElement("span");
    closeBtn.innerText = "x";
    closeBtn.classList.add("close-btn");

    closeBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(task);
    li.appendChild(closeBtn);
    taskList.appendChild(li);
    taskInput.value = "";

    li.addEventListener("click", () => {
        task.classList.toggle("completed");
    });
});

taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addBtn.click();
    }
});

// smoothie game
let ingredients = [
    "Pickled Mango",
    "Coconut Jelly",
    "Metal Donut",
    "Crimson Pineapple",
    "Frozen Yogurt Banana",
    "Eel Slime",
    "Neon-lime Starfruit"
];

const IngredientBtn = document.getElementById("reveal-btn");
const IngredientList = document.getElementById("ingredient-list");


IngredientBtn.addEventListener("click", () => {
    if (ingredients.length === 0 && !document.querySelector(".list-complete")) { // document.querySelector(".list-complete") checks wether the message is already there, so it only gets added once

        const listComplete = document.createElement("p");
        listComplete.classList.add("list-complete");
        listComplete.innerText = "All secret ingredients revealed.";

        const resetBtn = document.createElement("button");
        resetBtn.classList.add("reset-btn");
        resetBtn.innerText = "Reset";

        // order matters, cause reset button goes inside the paragraph, then the whole paragraph is added to the list
        listComplete.appendChild(resetBtn);
        IngredientList.appendChild(listComplete);


        resetBtn.addEventListener("click", () => {
            IngredientList.innerHTML = ""; // clear all items
            // refill ingredient array
            ingredients = [
                "Pickled Mango",
                "Coconut Jelly",
                "Metal Donut",
                "Crimson Pineapple",
                "Frozen Yogurt Banana",
                "Eel Slime",
                "Neon-lime Starfruit"
            ];
        });

        return; // exit so we don't try to add more items
    };

    const index = Math.floor(Math.random() * ingredients.length);
    const selected = ingredients.splice(index, 1)[0]; // remove from array

    const ShowIngredient = document.createElement("li");
    ShowIngredient.innerText = selected;

    IngredientList.appendChild(ShowIngredient);
});

let allMsg = [];
// fetch & display JSON
fetch("inbox.json")
    .then(response => response.json())
    .then(messages => {
        allMsg.push(...messages);
        renderMessages(allMsg);

    })
    .catch(error => console.error("Failed to load inbox:", error));

const sentMessages = [
    {
        to: "Eel",
        subject: "Sorry about the durian",
        message: "Next time: mango + coconut?"
    },
    {
        to: "Dijonardo",
        subject: "Encrypted Mustard",
        message: "I'm busy at 3am, how about 2am?"
    },
    {
        to: "Unknown",
        subject: "Thank you for selecting me!",
        message: "I couldn't find the link, and Eel wants one too. Could you send it again please?"
    }
]

const sentContainer = document.getElementById("sent-container");

sentMessages.forEach(msg => {
    const card = document.createElement("div");
    card.classList.add("message-card");

    card.innerHTML = `
        <h3>To ${msg.to}</h3>
        <p><strong>Subject:</strong> ${msg.subject}</p>
        <p>${msg.message}</p>
        `;
    sentContainer.appendChild(card);
});

function renderMessages(data) {
    const container = document.getElementById("messages-container");
    container.innerHTML = ""; // clear previous content

    data.forEach(msg => {
        const card = document.createElement("div");
        card.classList.add("message-card");
        card.innerHTML = `
      <h3>From ${msg.from}</h3>
      <p><strong>Subject:</strong> ${msg.subject}</p>
      <p>${msg.message}</p>
    `;
        container.appendChild(card);

        // highlight Eel messages
        for (let msg of data) {
            if (msg.from === "Eel") {
                const cards = document.querySelectorAll(".message-card");
                for (let card of cards) {
                    if (card.querySelector("h3").innerText.includes("Eel")) {
                        card.classList.add("eel-message");
                    }
                }
            }
        }

        // forEach
        //document.querySelectorAll(".message-card").forEach(card => {
        //if (card.querySelector("h3").innerText.includes("Eel")) {
        //    card.classList.add("eel-message");
        //  }
        //});

    });
}


const filterMsg = document.getElementById("filter");


filterMsg.addEventListener("input", function () {
    const query = filterMsg.value.toLowerCase();

    const filtered = allMsg.filter(msg =>
        msg.from.toLowerCase().includes(query) ||
        msg.subject.toLowerCase().includes(query)
    );

    renderMessages(filtered);
});

const inbox = [
    { from: "Eel", subject: "Banana emergency", message: "Why is it green?", urgent: true },
    { from: "Dijonardo", subject: "Encrypted mustard", message: "Use the Caesar cipher.", urgent: false },
    { from: "Velociraptor", subject: "Lunch?", message: "Meet me at the raccoon gas station.", urgent: false },
    { from: "Eel", subject: "Follow up", message: "Also the blender exploded.", urgent: true }
];

const subjects = inbox.map(msg => msg.subject);
console.log(subjects);

const urgentMsgs = inbox.filter(msg => msg.urgent);
console.log(urgentMsgs);

urgentMsgs.forEach(msg => {
    const li = document.createElement("li");
    li.innerText = `From: ${msg.from} - ${msg.subject}`;
    document.getElementById("urgent-list").appendChild(li);
});

const eelMsg = inbox.find(msg => msg.from === "Eel");
console.log(eelMsg);

// link to urgent messages

// form validation
function forceResetInput(input) {
    const originalPlaceholder = input.placeholder;
    input.placeholder = "";
    input.value = "";
    input.blur();
    setTimeout(() => {
        input.placeholder = originalPlaceholder;
    }, 10);
}

const form = document.getElementById("contact-form-group");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const feedback = document.getElementById("contact-feedback");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop page reload

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // basic validation
    if (name === "") {
        feedback.textContent = "Please enter your name.";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        feedback.textContent = "Please enter a valid email address.";
        return;
    }

    if (message.length < 5) {
        feedback.textContent = "Your message must be at least 5 characters.";
        return;
    }

    // if all is good
    feedback.style.color = "green";
    feedback.textContent = "Message sent! Thank you.";

    // reset form
    forceResetInput(nameInput);
    forceResetInput(emailInput);
    forceResetInput(messageInput);

    setTimeout(() => {
        feedback.textContent = "";
    }, 5000);

    form.reset();
    document.activeElement.blur();

    setTimeout(() => {
        //form.submit();
        window.location.href = "http://localhost:8080/thanks.html";
    }, 3000);

    // thanks loading page

});


