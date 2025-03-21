

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
