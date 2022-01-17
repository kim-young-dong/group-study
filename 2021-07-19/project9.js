
let chatarea = document.getElementById('message');
chatarea.style.height = window.innerHeight - 150 + 'px';

let myName = 'DIO';


// 새로운 채팅
socket.on('message', message => {
  newChat(message);
});

function newChat(message) {
  let time = message.created;
  let user = message.userName

  let ul = document.querySelector('ul');
  let list = document.createElement('li');
  if (user == myName) {
    list.className = 'mine';
  }

  let aside = document.createElement('aside');
  let span = document.createElement('span');
  span.innerHTML = user + ' ';

  let small = document.createElement('small');
  small.innerHTML = time;
  aside.append(span, small);

  let paragraph = message.message;

  let p = document.createElement('p');
  p.innerHTML = paragraph;

  list.append(aside, p);

  ul.append(list);

  if ((chatarea.clientHeight + chatarea.scrollTop) >= chatarea.scrollHeight - 300) {
    scrollBottom();
  }
}

// 메시지 보내기
function sendMessage() {
  let chatText = document.querySelector('textarea').value;

  if (chatText.trim() != '') {
    socket.emit('message', {
      userName: myName,
      message: chatText
    });
    document.querySelector('textarea').value = '';
    scrollBottom()
  }
}
function enterkey() {
  if (event.key == 'Enter') {
    if (!event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  }
}

// 내려가기 버튼
let button = document.querySelector('#down');

chatarea.addEventListener('scroll', function() {
  if ((chatarea.clientHeight + chatarea.scrollTop) >= chatarea.scrollHeight - 300) {
    button.style.display = 'none'
  } else {
    button.style.display = 'block'
  }
});

function scrollBottom() {
  let message = document.querySelector('#message');
  message.scrollTo(0, message.scrollHeight);
}

// 닉네임 변경
function changeName() {
  myName = prompt('닉네임을 무엇으로 변경하시겠습니까?');
}