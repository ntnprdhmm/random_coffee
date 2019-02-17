require('dotenv').config();
const cron = require('node-cron');

const { getRandomUsers } = require('./services/user');
const {
  createInstantMessageChannel,
  postMessage,
} = require('./services/channel');

const coffeeMessage = "You've been selected for a coffee break :coffee:\nLet's meet in the snack room in 5 minutes :)";

const organiseCoffeeBreak = async () => {
  const users = await getRandomUsers();
  const channel = await createInstantMessageChannel(users);
  postMessage(channel, coffeeMessage);
};

async function main() {
  cron.schedule(process.env.COFFEE_TIME_CRON, () => {
    organiseCoffeeBreak();
  });
}

main();
