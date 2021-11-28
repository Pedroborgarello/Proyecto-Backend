document.addEventListener('sumbit', sumbitForm);

function sumbitForm(e) {
    e.preventDefault();
    let form = document.getElementById('productsForm');
    let data = new FormData(form);
    fetch('api/products', {
        method: 'POST',
        body:data
    }).then(result => {
        return result.json();
    }).then(json => {
        Swal.fire({
            title: 'success',
            text: json.message,
            icon: 'success',
            timer: 2500
        }).then(result => {
            location.href= '/';
        })
    })
}