const cart = ['shoes', 'pant', 'kurta'];

const validateCard = (cart) => {
    if (!cart.length) {
        return false;
    };
    return true;
}

function createOrder(cart) {
    const pr = new Promise((resolve, reject) => {

        if (!validateCard(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }
        const orderId = "12345";
        if (orderId) {
            resolve(orderId);
        }
    });
    return pr;
}

function proceedToPayment(orderId) {
    console.log(orderId)
    return new Promise((resolve, reject) => {
        if (!orderId) {
            const err = new Error("Payment faild!");
            reject(err);
        }
        resolve("Payment successfull")
    })
};

createOrder(cart)
    .then((res) => {
        console.log(res);
        return res; // we will get this into next then callback parameter
    })
    .then((res) => {
        return proceedToPayment(res); // again we get the data in next .then
    })
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })

