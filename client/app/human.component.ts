import {Component} from '@angular/core';
import {Router} from '@angular/router'

import {HumanService} from './app.service';

@Component({
    selector:'human',
    moduleId:module.id,
    templateUrl:'human.html' ,
    providers:[HumanService]   
})

export class HumanComponent{
    name:string;
    age:number;
    registerPassword:string;
    userRole:string;
    registerPageActive:boolean = true;
    loginPageActive:boolean=false;
    constructor(private humanService: HumanService,private router:Router){
        // this.registerPageActive=true;
        // this.loginPageActive=false;
    }
    public setRegister(){
        this.registerPageActive=true;
        this.loginPageActive=false;
    }
    public setLogin(){
        this.registerPageActive=false;
        this.loginPageActive=true;
    }

    save(){
        console.log(this.registerPassword);
        var human = {
            name:this.name,
            age:this.age,
            password:this.registerPassword,
            userRole:this.userRole
        }
        this.humanService.addHuman(human)
            .subscribe(data=>{
                console.log(data);
            });
    }


    loginUser(name:any,pass:any){
        this.humanService.autheticateUser(name,pass)
            .subscribe(data=>{
                var details=JSON.parse(data);
                console.log(JSON.parse(data));
                if(details.userRole=="Manager"){
                    this.router.navigate(['managerMain']);
                }
                
            })
    }

}