var notify = require('../models/notifications');

var socketInput = function(io){
    io.on('connection',function(socket){
        console.log("============================================");
        console.log("Socket Success",socket.id);
        console.log("Socket Handshake",socket.handshake.query.userId);
        console.log("============================================");

        //save notification
        var notification = new notify({
            userId:socket.handshake.query.userId,
            socketId:socket.id
        });

        notification.save(function(err,notification){
            if(!err){
                socket.emit('notification',{data : "Logged In Successfully"});        
            }
        });

        //socket.emit('notification',{data : "Logged In Successfully"});
        socket.on('disconnect',function(socket){
            console.log("User Disconnected");
            notification.remove({socketId:socket.id},function(err){
                if(!err){
                    console.log("User Disconnected");
                }
            });
        })
    });
}


module.exports = socketInput;