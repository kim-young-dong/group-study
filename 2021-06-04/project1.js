

const chance = new Chance();

function solution() {
  let arr = [];
  for (var i = 0; i < 1000; i++) {
    arr.push({
      name: chance.name(),
      birthday: chance.birthday({
        string: true,
        chaina: false
      }).split('/').reverse().join('-'),
      gender: chance.gender(),
      country: chance.country({
        full: true
      }),
      address: chance.address()
    })
  }
  let answer = arr.filter(el => {
    let year = el.birthday.split('-')[0];
    if (el.gender == 'Male' && year >= 1998) {
      return true;
    } else {
      return false;
    }
  });
  console.log(answer.length);
  return answer.length;
}
solution();