import yargs from 'yargs'
import { hideBin}  from 'yargs/helpers'
import { initRepo } from './controller/init.js';
import { add } from './controller/add.js'
import { commit } from './controller/commit.js'
import { revert } from './controller/revert.js';
import  { push as pushRepo } from './controller/push.js';
import { pull as pullRepo } from './controller/pull.js';

yargs(hideBin(process.argv))
.command('init',"Create an empty Git repository or reinitialize an existing one",{},initRepo)
.command('add <file>',"Add file contents to the index",(yargs)=>{
    yargs.positional("file",{
        describe:"File to be added",
        type:'string'
    }
    )
},add)
.command('commit <message>',"Commit the changes",(yargs)=>{
    yargs.positional("message",{
        describe:"Commit message",
        type:'string'
    })
},commit)
.command('revert <commitID',"Revert to previous commit",(yargs)=>{
    yargs.positional("commitID",{
        describe:"Commit ID to revert to",
        type:'string'
    })
},revert)
.command('push',"Push commits to remote repository",{},pushRepo)
.command('pull',"Pull commits from remote repository",{},pullRepo)
.demandCommand(1, "You need at least one command")
.help().argv;           
