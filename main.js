const videoPlayer1 = document.getElementById("videoPlayer1");
const subtitleDisplay1 = document.getElementById("subtitleDisplay1");
const speechDisplay1 = document.getElementById("speechDisplay1");
const retryButton1 = document.getElementById("retryButton1");

// Load the video
videoPlayer1.src = "alaadinStory.mp4";

const videoPlayer2 = document.getElementById("videoPlayer2");
const subtitleDisplay2 = document.getElementById("subtitleDisplay2");
const speechDisplay2 = document.getElementById("speechDisplay2");
const retryButton2 = document.getElementById("retryButton2");

// Load the video
videoPlayer2.src = "rocky.mp4";

// Load subtitles (example format)
const subtitles = [
  { start: 0, end: 9, text: "in a small town in India" },
  { start: 9, end: 12, text: "lived a young man named Aladdin" },
  { start: 12, end: 14, text: "One day" },
  { start: 14, end: 17, text: "a wizard came to Aladdin" },
  { start: 17, end: 20, text: "He said" },
  { start: 20, end: 21, text: "Bring me the lamp" },
  { start: 21, end: 22, text: "inside this hole" },
  { start: 22, end: 30, text: "and i will give you some money" },
  { start: 30, end: 39, text: "He pushed Aladdin inside the hole" },
  { start: 39, end: 40, text: "Aladdin went in" },
  { start: 40, end: 42, text: "and he qot the lamp" },
  { start: 42, end: 44, text: "then he shouted" },
  { start: 44, end: 47, text: "let me out got the lamp" },
  { start: 47, end: 49, text: "However" },
  { start: 49, end: 51, text: "the wizard did not want to" },
  { Start: 51, end: 53, text: "give him any money" },
  { start: 53, end: 55, text: "So he said" },
  { start: 56, end: 57, text: "Give me the lamp first" },
  { start: 58, end: 59, text: "or i will leave" },
  { start: 64, end: 65, text: "Aladdin was scared" },
  { start: 66, end: 67, text: "He tried to qet out" },
  { start: 67, end: 68, text: "this way and that way" },
  { start: 68, end: 70, text: "in the end" },
  { start: 70, end: 72, text: "Aladdin rubbed the lamp" },
  { start: 72, end: 75, text: "suddenly" },
  { start: 75, end: 78, text: "a giant came out of the lamp" },
  { start: 78, end: 79, text: "My master" },
  { start: 79, end: 82, text: "what can i do for you?" },
  { start: 82, end: 84, text: "Aladdin was so surprised" },
  { start: 84, end: 87, text: "let me out and take me home" },
  { start: 87, end: 90, text: "whatever you want me master!" },
  { start: 90, end: 95, text: "the giant took Aladdin home" },
  { start: 95, end: 99, text: "The giant gave Aladdin" },
  { start: 99, end: 101, text: "everything he wanted" },
  { start: 101, end: 105, text: "Aladdin became rich" },
  { start: 105, end: 110, text: "one day on the way home," },
  { start: 110, end: 114, text: "Aladdin saw a beautiful lady" },
  { start: 114, end: 116, text: "she was a princess" },
  { start: 116, end: 117, text: "how beautiful" },
  { start: 117, end: 122, text: " Aladdin fell in love with her" },
  { start: 122, end: 124, text: "after this" },
  { start: 124, end: 127, text: "Aladdin thought and thought" },
  { start: 127, end: 130, text: "about her all day LONG" },
  { start: 130, end: 133, text: "Aladdin went to her father" },
  { start: 133, end: 135, text: "he said" },
  { start: 135, end: 138, text: "Dear king I love your daughter" },
  { start: 138, end: 143, text: "I want to marry her" },
  { start: 143, end: 145, text: "However" },
  { start: 145, end: 148, text: " the king did not like Aladdin" },
  { start: 148, end: 152, text: "if you build me a biq castle" },
  { Start: 152, end: 157, text: "I will give you my daughter" },
  {
    Start: 157,
    end: 165,
    text: "next day Aladdin show a big castle to the king",
  },
  { Start: 165, end: 168, text: "oh my it is a Beautiful" },
  { Start: 168, end: 175, text: "The king was so surprised and glad" },
  { Start: 175, end: 180, text: "Aladdin Mary the princess" },
  {
    Start: 180,
    End: 192,
    text: " the wizard heard about Aladdin he came to the castle and shouted",
  },
  {
    Start: 192,
    end: 207,
    text: "give me your old lamp take my new lamp This will be butter This will be good",
  },
  {
    Start: 207,
    end: 220,
    text: " the princess heard the wizard she did not know the cigarette of the lamp so she said",
  },
  { Start: 220, end: 224, text: " That one looks better Aladdin we like it" },
  {
    Start: 224,
    end: 250,
    text: " the wizard round the lamp and he took everything from Aladdin the lamp the castle and even the princess",
  },
  {
    Start: 250,
    end: 262,
    text: "Aladdin was shock oh no what I can do I miss go and find him",
  },
  {
    Start: 262,
    end: 277,
    text: "Aladdin went to the wizard after the great meal the wizard was asleep Aladdin picked up the lamp carefully he robbed the lamp and he said",
  },
  {
    Start: 277,
    end: 292,
    text: "take him far away from here so he can never come back the giant took the wizard far away",
  },
  {
    Start: 294,
    end: 299,
    text: "I am glad I bring you back The princess said I am glad to see you again",
  },
];

let prevSub = subtitles[0];
subtitleDisplay1.textContent = prevSub.text;
// Display subtitles based on video time
videoPlayer1.addEventListener("timeupdate", () => {
  const currentTime = videoPlayer1.currentTime;
  const currentSubtitle = subtitles.find(
    (sub) => currentTime >= sub.start && currentTime <= sub.end
  );
  if (prevSub.start != currentSubtitle.start) {
    if (accumulatedTranscript.toLowerCase() === prevSub.text.toLowerCase()) {
      subtitleDisplay1.textContent = currentSubtitle
        ? currentSubtitle.text
        : "";
      accumulatedTranscript = ""; // Reset the accumulated transcript after a successful match
      prevSub = currentSubtitle;
    } else {
      videoPlayer1.pause();
    }
  }
});

let accumulatedTranscript = ""; // Accumulate recognized speech here

//Display Speech
videoPlayer1.addEventListener("timeupdate", () => {
  speechDisplay1.textContent = accumulatedTranscript;
});

const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true; // Change to true to get intermediate results

recognition.onresult = function (event) {
  const result = event.results[event.results.length - 1];
  if (result.isFinal) {
    const transcript = result[0].transcript.trim();
    accumulatedTranscript += " " + transcript; // Accumulate the recognized words
    accumulatedTranscript = accumulatedTranscript.trim();
    console.log("Accumulated Transcript:", accumulatedTranscript); // Debugging
    speechDisplay1.textContent = accumulatedTranscript; // Update the display in real-time

    // Check if the video is paused and if the transcript matches the current subtitle
    const currentSubtitle = subtitles.find(
      (sub) =>
        videoPlayer1.currentTime >= sub.start &&
        videoPlayer1.currentTime <= sub.end
    );
    if (
      videoPlayer1.paused &&
      prevSub &&
      accumulatedTranscript.toLowerCase() === prevSub.text.toLowerCase()
    ) {
      videoPlayer1.play();
      accumulatedTranscript = ""; // Reset the accumulated transcript after a successful match
      subtitleDisplay1.textContent = currentSubtitle
        ? currentSubtitle.text
        : ""; // Update the subtitle display
      prevSub = currentSubtitle;
    }
  }
};

recognition.start();

// Reset the accumulated transcript when the video is ended

videoPlayer1.addEventListener("ended", () => {
  accumulatedTranscript = "";
});

// Retry button event listener
retryButton1.addEventListener("click", () => {
  accumulatedTranscript = ""; // Reset the accumulated transcript
  speechDisplay1.textContent = accumulatedTranscript; // Update the display in real-time
});
