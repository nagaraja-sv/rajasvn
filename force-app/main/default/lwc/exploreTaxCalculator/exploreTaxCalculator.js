import { LightningElement } from 'lwc';

export default class ExploreTaxCalculator extends LightningElement {

    totalAmount;
    taxRate;
    totalTaxAmount;

    handleChange(event){

        console.log(event.target.name);
        console.log((event.target.name === 'Total Amount'));
        //console.log(event.target.value);
    

       if (event.target.name === 'TotalAmount'){

           this.totalAmount = event.target.value;            
        }
        else if (event.target.name === 'TaxRate'){

            this.taxRate = event.target.value;
        }

    this.template.querySelector('c-explore-math').calculator(this.totalAmount, this.taxRate);
       
}

}