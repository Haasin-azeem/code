const mineflayer = require('mineflayer');
const { mineflayer: mineflayerViewer } = require('prismarine-viewer');
const pathfinder = require('mineflayer-pathfinder').pathfinder;
const Movements = require('mineflayer-pathfinder').Movements;
const { GoalNear, GoalNearXZ } = require('mineflayer-pathfinder').goals;

const prefix = '!';

const bot = mineflayer.createBot({
    host: 'mc.herobrine.org',
    username: 'p1xy',
});

bot.loadPlugin(pathfinder);

const chatPattern = /Received chat message from (\w+): (.+)/;

bot.once('spawn', () => {
    const mcData = require('minecraft-data')(bot.version);

    const defaultMove = new Movements(bot, mcData);

    defaultMove.allow1by1towers = false;
    defaultMove.canDig = true;
    defaultMove.allowParkour = true;
    defaultMove.allowSprinting = true;
    defaultMove.scaffoldingBlocks = [];
    defaultMove.scaffoldingBlocks.push(mcData.itemsByName['dirt'].id);

    bot.pathfinder.setMovements(defaultMove);

    mineflayerViewer(bot, { port: 3007, firstPerson: true });

    console.log('Bot has spawned. Sending initial chat message...');
    bot.chat('/game hera');
});

bot.on('respawn', () => {
    console.log('Bot has respawned. Sending chat message after world change...');
    bot.chat('/game hera');
});

bot.on('messagestr', async (message) => {
    msg = await message.split(' ').slice(1).join(' ').trim()
    if (msg.split(" ")[0] === "YOUR NAME HERE") {
        if (msg.includes("!cmd") {
         EXECUTE CODE   
        }
    }
}

bot.on('kicked', (reason, loggedIn) => {
    console.log(`Bot has been kicked. Reason: ${reason}. Logged in: ${loggedIn}`);
});

bot.on('error', (err) => {
    console.error('Bot error:', err);
});
