import { Category } from "./category";

export interface Expense {
    id?: number;
    itemName: string;
    amount: number;
    category: Category;
    date?: Date
}
