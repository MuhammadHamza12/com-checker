import React from "react";
export interface ITodoMap {
  todo: string;
  isCompleted: boolean;
}
interface TableInterFace {
  headChildren(): React.ReactNode;
  mainChildren(): React.ReactNode;
}
export default function TableLayout(Props: TableInterFace) {
  return (
    <div>
      <table className="table">
        <thead>{Props.headChildren()}</thead>
        <tbody>{Props.mainChildren()}</tbody>
      </table>
    </div>
  );
}
