import { Component ,OnInit} from '@angular/core';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  gridOptions = {
    columnDefs: this.columnDefs,
    rowData: null,
    enableFilter: true
};
  quickSearchValue: string = '';
  columnDefs = [
    {headerName: 'Make', field: 'make'},
    {headerName: 'Model', field: 'model'},
    {headerName: 'Price', field: 'price',editable: true}
];

rowData = [
    {make: 'Toyota', model: 'Celica', price: 35000},
    {make: 'Ford', model: 'Mondeo', price: 32000},
    {make: 'Porsche', model: 'Boxter', price: 72000}
];

private onQuickFilterChanged() {
  this.gridOptions.api.setQuickFilter(this.quickSearchValue);
}
ngOnInit(){
  fetch('https://api.myjson.com/bins/15psn9')
  .then(result => result.json())
  .then(rowData => this.rowData = rowData);
}

}
}

