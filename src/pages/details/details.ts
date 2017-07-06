import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component ({
    selector : 'page-deatils',
    templateUrl: 'details.html'
})
export class DetailsPage {
    item : any;
    constructor (public navCtrl : NavController, public param: NavParams) {
        this.item = param.get ('item');        
    }
}