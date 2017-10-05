var socketInput = function(io){
    io.on('connection',function(socket){
        socket.emit('notification',{data : "Logged In Successfully"});
        socket.on('disconnect',function(){
            console.log("User Disconnected");
        })
    });
}


module.exports = socketInput;