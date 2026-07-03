console.log(
"%cStudent Eligibility Checker Loaded",
"color:green;font-size:20px;font-weight:bold;"
);
let studentName = "Samiullah";
let age = 22;
let marks = 78;
let attendance = 85;
let cgpa = 3.4;
console.table({
    Student: studentName,
    Age: age,
    Marks: marks,
    Attendance: attendance,
    CGPA: cgpa
});
document.getElementById("student").innerHTML =
`Student Name : ${studentName}`;
document.getElementById("age").innerHTML =
`Age : ${age}`;
document.getElementById("marks").innerHTML =
`Marks : ${marks}`;
document.getElementById("attendance").innerHTML =
`Attendance : ${attendance}%`;
document.getElementById("cgpa").innerHTML =
`CGPA : ${cgpa}`;
let hour = new Date().getHours();
let greeting = "";
if(hour < 12){
    greeting = "Good Morning";
}
else if(hour < 17){
    greeting = "Good Afternoon";
}
else{
    greeting = "Good Evening";
}
document.getElementById("greeting").innerHTML =
`${greeting}, Samiullah`;
function showTime(){
    let time = new Date();
    document.getElementById("time").innerHTML =
    `Current Time : ${time.toLocaleTimeString()}`;
}
showTime();
setInterval(showTime,1000);
function checkEligibility(){
    console.log("Checking Student Eligibility...");
    let total = 100;
    let percentage = (marks / total) * 100;
    document.getElementById("percentage").innerHTML =
    `Percentage : ${percentage.toFixed(2)}%`;
    let score = (marks + attendance + cgpa * 10) / 3;
    document.getElementById("score").innerHTML =
    `Eligibility Score : ${score.toFixed(2)}`;
    console.log(marks >= 50);
    console.log(attendance >= 75);
    console.log(cgpa >= 2.5);
    console.log(studentName == "Samiullah");
    console.log(studentName != "Ali");
    
    if(marks >= 50 && attendance >= 75 && cgpa >= 2.5){
        document.getElementById("result").innerHTML =
        "Status : Eligible ✅";}
    else{
        document.getElementById("result").innerHTML =
        "Status : Not Eligible ❌";}
    if(marks >= 50){
        if(attendance >= 75){
            if(cgpa >= 2.5){
                document.getElementById("message").innerHTML =
                "Congratulations! You are eligible for the internship.";
            }
            else{
                document.getElementById("message").innerHTML =
                "Improve your CGPA.";
            }}
        else{
            document.getElementById("message").innerHTML =
            "Improve your Attendance.";
        }}
    else{
        document.getElementById("message").innerHTML =
        "Improve your Marks.";
    }
    let remarks = "";
    if(marks >= 90){
        remarks = "Excellent";
    }
    else if(marks >= 80){
        remarks = "Very Good";
    }
    else if(marks >= 70){
        remarks = "Good";
    }
    else if(marks >= 60){
        remarks = "Average";
    }
    else{
        remarks = "Poor";
    }
    document.getElementById("remarks").innerHTML =
    `Remarks : ${remarks}`;
    let scholarship = "";
    if(marks >= 85 && attendance >= 90){
        scholarship = "Eligible";
    }
    else{
        scholarship = "Not Eligible";
    }
    document.getElementById("scholarship").innerHTML =
    `Scholarship : ${scholarship}`;
    let card = document.querySelector(".container");
    if(marks >= 50 && attendance >= 75 && cgpa >= 2.5){
        card.style.border = "5px solid green";
    }
    else{
        card.style.border = "5px solid red";
    }
document.querySelector("button").disabled = true;
document.getElementById("resetBtn").style.display = "block";
}
function resetData(){
document.getElementById("result").innerHTML="";
document.getElementById("message").innerHTML="";
document.getElementById("remarks").innerHTML="";
document.getElementById("scholarship").innerHTML="";
document.getElementById("percentage").innerHTML="";
document.getElementById("score").innerHTML="";
document.querySelector(".container").style.border="none";
document.getElementById("resetBtn").style.display="none";
document.querySelector("button").disabled = false;
}