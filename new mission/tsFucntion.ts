

const updateFile = (): void => {
  const content = `Daily update: ${new Date().toLocaleDateString()}\nStay consistent! 💪🚀\n`;
  fs.writeFileSync(filePath, content);
  console.log("✅ File updated!");
};

const gitCommitAndPush = (): void => {
  exec("git add . && git commit -m 'Scheduled daily commit' && git push origin main", (error, stdout, stderr) => {
    if (error) {
      console.error("❌ Error:", error);
      return;
    }
    console.log("✅ Git commit and push successful!");
    console.log(stdout);
  });
};


schedule.scheduleJob("0 9 * * *", () => {
  console.log("🔔 Running scheduled daily update...");
  updateFile();
  gitCommitAndPush();
});



import * as fs from "fs";
import { exec } from "child_process";

const filePath = "./daily-update.txt";

const quotes = [
  "The best way to predict the future is to create it. – Abraham Lincoln",
  "Success is the sum of small efforts, repeated day in and day out. – Robert Collier",
  "Hard work beats talent when talent doesn't work hard. – Tim Notke",
  "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
  "The way to get started is to quit talking and begin doing. – Walt Disney"
];

const getRandomQuote = (): string => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const updateFile = (): void => {
  const content = `Date: ${new Date().toLocaleDateString()}\nQuote: "${getRandomQuote()}"\n`;
  fs.writeFileSync(filePath, content);
  console.log("✅ File updated with random quote!");
};

const gitCommitAndPush = (): void => {
  exec("git add . && git commit -m 'Daily commit with inspirational quote' && git push origin main", (error, stdout, stderr) => {
    if (error) {
      console.error("❌ Git command failed:", error);
      return;
    }
    console.log("✅ Commit and push successful!");
  });
};

const dailyUpdate = (): void => {
  updateFile();
  gitCommitAndPush();
};

dailyUpdate();
