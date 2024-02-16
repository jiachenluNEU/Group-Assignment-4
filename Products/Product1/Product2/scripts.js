document.addEventListener('DOMContentLoaded', function() {
    const orderButton = document.querySelector('.btn-success');
    orderButton.addEventListener('click', function() {
        alert('Your order for SuperPhone X has been placed. Thank you!');
    });
});
