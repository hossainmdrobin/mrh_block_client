export default function (url, obj, func1) {
    const token = localStorage.getItem('token')    
    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(obj)
    };

    fetch(url, options)
        .then(response => response.json())
        .then(response => func1(response))
        .catch(err => console.log(err));
}