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


module.exports = router;