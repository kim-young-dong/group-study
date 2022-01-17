





const http = require('http');
http.createServer((request, response) => {
  return request
    .on('error', (err) => { // 요청에 에러가 있으면
      console.error(err);
    })
    .on('data', (data) => { // 요청에 데이터가 있으면
      console.log(data);
    })
    .on('end', () => { // 요청의 데이터가 모두 받아졌으면
      response.on('error', (err) => { // 응답에 에러가 있으면
        console.error(err);
      });
      let width = parseInt(Math.random() * 1000) + 'px';
      let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
      let wrap = `<div id="wrap" style ='background-color: ${color}; width: ${width};' >\n<p>안녕하세요 개발자 지망생입니다.</p>\n<p>잘 부탁드려요</p>\n<p>이번 과제 힘들군여</p>\n</div>`
      response.statusCode = 200; // 성공 상태 코드
      response.setHeader('Content-Type', 'text/html; charset=utf-8'); // header 설정
      response.write(wrap); // body에 정보 탑재
      response.end('the end!'); // 정보 탑재 후 브라우저로 전송
    });
}).listen(8080);