// GitHub Repo URL: https://github.com/your-username/cs81-module4b-mydataexplorer

/*
PREDICTIONS:
- I predict Wednesday has the most screen time.
- I think Friday will have the best focus level.
- I believe higher caffeine intake improves my focus.
*/

// Weekly personal data journal
const weekData = [
  { day: "Monday", sleepHours: 7, screenTime: 5, mood: "tired", caffeineIntake: 2, focusLevel: 6 },
  { day: "Tuesday", sleepHours: 6.5, screenTime: 6, mood: "stressed", caffeineIntake: 3, focusLevel: 5 },
  { day: "Wednesday", sleepHours: 6, screenTime: 8, mood: "productive", caffeineIntake: 1, focusLevel: 8 },
  { day: "Thursday", sleepHours: 7.5, screenTime: 4, mood: "calm", caffeineIntake: 1, focusLevel: 7 },
  { day: "Friday", sleepHours: 6, screenTime: 7, mood: "excited", caffeineIntake: 3, focusLevel: 6 },
  { day: "Saturday", sleepHours: 8, screenTime: 3, mood: "relaxed", caffeineIntake: 0, focusLevel: 7 },
  { day: "Sunday", sleepHours: 8.5, screenTime: 2, mood: "rested", caffeineIntake: 0, focusLevel: 8 }
];
function findHighestScreenTime() {
  let maxDay = weekData[0];

  for (let day of weekData) {
    if (day.screenTime > maxDay.screenTime) {
      maxDay = day;
    }
  }

  return `${maxDay.day} (${maxDay.screenTime} hrs)`;
}
function averageSleep() {
  let total = 0;

  for (let day of weekData) {
    total += day.sleepHours;
  }

  return (total / weekData.length).toFixed(1);
}
function mostFrequentMood() {
  const moodCounts = {};

  for (let day of weekData) {
    moodCounts[day.mood] = (moodCounts[day.mood] || 0) + 1;
  }

  let mostCommon = null;
  let highestCount = 0;

  for (let mood in moodCounts) {
    if (moodCounts[mood] > highestCount) {
      mostCommon = mood;
      highestCount = moodCounts[mood];
    }
  }

  return mostCommon;
}
function correlateCaffeineToFocus() {
  let highCaffeineFocus = [];
  let lowCaffeineFocus = [];

  for (let day of weekData) {
    if (day.caffeineIntake >= 2) {
      highCaffeineFocus.push(day.focusLevel);
    } else {
      lowCaffeineFocus.push(day.focusLevel);
    }
  }

  const avg = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

  return avg(lowCaffeineFocus) > avg(highCaffeineFocus)
    ? "Nope!"
    : "Yes!";
}
console.log("Analyzing My Data Journal...\n");

console.log("Most screen time:", findHighestScreenTime());
console.log("Average sleep:", averageSleep(), "hrs");
console.log("Most frequent mood:", `"${mostFrequentMood()}"`);
console.log("Does more caffeine mean better focus? →", correlateCaffeineToFocus());
