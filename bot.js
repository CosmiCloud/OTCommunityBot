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
    }
}

//Bot Commands
bot.command('bOThelp', (ctx) => ctx.reply(
  'b-OT Commands:'+os.EOL+
  '/nodehelp'+os.EOL+
  '/activejobs'+os.EOL+
  '/jobs'+os.EOL+
  '/ethjobs'+os.EOL+
  '/xdaijobs'+os.EOL+
  '/polyjobs'
));

//Node help
bot.command('nodehelp', (ctx) => ctx.reply(
  'OT-Hub: https://othub.origin-trail.network/dashboard'+os.EOL+
  'Discord Support: https://discord.gg/QCb3hqa4'+os.EOL+
  'Start A New Node: otnode.com'+os.EOL+
  'Im a neglectful node runner: https://github.com/calr0x/OT-Settings/blob/main/space-maker.sh'+os.EOL+
  'Support Email: tech@origin-trail.com'
));

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

//Easter Eggs
bot.command('npmrunsetup', (ctx) => ctx.reply(
  'Erasing system.db...'
));






bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
