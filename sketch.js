let flags = [
  { country: "Brasil", emoji: "🇧🇷" },
  { country: "Estados Unidos", emoji: "🇺🇸" },
  { country: "França", emoji: "🇫🇷" },
  { country: "Alemanha", emoji: "🇩🇪" },
  { country: "Japão", emoji: "🇯🇵" },
  { country: "Itália", emoji: "🇮🇹" },
  { country: "Canadá", emoji: "🇨🇦" },
  { country: "Reino Unido", emoji: "🇬🇧" },
];

let currentFlag;
let options = [];
let result = "";

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
  textSize(20);
  nextQuestion();
}

function draw() {
  background(245);

  fill(0);
  textSize(24);
  text("De qual país é esta bandeira?", width / 2, 50);

  textSize(60);
  text(currentFlag.emoji, width / 2, 120);

  textSize(20);
  for (let i = 0; i < options.length; i++) {
    fill(200);
    rect(width / 2 - 100, 200 + i * 60, 200, 50, 10);
    fill(0);
    text(options[i], width / 2, 225 + i * 60);
  }

  fill(0);
  textSize(18);
  text(result, width / 2, height - 30);
}

function mousePressed() {
  for (let i = 0; i < options.length; i++) {
    let x = width / 2 - 100;
    let y = 200 + i * 60;
    if (mouseX > x && mouseX < x + 200 && mouseY > y && mouseY < y + 50) {
      if (options[i] === currentFlag.country) {
        result = "✅ Correto!";
      } else {
        result = "❌ Errado! Era " + currentFlag.country;
      }
      setTimeout(nextQuestion, 1500);
    }
  }
}

function nextQuestion() {
  result = "";
  currentFlag = random(flags);

  options = [currentFlag.country];
  while (options.length < 3) {
    let option = random(flags).country;
    if (!options.includes(option)) {
      options.push(option);
    }
  }
  shuffle(options, true);
}
