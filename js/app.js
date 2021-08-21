const defaultStorageCost = document.getElementById('storage-extra-cost');
const memoryExtraCost = document.getElementById('memory-extra-cost');
const defaultDeliveryCost = document.getElementById('delivery-extra-cost');
const bestPrice = document.getElementById('best-price');
const bestPriceAmount = parseInt(bestPrice.innerText);
const afterDiscount = document.getElementById('after-discount');

/* ---------------total price function start from here----------------- */

function totalFullPrice() {
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = bestPriceAmount + parseInt(memoryExtraCost.innerText) + parseInt(defaultStorageCost.innerText) + parseInt(defaultDeliveryCost.innerText);
    afterDiscount.innerText = totalPrice.innerText;
}

/* ---------------total price function end here----------------- */

/* ---------------eventListener start from here----------------- */

function listener(number, id, costId) {
    document.getElementById(id).addEventListener('click', function () {
        costId.innerText = number;
        totalFullPrice();
    })
}

/* ---------------eventListener end here----------------- */

listener(0, 'default-memory-price', memoryExtraCost)
listener(180, 'memory-extra-price', memoryExtraCost)
listener(0, 'default-storage-price', defaultStorageCost)
listener(100, '512gb-extra-price', defaultStorageCost)
listener(180, '1tb-extra-price', defaultStorageCost)
listener(0, 'default-shipping-cost', defaultDeliveryCost)
listener(20, 'extra-shipping-cost', defaultDeliveryCost)

/* ---------------promo code function start from here----------------- */

document.getElementById('promo-apply').addEventListener('click', function (event) {
    const promoField = document.getElementById('promo-field');
    const promoFieldValue = promoField.value;
    if (promoFieldValue == 'stevekaku') {
        afterDiscount.innerText = parseInt(afterDiscount.innerText) * .8;
        if (event.target.innerText == 'Apply') {
            event.target.setAttribute("disabled", true);
            event.target.innerText = "Completed";
        }
        promoField.value = '';
    }
    else {
        promoField.value = '';
    }
})

/* ---------------promo code function end here----------------- */