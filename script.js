document.addEventListener('DOMContentLoaded', function() {
    const orderNowButton = document.getElementById('orderNowButton');
    const orderForm = document.getElementById('orderForm');

    orderNowButton.addEventListener('click', function() {
        orderForm.style.display = 'block';
    });

    const submitOrder = document.getElementById('submitOrder');
    submitOrder.addEventListener('click', function() {
        const selectedDish = document.getElementById('dish').value;
        alert('You have ordered: ' + selectedDish);
        orderForm.style.display = "none";
    });
});

document.getElementById("orderNowButton").addEventListener("click", function() {
    const orderForm = document.getElementById("orderForm");
    if (orderForm.style.display === "none" || orderForm.style.display === "") {
        orderForm.style.display = "block";
    } else {
        orderForm.style.display = "none";
    }
});

document.getElementById("submit-blog").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("popup").style.display = "block";
    setTimeout(function() {
        document.getElementById("popup").style.display = "none";
    }, 1500);
    document.getElementById("blog-text").value = "";
});