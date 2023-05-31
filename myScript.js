
function getTotalService(){
    var checkBox = document.getElementsByClassName("space");
    var count=0;
    for(var i=0;i<checkBox.length;i++){
        if(checkBox[i].checked==true && checkBox[i].type=="checkbox"){
            count++;
    }
} document.getElementById("no").innerHTML = "The Services you have applied :" +count ;
return count;
}

function getServiceCost(){
    var checkBox = document.getElementsByClassName("space");
    sum=0;
    for(var i=0;i<checkBox.length;i++){
        if(checkBox[i].checked==true){
            sum+=parseInt(checkBox[i].value);
        }
    }
    document.getElementById("msg").innerHTML="The estimated service cost :"+sum;
    return sum;
}

function getYearlyMaintenanceCost(){
    var result=0;
    if(document.getElementById("maintenance").checked){
        result=document.getElementById("maintenance").value;
    }
    disc=calculateDiscount();
    totalCost= getServiceCost();
    if(disc==0){
    totalCost+=parseInt(result);
    return document.getElementById("in").innerHTML="Estimated service price with maintenance :"+totalCost;
    }
    else{
        disc+=parseInt(result);
        return document.getElementById("dm").innerHTML="Estimated service price with maintenance and discount :"+Math.round(disc);
    }
}

function calculateDiscount(){
 var serviceCost=getServiceCost();
 var count=getTotalService();
 var discount=0;
 if(count>2){
    discount=serviceCost-(serviceCost*15/100);
 }
  document.getElementById("discount").innerHTML="discount price :"+Math.round(discount);
  return discount;

}

function bookAppointment(){
    event.preventDefault();
    getTotalService();
    getServiceCost();
    getYearlyMaintenanceCost();
    calculateDiscount();
}
