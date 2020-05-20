import { LightningElement, track } from 'lwc';

export default class MyFirstWebComponent extends LightningElement {
    @track
    contacts = [
        {
            Id: 1,
            Name: 'Nag1',
            Title: 'VP of Engineering'
        },
        {
            Id: 1,
            Name: 'Nag1',
            Title: 'VP of Sales'
        },
        {
            Id: 1,
            Name: 'Nag1',
            Title: 'CEP'
        }

    ];
}