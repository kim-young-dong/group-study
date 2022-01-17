
async function get() {
  try {
    let get = await axios.get('https://api.t0dd.kr/v0/articles');
    console.log(get.data.articles);
  } catch (err) { 
    console.log(err);
  }
} 
get();

function post(content) {
  try {
    axios.post('https://api.t0dd.kr/v0/article', 
    {
      author: 'DIO',
      title: '죠죠 명대사',
      content: content
    });
  } catch (err) {
    console.log(err);
  }
}
// post('오라오라오라오라오라');
// post('무다무다무다무다무다');

function put(content) {
  try {
    axios.put('https://api.t0dd.kr/v0/article/610a4304fdf32304be021cc0',
    {
      author: 'DIO',
      title: '죠죠 명대사',
      content: content
    });
  } 
  catch (err) {
    console.log(err);
  }
}
put('자지꼬추');

function del() {
  try {
    axios.delete('https://api.t0dd.kr/v0/article/610a4303fdf32304be021cbe');
  } 
  catch (err) {
    console.log(err);
  }
}
// del();

