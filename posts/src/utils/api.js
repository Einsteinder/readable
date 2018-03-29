const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001';

let token = localStorage.token;

if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
    'Content-Type': 'application/json',
    'Authorization': token
};


export function changeScore(id,upOrDown) {
    var data
    if(upOrDown==='UP'){
        data={"option":"upVote"}
        
    }else if (upOrDown==="DOWN"){
        data={"option":"downVote"}
    }
  // Default options are marked with *
  return fetch(`${api}/posts/${id}`, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    headers: {
        'Content-Type': 'application/json',
        'Authorization': token
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
  })
  .then(response => response.json()).then(data=>data)
}




export const fetchPosts = () =>{
    return fetch(`${api}/posts`, { headers })
        .then(res => res.json())
        .then(data => data);}

