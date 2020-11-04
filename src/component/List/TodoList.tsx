import React from "react";
export interface ITodoMap {
  todo: string;
  isCompleted: boolean;
}
interface TodoInterface {
  renderData?: Array<ITodoMap>;
  headerData?: Array<string>;
}
export default function TodoList(Props: TodoInterface) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {Props.headerData?.map((item) => (
              <th>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Props.renderData?.map((item, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{item.todo}</td>
              <td>{item.isCompleted ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
