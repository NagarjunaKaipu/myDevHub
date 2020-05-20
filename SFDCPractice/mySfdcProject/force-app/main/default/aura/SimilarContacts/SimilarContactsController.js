({
	doInit : function(component, event, helper) {
         component.set('v.columns', [
            {label: 'First Name', fieldName: 'FirstName', type: 'text'},
            {label: 'Last Name', fieldName: 'LastName', type: 'text'},
             {label: 'Phone', fieldName: 'Phone', type:'phone'}
         ]);
        var action = component.get("c.getContactList");
        action.setParams({
            searchTerm: "ja",
                recordLimit: 10
        });
        action.setCallback(this, function(response){
            var recList = response.getReturnValue();
            component.set("v.contactList", recList);
        })
		$A.enqueueAction(action);
	}
})