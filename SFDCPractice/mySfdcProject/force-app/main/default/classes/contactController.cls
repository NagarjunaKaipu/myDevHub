public class contactController {
@auraEnabled
    public static List<Contact> getContactList(String searchTerm, Integer recordLimit){
        System.debug('searchTerm is: '+searchTerm);
        List<Contact> conList = [Select Id, FirstName, LastName, Phone From Contact where FirstName Like :('%' + searchTerm + '%')];
        return conlist;
    }
}