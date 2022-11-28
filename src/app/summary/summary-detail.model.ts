import { Category } from "../expenses/expense.model";

export class SummaryDetail {
    constructor(
        public category: Category,
        public sum: number,  
    )
 {}

 }
