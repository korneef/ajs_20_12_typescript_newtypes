import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    totalCost(): number {
        let priceSum: number = 0;
        for (let i: number = 0; i < this._items.length; i += 1 ) {
            priceSum += this._items[i].price;
        }
        return priceSum
    }

    totalCostDiscount(discount: number): number {
        if (discount > 100 || discount < 1) {
            throw new Error(`Недопустимое значение скидки ${discount}`)
        }

        let priceSum = this.totalCost()
        return priceSum - (priceSum * discount / 100)
    }

    delete(id: number): void {
        const index: number = this._items.findIndex((itm) => itm.id === id)
        this._items.splice(index, 1)
    }
}