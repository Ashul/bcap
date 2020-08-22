import React from "react";
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const dataSet1 = [
    {
        name: "Johson",
        amount: 30000,
        sex: 'M',
        is_married: true
    },
    {
        name: "Monika",
        amount: 355000,
        sex: 'F',
        is_married: false
    },
    {
        name: "John",
        amount: 250000,
        sex: 'M',
        is_married: false
    },
    {
        name: "Josef",
        amount: 450500,
        sex: 'M',
        is_married: true
    }
];

var dataSet2 = [
    {
        name: "Johnson",
        total: 25,
        remainig: 16
    },
    {
        name: "Josef",
        total: 25,
        remainig: 7
    }
];

class Download extends React.Component {
  
  render() {
    const { data } = this.props;

        return (
            <ExcelFile element={<button className="btn btn-primary float-right">Download Data In Excel</button>}>
            <ExcelSheet data={data.rows} name="Employees">
              {
                data.columns.map((item) => (
                  <ExcelColumn label={item.label} value={item.field}/>

                ))
              }
                </ExcelSheet>
            </ExcelFile>
        );
    }
}

export default Download;
