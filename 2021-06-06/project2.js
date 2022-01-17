const Chance = require('chance');
let chance = new Chance();
let moment = require('moment');

function solution() {
  let answer = [];
  let date = [];
  let time = [];

  for (var i = 0; i < 100; i++) {
    date.push(
      chance.date({
        string: true,
        american: false
      }).split('/').reverse().join('-'))

    time.push(
      chance.hour({
        twentyfour: true
      }) + ':' + chance.minute());
  }

  for (var i = 0; i < 100; i++) {
    let daytime = date[i] + ' ' + time[i];
    answer.push(moment(daytime).format('YYYY년 MM월 DD일 HH시 mm분'));
  }
  console.log(answer);
}