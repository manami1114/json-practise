document.addEventListener('DOMContentLoaded', function () {
  fetch('data/product.json')
    .then(response => response.json())
    .then(products => {
      const tbody = document.getElementById('productTable');

      for (let i = 0; i < products.length; i++) {
        const product = products[i];

        const row = document.createElement('tr');

        const cellId = document.createElement('td');
        cellId.textContent = product.id;
        row.appendChild(cellId);

        const cellName = document.createElement('td');
        cellName.textContent = product.name;
        row.appendChild(cellName);

        const cellPrice = document.createElement('td');
        cellPrice.textContent = product.price;
        row.appendChild(cellPrice);

        const cellDesc = document.createElement('td');
        cellDesc.textContent = product.description;
        row.appendChild(cellDesc);

        tbody.appendChild(row);

      }
    })
    .catch(error => console.error('エラー:', error));
});
