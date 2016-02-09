var readline = require('readline');
var week = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Set','Oct','Nov','Dec'];
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
cout=1;
var exam=function(){
var r = Math.floor(Math.random()*12);
rl.question(week[r] + "是幾月?", function(answer) {
   if(answer-1 ==r){console.log('[O] 恭喜答對'+'是'+answer+'月');}else{console.log('[X] 答錯! '+week[r]+'是'+(r+1)+'月'+' ，不是'+answer+'月')}
   console.log();
if(cout<100){exam();}else{rl.close();}
cout++;
});
}
exam();