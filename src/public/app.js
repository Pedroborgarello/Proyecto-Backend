const socket = io();

socket.on('update', data => {
    let products = data.product;
    fetch('templates/productsTable.handlebars').then(string => string.text()).then(template => {
        const processedTemplate = Handlebars.compile(template);
        const dataObject = {
            products: products
        }

        const html = processedTemplate(dataObject);
        let div = document.getElementById('tableProducts');
        div.innerHTML = html;
    })
})








document.addEventListener('sumbit', sumbitForm);

function sumbitForm(e) {
    e.preventDefault();
    let form = document.getElementById('productsForm');
    let data = new FormData(form);
    
    fetch('api/products', {
        method: 'POST',
        body: data
    }).then(result => {
        console.log(result);
        return result.json();
    }).then(json => {
        Swal.fire({
            title: 'success',
            text: json.message,
            icon: 'success',
            timer: 2500
        }).then(result => {
            // location.href= '/';
        })
    })
}

