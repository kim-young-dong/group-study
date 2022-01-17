const axios = require('axios');

console.log('hi');

function updateOne(id, req) {
  try {
    axios({
      method: 'put',
      url: `http://localhost:3000/api/user/${id}`,
      data: { name: req }
    });    
  }
  catch (err) {
    console.log(err);
  }
}
updateOne('6141f70a7c1f2d6db47d3d2b', 'hello');

function deleteOne(id) {
  try {
    axios({
      method: 'delete',
      url: `http://localhost:3000/api/user/${id}`,
    });
  } 
  catch (err) {
    console.log(err);
  }
}
// deleteOne('6141f70a7c1f2d6db47d3d2d');