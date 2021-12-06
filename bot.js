require('dotenv').config();
const os = require('os');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const date = require('date-and-time');
const { Telegraf, session, Scenes, Markup, BaseScene, Stage } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);
const sqlite3 = require('sqlite3').verbose();
const cron = require('node-cron');

try{

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
          var jobs = 'sudo curl -X GET "https://v5api.othub.info/api/jobs/jobcreatedcountinperiod?timePeriod=hours&time=24&onlyFinalizedJobs=true" -H  "accept: text/plain"'
          var jobs = await exec(jobs);
          return jobs.stdout;
        }catch(e){
          console.log(e)
          return'I wasnt able to find the jobs... Lets blame Calvin!';
        }
      },
      ethjobs: async function jobs(){
        try {
          var jobs = 'sudo curl -X GET "https://v5api.othub.info/api/jobs/jobcreatedcountinperiod?timePeriod=hours&time=24&blockchainID=1&onlyFinalizedJobs=true" -H  "accept: text/plain"'
          var jobs = await exec(jobs);
          return jobs.stdout;
        }catch(e){
          console.log(e)
          return'I wasnt able to find the jobs... Lets blame Calvin!';
        }
      },
      xdaijobs: async function jobs(){
        try {
          var jobs = 'sudo curl -X GET "https://v5api.othub.info/api/jobs/jobcreatedcountinperiod?timePeriod=hours&time=24&blockchainID=2&onlyFinalizedJobs=true" -H  "accept: text/plain"'
          var jobs = await exec(jobs);
          return jobs.stdout;
        }catch(e){
          console.log(e)
          return'I wasnt able to find the jobs... Lets blame Calvin!';
        }
      },
      polyjobs: async function jobs(){
        try {
          var jobs = 'sudo curl -X GET "https://v5api.othub.info/api/jobs/jobcreatedcountinperiod?timePeriod=hours&time=24&blockchainID=3&onlyFinalizedJobs=true" -H  "accept: text/plain"'
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
       },
     avg_reward: async function avg_reward(){
         try {
           var avg_reward = "sudo curl -s https://v5api.othub.info/api/home/HomeV3 | jq '.All.JobsReward24H'"
           var avg_reward = await exec(avg_reward);
           return avg_reward.stdout;
         }catch(e){
           console.log(e)
           return'I wasnt able to find the jobs... Lets blame Calvin!';
         }
        },
      trac_usd_price: async function trac_usd_price(){
          try {
            var trac_usd_price = "sudo curl -s https://v5api.othub.info/api/home/HomeV3 | jq '.PriceUsd'"
            var trac_usd_price = await exec(trac_usd_price);
            return trac_usd_price.stdout;
          }catch(e){
            console.log(e)
            return'I wasnt able to find the jobs... Lets blame Calvin!';
          }
         }
  }

  cron.schedule('0 12 * * *', async (ctx) => {
    try{
      console.log('Posting ODN stat updates');
      var trac_usd_price = await module.exports.trac_usd_price();
      var trac_usd_price = Number(trac_usd_price);
      var trac_usd_price = trac_usd_price.toFixed(2);

      var payouts = await module.exports.payouts();
      var payouts = Number(payouts);
      var payouts = payouts.toFixed(2);

      var usdpayouts = payouts * trac_usd_price
      var usdpayouts = Number(usdpayouts);
      var usdpayouts = usdpayouts.toFixed(2);
      var date = new Date().toISOString().slice(0, 10)

      const nodes = await module.exports.nodes();
      const tnodes = nodes.slice(0,-1);

      const ethjobs = await module.exports.ethjobs();
      const xdaijobs = await module.exports.xdaijobs();
      const polyjobs = await module.exports.polyjobs();

      const ethnodes = await module.exports.ethnodes();
      const xdainodes = await module.exports.xdainodes();
      const polynodes = await module.exports.polynodes();

      const tethnodes = ethnodes.slice(0,-1);
      const txdainodes = xdainodes.slice(0,-1);
      const tpolynodes = polynodes.slice(0,-1);

      await bot.telegram.sendMessage('-543322141',
        date+' - Knowledge Graph Daily Stats:'+os.EOL+os.EOL+
        payouts+' TRAC ($'+usdpayouts+' USD) paid out!'+os.EOL+os.EOL+
        'Jobs by Network:'+os.EOL+
        'Ethereum: '+ethjobs+os.EOL+
        'xDai: '+xdaijobs+os.EOL+
        'Polygon: '+polyjobs+os.EOL+os.EOL+
        'Active Nodes(IDs) by Network:'+os.EOL+
        'Ethereum: '+tethnodes+os.EOL+
        'xDai: '+txdainodes+os.EOL+
        'Polygon: '+tpolynodes
      )

      await bot.telegram.sendMessage('-1001399729852',
        date+' - Knowledge Graph Daily Stats:'+os.EOL+os.EOL+
        payouts+' TRAC ($'+usdpayouts+' USD) paid out!'+os.EOL+os.EOL+
        'Jobs by Network:'+os.EOL+
        'Ethereum: '+ethjobs+os.EOL+
        'xDai: '+xdaijobs+os.EOL+
        'Polygon: '+polyjobs+os.EOL+os.EOL+
        'Active Nodes(IDs) by Network:'+os.EOL+
        'Ethereum: '+tethnodes+os.EOL+
        'xDai: '+txdainodes+os.EOL+
        'Polygon: '+tpolynodes
      )

      await bot.telegram.sendMessage('-1001384216088',
        date+' - Knowledge Graph Daily Stats:'+os.EOL+os.EOL+
        payouts+' TRAC ($'+usdpayouts+' USD) paid out!'+os.EOL+os.EOL+
        'Jobs by Network:'+os.EOL+
        'Ethereum: '+ethjobs+os.EOL+
        'xDai: '+xdaijobs+os.EOL+
        'Polygon: '+polyjobs+os.EOL+os.EOL+
        'Active Nodes(IDs) by Network:'+os.EOL+
        'Ethereum: '+tethnodes+os.EOL+
        'xDai: '+txdainodes+os.EOL+
        'Polygon: '+tpolynodes
      )
    }catch(e){
      console.log(e);
    }
  });

  bot.command('bothelp', async (ctx) => {
    try{
      await ctx.deleteMessage()
      return ctx.reply(
        'b-OT Commands(3min cooldown):'+os.EOL+
        '/createprofile - DM ME!'+os.EOL+
        '/myprofile'+os.EOL+
        '/nodehelp'+os.EOL+
        '/profit'+os.EOL+
        '/backup'+os.EOL+
        '/freespace'+os.EOL+
        '/dockerless'+os.EOL+
        '/overlay'+os.EOL+
        '/pruning'+os.EOL+
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

  bot.command('nodehelp', async (ctx) => {
    try{
      await ctx.deleteMessage()
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

  bot.command('backup', async (ctx) => {
    try{
      await ctx.deleteMessage()
      return ctx.reply(
        'Please visit this link to see how to back your node up: https://www.otnode.com/maintenance/node-backup'+os.EOL+
        'Thanks Millian and contributors!'
      )
    }catch(e){
      console.log(e)
      return ctx.reply('I dont feel so good...')
    }
  });

  bot.command('freespace', async (ctx) => {
    try{
      await ctx.deleteMessage()
      return ctx.reply(
        'Please visit this link to see how to potentially clear up space on your node: https://www.otnode.com/maintenance/node-space-management'+os.EOL+
        'You can also try running the below commands to free space.'+os.EOL+
        'wget https://raw.githubusercontent.com/calr0x/OT-Settings/main/space-maker.sh'+os.EOL+
        'chmod +x space-maker.sh'+os.EOL+
        './space-maker.sh'+os.EOL+
        'Thanks Satan!'
      )
    }catch(e){
      console.log(e)
      ctx.reply('I dont feel so good...')
    }
  });

  bot.command('dockerless', async (ctx) => {
    try{
      await ctx.deleteMessage()
      return ctx.reply(
        'Sometimes running your node in docker has its draw backs. Below is a community developed way of running without docker.'+os.EOL+
        'github.com/calr0x/OT-DockSucker'+os.EOL+
        'Thanks Calvin!'
      )
    }catch(e){
      console.log(e)
      return ctx.reply('I dont feel so good...')
    }
  });

  bot.command('overlay', async (ctx) => {
    try{
      await ctx.deleteMessage()
      return ctx.reply(
        'The Cosmic Overlay is a gui/interface built for docker nodes. You can find it here: https://github.com/CosmiCloud/Cosmic_OverlayV2'
      )
    }catch(e){
      console.log(e)
      return ctx.reply('I dont feel so good...')
    }
  });

  bot.command('pruning', async (ctx) => {
    try{
      await ctx.deleteMessage()
      return ctx.reply(
        'If you would like to easily add data pruning to your node config, you can run the following command on your server:'+os.EOL+
        'wget https://raw.githubusercontent.com/calr0x/OT-Settings/main/data/add-pruning.sh && chmod +x add-pruning.sh && ./add-pruning.sh'
      )
    }catch(e){
      console.log(e)
      return ctx.reply('I dont feel so good...')
    }
  });
  //---------------------------------END HELP COMMANDS--------------------------

  //----------------START MY NODE COMMANDS--------------------------------------
  bot.command('/createprofile', async (ctx) => {
    try{
      const db = new sqlite3.Database(__dirname+'/bot.db');
      console.log(ctx.message.chat)
          if(ctx.message.chat.type == 'private'){
          await db.exec("INSERT INTO user_header VALUES ('"+ctx.message.from.id+"','"+ctx.message.from.username+"',NULL,NULL,NULL,NULL)", async function(err, row){
            if(err){
              console.log(err)
              await ctx.reply("@"+ctx.message.from.username+", You already have a profile.")

            }else{
              await db.get("SELECT chat_id, user_name FROM user_header WHERE chat_id ="+ctx.message.from.id, async function(err, row) {
                if(err){

                  await ctx.reply("Weird, I wasnt able to find your profile.")
                }else{

                  await ctx.reply("@"+ctx.message.from.username+", I have created a profile for "+ctx.message.from.username+" - "+ctx.message.from.id+". You can add nodes to your profile with /addnodeid")
                }
              });
            }
          });

          await db.close();
        }else{
          await ctx.reply("@"+ctx.message.from.username+", I only like to do profile stuff in private ;). DM me to create a profile and add node ids.")
          await ctx.deleteMessage()
        }
    }catch(e){
      console.log(e)
      return ctx.reply('Failed to create profile')
    }

  });

  bot.command('/deleteprofile', async (ctx) => {
    try{
      if(ctx.message.chat.type == 'private'){
      const db = new sqlite3.Database(__dirname+'/bot.db');

      await db.exec("DELETE FROM user_header WHERE chat_id ='"+ctx.message.from.id+"'");
      await db.exec("DELETE FROM node_header WHERE chat_id ='"+ctx.message.from.id+"'");

      await db.close();

      await ctx.reply("@"+ctx.message.from.username+", I have deleted your profile.")
    }else{
      await ctx.deleteMessage()
    }
    }catch(e){
      console.log(e)
      return ctx.reply('@'+ctx.message.from.username+', I wasnt able to delete your profile.')
    }
  });

  bot.command('/myprofile', async (ctx) => {
    try{
      const db = new sqlite3.Database(__dirname+'/bot.db');

      await db.all("SELECT uh.chat_id, uh.user_name, uh.last_profile_req_date, nh.node_id FROM user_header uh INNER JOIN node_header nh ON nh.chat_id = uh.chat_id WHERE uh.chat_id ='"+ctx.message.from.id+"' LIMIT 50", async function(err, row) {
        if(row != ''){
          if(row[0].last_profile_req_date){
            var date1 = new Date(row[0].last_profile_req_date);
            var date2 = new Date();
          }else{
            var date1 = 1
            var date2 = 99999999999999999999
          }
        }else{
          return ctx.reply('@'+ctx.message.from.username+', Please create a profile by DMing me /createprofile')
        }

          var diffTime = Math.abs(date2 - date1);
          var date1 = Math.abs(date1);
          var three_min = 3*60*1000
          if(diffTime > three_min){
            var total_jobs = 0
            var active_jobs = 0
            var staked_tokens = 0
            var locked_tokens = 0
            var paidout_tokens = 0
            var total_litigations = 0

            for(var i = 0; i < (row.length); i++) {
              var node_id = row[i].node_id
              var dh_info = "sudo curl -s https://v5api.othub.info/api/nodes/DataHolder/"+node_id
              var dh_info = await exec(dh_info);
              var dh_info = JSON.parse(dh_info.stdout);

              var total_jobs = total_jobs + parseInt(dh_info.TotalWonOffers);
              var active_jobs = active_jobs + parseInt(dh_info.TotalActiveOffers);
              var staked_tokens = staked_tokens + parseInt(dh_info.StakeTokens);
              var locked_tokens =  locked_tokens + parseInt(dh_info.StakeReservedTokens);
              var paidout_tokens =  paidout_tokens + parseInt(dh_info.PaidTokens);
              var total_litigations = total_litigations + parseInt(dh_info.LitigationCount);
            }

            await ctx.replyWithMarkdownV2(
            '@'+ctx.message.from.username+os.EOL+
            '*Node Count:* '+row.length+os.EOL+
            '*Total Jobs:* '+total_jobs+os.EOL+
            '*Active Jobs:* '+active_jobs+os.EOL+
            '*Staked Tokens:* '+staked_tokens+os.EOL+
            '*Locked Tokens:* '+locked_tokens+os.EOL+
            '*Paidout Tokens:* '+paidout_tokens+os.EOL+
            '*Total Litigations:* '+total_litigations
            )

            var time_stamp = new Date();
            const db = new sqlite3.Database(__dirname+'/bot.db');
            await db.exec("UPDATE user_header set last_profile_req_date ='"+time_stamp+"'", async function(err, row){
              if(err){
                console.log(err)
              }else{
                console.log('insert timestamp into db')
              }
            });
            await db.close();
            await ctx.deleteMessage()
          }else{
            if(ctx.message.chat.type =='private'){
              var remaining = three_min - diffTime
              var remaining = remaining / 1000 / 60
              var remaining = parseInt(remaining);

              await ctx.reply("@"+ctx.message.from.username+", You need to wait another "+remaining+" minutes before asking for your profile.")
            }else{
              var remaining = three_min - diffTime
              console.log(remaining)
              await ctx.deleteMessage()
            }
          }

      });
      await db.close();

    }catch(e){
      console.log(e)
      return ctx.reply('I wasnt able to pull your profile.')
    }
  });

  bot.command('/mynodeids', async (ctx) => {
    try{
      if(ctx.message.chat.type == 'private'){
      const db = new sqlite3.Database(__dirname+'/bot.db');

      await db.all("SELECT node_id FROM node_header WHERE chat_id ='"+ctx.message.from.id+"'", async function(err, row) {
          if(err){
            console.log(err)
            console.log('Error checking to see if nodes exists.')
          }else{
            if(row !=""){
              console.log('Nodes Exists')
              var node_list = ""
              for(var i = 0; i < (row.length); i++) {
                var node_id = row[i].node_id
                var node_list = node_list+row[i].node_id+' '
                console.log(node_list)
              }
              await ctx.reply(
              "@"+ctx.message.from.username+", I have the following nodes on record for your profile: "+os.EOL+
              node_list)
            }else{
              return ctx.reply('@'+ctx.message.from.username+', I dont have any nodes on record for you. Please add some with /addnodeid')
            }
          }

      });
      await db.close();

    }else{
      await ctx.deleteMessage()
    }
    }catch(e){
      console.log(e)
      return ctx.reply('I wasnt able to find your node ID.')
    }
  });

  bot.command('/addnodeid', async (ctx) => {
    try{
      if(ctx.message.chat.type == 'private'){
      const db = new sqlite3.Database(__dirname+'/bot.db');
      if(!ctx.session.step) ctx.session = {}
      ctx.session.step = 'node_id'
      await db.get("SELECT user_name FROM user_header WHERE chat_id ='"+ctx.message.from.id+"'", async function(err, row) {
        if(err){
          console.log(err)
          console.log('Error checking to see if user exists.')
        }else{
          if(row){
            console.log('User Exists.')
            return ctx.reply('@'+row.user_name+', What node ID would you like to add to your profile?')
          }else{
            return ctx.reply('@'+row.user_name+', I need to create a profile for you first. Please create one with /createprofile')
          }
        }
      });
      await db.close();
    }else{
      await ctx.deleteMessage()
    }
    }catch(e){
      console.log(e)
      return ctx.reply('Im not accepting any new IDs right now.')
    }
  });


  //-----------------END MY NODE COMMANDS---------------------------------------
  bot.command('profit', async (ctx) => {
    try{
      const db = new sqlite3.Database(__dirname+'/bot.db');

      await db.all("SELECT date_last_used FROM command_history WHERE command = 'profit'", async function(err, row) {
        if(row != ''){
          if(row[0].date_last_used){
            var date1 = new Date(row[0].date_last_used);
            var date2 = new Date();
          }else{
            var date1 = 1
            var date2 = 99999999999999999999
          }
        }else{
          var date1 = 1
          var date2 = 99999999999999999999
        }

          var diffTime = Math.abs(date2 - date1);
          var date1 = Math.abs(date1);
          var three_min = 1*60*1000
          if(diffTime > three_min && ctx.message.chat.type != 'private'){
      			//put command code here
            var messy = ctx.message.text
            var messy = messy.replace('/profit', '')

            if (messy == ''){
              var custom = 'no'
              var staked_trac = 3500
              var vps_cost_usd = 10
            }else{
              var custom = 'yes'
              var messy = messy.trim();

              var staked_trac = messy.substr(0,messy.indexOf(' '));
              if(isNaN(staked_trac) == true || staked_trac <= 3000 || staked_trac > 100000){
                try{
                  await ctx.reply('Please provide only staked amount and vps cost in that order separated by a space. Staked trac must be between 3000 and 100000.')
                  await ctx.deleteMessage()
                  return;
                }catch(e){
                  console.log('didnt delete message probs not admin')
                }
                return;
              }

              var vps_cost_usd = messy.substr(messy.indexOf(' ')+1);
              if(isNaN(vps_cost_usd) == true || vps_cost_usd > 100000){
                try{
                  await ctx.reply('Please provide only staked amount and vps cost in that order separated by a space. VPS cost cannot exceed 100000.')
                  await ctx.deleteMessage()
                  return;
                }catch(e){
                  console.log('didnt delete message probs not admin')
                }
                return;
              }
            }

              var jobs24h = await module.exports.jobs();
              var jobs24h = jobs24h * 3

              var nodes = await module.exports.xdainodes();
  				    var nodes = nodes.slice(0,-1);
              var nodes = Number(nodes);

              var jobs_per_node = jobs24h / nodes

              var avg_reward = await module.exports.avg_reward();
              var avg_reward = Number(avg_reward);

              var trac_usd_price = await module.exports.trac_usd_price();
              var trac_usd_price = Number(trac_usd_price);

              var avg_monthly_reward = jobs_per_node * 30 * avg_reward
              var avg_usd_reward =  avg_monthly_reward * trac_usd_price
              var usd_after_vps = avg_usd_reward - vps_cost_usd

              var usd_staked = staked_trac * trac_usd_price
              var apy = usd_after_vps * 12 / usd_staked
              var apy = apy.toFixed(3);
              var apy = apy * 100

              if(custom == 'no'){
                await ctx.reply("The current profitability of staking on the ODN is "+apy+"% APY assuming you are staking 3500 trac and are paying $10/month for your vps. This number can be inaccurate based on job holding time and how many jobs there have been in the past week.");
              }else{
                await ctx.reply("The current profitability of staking on the ODN is "+apy+"% APY assuming you are staking "+staked_trac+" trac and are paying $"+vps_cost_usd+"/month for your vps. This number can be inaccurate based on job holding time and how many jobs there have been in the past week.");
              }

            var time_stamp = new Date();
            const db = new sqlite3.Database(__dirname+'/bot.db');
            await db.exec("REPLACE INTO command_history VALUES ('profit','"+time_stamp+"')", async function(err, row){
              if(err){
                console.log(err)
              }else{
                console.log('insert timestamp into db')
              }
            });
            await db.close();

            try{
              await ctx.deleteMessage()
            }catch(e){
              console.log('didnt delete message probs not admin')
            }

          }else if(ctx.message.chat.type == 'private'){
			      await ctx.reply("@"+ctx.message.from.username+", This is a public command only.")
          }else{
            var remaining = three_min - diffTime
            console.log(remaining+' remaining')
            try{
              await ctx.deleteMessage()
            }catch(e){
              console.log('didnt delete message probs not admin')
            }
          }
      });
      await db.close();
    }catch(e){
      console.log(e)
      return ctx.reply('I wasnt able to run that command.')
    }
  });

  //---------------------------------START JOB COMMANDS-------------------------
  //active jobs
  bot.command('activejobs', async (ctx) => {
    try{
      const db = new sqlite3.Database(__dirname+'/bot.db');

      await db.all("SELECT date_last_used FROM command_history WHERE command = 'activejobs'", async function(err, row) {
        if(row != ''){
          if(row[0].date_last_used){
            var date1 = new Date(row[0].date_last_used);
            var date2 = new Date();
          }else{
            var date1 = 1
            var date2 = 99999999999999999999
          }
        }else{
          var date1 = 1
          var date2 = 99999999999999999999
        }

          var diffTime = Math.abs(date2 - date1);
          var date1 = Math.abs(date1);
          var three_min = 3*60*1000
          if(diffTime > three_min && ctx.message.chat.type != 'private'){
      			//put command code here
      			const jobs = await module.exports.activejobs();
      			const tjobs = jobs.slice(0,-1);
      			await ctx.reply('There are '+tjobs+' active jobs.')

            var time_stamp = new Date();
            const db = new sqlite3.Database(__dirname+'/bot.db');
            await db.exec("REPLACE INTO command_history VALUES ('activejobs','"+time_stamp+"')", async function(err, row){
              if(err){
                console.log(err)
              }else{
                console.log('insert timestamp into db')
              }
            });
            await db.close();
            await ctx.deleteMessage()
          }else if(ctx.message.chat.type == 'private'){
			      await ctx.reply("@"+ctx.message.from.username+", This is a public command only.")
          }else{
            var remaining = three_min - diffTime
            console.log(remaining+' remaining')
            await ctx.deleteMessage()
          }
      });
      await db.close();
    }catch(e){
      console.log(e)
      return ctx.reply('I wasnt able to run that command.')
    }
  });

  //all jobs in last 24h
  bot.command('jobs', async (ctx) => {
    try{
      const db = new sqlite3.Database(__dirname+'/bot.db');

      await db.all("SELECT date_last_used FROM command_history WHERE command = 'jobs'", async function(err, row) {
        if(row != ''){
          if(row[0].date_last_used){
            var date1 = new Date(row[0].date_last_used);
            var date2 = new Date();
          }else{
            var date1 = 1
            var date2 = 99999999999999999999
          }
        }else{
          var date1 = 1
          var date2 = 99999999999999999999
        }

          var diffTime = Math.abs(date2 - date1);
          var date1 = Math.abs(date1);
          var three_min = 3*60*1000
          if(diffTime > three_min && ctx.message.chat.type != 'private'){
      			//put command code here
      			const jobs = await module.exports.jobs();
				await ctx.reply('There have been '+jobs+' jobs in the past 24 hours.')

            var time_stamp = new Date();
            const db = new sqlite3.Database(__dirname+'/bot.db');
            await db.exec("REPLACE INTO command_history VALUES ('jobs','"+time_stamp+"')", async function(err, row){
              if(err){
                console.log(err)
              }else{
                console.log('insert timestamp into db')
              }
            });
            await db.close();
            await ctx.deleteMessage()
          }else if(ctx.message.chat.type == 'private'){
			      await ctx.reply("@"+ctx.message.from.username+", This is a public command only.")
          }else{
            var remaining = three_min - diffTime
            console.log(remaining+' remaining')
            await ctx.deleteMessage()
          }
      });
      await db.close();
    }catch(e){
      console.log(e)
      return ctx.reply('I wasnt able to run that command.')
    }
  });

  //all eth jobs in last 24h
  bot.command('ethjobs', async (ctx) => {
    try{
      const db = new sqlite3.Database(__dirname+'/bot.db');

      await db.all("SELECT date_last_used FROM command_history WHERE command = 'ethjobs'", async function(err, row) {
        if(row != ''){
          if(row[0].date_last_used){
            var date1 = new Date(row[0].date_last_used);
            var date2 = new Date();
          }else{
            var date1 = 1
            var date2 = 99999999999999999999
          }
        }else{
          var date1 = 1
          var date2 = 99999999999999999999
        }

          var diffTime = Math.abs(date2 - date1);
          var date1 = Math.abs(date1);
          var three_min = 3*60*1000
          if(diffTime > three_min && ctx.message.chat.type != 'private'){
      			//put command code here
      			const jobs = await module.exports.ethjobs();
				await ctx.reply('There have been '+jobs+' ethereum jobs in the past 24 hours.')

            var time_stamp = new Date();
            const db = new sqlite3.Database(__dirname+'/bot.db');
            await db.exec("REPLACE INTO command_history VALUES ('ethjobs','"+time_stamp+"')", async function(err, row){
              if(err){
                console.log(err)
              }else{
                console.log('insert timestamp into db')
              }
            });
            await db.close();
            await ctx.deleteMessage()
          }else if(ctx.message.chat.type == 'private'){
			      await ctx.reply("@"+ctx.message.from.username+", This is a public command only.")
          }else{
            var remaining = three_min - diffTime
            console.log(remaining+' remaining')
            await ctx.deleteMessage()
          }
      });
      await db.close();
    }catch(e){
      console.log(e)
      return ctx.reply('I wasnt able to run that command.')
    }
  });

  //all xdai jobs in last 24h
  bot.command('xdaijobs', async (ctx) => {
    try{
      const db = new sqlite3.Database(__dirname+'/bot.db');

      await db.all("SELECT date_last_used FROM command_history WHERE command = 'xdaijobs'", async function(err, row) {
        if(row != ''){
          if(row[0].date_last_used){
            var date1 = new Date(row[0].date_last_used);
            var date2 = new Date();
          }else{
            var date1 = 1
            var date2 = 99999999999999999999
          }
        }else{
          var date1 = 1
          var date2 = 99999999999999999999
        }

          var diffTime = Math.abs(date2 - date1);
          var date1 = Math.abs(date1);
          var three_min = 3*60*1000
          if(diffTime > three_min && ctx.message.chat.type != 'private'){
      			//put command code here
      			const jobs = await module.exports.xdaijobs();
				await ctx.reply('There have been '+jobs+' xdai jobs in the past 24 hours.')

            var time_stamp = new Date();
            const db = new sqlite3.Database(__dirname+'/bot.db');
            await db.exec("REPLACE INTO command_history VALUES ('xdaijobs','"+time_stamp+"')", async function(err, row){
              if(err){
                console.log(err)
              }else{
                console.log('insert timestamp into db')
              }
            });
            await db.close();
            await ctx.deleteMessage()
          }else if(ctx.message.chat.type == 'private'){
			      await ctx.reply("@"+ctx.message.from.username+", This is a public command only.")
          }else{
            var remaining = three_min - diffTime
            console.log(remaining+' remaining')
            await ctx.deleteMessage()
          }
      });
      await db.close();
    }catch(e){
      console.log(e)
      return ctx.reply('I wasnt able to run that command.')
    }
  });

  //all  polygon jobs in last 24h
  bot.command('polyjobs', async (ctx) => {
    try{
      const db = new sqlite3.Database(__dirname+'/bot.db');

      await db.all("SELECT date_last_used FROM command_history WHERE command = 'polyjobs'", async function(err, row) {
        if(row != ''){
          if(row[0].date_last_used){
            var date1 = new Date(row[0].date_last_used);
            var date2 = new Date();
          }else{
            var date1 = 1
            var date2 = 99999999999999999999
          }
        }else{
          var date1 = 1
          var date2 = 99999999999999999999
        }

          var diffTime = Math.abs(date2 - date1);
          var date1 = Math.abs(date1);
          var three_min = 3*60*1000
          if(diffTime > three_min && ctx.message.chat.type != 'private'){
      			//put command code here
      			const jobs = await module.exports.polyjobs();
				await ctx.reply('There have been '+jobs+' polygon jobs in the past 24 hours.')

            var time_stamp = new Date();
            const db = new sqlite3.Database(__dirname+'/bot.db');
            await db.exec("REPLACE INTO command_history VALUES ('polyjobs','"+time_stamp+"')", async function(err, row){
              if(err){
                console.log(err)
              }else{
                console.log('insert timestamp into db')
              }
            });
            await db.close();
            await ctx.deleteMessage()
          }else if(ctx.message.chat.type == 'private'){
			      await ctx.reply("@"+ctx.message.from.username+", This is a public command only.")
          }else{
            var remaining = three_min - diffTime
            console.log(remaining+' remaining')
            await ctx.deleteMessage()
          }
      });
      await db.close();
    }catch(e){
      console.log(e)
      return ctx.reply('I wasnt able to run that command.')
    }
  });

  bot.command('dotjobs', async (ctx) => {
    try{
      const db = new sqlite3.Database(__dirname+'/bot.db');

      await db.all("SELECT date_last_used FROM command_history WHERE command = 'dotjobs'", async function(err, row) {
        if(row != ''){
          if(row[0].date_last_used){
            var date1 = new Date(row[0].date_last_used);
            var date2 = new Date();
          }else{
            var date1 = 1
            var date2 = 99999999999999999999
          }
        }else{
          var date1 = 1
          var date2 = 99999999999999999999
        }

          var diffTime = Math.abs(date2 - date1);
          var date1 = Math.abs(date1);
          var three_min = 3*60*1000
          if(diffTime > three_min && ctx.message.chat.type != 'private'){
      			//put command code here
      			return ctx.reply('You have just delayed the Polkadot integration by 3 weeks.')

            var time_stamp = new Date();
            const db = new sqlite3.Database(__dirname+'/bot.db');
            await db.exec("REPLACE INTO command_history VALUES ('dotjobs','"+time_stamp+"')", async function(err, row){
              if(err){
                console.log(err)
              }else{
                console.log('insert timestamp into db')
              }
            });
            await db.close();
            await ctx.deleteMessage()
          }else if(ctx.message.chat.type == 'private'){
			      await ctx.reply("@"+ctx.message.from.username+", This is a public command only.")
          }else{
            var remaining = three_min - diffTime
            console.log(remaining+' remaining')
            await ctx.deleteMessage()
          }
      });
      await db.close();
    }catch(e){
      console.log(e)
      return ctx.reply('I wasnt able to run that command.')
    }
  });
  //---------------------------------END JOB COMMANDS-------------------------

  //---------------------------------START NODES COMMANDS---------------------
  bot.command('nodes', async (ctx) => {
    try{
      const db = new sqlite3.Database(__dirname+'/bot.db');

      await db.all("SELECT date_last_used FROM command_history WHERE command = 'nodes'", async function(err, row) {
        if(row != ''){
          if(row[0].date_last_used){
            var date1 = new Date(row[0].date_last_used);
            var date2 = new Date();
          }else{
            var date1 = 1
            var date2 = 99999999999999999999
          }
        }else{
          var date1 = 1
          var date2 = 99999999999999999999
        }

          var diffTime = Math.abs(date2 - date1);
          var date1 = Math.abs(date1);
          var three_min = 3*60*1000
          if(diffTime > three_min && ctx.message.chat.type != 'private'){
      			//put command code here
      			const nodes = await module.exports.nodes();
				  const tnodes = nodes.slice(0,-1);
				  await ctx.reply('There are '+tnodes+' active nodes(identities) on the ODN. ')

            var time_stamp = new Date();
            const db = new sqlite3.Database(__dirname+'/bot.db');
            await db.exec("REPLACE INTO command_history VALUES ('nodes','"+time_stamp+"')", async function(err, row){
              if(err){
                console.log(err)
              }else{
                console.log('insert timestamp into db')
              }
            });
            await db.close();
            await ctx.deleteMessage()
          }else if(ctx.message.chat.type == 'private'){
			      await ctx.reply("@"+ctx.message.from.username+", This is a public command only.")
          }else{
            var remaining = three_min - diffTime
            console.log(remaining+' remaining')
            await ctx.deleteMessage()
          }
      });
      await db.close();
    }catch(e){
      console.log(e)
      return ctx.reply('I wasnt able to run that command.')
    }
  });

  bot.command('ethnodes', async (ctx) => {
    try{
      const db = new sqlite3.Database(__dirname+'/bot.db');

      await db.all("SELECT date_last_used FROM command_history WHERE command = 'ethnodes'", async function(err, row) {
        if(row != ''){
          if(row[0].date_last_used){
            var date1 = new Date(row[0].date_last_used);
            var date2 = new Date();
          }else{
            var date1 = 1
            var date2 = 99999999999999999999
          }
        }else{
          var date1 = 1
          var date2 = 99999999999999999999
        }

          var diffTime = Math.abs(date2 - date1);
          var date1 = Math.abs(date1);
          var three_min = 3*60*1000
          if(diffTime > three_min && ctx.message.chat.type != 'private'){
      			//put command code here
      			const nodes = await module.exports.ethnodes();
				  const tnodes = nodes.slice(0,-1);
				  await ctx.reply('There are '+tnodes+' active eth nodes(identities) on the ODN. ')

            var time_stamp = new Date();
            const db = new sqlite3.Database(__dirname+'/bot.db');
            await db.exec("REPLACE INTO command_history VALUES ('ethnodes','"+time_stamp+"')", async function(err, row){
              if(err){
                console.log(err)
              }else{
                console.log('insert timestamp into db')
              }
            });
            await db.close();
            await ctx.deleteMessage()
          }else if(ctx.message.chat.type == 'private'){
			      await ctx.reply("@"+ctx.message.from.username+", This is a public command only.")
          }else{
            var remaining = three_min - diffTime
            console.log(remaining+' remaining')
            await ctx.deleteMessage()
          }
      });
      await db.close();
    }catch(e){
      console.log(e)
      return ctx.reply('I wasnt able to run that command.')
    }
  });

  bot.command('xdainodes', async (ctx) => {
    try{
      const db = new sqlite3.Database(__dirname+'/bot.db');

      await db.all("SELECT date_last_used FROM command_history WHERE command = 'xdainodes'", async function(err, row) {
        if(row != ''){
          if(row[0].date_last_used){
            var date1 = new Date(row[0].date_last_used);
            var date2 = new Date();
          }else{
            var date1 = 1
            var date2 = 99999999999999999999
          }
        }else{
          var date1 = 1
          var date2 = 99999999999999999999
        }

          var diffTime = Math.abs(date2 - date1);
          var date1 = Math.abs(date1);
          var three_min = 3*60*1000
          if(diffTime > three_min && ctx.message.chat.type != 'private'){
      			//put command code here
      			const nodes = await module.exports.xdainodes();
				  const tnodes = nodes.slice(0,-1);
				  await ctx.reply('There are '+tnodes+' active xdai nodes(identities) on the ODN. ')

            var time_stamp = new Date();
            const db = new sqlite3.Database(__dirname+'/bot.db');
            await db.exec("REPLACE INTO command_history VALUES ('xdainodes','"+time_stamp+"')", async function(err, row){
              if(err){
                console.log(err)
              }else{
                console.log('insert timestamp into db')
              }
            });
            await db.close();
            await ctx.deleteMessage()
          }else if(ctx.message.chat.type == 'private'){
			      await ctx.reply("@"+ctx.message.from.username+", This is a public command only.")
          }else{
            var remaining = three_min - diffTime
            console.log(remaining+' remaining')
            await ctx.deleteMessage()
          }
      });
      await db.close();
    }catch(e){
      console.log(e)
      return ctx.reply('I wasnt able to run that command.')
    }
  });

  bot.command('polynodes', async (ctx) => {
    try{
      const db = new sqlite3.Database(__dirname+'/bot.db');

      await db.all("SELECT date_last_used FROM command_history WHERE command = 'polynodes'", async function(err, row) {
        if(row != ''){
          if(row[0].date_last_used){
            var date1 = new Date(row[0].date_last_used);
            var date2 = new Date();
          }else{
            var date1 = 1
            var date2 = 99999999999999999999
          }
        }else{
          var date1 = 1
          var date2 = 99999999999999999999
        }

          var diffTime = Math.abs(date2 - date1);
          var date1 = Math.abs(date1);
          var three_min = 3*60*1000
          if(diffTime > three_min && ctx.message.chat.type != 'private'){
      			//put command code here
      			const nodes = await module.exports.polynodes();
				  const tnodes = nodes.slice(0,-1);
				  await ctx.reply('There are '+tnodes+' active polygon nodes(identities) on the ODN. ')

            var time_stamp = new Date();
            const db = new sqlite3.Database(__dirname+'/bot.db');
            await db.exec("REPLACE INTO command_history VALUES ('polynodes','"+time_stamp+"')", async function(err, row){
              if(err){
                console.log(err)
              }else{
                console.log('insert timestamp into db')
              }
            });
            await db.close();
            await ctx.deleteMessage()
          }else if(ctx.message.chat.type == 'private'){
			      await ctx.reply("@"+ctx.message.from.username+", This is a public command only.")
          }else{
            var remaining = three_min - diffTime
            console.log(remaining+' remaining')
            await ctx.deleteMessage()
          }
      });
      await db.close();
    }catch(e){
      console.log(e)
      return ctx.reply('I wasnt able to run that command.')
    }
  });
  //---------------------------------END NODES COMMANDS-----------------------

  //---------------------------------START PAYOUT COMMANDS--------------------
  bot.command('payouts', async (ctx) => {
    try{
      const db = new sqlite3.Database(__dirname+'/bot.db');

      await db.all("SELECT date_last_used FROM command_history WHERE command = 'payouts'", async function(err, row) {
        if(row != ''){
          if(row[0].date_last_used){
            var date1 = new Date(row[0].date_last_used);
            var date2 = new Date();
          }else{
            var date1 = 1
            var date2 = 99999999999999999999
          }
        }else{
          var date1 = 1
          var date2 = 99999999999999999999
        }

          var diffTime = Math.abs(date2 - date1);
          var date1 = Math.abs(date1);
          var three_min = 3*60*1000
          if(diffTime > three_min && ctx.message.chat.type != 'private'){
      			//put command code here
      			const payouts = await module.exports.payouts();
				  const tpayouts = payouts.slice(0,-1);
				  const pay_num = parseInt(tpayouts);
				  await ctx.reply('There has been '+pay_num+' TRAC paidout in the last 24 hours. ')

            var time_stamp = new Date();
            const db = new sqlite3.Database(__dirname+'/bot.db');
            await db.exec("REPLACE INTO command_history VALUES ('payouts','"+time_stamp+"')", async function(err, row){
              if(err){
                console.log(err)
              }else{
                console.log('insert timestamp into db')
              }
            });
            await db.close();
            await ctx.deleteMessage()
          }else if(ctx.message.chat.type == 'private'){
			      await ctx.reply("@"+ctx.message.from.username+", This is a public command only.")
          }else{
            var remaining = three_min - diffTime
            console.log(remaining+' remaining')
            await ctx.deleteMessage()
          }
      });
      await db.close();
    }catch(e){
      console.log(e)
      return ctx.reply('I wasnt able to run that command.')
    }
  });

  bot.command('ethpayouts', async (ctx) => {
    try{
      const db = new sqlite3.Database(__dirname+'/bot.db');

      await db.all("SELECT date_last_used FROM command_history WHERE command = 'ethpayouts'", async function(err, row) {
        if(row != ''){
          if(row[0].date_last_used){
            var date1 = new Date(row[0].date_last_used);
            var date2 = new Date();
          }else{
            var date1 = 1
            var date2 = 99999999999999999999
          }
        }else{
          var date1 = 1
          var date2 = 99999999999999999999
        }

          var diffTime = Math.abs(date2 - date1);
          var date1 = Math.abs(date1);
          var three_min = 3*60*1000
          if(diffTime > three_min && ctx.message.chat.type != 'private'){
      			//put command code here
      			const payouts = await module.exports.ethpayouts();
				  const tpayouts = payouts.slice(0,-1);
				  const pay_num = parseInt(tpayouts);
				  await ctx.reply('There has been '+pay_num+' ethTRAC paidout in the last 24 hours. ')

            var time_stamp = new Date();
            const db = new sqlite3.Database(__dirname+'/bot.db');
            await db.exec("REPLACE INTO command_history VALUES ('ethpayouts','"+time_stamp+"')", async function(err, row){
              if(err){
                console.log(err)
              }else{
                console.log('insert timestamp into db')
              }
            });
            await db.close();
            await ctx.deleteMessage()
          }else if(ctx.message.chat.type == 'private'){
			      await ctx.reply("@"+ctx.message.from.username+", This is a public command only.")
          }else{
            var remaining = three_min - diffTime
            console.log(remaining+' remaining')
            await ctx.deleteMessage()
          }
      });
      await db.close();
    }catch(e){
      console.log(e)
      return ctx.reply('I wasnt able to run that command.')
    }
  });

  bot.command('xdaipayouts', async (ctx) => {
    try{
      const db = new sqlite3.Database(__dirname+'/bot.db');

      await db.all("SELECT date_last_used FROM command_history WHERE command = 'xdaipayouts'", async function(err, row) {
        if(row != ''){
          if(row[0].date_last_used){
            var date1 = new Date(row[0].date_last_used);
            var date2 = new Date();
          }else{
            var date1 = 1
            var date2 = 99999999999999999999
          }
        }else{
          var date1 = 1
          var date2 = 99999999999999999999
        }

          var diffTime = Math.abs(date2 - date1);
          var date1 = Math.abs(date1);
          var three_min = 3*60*1000
          if(diffTime > three_min && ctx.message.chat.type != 'private'){
      			//put command code here
      			const payouts = await module.exports.xdaipayouts();
				  const tpayouts = payouts.slice(0,-1);
				  const pay_num = parseInt(tpayouts);
				  await ctx.reply('There has been '+pay_num+' xTRAC paidout in the last 24 hours. ')

            var time_stamp = new Date();
            const db = new sqlite3.Database(__dirname+'/bot.db');
            await db.exec("REPLACE INTO command_history VALUES ('xdaipayouts','"+time_stamp+"')", async function(err, row){
              if(err){
                console.log(err)
              }else{
                console.log('insert timestamp into db')
              }
            });
            await db.close();
            await ctx.deleteMessage()
          }else if(ctx.message.chat.type == 'private'){
			      await ctx.reply("@"+ctx.message.from.username+", This is a public command only.")
          }else{
            var remaining = three_min - diffTime
            console.log(remaining+' remaining')
            await ctx.deleteMessage()
          }
      });
      await db.close();
    }catch(e){
      console.log(e)
      return ctx.reply('I wasnt able to run that command.')
    }
  });

  bot.command('polypayouts', async (ctx) => {
    try{
      const db = new sqlite3.Database(__dirname+'/bot.db');

      await db.all("SELECT date_last_used FROM command_history WHERE command = 'polypayouts'", async function(err, row) {
        if(row != ''){
          if(row[0].date_last_used){
            var date1 = new Date(row[0].date_last_used);
            var date2 = new Date();
          }else{
            var date1 = 1
            var date2 = 99999999999999999999
          }
        }else{
          var date1 = 1
          var date2 = 99999999999999999999
        }

          var diffTime = Math.abs(date2 - date1);
          var date1 = Math.abs(date1);
          var three_min = 3*60*1000
          if(diffTime > three_min && ctx.message.chat.type != 'private'){
      			//put command code here
      			const payouts = await module.exports.polypayouts();
				  const tpayouts = payouts.slice(0,-1);
				  const pay_num = parseInt(tpayouts);
				  await ctx.reply('There has been '+pay_num+' polyTRAC paidout in the last 24 hours. ')

            var time_stamp = new Date();
            const db = new sqlite3.Database(__dirname+'/bot.db');
            await db.exec("REPLACE INTO command_history VALUES ('polypayouts','"+time_stamp+"')", async function(err, row){
              if(err){
                console.log(err)
              }else{
                console.log('insert timestamp into db')
              }
            });
            await db.close();
            await ctx.deleteMessage()
          }else if(ctx.message.chat.type == 'private'){
			      await ctx.reply("@"+ctx.message.from.username+", This is a public command only.")
          }else{
            var remaining = three_min - diffTime
            console.log(remaining+' remaining')
            await ctx.deleteMessage()
          }
      });
      await db.close();
    }catch(e){
      console.log(e)
      return ctx.reply('I wasnt able to run that command.')
    }
  });
  //---------------------------------END PAYOUT COMMANDS----------------------

  //---------------------------------START STAKED COMMANDS--------------------
  bot.command('staked', async (ctx) => {
    try{
      const db = new sqlite3.Database(__dirname+'/bot.db');

      await db.all("SELECT date_last_used FROM command_history WHERE command = 'staked'", async function(err, row) {
        if(row != ''){
          if(row[0].date_last_used){
            var date1 = new Date(row[0].date_last_used);
            var date2 = new Date();
          }else{
            var date1 = 1
            var date2 = 99999999999999999999
          }
        }else{
          var date1 = 1
          var date2 = 99999999999999999999
        }

          var diffTime = Math.abs(date2 - date1);
          var date1 = Math.abs(date1);
          var three_min = 3*60*1000
          if(diffTime > three_min && ctx.message.chat.type != 'private'){
      			//put command code here
      			const staked = await module.exports.staked();
				  const tstaked = staked.slice(0,-1);
				  const staked_num = parseInt(tstaked);
				  await ctx.reply('There is '+staked_num+' TRAC staked on the ODN. ')

            var time_stamp = new Date();
            const db = new sqlite3.Database(__dirname+'/bot.db');
            await db.exec("REPLACE INTO command_history VALUES ('staked','"+time_stamp+"')", async function(err, row){
              if(err){
                console.log(err)
              }else{
                console.log('insert timestamp into db')
              }
            });
            await db.close();
            await ctx.deleteMessage()
          }else if(ctx.message.chat.type == 'private'){
			      await ctx.reply("@"+ctx.message.from.username+", This is a public command only.")
          }else{
            var remaining = three_min - diffTime
            console.log(remaining+' remaining')
            await ctx.deleteMessage()
          }
      });
      await db.close();
    }catch(e){
      console.log(e)
      return ctx.reply('I wasnt able to run that command.')
    }
  });

  bot.command('ethstaked', async (ctx) => {
    try{
      const db = new sqlite3.Database(__dirname+'/bot.db');

      await db.all("SELECT date_last_used FROM command_history WHERE command = 'ethstaked'", async function(err, row) {
        if(row != ''){
          if(row[0].date_last_used){
            var date1 = new Date(row[0].date_last_used);
            var date2 = new Date();
          }else{
            var date1 = 1
            var date2 = 99999999999999999999
          }
        }else{
          var date1 = 1
          var date2 = 99999999999999999999
        }

          var diffTime = Math.abs(date2 - date1);
          var date1 = Math.abs(date1);
          var three_min = 3*60*1000
          if(diffTime > three_min && ctx.message.chat.type != 'private'){
      			//put command code here
      			const staked = await module.exports.ethstaked();
				  const tstaked = staked.slice(0,-1);
				  const staked_num = parseInt(tstaked);
				  await ctx.reply('There is '+staked_num+' ethTRAC staked on the ODN. ')

            var time_stamp = new Date();
            const db = new sqlite3.Database(__dirname+'/bot.db');
            await db.exec("REPLACE INTO command_history VALUES ('ethstaked','"+time_stamp+"')", async function(err, row){
              if(err){
                console.log(err)
              }else{
                console.log('insert timestamp into db')
              }
            });
            await db.close();
            await ctx.deleteMessage()
          }else if(ctx.message.chat.type == 'private'){
			      await ctx.reply("@"+ctx.message.from.username+", This is a public command only.")
          }else{
            var remaining = three_min - diffTime
            console.log(remaining+' remaining')
            await ctx.deleteMessage()
          }
      });
      await db.close();
    }catch(e){
      console.log(e)
      return ctx.reply('I wasnt able to run that command.')
    }
  });

  bot.command('xdaistaked', async (ctx) => {
    try{
      const db = new sqlite3.Database(__dirname+'/bot.db');

      await db.all("SELECT date_last_used FROM command_history WHERE command = 'xdaistaked'", async function(err, row) {
        if(row != ''){
          if(row[0].date_last_used){
            var date1 = new Date(row[0].date_last_used);
            var date2 = new Date();
          }else{
            var date1 = 1
            var date2 = 99999999999999999999
          }
        }else{
          var date1 = 1
          var date2 = 99999999999999999999
        }

          var diffTime = Math.abs(date2 - date1);
          var date1 = Math.abs(date1);
          var three_min = 3*60*1000
          if(diffTime > three_min && ctx.message.chat.type != 'private'){
      			//put command code here
      			const staked = await module.exports.xdaistaked();
				  const tstaked = staked.slice(0,-1);
				  const staked_num = parseInt(tstaked);
				  await ctx.reply('There is '+staked_num+' xTRAC staked on the ODN. ')

            var time_stamp = new Date();
            const db = new sqlite3.Database(__dirname+'/bot.db');
            await db.exec("REPLACE INTO command_history VALUES ('xdaistaked','"+time_stamp+"')", async function(err, row){
              if(err){
                console.log(err)
              }else{
                console.log('insert timestamp into db')
              }
            });
            await db.close();
            await ctx.deleteMessage()
          }else if(ctx.message.chat.type == 'private'){
			      await ctx.reply("@"+ctx.message.from.username+", This is a public command only.")
          }else{
            var remaining = three_min - diffTime
            console.log(remaining+' remaining')
            await ctx.deleteMessage()
          }
      });
      await db.close();
    }catch(e){
      console.log(e)
      return ctx.reply('I wasnt able to run that command.')
    }
  });

  bot.command('polystaked', async (ctx) => {
    try{
      const db = new sqlite3.Database(__dirname+'/bot.db');

      await db.all("SELECT date_last_used FROM command_history WHERE command = 'polystaked'", async function(err, row) {
        if(row != ''){
          if(row[0].date_last_used){
            var date1 = new Date(row[0].date_last_used);
            var date2 = new Date();
          }else{
            var date1 = 1
            var date2 = 99999999999999999999
          }
        }else{
          var date1 = 1
          var date2 = 99999999999999999999
        }

          var diffTime = Math.abs(date2 - date1);
          var date1 = Math.abs(date1);
          var three_min = 3*60*1000
          if(diffTime > three_min && ctx.message.chat.type != 'private'){
      			//put command code here
      			const staked = await module.exports.polystaked();
				  const tstaked = staked.slice(0,-1);
				  const staked_num = parseInt(tstaked);
				  await ctx.reply('There is '+staked_num+' polyTRAC staked on the ODN. ')

            var time_stamp = new Date();
            const db = new sqlite3.Database(__dirname+'/bot.db');
            await db.exec("REPLACE INTO command_history VALUES ('polystaked','"+time_stamp+"')", async function(err, row){
              if(err){
                console.log(err)
              }else{
                console.log('insert timestamp into db')
              }
            });
            await db.close();
            await ctx.deleteMessage()
          }else if(ctx.message.chat.type == 'private'){
			      await ctx.reply("@"+ctx.message.from.username+", This is a public command only.")
          }else{
            var remaining = three_min - diffTime
            console.log(remaining+' remaining')
            await ctx.deleteMessage()
          }
      });
      await db.close();
    }catch(e){
      console.log(e)
      return ctx.reply('I wasnt able to run that command.')
    }
  });
  //---------------------------------END STAKED COMMANDS----------------------

  //---------------------------------START LOCKED COMMANDS--------------------
  bot.command('locked', async (ctx) => {
    try{
      const db = new sqlite3.Database(__dirname+'/bot.db');

      await db.all("SELECT date_last_used FROM command_history WHERE command = 'locked'", async function(err, row) {
        if(row != ''){
          if(row[0].date_last_used){
            var date1 = new Date(row[0].date_last_used);
            var date2 = new Date();
          }else{
            var date1 = 1
            var date2 = 99999999999999999999
          }
        }else{
          var date1 = 1
          var date2 = 99999999999999999999
        }

          var diffTime = Math.abs(date2 - date1);
          var date1 = Math.abs(date1);
          var three_min = 3*60*1000
          if(diffTime > three_min && ctx.message.chat.type != 'private'){
      			//put command code here
      			const locked = await module.exports.locked();
				  const tlocked = locked.slice(0,-1);
				  const locked_num = parseInt(tlocked);
				  await ctx.reply('There has been '+locked_num+' TRAC locked into jobs in the past 24 hours.')

            var time_stamp = new Date();
            const db = new sqlite3.Database(__dirname+'/bot.db');
            await db.exec("REPLACE INTO command_history VALUES ('locked','"+time_stamp+"')", async function(err, row){
              if(err){
                console.log(err)
              }else{
                console.log('insert timestamp into db')
              }
            });
            await db.close();
            await ctx.deleteMessage()
          }else if(ctx.message.chat.type == 'private'){
			      await ctx.reply("@"+ctx.message.from.username+", This is a public command only.")
          }else{
            var remaining = three_min - diffTime
            console.log(remaining+' remaining')
            await ctx.deleteMessage()
          }
      });
      await db.close();
    }catch(e){
      console.log(e)
      return ctx.reply('I wasnt able to run that command.')
    }
  });

  bot.command('ethlocked', async (ctx) => {
    try{
      const db = new sqlite3.Database(__dirname+'/bot.db');

      await db.all("SELECT date_last_used FROM command_history WHERE command = 'ethlocked'", async function(err, row) {
        if(row != ''){
          if(row[0].date_last_used){
            var date1 = new Date(row[0].date_last_used);
            var date2 = new Date();
          }else{
            var date1 = 1
            var date2 = 99999999999999999999
          }
        }else{
          var date1 = 1
          var date2 = 99999999999999999999
        }

          var diffTime = Math.abs(date2 - date1);
          var date1 = Math.abs(date1);
          var three_min = 3*60*1000
          if(diffTime > three_min && ctx.message.chat.type != 'private'){
      			//put command code here
      			const locked = await module.exports.ethlocked();
				  const tlocked = locked.slice(0,-1);
				  const locked_num = parseInt(tlocked);
				  await ctx.reply('There has been '+locked_num+' ethTRAC locked into jobs in the past 24 hours.')

            var time_stamp = new Date();
            const db = new sqlite3.Database(__dirname+'/bot.db');
            await db.exec("REPLACE INTO command_history VALUES ('ethlocked','"+time_stamp+"')", async function(err, row){
              if(err){
                console.log(err)
              }else{
                console.log('insert timestamp into db')
              }
            });
            await db.close();
            await ctx.deleteMessage()
          }else if(ctx.message.chat.type == 'private'){
			      await ctx.reply("@"+ctx.message.from.username+", This is a public command only.")
          }else{
            var remaining = three_min - diffTime
            console.log(remaining+' remaining')
            await ctx.deleteMessage()
          }
      });
      await db.close();
    }catch(e){
      console.log(e)
      return ctx.reply('I wasnt able to run that command.')
    }
  });

  bot.command('xdailocked', async (ctx) => {
    try{
      const db = new sqlite3.Database(__dirname+'/bot.db');

      await db.all("SELECT date_last_used FROM command_history WHERE command = 'xdailocked'", async function(err, row) {
        if(row != ''){
          if(row[0].date_last_used){
            var date1 = new Date(row[0].date_last_used);
            var date2 = new Date();
          }else{
            var date1 = 1
            var date2 = 99999999999999999999
          }
        }else{
          var date1 = 1
          var date2 = 99999999999999999999
        }

          var diffTime = Math.abs(date2 - date1);
          var date1 = Math.abs(date1);
          var three_min = 3*60*1000
          if(diffTime > three_min && ctx.message.chat.type != 'private'){
      			//put command code here
      			const locked = await module.exports.xdailocked();
				  const tlocked = locked.slice(0,-1);
				  const locked_num = parseInt(tlocked);
				  await ctx.reply('There has been '+locked_num+' xTRAC locked into jobs in the past 24 hours.')

            var time_stamp = new Date();
            const db = new sqlite3.Database(__dirname+'/bot.db');
            await db.exec("REPLACE INTO command_history VALUES ('xdailocked','"+time_stamp+"')", async function(err, row){
              if(err){
                console.log(err)
              }else{
                console.log('insert timestamp into db')
              }
            });
            await db.close();
            await ctx.deleteMessage()
          }else if(ctx.message.chat.type == 'private'){
			      await ctx.reply("@"+ctx.message.from.username+", This is a public command only.")
          }else{
            var remaining = three_min - diffTime
            console.log(remaining+' remaining')
            await ctx.deleteMessage()
          }
      });
      await db.close();
    }catch(e){
      console.log(e)
      return ctx.reply('I wasnt able to run that command.')
    }
  });

  bot.command('polylocked', async (ctx) => {
    try{
      const db = new sqlite3.Database(__dirname+'/bot.db');

      await db.all("SELECT date_last_used FROM command_history WHERE command = 'polylocked'", async function(err, row) {
        if(row != ''){
          if(row[0].date_last_used){
            var date1 = new Date(row[0].date_last_used);
            var date2 = new Date();
          }else{
            var date1 = 1
            var date2 = 99999999999999999999
          }
        }else{
          var date1 = 1
          var date2 = 99999999999999999999
        }

          var diffTime = Math.abs(date2 - date1);
          var date1 = Math.abs(date1);
          var three_min = 3*60*1000
          if(diffTime > three_min && ctx.message.chat.type != 'private'){
      			//put command code here
      			const locked = await module.exports.polylocked();
				  const tlocked = locked.slice(0,-1);
				  const locked_num = parseInt(tlocked);
				  await ctx.reply('There has been '+locked_num+' polyTRAC locked into jobs in the past 24 hours.')

            var time_stamp = new Date();
            const db = new sqlite3.Database(__dirname+'/bot.db');
            await db.exec("REPLACE INTO command_history VALUES ('polylocked','"+time_stamp+"')", async function(err, row){
              if(err){
                console.log(err)
              }else{
                console.log('insert timestamp into db')
              }
            });
            await db.close();
            await ctx.deleteMessage()
          }else if(ctx.message.chat.type == 'private'){
			      await ctx.reply("@"+ctx.message.from.username+", This is a public command only.")
          }else{
            var remaining = three_min - diffTime
            console.log(remaining+' remaining')
            await ctx.deleteMessage()
          }
      });
      await db.close();
    }catch(e){
      console.log(e)
      return ctx.reply('I wasnt able to run that command.')
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

  bot.on('text', async (ctx) => {
    try{
      if(ctx.message.chat.type = 'private'){
        switch(ctx.session.step){
              case 'node_id':
                try{
                  ctx.session.node_id = ctx.message.text
                  var dh_info = "sudo curl -s https://v5api.othub.info/api/nodes/DataHolder/"+ctx.session.node_id
                  var dh_info = await exec(dh_info);

                  if(dh_info.stdout){
                    console.log(ctx.message)
                    console.log(ctx.session.node_id)
                    const db = new sqlite3.Database(__dirname+'/bot.db');

                    await db.exec("INSERT INTO node_header VALUES ('"+ctx.message.from.id+"','"+ctx.session.node_id+"')");

                    await db.all("SELECT chat_id, node_id FROM node_header WHERE chat_id ='"+ctx.message.from.id+"'", async function(err, row) {
                      var row_count = row.length
                      await ctx.reply(
                        "@"+ctx.message.from.username+", I have added node "+ctx.session.node_id+" to your profile. You can run /myprofile to get your stats!")
                    });

                    console.log ('4')
                    await db.close();
                  }else{
                    await ctx.reply(
                      "@"+ctx.message.from.username+", that is not a valid node id.")
                  }

                }catch(e){
                  console.log(e)
                }
            break
              default:
                return //ctx.reply('Unknown command')
            }

            ctx.session.step = undefined
            console.log(ctx.session.step)
      }else{

      }

    }catch(e){
      console.log(e)
    }
  });

  bot.launch();

  // Enable graceful stop
  process.once('SIGINT', () => bot.stop('SIGINT'));
  process.once('SIGTERM', () => bot.stop('SIGTERM'));

}catch(e){
  console.log(e)
  console.log('BLAHRG')
}
