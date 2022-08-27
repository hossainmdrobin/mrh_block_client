export default function (url, obj, func1,loading) {
    loading(true)
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
        .then(response => {
            loading(false)
            func1(response)
        })
        .catch(err => console.log(err));
}