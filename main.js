let day = new Date().getDay();
let message = "";

switch (day) {
    case 0: message = "Today is Deployment day - that means Github pushes and Portfolio polishes.";
        break;
    case 1: message = "Today is Crypto day - try to encrypt my secret messages.";
        break;
    case 2: message = "Today is low-level day - feel free to check out my Assembly work.";
        break;
    case 3: message = "Today is Electro day - check out my electronics and robotics projects.";
        break;
    case 4: message = "Today is Computer day - packed with basic CS and advanced Deep Learning.";
        break;
    case 5: message = "Today is WebDev day - the spider intern is weaving the framework.";
        break;
    case 6: message = "Today is Python day - look at my unique scripts and programs.";
        break;
    default: message = "Everyday is Computer Science day - no matter what you do!";
}

document.getElementById("weekday").innerText = message;

const feedbackSelect = document.getElementById("feedback");
const feedbackResponse = document.getElementById("feedback-response");

feedbackSelect.addEventListener("change", function () {
    const selectedFeedback = feedbackSelect.value;
    let response = "";

    switch (selectedFeedback) {
        case "style":
            response = `Thank you, if you like to see more of my style follow me on insta.`;
            break;
        case "paths":
            response = `Thank you, I've been putting a lot of effort into all of my learning paths.`;
            break;
        case "cat":
            response = `My cat Mucki is super cute. Not really relevant for the job, but for my motivation.`;
            break;
        case "dev":
            response = `Thank you, I started this journey in spring 2025 and I've been making a lot of progress so far.`;
            break;
        case "bike":
            response = `Getting my riding licence was kind of a sidequest in 2024, but I am so happy with it.`;
            break;
        case "name":
            response = `My name is probably of Turkish origin. And eels are my favorite animals. Especially, moray eels.`;
            break;
        default:
            response = `No worries, if you didn't choose anything. I am still glad you looked at my page.`;
    }
    feedbackResponse.innerText = response;
});

// toggle mode

const eyebleachBtn = document.getElementById("eyebleach-toggle");

eyebleachBtn.addEventListener("click", () => {

    const body = document.body;

    if (!body.classList.contains("eyebleach-mode")) {
        const confirmed = confirm("WARNING: Eyebleach may be required.\nProceed with caution?");

        if (confirmed) {
            body.classList.toggle("eyebleach-mode");

            if (navigator.userAgent.includes("Firefox")) {
                document.documentElement.classList.add("eyebleach-firefox");
            }
        } else {
            console.log("Coward.");
        };

    } else {
        body.classList.remove("eyebleach-mode");
        document.documentElement.classList.remove("eyebleach-firefox");
    }

    eyebleachBtn.innerText = document.body.classList.contains("eyebleach-mode")
        ? "Exit Eyebleach Mode"
        : "Eyebleach Mode";


    window.scrollTo({
        top: 0,
        behavior: "smooth"

    })
});