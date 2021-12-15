import { Dish } from 'src/shared/dish';
export class BucketItem {
  dish: Dish;
  count: number;
  constructor(dish: Dish, count: number) {
    this.dish = dish;
    this.count = count;
  }
}
