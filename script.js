var counter = 1;
function add_more() {
    counter++
    var newDiv = `<div id="product_row${counter}" class="row">
                    <div class="col-md-7">
                        <label>Product Name</label>
                        <input id="name${counter}" type="text" class="form-control">
                    </div>
                    <div class="col-md-4">
                        <label>Price</label>
                        <input id="price${counter}" type="number" class="form-control">
                    </div>
                    <div class="col-md-1">
                        <br>
                        <button onclick="delete_row('${counter}')" type="button" class="btn btn-danger">Delete</button>
                    </div>
                </div>`
    var form = document.getElementById('input-form')
    form.insertAdjacentHTML('beforeend', newDiv);
}

function delete_row(id) {
    document.getElementById('product_row'+id).remove()
}

function submit_form() {
    var productData = []
    for (var i = 1; i <= counter; i++){
        var product_row = document.getElementById('product_row'+i)
        if (product_row) {
            var product_name = document.getElementById('name' + i).value
            var price = document.getElementById('price' + i).value
            var data = {
                name: product_name,
                price: price
            }
            productData.push(data)
        }
    }

    axios.post('/dynamicinput/submitform.php', {
        productData: productData
    }).then(resp => {
        window.location.reload()
    })
}