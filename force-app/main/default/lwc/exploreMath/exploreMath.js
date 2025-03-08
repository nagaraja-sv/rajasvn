import { LightningElement,api } from 'lwc';

export default class ExploreMath extends LightningElement {

    totalTaxAmount;

    @api calculator(totalAmount,taxRate){

        this.totalTaxAmount = (totalAmount * taxRate)/100;

    }


    
}