export class Expense {
    constructor(
        public name: string,
        public price: number,
        public category: Category
    )
 {}

 }
export enum Category {
    food = 'FOOD',
    travels = 'TRAVELS',
    bills = 'BILLS',
    health = 'HEALTH'
}