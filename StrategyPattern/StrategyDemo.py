from abc import ABC, abstractmethod

class Product:
    def __init__(self, name: str, unit_price: float, quantity: int) -> None:
        self.name: str = name
        self.unit_price: float = unit_price
        self.quantity: int = quantity


class Order:
    def __init__(self) -> None:
        self.product_list: list[Product] = []
        self.discount_strategy: str = "no discount"

    def add_product(self, product: Product) -> None:
        self.product_list.append(product)

    def get_product_list(self) -> list[Product]:
        return self.product_list

    def set_discount_strategy(self, strategy: str) -> None:
        self.discount_strategy = strategy.lower()

    def check_out(self) -> None:
        total: float = 0
        discount: float = 0
        for product in self.product_list:
            total += product.unit_price * product.quantity

        if (self.discount_strategy == "no discount"):
            discount = 0
        elif (self.discount_strategy == "standard discount"):
            discount = total * .10
        elif (self.discount_strategy == "high value discount"):
            if (total > 1000):
                discount = total * .20
            else:
                discount = total * .10
        elif (self.discount_strategy == "vip discount"):
            discount = total * .30

        print("Order details")
        for product in self.product_list:
            print(
                f"{product.name} {product.unit_price} {product.quantity} {product.unit_price * product.quantity}")
        print(f"Amount: {total}")
        print(f"Discount: {discount}")
        print(f"Net: {total - discount}")


order = Order()
order.add_product(Product("iPhone", 1_00_000, 1))
order.add_product(Product("AirPods", 30_000, 2))
order.add_product(Product("Macbook", 2_20_000, 1))
order.set_discount_strategy("standard discount")
order.check_out()
