var today=new Date();
var getweekend=today.getDay();
document.write("day="+ getweekend+"<br><br>");
if(( getweekend==0)||( getweekend==6)){
    document.write( getweekend+"is weekend");
}
else{
    document.write(  getweekend+" is not a weekend day");
}