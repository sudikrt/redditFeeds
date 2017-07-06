import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReditServices } from '../../app/services/reditservice';
import { DetailsPage } from '../details/details';
@Component ({
    selector:'page-redit',
    templateUrl:'redit.html'
})
export class ReditPage {
    items: any;

    constructor (public navCtrl : NavController, private reditService : ReditServices) {
        
    }
    ngOnInit () {
        console.log ('OnInitRan');
        this.getPosts ('sports', 10);     
    }

    getPosts (categoty, limit) {
        this.reditService.getPosts(categoty, limit).subscribe (response => {
            this.items = response.data.children;
        });
    }
    viewItem (item) {
        this.navCtrl.push (DetailsPage, {
            item:item,
        });
    }
}