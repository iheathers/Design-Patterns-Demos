class Product {
    constructor(name, unitPrice, quantity) {
        this.name = name;
        this.unitPrice = unitPrice;
        this.quantity = quantity;
    }
}

class Order {
    productList = [];
    discountStrategy = 'no discount';

    addProduct(product) {
        this.productList.push(product);
    }

    getProductList() {
        return this.productList;
    }

    setDiscountStrategy(strategy) {
        this.discountStrategy = strategy;
    }

    checkOut() {
        let total = 0;
        let discount = 0;

        for (let product of this.productList) {
            total += (product.unitPrice * product.quantity);
        }

        if (this.discountStrategy == "no discount") {
            discount = 0;
        } else if (this.discountStrategy == "standard discount") {
            discount = total * .10;
        } else if (this.discountStrategy == "high value discount") {
            if (total > 1000) {
                discount = total * .20;
            } else {
                discount = total * .10;
            }
        } else if (this.discountStrategy == "vip discount") {
            discount = total * .30;
        }

        console.log('Order details');

        for (let product of this.productList) {
            console.log(`${product.name} ${product.unitPrice} ${product.quantity} ${product.unitPrice * product.quantity}`);
        }

        console.log(`Amount: ${total}`);
        console.log(`Discount: ${discount}`);
        console.log(`Net: ${total - discount}`);
    }
}

var order = new Order();
order.addProduct(new Product("iPhone", 1_00_000, 1));
order.addProduct(new Product("AirPods", 30_000, 2));
order.addProduct(new Product("Macbook", 2_20_000, 1));
order.setDiscountStrategy("standard discount");
order.checkOut();