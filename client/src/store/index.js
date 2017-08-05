import Rx from 'rxjs/Rx';
import {observable} from "mobx";
import io from 'socket.io-client';

export default class Manager {

    @observable list = [];

    constructor(){
        this.socket
        this.auth
        this.talk
    }

    start(){
        this.socket = io('http://localhost:3001')
        this.socket.on('connect', function(){
            console.log(111111111111111111111)
        });
        this.socket.on('event', function(data){
            console.log(data)
        });
        this.socket.on('disconnect', function(){});
    }
}