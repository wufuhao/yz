export function formatDate(date, fmt) {
    var year =date.getFullYear();
    var month=date.getMonth()+1;
    if(month<10){
        month='0'+month;
    }
    var day=date.getDate();
    if(day<10){
        day='0'+day;
    }
    var hour=date.getHours();
    var minutes=date.getMinutes();
    var seconds=date.getSeconds();
    if(fmt=="yyyy-MM-dd hh:mm:ss"){
        return year+'-'+month+'-'+day+' '+hour+':'+minutes+':'+seconds;
    }else if(fmt=="yyyy-MM-dd"){
        return year+'-'+month+'-'+day;
    }else if(fmt == 'hh:mm'){
        return hour+":"+minutes;
    }
};