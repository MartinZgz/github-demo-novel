import React from "react";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <ExpenseItem
      title={props.value.title}
      amount={props.value.amount}
      date={props.value.date}
    ></ExpenseItem>
  );
}

export default Expenses;
