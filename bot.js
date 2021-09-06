require('dotenv').config();
const os = require('os');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const { Telegraf, session, Scenes, Markup, BaseScene, Stage } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);
bot.use(session({ ttl: 10 }))

module.exports={
    activejobs: async function jobs(){
      try {
        var jobs = "sudo curl -s https://v5api.othub.info/api/home/HomeV3 | jq '.All.ActiveJobs'"
        var jobs = await exec(jobs);
        return jobs.stdout;
      }catch(e){
        console.log(e)
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
    jobs: async function jobs(){
      try {
        var jobs = 'sudo curl -X GET "https://v5api.othub.info/api/jobs/jobcreatedcountinperiod?timePeriod=hours&time=24" -H  "accept: text/plain"'
        var jobs = await exec(jobs);
        return jobs.stdout;
      }catch(e){
        console.log(e)
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
    ethjobs: async function jobs(){
      try {
        var jobs = 'sudo curl -X GET "https://v5api.othub.info/api/jobs/jobcreatedcountinperiod?timePeriod=hours&time=24&blockchainID=1" -H  "accept: text/plain"'
        var jobs = await exec(jobs);
        return jobs.stdout;
      }catch(e){
        console.log(e)
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
    xdaijobs: async function jobs(){
      try {
        var jobs = 'sudo curl -X GET "https://v5api.othub.info/api/jobs/jobcreatedcountinperiod?timePeriod=hours&time=24&blockchainID=2" -H  "accept: text/plain"'
        var jobs = await exec(jobs);
        return jobs.stdout;
      }catch(e){
        console.log(e)
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
    polyjobs: async function jobs(){
      try {
        var jobs = 'sudo curl -X GET "https://v5api.othub.info/api/jobs/jobcreatedcountinperiod?timePeriod=hours&time=24&blockchainID=3" -H  "accept: text/plain"'
        var jobs = await exec(jobs);
        return jobs.stdout;
      }catch(e){
        console.log(e)
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
    nodes: async function nodes(){
      try {
        var nodes = "sudo curl -s https://v5api.othub.info/api/home/HomeV3 | jq '.All.ActiveNodes'"
        var nodes = await exec(nodes);
        return nodes.stdout;
      }catch(e){
        console.log(e)
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
    polynodes: async function nodes(){
      try {
        var nodes = "sudo curl -s https://v5api.othub.info/api/home/HomeV3 | jq '.Blockchains[0].ActiveNodes'"
        var nodes = await exec(nodes);
        return nodes.stdout;
      }catch(e){
        console.log(e)
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
    xdainodes: async function nodes(){
      try {
        var nodes = "sudo curl -s https://v5api.othub.info/api/home/HomeV3 | jq '.Blockchains[1].ActiveNodes'"
        var nodes = await exec(nodes);
        return nodes.stdout;
      }catch(e){
        console.log(e)
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
    ethnodes: async function nodes(){
      try {
        var nodes = "sudo curl -s https://v5api.othub.info/api/home/HomeV3 | jq '.Blockchains[2].ActiveNodes'"
        var nodes = await exec(nodes);
        return nodes.stdout;
      }catch(e){
        console.log(e)
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
    payouts: async function payouts(){
      try {
        var payouts = "sudo curl -s https://v5api.othub.info/api/home/HomeV3 | jq '.All.TokensPaidout24H'"
        var payouts = await exec(payouts);
        return payouts.stdout;
      }catch(e){
        console.log(e)
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
    ethpayouts: async function payouts(){
      try {
        var payouts = "sudo curl -s https://v5api.othub.info/api/home/HomeV3 | jq '.Blockchains[2].TokensPaidout24H'"
        var payouts = await exec(payouts);
        return payouts.stdout;
      }catch(e){
        console.log(e)
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
    xdaipayouts: async function payouts(){
      try {
        var payouts = "sudo curl -s https://v5api.othub.info/api/home/HomeV3 | jq '.Blockchains[1].TokensPaidout24H'"
        var payouts = await exec(payouts);
        return payouts.stdout;
      }catch(e){
        console.log(e)
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
  polypayouts: async function payouts(){
      try {
        var payouts = "sudo curl -s https://v5api.othub.info/api/home/HomeV3 | jq '.Blockchains[0].TokensPaidout24H'"
        var payouts = await exec(payouts);
        return payouts.stdout;
      }catch(e){
        console.log(e)
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
  staked: async function staked(){
      try {
        var staked = "sudo curl -s https://v5api.othub.info/api/home/HomeV3 | jq '.All.StakedTokens'"
        var staked = await exec(staked);
        return staked.stdout;
      }catch(e){
        console.log(e)
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
  ethstaked: async function staked(){
      try {
        var staked = "sudo curl -s https://v5api.othub.info/api/home/HomeV3 | jq '.Blockchains[2].StakedTokens'"
        var staked = await exec(staked);
        return staked.stdout;
      }catch(e){
        console.log(e)
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
  xdaistaked: async function staked(){
      try {
        var staked = "sudo curl -s https://v5api.othub.info/api/home/HomeV3 | jq '.Blockchains[1].StakedTokens'"
        var staked = await exec(staked);
        return staked.stdout;
      }catch(e){
        console.log(e)
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
  polystaked: async function staked(){
      try {
        var staked = "sudo curl -s https://v5api.othub.info/api/home/HomeV3 | jq '.Blockchains[0].StakedTokens'"
        var staked = await exec(staked);
        return staked.stdout;
      }catch(e){
        console.log(e)
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
  locked: async function locked(){
      try {
        var locked = "sudo curl -s https://v5api.othub.info/api/home/HomeV3 | jq '.All.TokensLocked24H'"
        var locked = await exec(locked);
        return locked.stdout;
      }catch(e){
        console.log(e)
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
  ethlocked: async function locked(){
      try {
        var locked = "sudo curl -s https://v5api.othub.info/api/home/HomeV3 | jq '.Blockchains[2].TokensLocked24H' "
        var locked = await exec(locked);
        return locked.stdout;
      }catch(e){
        console.log(e)
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
  xdailocked: async function locked(){
      try {
        var locked = "sudo curl -s https://v5api.othub.info/api/home/HomeV3 | jq '.Blockchains[1].TokensLocked24H' "
        var locked = await exec(locked);
        return locked.stdout;
      }catch(e){
        console.log(e)
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    },
  polylocked: async function locked(){
      try {
        var locked = "sudo curl -s https://v5api.othub.info/api/home/HomeV3 | jq '.Blockchains[0].TokensLocked24H' "
        var locked = await exec(locked);
        return locked.stdout;
      }catch(e){
        console.log(e)
        return'I wasnt able to find the jobs... Lets blame Calvin!';
      }
    }
}

bot.command('bothelp', ctx => {
  try{
    return ctx.reply(
      'b-OT Commands:'+os.EOL+
      '/setnodeid'+os.EOL+
      '/nodehelp'+os.EOL+
      '/backup'+os.EOL+
      '/freespace'+os.EOL+
      '/dockerless'+os.EOL+
      '/multinode'+os.EOL+
      '/jobs'+os.EOL+
      '/activejobs'+os.EOL+
      '/nodes'+os.EOL+
      '/staked'+os.EOL+
      '/locked'+os.EOL+
      '/payouts'
    )
  }catch(e){
    console.log(e)
    return ctx.reply('I dont feel so good...')
  }
});

bot.command('nodehelp', ctx => {
  try{
    return ctx.reply(
      'OT-Hub: https://othub.origin-trail.network/dashboard'+os.EOL+
      'Discord Support: https://discord.gg/QCb3hqa4'+os.EOL+
      'Start A New Node: otnode.com'+os.EOL+
      'Support Email: tech@origin-trail.com'
    )
  }catch(e){
    console.log(e)
    return ctx.reply('I dont feel so good...')
  }
});

bot.command('backup', ctx => {
  try{
    return ctx.reply(
      'Please visit this link to see how to back your node up: https://www.otnode.com/maintenance/node-backup'+os.EOL+
      'Thanks Millian!'
    )
  }catch(e){
    console.log(e)
    return ctx.reply('I dont feel so good...')
  }
});

bot.command('freespace', ctx => {
  try{
    return ctx.reply(
      'Please visit this link to see how to back your node up: https://www.otnode.com//node-space-management'+os.EOL+
      'You can also try running the below commands to free space.'+os.EOL+
      'wget https://raw.githubusercontent.com/calr0x/OT-Settings/main/space-maker.sh'+os.EOL+
      'chmod +x space-maker.sh'+os.EOL+
      './space-maker.sh'+os.EOL+
      'Thanks Millian and Calvin!'
    )
  }catch(e){
    console.log(e)
    ctx.reply('I dont feel so good...')
  }
});

bot.command('dockerless', ctx => {
  try{
    return ctx.reply(
      'Sometimes running your node in docker has its draw backs. Below is a community developed way of running without docker.'+os.EOL+
      'https://github.com/calr0x/OT-DockSucker'+os.EOL+
      'Thanks Calvin!'
    )
  }catch(e){
    console.log(e)
    return ctx.reply('I dont feel so good...')
  }
});

bot.command('multinode', ctx => {
  try{
    return ctx.reply(
      'You may decide you want to run multiple nodes on the same server. This is a more advanced way to run nodes with its own risks involved. Noobs stay away.'+os.EOL+
      'https://github.com/calr0x/OT-2Nodes1Server'+os.EOL+
      'Thanks Calvin and BRX!'
    )
  }catch(e){
    console.log(e)
    return ctx.reply('I dont feel so good...')
  }
});
//---------------------------------END HELP COMMANDS--------------------------

//----------------START MY NODE COMMANDS--------------------------------------
bot.command('/mynodeid', ctx => {
  try{
    return ctx.reply('Your node ID is '+ctx.session.node_id+'.')
  }catch(e){
    console.log(e)
    return ctx.reply('I wasnt able to find your node ID.')
  }
});

bot.command('/setnodeid', ctx => {
  try{
    if(!ctx.session.step) ctx.session = {}
    ctx.session.step = 'node_id'
    return ctx.reply('What is your node ID?')
  }catch(e){
    console.log(e)
    return ctx.reply('Im not accepting any new IDs right now.')
  }
});

bot.command('/mynodestats', async (ctx) => {
  try{
    var dh_info = "sudo curl -s https://v5api.othub.info/api/nodes/DataHolder/"+ctx.session.node_id
    var dh_info = await exec(dh_info);
    var dh_info = JSON.parse(dh_info.stdout);
    var blockchains = ''
    var chain_count  = Object.keys(dh_info.Identities).length;

      for(var i = 0; i < chain_count; i++) {
        var obj = Object.entries(dh_info.Identities)[i];
        var obj = obj[1];
        var blockchains = blockchains+obj.BlockchainName+' '
      }

      var total_jobs = parseInt(dh_info.TotalWonOffers);
      var active_jobs = parseInt(dh_info.TotalActiveOffers);
      var staked_tokens = parseInt(dh_info.StakeTokens);
      var locked_tokens = parseInt(dh_info.StakeReservedTokens);
      var paidout_tokens = parseInt(dh_info.PaidTokens);
      var total_litigations = parseInt(dh_info.LitigationCount);

    return ctx.replyWithMarkdownV2(
      '*Stats for Node:* '+ctx.session.node_id+os.EOL+
      '*Blockchains:* '+blockchains+os.EOL+
      '*Total Jobs:* '+total_jobs+os.EOL+
      '*Active Jobs:* '+active_jobs+os.EOL+
      '*Staked Tokens:* '+staked_tokens+os.EOL+
      '*Locked Tokens:* '+locked_tokens+os.EOL+
      '*Paidout Tokens:* '+paidout_tokens+os.EOL+
      '*Total Litigations:* '+total_litigations
    );
  }catch(e){
    console.log(e)
    ctx.reply('I wasnt able to retrieve your node stats.')
  }
});
//-----------------END MY NODE COMMANDS---------------------------------------

//---------------------------------START JOB COMMANDS-------------------------
//active jobs
bot.command('activejobs', async (ctx) => {
  try{
    const jobs = await module.exports.activejobs();
    const tjobs = jobs.slice(0,-1);
    await ctx.reply('There are '+tjobs+' active jobs.')
  }catch(e){
    console.log(e)
    return ctx.reply('I wasnt able to retrieve active jobs.')
  }
});

//all jobs in last 24h
bot.command('jobs', async (ctx) => {
  try{
    const jobs = await module.exports.jobs();
    await ctx.reply('There have been '+jobs+' jobs in the past 24 hours.')
  }catch(e){
    console.log(e)
    return ctx.reply('I dont feel so good...')
  }
});

//all eth jobs in last 24h
bot.command('ethjobs', async (ctx) => {
  try{
    const jobs = await module.exports.ethjobs();
    await ctx.reply('There have been '+jobs+' ethereum jobs in the past 24 hours.')
  }catch(e){
    console.log(e)
    return ctx.reply('I dont feel so good...')
  }
});

//all xdai jobs in last 24h
bot.command('xdaijobs', async (ctx) => {
  try{
    const jobs = await module.exports.xdaijobs();
    await ctx.reply('There have been '+jobs+' xdai jobs in the past 24 hours.')
  }catch(e){
    console.log(e)
    return ctx.reply('I dont feel so good...')
  }
});

//all  polygon jobs in last 24h
bot.command('polyjobs', async (ctx) => {
  try{
    const jobs = await module.exports.polyjobs();
    await ctx.reply('There have been '+jobs+' polygon jobs in the past 24 hours.')
  }catch(e){
    console.log(e)
    return ctx.reply('I dont feel so good...')
  }
});

bot.command('dotjobs', async (ctx) => {
  try{
    return ctx.reply('You have just delayed the Polkadot integration by 3 weeks.')
  }catch(e){
    console.log(e)
    return ctx.reply('I dont feel so good...')
  }
});
//---------------------------------END JOB COMMANDS-------------------------

//---------------------------------START NODES COMMANDS---------------------
bot.command('nodes', async (ctx) => {
  try{
    const nodes = await module.exports.nodes();
    const tnodes = nodes.slice(0,-1);
    await ctx.reply('There are '+tnodes+' active nodes(identities) on the ODN. ')
  }catch(e){
    console.log(e)
    return ctx.reply('I dont feel so good...')
  }
});

bot.command('ethnodes', async (ctx) => {
  try{
    const nodes = await module.exports.ethnodes();
    const tnodes = nodes.slice(0,-1);
    await ctx.reply('There are '+tnodes+' active eth nodes(identities) on the ODN. ')
  }catch(e){
    console.log(e)
    return ctx.reply('I dont feel so good...')
  }
});

bot.command('xdainodes', async (ctx) => {
  try{
    const nodes = await module.exports.xdainodes();
    const tnodes = nodes.slice(0,-1);
    await ctx.reply('There are '+tnodes+' active xdai nodes(identities) on the ODN. ')
  }catch(e){
    console.log(e)
    return ctx.reply('I dont feel so good...')
  }
});

bot.command('polynodes', async (ctx) => {
  try{
    const nodes = await module.exports.polynodes();
    const tnodes = nodes.slice(0,-1);
    await ctx.reply('There are '+tnodes+' active polygon nodes(identities) on the ODN. ')
  }catch(e){
    console.log(e)
    return ctx.reply('I dont feel so good...')
  }
});
//---------------------------------END NODES COMMANDS-----------------------

//---------------------------------START PAYOUT COMMANDS--------------------
bot.command('payouts', async (ctx) => {
  try{
    const payouts = await module.exports.payouts();
    const tpayouts = payouts.slice(0,-1);
    const pay_num = parseInt(tpayouts);
    await ctx.reply('There has been '+pay_num+' TRAC paidout in the last 24 hours. ')
  }catch(e){
    console.log(e)
    return ctx.reply('I dont feel so good...')
  }
});

bot.command('ethpayouts', async (ctx) => {
  try{
    const payouts = await module.exports.ethpayouts();
    const tpayouts = payouts.slice(0,-1);
    const pay_num = parseInt(tpayouts);
    await ctx.reply('There has been '+pay_num+' ethTRAC paidout in the last 24 hours. ')
  }catch(e){
    console.log(e)
    return ctx.reply('I dont feel so good...')
  }
});

bot.command('xdaipayouts', async (ctx) => {
  try{
    const payouts = await module.exports.xdaipayouts();
    const tpayouts = payouts.slice(0,-1);
    const pay_num = parseInt(tpayouts);
    await ctx.reply('There has been '+pay_num+' xTRAC paidout in the last 24 hours. ')
  }catch(e){
    console.log(e)
    return ctx.reply('I dont feel so good...')
  }
});

bot.command('polypayouts', async (ctx) => {
  try{
    const payouts = await module.exports.polypayouts();
    const tpayouts = payouts.slice(0,-1);
    const pay_num = parseInt(tpayouts);
    await ctx.reply('There has been '+pay_num+' polyTRAC paidout in the last 24 hours. ')
  }catch(e){
    console.log(e)
    return ctx.reply('I dont feel so good...')
  }
});
//---------------------------------END PAYOUT COMMANDS----------------------

//---------------------------------START STAKED COMMANDS--------------------
bot.command('staked', async (ctx) => {
  try{
    const staked = await module.exports.staked();
    const tstaked = staked.slice(0,-1);
    const staked_num = parseInt(tstaked);
    await ctx.reply('There is '+staked_num+' TRAC staked on the ODN. ')
  }catch(e){
    console.log(e)
    return ctx.reply('I dont feel so good...')
  }
});

bot.command('ethstaked', async (ctx) => {
  try{
    const staked = await module.exports.ethstaked();
    const tstaked = staked.slice(0,-1);
    const staked_num = parseInt(tstaked);
    await ctx.reply('There is '+staked_num+' ethTRAC staked on the ODN. ')
  }catch(e){
    console.log(e)
    return ctx.reply('I dont feel so good...')
  }
});

bot.command('xdaistaked', async (ctx) => {
  try{
    const staked = await module.exports.xdaistaked();
    const tstaked = staked.slice(0,-1);
    const staked_num = parseInt(tstaked);
    await ctx.reply('There is '+staked_num+' xTRAC staked on the ODN. ')
  }catch(e){
    console.log(e)
    return ctx.reply('I dont feel so good...')
  }
});

bot.command('polystaked', async (ctx) => {
  try{
    const staked = await module.exports.polystaked();
    const tstaked = staked.slice(0,-1);
    const staked_num = parseInt(tstaked);
    await ctx.reply('There is '+staked_num+' polyTRAC staked on the ODN. ')
  }catch(e){
    console.log(e)
    return ctx.reply('I dont feel so good...')
  }
});
//---------------------------------END STAKED COMMANDS----------------------

//---------------------------------START LOCKED COMMANDS--------------------
bot.command('locked', async (ctx) => {
  try{
    const locked = await module.exports.locked();
    const tlocked = locked.slice(0,-1);
    const locked_num = parseInt(tlocked);
    await ctx.reply('There has been '+locked_num+' TRAC locked into jobs in the past 24 hours.')
  }catch(e){
    console.log(e)
    return ctx.reply('I dont feel so good...')
  }
});

bot.command('ethlocked', async (ctx) => {
  try{
    const locked = await module.exports.ethlocked();
    const tlocked = locked.slice(0,-1);
    const locked_num = parseInt(tlocked);
    await ctx.reply('There has been '+locked_num+' ethTRAC locked into jobs in the past 24 hours.')
  }catch(e){
    console.log(e)
    return ctx.reply('I dont feel so good...')
  }
});

bot.command('xdailocked', async (ctx) => {
  try{
    const locked = await module.exports.xdailocked();
    const tlocked = locked.slice(0,-1);
    const locked_num = parseInt(tlocked);
    await ctx.reply('There has been '+locked_num+' xTRAC locked into jobs in the past 24 hours.')
  }catch(e){
    console.log(e)
  }
});

bot.command('polylocked', async (ctx) => {
  try{
    const locked = await module.exports.polylocked();
    const tlocked = locked.slice(0,-1);
    const locked_num = parseInt(tlocked);
    await ctx.reply('There has been '+locked_num+' polyTRAC locked into jobs in the past 24 hours.')
  }catch(e){
    console.log(e)
  }
});
//---------------------------------END LOCKED COMMANDS----------------------

//---------------------------------START EASTER EGGS------------------------
bot.command('watsurid', ctx => {
  try{
    ctx.reply(
      'What is your node ID?'
    )
  }catch(e){
    console.log(e)
    return ctx.reply('I dont feel so good...')
  }
});

bot.command('npmrunsetup', ctx => {
  try{
    ctx.reply(
      'Erasing system.db...'
    )
  }catch(e){
    console.log(e)
    return ctx.reply('I dont feel so good...')
  }
});

bot.command('doiknowu', ctx => {
  try{
    ctx.reply(
      'Unknown Command'
    )
  }catch(e){
    console.log(e)
    return ctx.reply('I dont feel so good...')
  }
});

bot.on('text', ctx => {
  try{
    switch(ctx.session.step){
      case 'node_id':
        ctx.session.node_id = ctx.message.text
        break
      default:
        return //ctx.reply('Unknown command')
    }

    ctx.reply('Node ID has been set to '+ctx.session.node_id+'. You can run /mynodestats to get your stats!')

    ctx.session.step = undefined
  }catch(e){
    console.log(e)
    ctx.reply('I wasnt able to do this for you. What are you?..')
  }
});

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
