import { Component,OnInit }      from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { RouterModule } from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import { HttpService} from '../../services/http.service';

import {MainService} from "./../../services/main.service";
import { ActivityModel } from '../../models/activity.model';

@Component({
    moduleId:module.id,
    selector: "search",
    templateUrl: "./search.component.html",
    providers: [HttpService]
})

export class SearchComponent implements OnInit{
    Activities: ActivityModel[] = [];
    constructor(private router: Router,
        private service: MainService,
        private params: ActivatedRoute){}

    ngOnInit(){
        this.service.GetAllActivities();
    }
}