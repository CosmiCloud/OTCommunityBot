require('dotenv').config();
const os = require('os');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

module.exports={
    activejobs: async function jobs(){
      try {
        var jobs = "sudo curl -s https://v5api.othub.info/api/home/HomeV3 | jq '.All.ActiveJobs'"
        var jobs = await exec(jobs);
        return jobs.stdout;
      }catch(e){
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
    jobs: async function jobs(){
      try {
        var jobs = 'sudo curl -X GET "https://v5api.othub.info/api/jobs/jobcreatedcountinperiod?timePeriod=hours&time=24" -H  "accept: text/plain"'
        var jobs = await exec(jobs);
        return jobs.stdout;
      }catch(e){
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
    ethjobs: async function jobs(){
      try {
        var jobs = 'sudo curl -X GET "https://v5api.othub.info/api/jobs/jobcreatedcountinperiod?timePeriod=hours&time=24&blockchainID=1" -H  "accept: text/plain"'
        var jobs = await exec(jobs);
        return jobs.stdout;
      }catch(e){
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
    xdaijobs: async function jobs(){
      try {
        var jobs = 'sudo curl -X GET "https://v5api.othub.info/api/jobs/jobcreatedcountinperiod?timePeriod=hours&time=24&blockchainID=2" -H  "accept: text/plain"'
        var jobs = await exec(jobs);
        return jobs.stdout;
      }catch(e){
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
    polyjobs: async function jobs(){
      try {
        var jobs = 'sudo curl -X GET "https://v5api.othub.info/api/jobs/jobcreatedcountinperiod?timePeriod=hours&time=24&blockchainID=3" -H  "accept: text/plain"'
        var jobs = await exec(jobs);
        return jobs.stdout;
      }catch(e){
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
    nodes: async function nodes(){
      try {
        var nodes = "sudo curl -s https://v5api.othub.info/api/home/HomeV3 | jq '.All.ActiveNodes'"
        var nodes = await exec(nodes);
        return nodes.stdout;
      }catch(e){
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
    polynodes: async function nodes(){
      try {
        var nodes = "sudo curl -s https://v5api.othub.info/api/home/HomeV3 | jq '.Blockchains[0].ActiveNodes'"
        var nodes = await exec(nodes);
        return nodes.stdout;
      }catch(e){
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
    xdainodes: async function nodes(){
      try {
        var nodes = "sudo curl -s https://v5api.othub.info/api/home/HomeV3 | jq '.Blockchains[1].ActiveNodes'"
        var nodes = await exec(nodes);
        return nodes.stdout;
      }catch(e){
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
    ethnodes: async function nodes(){
      try {
        var nodes = "sudo curl -s https://v5api.othub.info/api/home/HomeV3 | jq '.Blockchains[2].ActiveNodes'"
        var nodes = await exec(nodes);
        return nodes.stdout;
      }catch(e){
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
    payouts: async function payouts(){
      try {
        var payouts = "sudo curl -s https://v5api.othub.info/api/home/HomeV3 | jq '.All.TokensPaidout24H'"
        var payouts = await exec(payouts);
        return payouts.stdout;
      }catch(e){
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
    ethpayouts: async function payouts(){
      try {
        var payouts = "sudo curl -s https://v5api.othub.info/api/home/HomeV3 | jq '.Blockchains[2].TokensPaidout24H'"
        var payouts = await exec(payouts);
        return payouts.stdout;
      }catch(e){
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
    xdaipayouts: async function payouts(){
      try {
        var payouts = "sudo curl -s https://v5api.othub.info/api/home/HomeV3 | jq '.Blockchains[1].TokensPaidout24H'"
        var payouts = await exec(payouts);
        return payouts.stdout;
      }catch(e){
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
  polypayouts: async function payouts(){
      try {
        var payouts = "sudo curl -s https://v5api.othub.info/api/home/HomeV3 | jq '.Blockchains[0].TokensPaidout24H'"
        var payouts = await exec(payouts);
        return payouts.stdout;
      }catch(e){
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
  staked: async function staked(){
      try {
        var staked = "sudo curl -s https://v5api.othub.info/api/home/HomeV3 | jq '.All.StakedTokens'"
        var staked = await exec(staked);
        return staked.stdout;
      }catch(e){
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
  ethstaked: async function staked(){
      try {
        var staked = "sudo curl -s https://v5api.othub.info/api/home/HomeV3 | jq '.Blockchains[2].StakedTokens'"
        var staked = await exec(staked);
        return staked.stdout;
      }catch(e){
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
  xdaistaked: async function staked(){
      try {
        var staked = "sudo curl -s https://v5api.othub.info/api/home/HomeV3 | jq '.Blockchains[1].StakedTokens'"
        var staked = await exec(staked);
        return staked.stdout;
      }catch(e){
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
  polystaked: async function staked(){
      try {
        var staked = "sudo curl -s https://v5api.othub.info/api/home/HomeV3 | jq '.Blockchains[0].StakedTokens'"
        var staked = await exec(staked);
        return staked.stdout;
      }catch(e){
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
  locked: async function locked(){
      try {
        var locked = "sudo curl -s https://v5api.othub.info/api/home/HomeV3 | jq '.All.TokensLocked24H'"
        var locked = await exec(locked);
        return locked.stdout;
      }catch(e){
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
  ethlocked: async function locked(){
      try {
        var locked = "sudo curl -s https://v5api.othub.info/api/home/HomeV3 | jq '.Blockchains[2].TokensLocked24H' "
        var locked = await exec(locked);
        return locked.stdout;
      }catch(e){
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
  xdailocked: async function locked(){
      try {
        var locked = "sudo curl -s https://v5api.othub.info/api/home/HomeV3 | jq '.Blockchains[1].TokensLocked24H' "
        var locked = await exec(locked);
        return locked.stdout;
      }catch(e){
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
  polylocked: async function locked(){
      try {
        var locked = "sudo curl -s https://v5api.othub.info/api/home/HomeV3 | jq '.Blockchains[0].TokensLocked24H' "
        var locked = await exec(locked);
        return locked.stdout;
      }catch(e){
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    }
}

//Bot Commands
bot.command('bothelp', (ctx) => ctx.reply(
  'b-OT Commands:'+os.EOL+
  '/nodehelp'+os.EOL+
  '/backup'+os.EOL+
  '/freespace'+os.EOL+
  '/dockerless'+os.EOL+
  '/multinode'+os.EOL+
  '/activejobs'+os.EOL+
  '/jobs'+os.EOL+
  '/nodes'+os.EOL+
  '/staked'+os.EOL+
  '/locked'+os.EOL+
  '/payouts'
));

//Node help
bot.command('nodehelp', (ctx) => ctx.reply(
  'OT-Hub: https://othub.origin-trail.network/dashboard'+os.EOL+
  'Discord Support: https://discord.gg/QCb3hqa4'+os.EOL+
  'Start A New Node: otnode.com'+os.EOL+
  'Support Email: tech@origin-trail.com'
));

bot.command('backup', (ctx) => ctx.reply(
  'Please visit this link to see how to back your node up: https://www.otnode.com/maintenance/node-backup'+os.EOL+
  'Say thanks to Millian!'
));

bot.command('freespace', (ctx) => ctx.reply(
  'Please visit this link to see how to back your node up: https://www.otnode.com//node-space-management'+os.EOL+
  'Say thanks to Millian!'+os.EOL+os.EOL+
  'You can also try running the below commands to free space.'+os.EOL+
  'wget https://raw.githubusercontent.com/calr0x/OT-Settings/main/space-maker.sh'+os.EOL+
  'chmod +x space-maker.sh'+os.EOL+
  './space-maker.sh'
));

bot.command('dockerless', (ctx) => ctx.reply(
  'Sometimes running your node in docker has its draw backs. Below is a community developed way of running without docker.'+os.EOL+
  'https://github.com/calr0x/OT-DockSucker'+os.EOL+
  'Thanks Calvin!'
));

bot.command('multinode', (ctx) => ctx.reply(
  'You may decide you want to run multiple nodes on the same server. This is a more advanced way to run nodes with its own risks involved. Noobs stay away.'+os.EOL+
  'https://github.com/calr0x/OT-2Nodes1Server'+os.EOL+
  'Thanks Calvin and BRX!'
));
//---------------------------------END HELP COMMANDS--------------------------

//---------------------------------START JOB COMMANDS-------------------------
//active jobs
bot.command('activejobs', async (ctx) => {
const jobs = await module.exports.activejobs();
const tjobs = jobs.slice(0,-1);
await ctx.reply('There are '+tjobs+' active jobs.')
});

//all jobs in last 24h
bot.command('jobs', async (ctx) => {
const jobs = await module.exports.jobs();
await ctx.reply('There have been '+jobs+' jobs in the past 24 hours.')
});

//all eth jobs in last 24h
bot.command('ethjobs', async (ctx) => {
const jobs = await module.exports.ethjobs();
await ctx.reply('There have been '+jobs+' ethereum jobs in the past 24 hours.')
});

//all xdai jobs in last 24h
bot.command('xdaijobs', async (ctx) => {
const jobs = await module.exports.xdaijobs();
await ctx.reply('There have been '+jobs+' xdai jobs in the past 24 hours.')
});

//all  polygon jobs in last 24h
bot.command('polyjobs', async (ctx) => {
const jobs = await module.exports.polyjobs();
await ctx.reply('There have been '+jobs+' polygon jobs in the past 24 hours.')
});

bot.command('dotjobs', (ctx) => ctx.reply(
  'You have just delayed the Polkadot integration by 3 weeks.'
));
//---------------------------------END JOB COMMANDS-------------------------

//---------------------------------START NODES COMMANDS---------------------
bot.command('nodes', async (ctx) => {
const nodes = await module.exports.nodes();
const tnodes = nodes.slice(0,-1);
await ctx.reply('There are '+tnodes+' active nodes(identities) on the ODN. ')
});

bot.command('ethnodes', async (ctx) => {
const nodes = await module.exports.ethnodes();
const tnodes = nodes.slice(0,-1);
await ctx.reply('There are '+tnodes+' active eth nodes(identities) on the ODN. ')
});

bot.command('xdainodes', async (ctx) => {
const nodes = await module.exports.xdainodes();
const tnodes = nodes.slice(0,-1);
await ctx.reply('There are '+tnodes+' active xdai nodes(identities) on the ODN. ')
});

bot.command('polynodes', async (ctx) => {
const nodes = await module.exports.polynodes();
const tnodes = nodes.slice(0,-1);
await ctx.reply('There are '+tnodes+' active polygon nodes(identities) on the ODN. ')
});
//---------------------------------END NODES COMMANDS-----------------------

//---------------------------------START PAYOUT COMMANDS--------------------
bot.command('payouts', async (ctx) => {
const payouts = await module.exports.payouts();
const tpayouts = payouts.slice(0,-1);
const pay_num = parseInt(tpayouts);
await ctx.reply('There has been '+pay_num+' TRAC paidout in the last 24 hours. ')
});

bot.command('ethpayouts', async (ctx) => {
const payouts = await module.exports.ethpayouts();
const tpayouts = payouts.slice(0,-1);
const pay_num = parseInt(tpayouts);
await ctx.reply('There has been '+pay_num+' ethTRAC paidout in the last 24 hours. ')
});

bot.command('xdaipayouts', async (ctx) => {
const payouts = await module.exports.xdaipayouts();
const tpayouts = payouts.slice(0,-1);
const pay_num = parseInt(tpayouts);
await ctx.reply('There has been '+pay_num+' xTRAC paidout in the last 24 hours. ')
});

bot.command('polypayouts', async (ctx) => {
const payouts = await module.exports.polypayouts();
const tpayouts = payouts.slice(0,-1);
const pay_num = parseInt(tpayouts);
await ctx.reply('There has been '+pay_num+' polyTRAC paidout in the last 24 hours. ')
});
//---------------------------------END PAYOUT COMMANDS----------------------

//---------------------------------START STAKED COMMANDS--------------------
bot.command('staked', async (ctx) => {
const staked = await module.exports.staked();
const tstaked = staked.slice(0,-1);
const staked_num = parseInt(tstaked);
await ctx.reply('There is '+staked_num+' TRAC staked on the ODN. ')
});

bot.command('ethstaked', async (ctx) => {
const staked = await module.exports.ethstaked();
const tstaked = staked.slice(0,-1);
const staked_num = parseInt(tstaked);
await ctx.reply('There is '+staked_num+' ethTRAC staked on the ODN. ')
});

bot.command('xdaistaked', async (ctx) => {
const staked = await module.exports.xdaistaked();
const tstaked = staked.slice(0,-1);
const staked_num = parseInt(tstaked);
await ctx.reply('There is '+staked_num+' xTRAC staked on the ODN. ')
});

bot.command('polystaked', async (ctx) => {
const staked = await module.exports.polystaked();
const tstaked = staked.slice(0,-1);
const staked_num = parseInt(tstaked);
await ctx.reply('There is '+staked_num+' polyTRAC staked on the ODN. ')
});
//---------------------------------END STAKED COMMANDS----------------------

//---------------------------------START LOCKED COMMANDS--------------------
bot.command('locked', async (ctx) => {
const locked = await module.exports.locked();
const tlocked = locked.slice(0,-1);
const locked_num = parseInt(tlocked);
await ctx.reply('There has been '+locked_num+' TRAC locked into jobs in the past 24 hours.')
});

bot.command('ethlocked', async (ctx) => {
const locked = await module.exports.ethlocked();
const tlocked = locked.slice(0,-1);
const locked_num = parseInt(tlocked);
await ctx.reply('There has been '+locked_num+' ethTRAC locked into jobs in the past 24 hours.')
});

bot.command('xdailocked', async (ctx) => {
const locked = await module.exports.xdailocked();
const tlocked = locked.slice(0,-1);
const locked_num = parseInt(tlocked);
await ctx.reply('There has been '+locked_num+' xTRAC locked into jobs in the past 24 hours.')
});

bot.command('polylocked', async (ctx) => {
const locked = await module.exports.polylocked();
const tlocked = locked.slice(0,-1);
const locked_num = parseInt(tlocked);
await ctx.reply('There has been '+locked_num+' polyTRAC locked into jobs in the past 24 hours.')
});
//---------------------------------END LOCKED COMMANDS----------------------

//---------------------------------START EASTER EGGS------------------------
bot.command('npmrunsetup', (ctx) => ctx.reply(
  'Erasing system.db...'
));






bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
