//! creating elements
let tableTag = document.createElement("table");
let capTag = document.createElement("caption")
let capTag2 = document.createElement("caption")
let tr1 = document.createElement("tr");
let td1 = document.createElement("th");
let td2 = document.createElement("th");
let td4 = document.createElement("th");

let tr2 = document.createElement("tr");
let td6 = document.createElement("th");
let td7 = document.createElement("th");

let tr3 = document.createElement("tr");
let td9 = document.createElement("th");
let td10 = document.createElement("td");
let td11= document.createElement("td");
let td12 = document.createElement("td");

let tr4 = document.createElement("tr");
let td13 = document.createElement("th");
let td14 = document.createElement("td");
let td15 = document.createElement("td");
let td16 = document.createElement("td");

//! setting attributes
tableTag.setAttribute("border","1");
tableTag.setAttribute("cellspacing","0");
tableTag.setAttribute("cellpadding","25");
tableTag.setAttribute("align","center")
td1.setAttribute("rowspan","2")
td2.setAttribute("colspan","2")
td4.setAttribute("rowspan","2")

//! adding text content
capTag.textContent = "A test table with merged cells"

td1.textContent = ""
td2.textContent = "Average"
td4.textContent = "Red Eyes"

td6.textContent = "Height"
td7.textContent = "Weight"


td9.textContent = "Males"
td10.textContent = "1.9"
td11.textContent = "0.003"
td12.textContent = "40%"

td13.textContent = "Females"
td14.textContent = "1.7"
td15.textContent = "0.002"
td16.textContent = "43%"

// capTag2.textContent = "A test table with merged cells"


//! appending

tr1.append(td1,td2,td4)
tr2.append(td6,td7)
tr3.append(td9,td10,td11,td12)
tr4.append(td13,td14,td15,td16)

tableTag.append(capTag,tr1,tr2,tr3,tr4, capTag2)



document.body.append(tableTag);