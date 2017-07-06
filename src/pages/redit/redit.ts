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
    category : any;
    limit: any;
    constructor (public navCtrl : NavController, private reditService : ReditServices) {
        this.getDefaults();
    }
    ngOnInit () {
        this.getPosts (this.category, this.limit);     
    }

    getDefaults () {
        if (localStorage.getItem('category') != null ) {
            this.category = localStorage.getItem('category');
        } else {
             this.category = 'sports';
        }
        if (localStorage.getItem('limit') != null ) {
            this.limit = localStorage.getItem('limit');
        } else {
             this.limit = 10;
        }     
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
    changeCategory () {
        this.getPosts (this.category, this.limit);
    }
}