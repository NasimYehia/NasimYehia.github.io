const videoPlayer1 = document.getElementById("videoPlayer1");
const subtitleDisplay1 = document.getElementById("subtitleDisplay1");
const speechDisplay1 = document.getElementById("speechDisplay1");
const retryButton1 = document.getElementById("retryButton1");

// Load the video
// videoPlayer1.src = "alaadinStory.mp4";

const videoPlayer2 = document.getElementById("videoPlayer2"); // dfgd
const subtitleDisplay2 = document.getElementById("subtitleDisplay2");
const speechDisplay2 = document.getElementById("speechDisplay2");
const retryButton2 = document.getElementById("retryButton2");

// Load the video
// videoPlayer2.src = "rocky.mp4";

videoPlayer1.style.display = "block";
videoPlayer2.style.display = "none";
subtitleDisplay1.style.display = "block";
subtitleDisplay2.style.display = "none";
speechDisplay1.style.display = "block";
speechDisplay2.style.display = "none";
retryButton1.style.display = "block";
retryButton2.style.display = "none";

switchButton.addEventListener("click", () => {
  chooseVideo = !chooseVideo; // Toggle between true and false
  if (chooseVideo) {
    videoPlayer1.style.display = "block";
    videoPlayer2.style.display = "none";
    subtitleDisplay1.style.display = "block";
    subtitleDisplay2.style.display = "none";
    speechDisplay1.style.display = "block";
    speechDisplay2.style.display = "none";
    retryButton1.style.display = "block";
    retryButton2.style.display = "none";
  } else {
    videoPlayer1.style.display = "none";
    videoPlayer2.style.display = "block";
    subtitleDisplay1.style.display = "none";
    subtitleDisplay2.style.display = "block";
    speechDisplay1.style.display = "none";
    speechDisplay2.style.display = "block";
    retryButton1.style.display = "none";
    retryButton2.style.display = "block";
  }
});

// Load subtitles1 (example format)
const subtitles1 = [
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
  { start: 40, end: 42, text: "and he got the lamp" },
  { start: 42, end: 44, text: "then he shouted" },
  { start: 44, end: 47, text: "let me out I got the lamp" },
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
  { start: 87, end: 90, text: "whatever you want me master" },
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

const subtitles2 = [
  { start: 0, end: 4, text: "It is night time" },
  { start: 4, end: 6, text: "That means It's bedtime" },
  { start: 6, end: 8, text: "for Henry" },
  { start: 8, end: 10, text: "Henry remember" },
  { start: 10, end: 15, text: "to put away your toys" },
  { start: 15, end: 17, text: "Mom weren't you telling me" },
  { start: 17, end: 19, text: "to hurry up and go to sleep" },
  { start: 19, end: 23, text: "As usual Henry does not" },
  { start: 23, end: 25, text: "put away his scattered toys" },
  { start: 25, end: 31, text: "while deep in sleep" },
  { start: 31, end: 36, text: "what's that sound" },
  { start: 36, end: 39, text: "I think It has coming" },
  { start: 39, end: 42, text: "from my room" },
  { start: 42, end: 48, text: "I am late because of you" },
  { start: 48, end: 49, text: "go on" },
  { start: 49, end: 51, text: "At least open the window" },
  { start: 51, end: 54, text: "Henry completely startled" },
  { start: 54, end: 56, text: "opens the window" },
  { start: 56, end: 60, text: "And Rocky zooms out" },
  { start: 60, end: 63, text: "uh oh It looks like" },
  { start: 63, end: 65, text: "Henry's pajama shirt" },
  { start: 65, end: 69, text: "got caught on Rocky's wing" },
  { start: 69, end: 72, text: "Mommy Help" },
  { start: 72, end: 74, text: " Where are we going" },
  { start: 74, end: 75, text: "Listen I'm late because of you" },
  { start: 75, end: 76, text: "and your mess" },
  { start: 76, end: 78, text: "Anyway why are you" },
  { start: 78, end: 80, text: "tagging along" },
  { start: 80, end: 83, text: "I'm sorry Rocky" },
  { start: 83, end: 87, text: "From now on I promise" },
  { start: 87, end: 89, text: "I will always clean up my room" },
  { start: 89, end: 94, text: "Well we'll just have to see" },
  { start: 94, end: 96, text: "Henry and Rocky" },
  { start: 96, end: 98, text: "fly out into space" },
  { start: 98, end: 102, text: "Wow An octopus star" },
  { start: 102, end: 106, text: "a crown star car star" },
  { start: 106, end: 113, text: "flower star This is so cool" },
  { start: 113, end: 114, text: "Wow" },
  { start: 114, end: 120, text: "A twinkling treasure star too" },
  { start: 120, end: 124, text: "Ooh Fresh popcorn star" },
  { start: 124, end: 126, text: "and pizza cola star" },
  { start: 135, end: 137, text: "Rolling round donut stars" },
  { start: 138, end: 138, text: "look cool too" },
  { start: 139, end: 140, text: "The holes in the middle" },
  { start: 141, end: 142, text: "are like tunnels" },
  { start: 143, end: 143, text: "As they fly" },
  { start: 144, end: 145, text: "through the last donut star" },
  { start: 148, end: 149, text: "Ah l have got chocolate" },
  { start: 150, end: 151, text: "in my eye" },
  { start: 152, end: 153, text: "I cannot see anything" },
  { start: 156, end: 157, text: "here let me help you" },
  { start: 162, end: 163, text: "whew thanks" },
  { start: 164, end: 164, text: "anytime" },
  { start: 167, end: 167, text: "Henry is happy" },
  { start: 168, end: 168, text: "to have helped Rocky" },
  { start: 171, end: 172, text: "Flying around and around" },
  { start: 173, end: 174, text: "they finally land on" },
  { start: 174, end: 176, text: "the most special star" },
  { start: 176, end: 177, text: "where a bunch of" },
  { start: 178, end: 178, text: "alien friends live" },
  { start: 182, end: 182, text: "There Rocky and Henry" },
  { start: 183, end: 184, text: "talk and dance" },
  { start: 185, end: 187, text: "with their alien friends all night" },
  { start: 199, end: 199, text: "at last" },
  { start: 199, end: 201, text: "the time has come to leave" },
  { start: 203, end: 204, text: "Now we have to go back" },
  { start: 206, end: 206, text: "come again" },
  { start: 207, end: 208, text: "You bet I will" },
  { start: 222, end: 223, text: "as the two approach" },
  { start: 224, end: 224, text: "Henrys house" },
  { start: 226, end: 228, text: "Rocky next time you take off" },
  { start: 229, end: 231, text: "make sure you take me too" },
  { start: 232, end: 232, text: "well that depends on whether" },
  { start: 234, end: 236, text: "you can keep your room clean" },
  { start: 238, end: 239, text: "of course l can" },
  { start: 240, end: 241, text: "I can put away toys" },
  { start: 242, end: 243, text: "in fact call me" },
  { start: 243, end: 244, text: "the king of tidiness" },
  { start: 247, end: 247, text: "This was such" },
  { start: 248, end: 248, text: "This was such" },
  { start: 249, end: 249, text: "an awesome trip" },
  { start: 250, end: 251, text: "For me too" },
  { start: 253, end: 254, text: "thank you Rocky" },
  { start: 255, end: 255, text: "as soon as" },
  { start: 256, end: 257, text: "their heads hit the pillow" },
  { start: 258, end: 260, text: "Henry and Rocky were snoring" },
  { start: 262, end: 262, text: "in their dreams" },
  { start: 263, end: 264, text: "they ventured back into space" },
];
let prevSub1 = subtitles1[0];
let prevSub2 = subtitles2[0];
subtitleDisplay1.textContent = prevSub1.text;
subtitleDisplay2.textContent = prevSub2.text;
// Display subtitles1 based on video time
let chooseVideo = true;

videoPlayer1.addEventListener("timeupdate", () => {
  if (chooseVideo === true) {
    const currentTime = videoPlayer1.currentTime;
    const currentSubtitle = subtitles1.find(
      (sub) => currentTime >= sub.start && currentTime <= sub.end
    );
    if (prevSub1.start != currentSubtitle.start) {
      if (
        accumulatedTranscript.replace(/[,.?!]/g, "").toLowerCase() ===
        prevSub1.text.replace(/[,.?!]/g, "").toLowerCase()
      ) {
        subtitleDisplay1.textContent = currentSubtitle
          ? currentSubtitle.text
          : "";
        accumulatedTranscript = ""; // Reset the accumulated transcript after a successful match
        prevSub1 = currentSubtitle;
      } else {
        videoPlayer1.pause();
      }
    }
  }
});

videoPlayer2.addEventListener("timeupdate", () => {
  if (chooseVideo === false) {
    const currentTime = videoPlayer2.currentTime;
    const currentSubtitle = subtitles2.find(
      (sub) => currentTime >= sub.start && currentTime <= sub.end
    );
    if (prevSub2.start != currentSubtitle.start) {
      if (
        accumulatedTranscript.replace(/[,.?!]/g, "").toLowerCase() ===
        prevSub2.text.replace(/[,.?!]/g, "").toLowerCase()
      ) {
        subtitleDisplay2.textContent = currentSubtitle
          ? currentSubtitle.text
          : "";
        accumulatedTranscript = ""; // Reset the accumulated transcript after a successful match
        prevSub2 = currentSubtitle;
      } else {
        videoPlayer2.pause();
      }
    }
  }
});

let accumulatedTranscript = ""; // Accumulate recognized speech here

//Display Speech

videoPlayer1.addEventListener("timeupdate", () => {
  if (chooseVideo === true) {
    speechDisplay1.textContent = accumulatedTranscript;
  } else {
    speechDisplay2.textContent = accumulatedTranscript;
  }
});

videoPlayer2.addEventListener("timeupdate", () => {
  if (chooseVideo === false) {
    speechDisplay2.textContent = accumulatedTranscript;
  }
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
    if (chooseVideo === true) {
      speechDisplay1.textContent = accumulatedTranscript; // Update the display in real-time
      const currentSubtitle = subtitles1.find(
        (sub) =>
          videoPlayer1.currentTime >= sub.start &&
          videoPlayer1.currentTime <= sub.end
      );
      if (
        videoPlayer1.paused &&
        prevSub1 &&
        accumulatedTranscript.replace(/[,.?!]/g, "").toLowerCase() ===
          prevSub1.text.replace(/[,.?!]/g, "").toLowerCase()
      ) {
        videoPlayer1.play();
        accumulatedTranscript = ""; // Reset the accumulated transcript after a successful match
        subtitleDisplay1.textContent = currentSubtitle
          ? currentSubtitle.text
          : ""; // Update the subtitle display
        prevSub1 = currentSubtitle;
      }
    } else {
      speechDisplay2.textContent = accumulatedTranscript;
      const currentSubtitle = subtitles2.find(
        (sub) =>
          videoPlayer2.currentTime >= sub.start &&
          videoPlayer2.currentTime <= sub.end
      );
      if (
        videoPlayer2.paused &&
        prevSub2 &&
        accumulatedTranscript.replace(/[,.?!]/g, "").toLowerCase() ===
          prevSub2.text.replace(/[,.?!]/g, "").toLowerCase()
      ) {
        videoPlayer2.play();
        accumulatedTranscript = ""; // Reset the accumulated transcript after a successful match
        subtitleDisplay2.textContent = currentSubtitle
          ? currentSubtitle.text
          : ""; // Update the subtitle display
        prevSub2 = currentSubtitle;
      }
    }
    // Check if the video is paused and if the transcript matches the current subtitle
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

videoPlayer2.addEventListener("ended", () => {
  accumulatedTranscript = "";
});

// Retry button event listener
retryButton2.addEventListener("click", () => {
  accumulatedTranscript = ""; // Reset the accumulated transcript
  speechDisplay2.textContent = accumulatedTranscript; // Update the display in real-time
});
