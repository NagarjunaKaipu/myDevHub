import { LightningElement } from 'lwc';

export default class BikeCard extends LightningElement {
    name = 'Hero';
    decription = 'Two Wheer';
    category = 'Bicycle';
    material = 'Steel';
    price = '10000';
    pictureURL = 'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg';

    ready = false;
    connectedCallback(){
        setTimeout(() =>{
            this.ready = true;
        }, 3000)
    }
}