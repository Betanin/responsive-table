import React, { Component } from "react";
import "./ResponsiveTable.css";

class ResponsiveTable extends Component {
  render() {
    const { data } = this.props;
    return (
      <div class="container">
        <table>
          <thead>
            <tr>
              {data.fields
                .filter(item => item.show)
                .map(item => <th>{item.description}</th>)}
            </tr>
          </thead>
          <tbody>
            {data.items.map((item, index) => {
              return (
                <tr key={index}>
                  {data.fields
                    .filter(field => field.show)
                    .map(field => (
                      <td data-th={field.description}>{item[field.id]}</td>
                    ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ResponsiveTable;
