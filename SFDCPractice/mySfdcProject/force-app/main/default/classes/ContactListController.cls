public class ContactListController {
    
    public List<Contact> contactList {get;set;}
    public ContactListController(){
        this.contactList = new List<Contact>();
    }
    @AuraEnabled(cacheable=true)
    public static list<Contact> getContacts(string searchKey){
        List<Contact> lst = new List<Contact>([SELECT Id, Name, Title, Phone, Email FROM Contact WHERE Accountid = :searchKey ]);
        return lst;
    }
}