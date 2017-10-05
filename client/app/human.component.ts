import {Component,EventEmitter,Input,Output} from '@angular/core';
import {Router} from '@angular/router';
import {HumanService} from './app.service';

@Component({
    selector:'human',
    moduleId:module.id,
    templateUrl:'human.html' ,
    
})

export class HumanComponent{
    socket:any = null;
    name:string;
    contactno:number;
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
            contactNumber:this.contactno,
            password:this.registerPassword,
            userRole:this.userRole
        }
        this.humanService.addHuman(human)
            .subscribe(data=>{
                console.log(data);
                //this.loginDet.emit(data);
            });
    }


    loginUser(name:any,pass:any){
        this.humanService.autheticateUser(name,pass)
            .subscribe(data=>{
                console.log(data);
                var details=JSON.parse(data);
                console.log(details);
                if(details.success==true){
                    this.humanService.userDet=details.loggedUserDet;
                    localStorage.setItem('auth-token', details.token);
                    console.log("First Component == >"+this.humanService.userDet);
                    this.router.navigate(['/managerMain']);
                }
                else{

                    this.router.navigate(['/']);
                }
                
            })
    }

}