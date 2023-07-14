class Product {
    public constructor(
        public name: string,
        public unitPrice: number,
        public quantity: number
    ) { }
}

class Order {
    productList: Product[] = [];
    discountStrategy = "no discount";

    public addProduct(product: Product) {
        this.productList.push(product);
    }

    public getProductList(): Product[] {
        return this.productList;
    }

    public setDiscountStrategy(strategy: string) {
        this.discountStrategy = strategy;
    }

    public checkOut() {
        let total = 0;
        let discount = 0;

        for (var product of this.productList) {
            total += product.unitPrice * product.quantity
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

        console.log("Order details");

        for (let product of this.productList) {
            console.log(`${product.name} ${product.unitPrice} ${product.quantity} ${product.unitPrice * product.quantity}`);
        }

        console.log(`Amount: ${total}`);
        console.log(`Discount: ${discount}`);
        console.log(`Net: ${total - discount}`);
    }
}

let order = new Order();
order.addProduct(new Product("iPhone", 1_00_000, 1));
order.addProduct(new Product("Airpods", 30_000, 2));
order.addProduct(new Product("Macbook", 2_20_000, 1));
order.setDiscountStrategy("standard discount");
order.checkOut();