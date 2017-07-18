var express= require('express');
var router=express.Router(); 
var eventModel=require('../models/events');


//Handler for saving the new events 
router.post('/saveEvent',function(req,res){
    console.log("eventts In the back==>"+JSON.parse(req.query.event));
    var parsedEvent=JSON.parse(req.query.event);
    var event=new eventModel({
        eventName:parsedEvent.eventName,
        eventStartDate:parsedEvent.eventStartDate,
        eventEndDate:parsedEvent.eventEndDate,
        eventDescription:parsedEvent.eventName,
        membersDetails:{
            memberId:parsedEvent.memberId,
            memberName:parsedEvent.memberName
        },
        teamDetails:{
             teamId:parsedEvent.teamId,
            teamName:parsedEvent.teamName 
        }
    });


    event.save(function(err,eventDet){
        if(err){
            res.send(err).status(501);
        }
        else{
            
             console.log("Event Details==>"+eventDet);
             res.send(eventDet).status(200);
        }
    })


});



//Handler for getting the events
router.get('/getEvents',function(req,res){
    console.log("Team Id==>"+req.query.teamId);
    eventModel.find({'teamDetails.teamId':{$in:req.query.teamId}},function(err,events){
        if(err){
            res.send(err).status(501);
        }
        else{
            var resSendEvent=[];
            
            events.forEach(function(event){
                resSendEvent.push({
                  "id":event.eventId,
                  "memberName":event.membersDetails.memberName, 
                  "title":event.eventName,
                  "start":event.eventStartDate,
                  "end":event.eventEndDate,
                  "allDay": true
            });
            })
            
            console.log(resSendEvent);
            res.send(resSendEvent).status(200);
        }
    });
})

//Handler for updating the events
router.post('/updateEvent',function(req,res){
    var parsedEvent=JSON.parse(req.query.event);
    //console.log("eventts In the back==>"+req.query.event);
    console.log("checkpoint 3");
    var eventToUpdate={
        eventName:parsedEvent.eventName,
        eventStartDate:parsedEvent.eventStartDate,
        eventEndDate:parsedEvent.eventEndDate,
        eventDescription:parsedEvent.eventName,
        membersDetails:{
            memberId:parsedEvent.memberId,
            memberName:parsedEvent.memberName
        },
        teamDetails:{
             teamId:parsedEvent.teamId,
            teamName:parsedEvent.teamName 
        }
    };

    eventModel.findOneAndUpdate({eventId:parsedEvent.eventId},eventToUpdate,function(err,updatedEvent){
        if(err){
            res.send(err).status(501);
        }
        else{
            console.log("Upsdes event==>"+updatedEvent);
            res.send(updatedEvent).status(200);
        }
    });
});


//Handler for deleting the events
router.post('/deleteEvent',function(req,res){
    var eventToDelete=req.query.eventId;
    eventModel.remove({eventId:eventToDelete},function(err,data){
        if(err){
            res.send(err).status(501);
        }
        else{
            res.send(data).status(200);
        }
    });
});

module.exports = router;