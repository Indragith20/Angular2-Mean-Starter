import {Component} from '@angular/core';

@Component({
    selector:'message-dialog',
    template:`<div>{{message}}</div>`
})

export class MessageComponent{
    message:any;
}