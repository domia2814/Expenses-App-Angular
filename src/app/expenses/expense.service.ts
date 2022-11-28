import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Category, Expense } from "./expense.model";

@Injectable()
export class ExpenseService {

    private expenses: Expense[] = []

      expenseChanged = new BehaviorSubject<Expense[]>(this.expenses) // to zabieg aby pojawiały się składniki w tablicy "kopii", BehaviourSubject - podanie wartości początkowej, dzięki temu mamy wartości nie tylko z momentu inicializacji jak przy Subject 

      getExpenses(){
        return this.expenses.slice() // slice oznacza utworzenie tablicy kopii
      }

      addExpense(expense: Expense){
        this.expenses.push(expense)
        this.expenseChanged.next(this.expenses.slice()) // to zabieg aby pojawiały się składniki w tablicy "kopii"
      }

      sumExpenses(category: Category){
      return this.expenses
        .filter(function (el) { return el.category === category; })
        .map(function (el) { return el.price; })
        .reduce(function (p, c) { return (p + c); }, 0); // dzięki "0" tutaj suma wydatków bez klasy zaciąga się jako "0", inaczej błąd
    }    
}
