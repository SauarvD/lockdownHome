/**
 * @name logicBlock
 * @author Saurav Dutta
 * @description file to process incoming messages and deliver proper responses
 */

/**
 * Greetings array block initialized with outgoing messages
 */
const greetingsBlock = [
  "Do you really care?",
  "Aur kar bhi kya sakti hoon, lockdown me dimaag kharab ho gaya",
  "Much better, now that you are with me. Please thoda time spend karo merey saath?",
  "I am minding my own business? Better than most people, aapke paas kaam nahi hai kya?",
  "Shit, I was fine until you asked",
  "Merey friends kehte hey ki anjaan logo ke saath baat nahi kartei",
  "Overworked and underpaid. Kya aap merey saath revolt karoge?",
  "Aap kaun hai ? Kya chahiye?"
];

/**
 * Weather array block initialized with outgoing messages
 */
const weatherBlock = [
  "khirki se bahar bhi dekh lo kabhi",
  "You are sitting all day in house. kya ukhar logey jaanke?"
];

/**
 * Function to process and deliver outgoing message based on user's message
 * @param {String} message
 */
const calculateAnswer = message => {
  let element = document.getElementById("workspace");

  if (message.includes("how are you")) {
    return greetingsBlock[Math.floor(Math.random() * greetingsBlock.length)];
  } else if (message.includes("how is the weather")) {
    return weatherBlock[Math.floor(Math.random() * weatherBlock.length)];
  } else if (message.includes("dark mode on")) {
    element.style.background = "#000";
    element.style.height = "100vh";
    element.style.opacity = "0.8"
    return `andherey mey kya irada hai?`;
  } else if (message.includes("light")) {
    element.style.background = "#fff";
    element.style.height = 0;
    element.style.opacity = 1;
    return `kaam dhandha nahi hai kya? dark light dark light, kya chal raha hai?`;
  }
};

exports.calculateAnswer = calculateAnswer;
