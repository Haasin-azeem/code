bot.on("messagestr", async (message) => {
  msg = await message;
  console.log(msg)
  if (msg.split(' ')[0] === "pretzulduck." || msg.split(" ")[0] === "dsvg." || msg.split(" ")[0] === "nidalazfar2.") {
    if (msg.includes("!tps")) {
      bot.chat("Current tps is " + bot.getTps())
