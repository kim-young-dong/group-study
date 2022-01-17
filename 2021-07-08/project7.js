function newChat() {
  let ampm = chance.ampm();
  let time = chance.hour() + ':' + chance.minute();
  if (ampm == 'am') {
    time = '오전 ' + time;
  } else {
    time = '오후 ' + time;
  }
  let ul = document.querySelector('ul');
  let list = document.createElement('li');

  let aside = document.createElement('aside');
  let span = document.createElement('span');
  span.innerHTML = 'DIO '
  let small = document.createElement('small');
  small.innerHTML = time;
  aside.append(span, small);

  let paragraph = chance.paragraph();

  let p = document.createElement('p');
  p.innerHTML = paragraph;

  list.append(aside, p);

  ul.append(list);

  scrollBottom();

}
// setInterval(newChat, 5000);

function sendMessage() {

  let chatText = document.querySelector('textarea').value;

  if (chatText.trim() != '') {
    let ampm = chance.ampm();
    let time = chance.hour() + ':' + chance.minute();
    if (ampm == 'am') {
      time = '오전 ' + time;
    } else {
      time = '오후 ' + time;
    }
    let ul = document.querySelector('ul');
    let list = document.createElement('li');
    list.className = 'mine'

    let aside = document.createElement('aside');
    let span = document.createElement('span');
    span.innerHTML = 'DIO '
    let small = document.createElement('small');
    small.innerHTML = time;
    aside.append(span, small);

    let p = document.createElement('p');
    p.innerHTML = chatText;

    list.append(aside, p);

    ul.append(list);

    document.querySelector('textarea').value = '';
    scrollBottom();
  }
}
function enterkey() {
  if (event.key == 'Enter') {
    if (!event.shiftKey) {
      sendMessage();
    }
  }
}




function scrollBottom() {
  window.scrollTo(0, document.body.scrollHeight);
}

function changeName() {
  prompt('닉네임을 무엇으로 변경하시겠습니까?');
}