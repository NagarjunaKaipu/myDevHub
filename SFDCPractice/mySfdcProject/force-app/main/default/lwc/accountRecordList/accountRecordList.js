import { LightningElement, track, api } from 'lwc';  
import getAccountsList from '@salesforce/apex/AccountRecordsController.getAccountsList';  
import getAccountsCount from '@salesforce/apex/AccountRecordsController.getAccountsCount'; 

export default class AccountRecordList extends LightningElement {
    @track accounts;  
    @track error;  
    @api page = 1;
    @api currentpage;  
    @api pagesize = 5;  
    totalpages;  
    localCurrentPage = null;  
  
    // not yet implemented  
    pageSizeOptions =  
      [  
        { label: '5', value: 5 },  
        { label: '10', value: 10 },  
        { label: '25', value: 25 },  
        { label: '50', value: 50 },  
        { label: 'All', value: '' },  
      ];  

    handleChange(event){
        this.page = 1;
        this.pagesize = event.target.value;
        console.log('Selected page size is: '+this.pagesize);
        //this.handlePageChange();
        getAccountsCount()  
        .then(recordsCount => {  
          this.totalrecords = recordsCount;  
          if (recordsCount !== 0 && !isNaN(recordsCount)) {  
            this.totalpages = Math.ceil(recordsCount / this.pagesize);  
            getAccountsList({ pagenumber: this.currentpage, numberOfRecords: recordsCount, pageSize: this.pagesize})  
              .then(accountList => {  
                this.accounts = accountList;  
                this.error = undefined;  
              })  
              .catch(error => {  
                this.error = error;  
                this.accounts = undefined;  
              });  
          } else {  
            this.accounts = [];  
            this.totalpages = 1;  
            this.totalrecords = 0;  
          }  
          const event = new CustomEvent('recordsload', {  
            detail: recordsCount  
          });  
          this.dispatchEvent(event);  
        }) 
     }
     /*handlePageChange(event) {  
        this.page = event.detail.value;  
      } */
    renderedCallback() {  
 
      getAccountsCount()  
        .then(recordsCount => {  
          this.totalrecords = recordsCount;  
          if (recordsCount !== 0 && !isNaN(recordsCount)) {  
            this.totalpages = Math.ceil(recordsCount / this.pagesize);  
            getAccountsList({ pagenumber: this.currentpage, numberOfRecords: recordsCount, pageSize: this.pagesize})  
              .then(accountList => {  
                this.accounts = accountList;  
                this.error = undefined;  
              })  
              .catch(error => {  
                this.error = error;  
                this.accounts = undefined;  
              });  
          } else {  
            this.accounts = [];  
            this.totalpages = 1;  
            this.totalrecords = 0;  
          }  
          const event = new CustomEvent('recordsload', {  
            detail: recordsCount  
          });  
          this.dispatchEvent(event);  
        })  
        .catch(error => {  
          this.error = error;  
          this.totalrecords = undefined;  
        });  
    }  
  }