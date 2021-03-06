import { Component,OnInit }      from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { RouterModule } from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import { HttpService} from '../../services/http.service';

import { ActivityModel } from '../../models/activity.model';
import { MainService } from '../../services/main.service';
import { UserModel } from '../../models/user.model';
import { Base64ImageModel } from '../../models/base64image.model';

@Component({
    moduleId:module.id,
    selector: "discover",
    templateUrl: "./discover.component.html",
    providers: [HttpService]
})

export class DiscoverComponent implements OnInit{
    IsLoading = true;
    Activities: ActivityModel[] = [];
    Users:UserModel[] = [];
    Images:string[] = [];
    constructor(private router: Router,
        private service: MainService,
        private params: ActivatedRoute){}

    ngOnInit(){
        this.service.GetAllActivities()
            .subscribe((res:ActivityModel[])=>{
                this.Activities = res;
                for(let item of this.Activities){
                    //TODO: GET USER BY ID
                    this.service.GetImageById(item.image_id)
                        .subscribe((image:Base64ImageModel)=>{
                            this.Images['act'+item.id]=image.base64;
                            console.log(this.Images);
                        })
                }
            });
    }
}