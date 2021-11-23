document.addEventListener('sumbit', e => {
    e.preventDefault();
    let form = document.querySelector('#formProduct');
    let data = new FormData(form);
    fetch('http://localhost:8080/api/products', {
        method: 'POST',
        body: data
    }).then(result => {
        return result.json();
    })
});

