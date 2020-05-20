import { LightningElement } from 'lwc';

export default class Pagination extends LightningElement {
    totalrecords;
    currentpage;
    pagesize;

    lastpage = false;
    firstpage = false;

    showFirstButton(){
        if(this.currentpage === 1){
            return true;
        }
        return false;
    }

    showLastButton(){
        if(Math.ceil(this.totalrecords/this.pagesize) === this.currentpage){
            return true;
        }
        return false;
    }

    //Fire events based on the button actions
    handleFirst(){
        this.page = 1;
    }
    handlePrevious(){
        if (this.page > 1) {  
            this.page = this.page - 1;  
          } 
    }
    handleNext(){
        if (this.page < this.totalPages)  
        this.page = this.page + 1;  
    } 
    handleLast(){
        this.page = this.totalPages;  
    }
    handlePageChange(event) {  
        this.page = event.detail;  
      } 
}