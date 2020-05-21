public with sharing class AccountRecordsController {
    public AccountRecordsController() {
        //test
    }
    @AuraEnabled(cacheable = true)  
    public static List<Account> getAccountsList2(Integer pagenumber, Integer numberOfRecords, Integer pageSize) {  
        return [Select id, Name from Account Limit 200];  
    }  
    @AuraEnabled(cacheable = true)  
    public static Integer getAccountsCount2() {  
        return [select count() from Account Limit 100];  
    }
    @AuraEnabled(cacheable = true)  
    public static List<Account> getAccountsList(Integer pagenumber, Integer numberOfRecords, Integer pageSize, String searchString) {  
        String searchKey = '%' + searchString + '%';  
        String query = 'select id, Name from Account ';  
        if (searchString != null && searchString != '') {  
            query += ' where name like \'%' + searchString + '%\' ';  
        }  
        query += ' limit ' + pageSize + ' offset ' + (pageSize * (pagenumber - 1));  
        return Database.query(query);  
    }  
    @AuraEnabled(cacheable = true)  
    public static Integer getAccountsCount(String searchString) {  
        String query = 'select count() from Account';  
        if (searchString != null && searchString != '') {  
            query += ' where name like \'%' + searchString + '%\' ';  
        }  
        return Database.countQuery(query);  
    } 
}