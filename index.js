const overview = {
    profile: {
      image:
        "https://phantom-marca.unidadeditorial.es/f66122513dceb8500602ef9806776ed5/resize/1320/f/jpg/assets/multimedia/imagenes/2022/12/30/16723620780107.jpg",
      name: "Andrew T.",
      hasNotifications: true
    },
    ticketOverview: [
      {
        type: "Unresolved",
        value: 60
      },
      {
        type: "Overdue",
        value: 16
      },
      {
        type: "Open",
        value: 43
      },
      {
        type: "On Hold",
        value: 64
      },
     
      
    ]
  };
  
  const tickets = overview.ticketOverview;
  
  const ticketWrapper = document.getElementById("ticketWrapper");
  
  for (let i = 0; i < tickets.length; i++) {
    const ticketDiv = document.createElement("div");
    ticketDiv.className = "ticket";
    const tickectObj = tickets[i];
  
    const ticketName = document.createElement("p");
    ticketName.innerText = tickectObj.type;
    ticketName.className = "ticketName";
  
    const ticketValue = document.createElement("p");
    ticketValue.innerText = tickectObj.value;
    ticketValue.className = "ticketValue";
  
    ticketDiv.append(ticketName, ticketValue);
  
    ticketWrapper.appendChild(ticketDiv);
  }
  

  console.log("hello world");
  todaysTrendRight =[
    {
      type: "Resolved",
      value: 449
    },
    {
      type: "Received",
      value: 426
    },
    {
      type: "Average first response time",
      value: '33m'
    },
    {
      type: "Average response time",
      value: '3h 8m'
    },
    {
      type: "Resolution within SLA ",
      value: '94%'
    },
    
  ]
   const dates = todaysTrendRight;
   const dashboradTodaysTrendRight=document.getElementById('dashboradTodaysTrendRight');
   
   for (let i = 0; i < dates.length; i++) {
    const datesDiv = document.createElement("divv");
     datesDiv.className = "dates";
    const datesObj = dates[i];
  
    const  datesdiscripsion= document.createElement("pp");
    datesdiscripsion.innerText = datesObj.type;
    datesdiscripsion.className = "datesdiscripsion";
  
    const datesValue = document.createElement("pp");
    datesValue.innerText = datesObj.value;
    datesValue.className = "datesValue";
  
    datesDiv.append(datesdiscripsion, datesValue);
  
    dashboradTodaysTrendRight.appendChild(datesDiv);

  }


  unresolvedT= [{
       name:'Waiting on Feature Request',
       value:4238
  },
  {
    name:'Awaiting Customer Response',
    value:1005
},
{
    name:'Awaiting Developer Fix',
    value:914
},
{
    name:'Pending',
    value:281
}
  ]
  const unresolvedTicket = unresolvedT;
  
  const bottomTickets = document.getElementById("bottomTickets");
  
  for (let i = 0; i < unresolvedTicket.length; i++) {
    const unresolTicket = document.createElement("divvv");
    unresolTicket.className = "unresolvedTicket";
    const unresolTicketObjc = unresolvedTicket[i];
  
    const unresolvedTicketName = document.createElement("ppp");
    unresolvedTicketName.innerText = unresolTicketObjc.name;
    unresolvedTicketName.className = "unresolvedTicketName";
  
    const unresolvedTicketValue = document.createElement("ppp");
    unresolvedTicketValue.innerText = unresolTicketObjc.value;
    unresolvedTicketValue.className = "unresolvedTicketValue";
  
    unresolTicket.append(unresolvedTicketName, unresolvedTicketValue);
  
    bottomTickets.appendChild(unresolTicket);
  }
  
  
  
  tasks=[{
    checked:false,
    name:"Finish ticket update",
    status:0
  },
  {
    checked:false,
    name:"Create new tickets example",
    status:1
  },
  {
    checked:true,
    name:"Update tickets report",
    status:2
  }
]
const bottomTasksContent=tasks;
const bottomTasks=document.getElementById('bottomTasks')
for(let i=0; i < bottomTasksContent.length;i++){
    const bottomDiv=createElement('paragra');
    bottomDiv.className='bottomTasksContent';
    const bottomDivObjc= bottomTasksContent[i];

    const bottomTasksName=document.createElement('bottom');
    bottomTasksName.innerText= bottomDivObjc.name;
    bottomTasksName.className=('bottomTasksName');

    bottomDiv.append(bottomTasksName);
    bottomTasks.appendChild(bottomDiv);

}
