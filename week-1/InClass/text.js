function calcby(yrs){
    return 2021-yrs;
}

function myinfo(fulln,yofb){
    const calcb =calcby(yofb)
    const data="my name is "+fulln+" and i was born in "+calcb;
    return data;
    console.log(myinfo)
}
myinfo("marc",19)