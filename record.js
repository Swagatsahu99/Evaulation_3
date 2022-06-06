// fill in javascript code here

document.querySelector("form").addEventListener("submit",myFunction);


function myFunction(event){
    event.preventDefault()
    
    let name=document.querySelector("#name").value;
    let emp_id=document.querySelector("#employeeID").value;
    let depmnt=document.querySelector("#department").value;
    let experience=document.querySelector("#exp").value;
    let email_id=document.querySelector("#email").value;
    let mob_no=document.querySelector("#mbl").value;

    console.log(name,emp_id,depmnt,experience,email_id,mob_no);

    let td1=document.createElement("td");
        td1=name;
    let td2=document.createElement("td");
    td2=emp_id;
    let td3=document.createElement("td");
    td3=depmnt;
    let td4=document.createElement("td");
    td4=experience
    let td5=document.createElement("td");
    td5=email_id;
    let td6=document.createElement("td");
    td6=mob_no;
    let td7=document.createElement("td");
    if(Number(experience)>5){
        td7="Senior"
    }else if(Number(experience)>2 || Number(experience)>5)
    {
        td7="Junior";
    }else{
        td7="fresher";
    }
    let td8=document.createElement("td");
    td8=""
    let tr=document.createElement("tr");
    document.querySelector("tbody").append(tr);

    tr.setAttribute("id","elem");
    for(i=0;i<8;i++){
        let td=document.createElement("td");
        document.querySelector("#elem").append(td);
    }
    document.querySelector("td").append(td1,td2,td3,td4,td5,td7);
}