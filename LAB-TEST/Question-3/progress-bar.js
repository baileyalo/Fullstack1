//progress bar
var downloader = new ProgressBar ('[:bar]  :percent :etas', {total: 100, width:20, incomplete: chalk.bgRed(' '), complete: chalk.bgCyan(' ')})

const chalk = require('chalk');
const ProgressBar = require ('progress');

// will be called in app.js
let startProgress= ()=> {
    console.log(chalk.red('Download has started'))
    let timer= setInterval(() =>{

    

downloader.tick()

//clear interval when bar tick finish 
if (downloader.complete){
    clearInterval(timer)
    console.log(chalk.red('Download has completed'))
}
    }, 500)
}
    


// export function to app.js
export default startProgress;

