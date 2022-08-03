export default function(url,func1) {
    const token = localStorage.getItem('token')
    fetch(url, {
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    })
        .then(res => res.json())
        .then(data => func1(data))
        .catch(err => console.log(err))
}