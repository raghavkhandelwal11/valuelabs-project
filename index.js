

let invoiceData = [
    {
        "invoice_id": 1,
        "client_name": "Peter Saul",
        "client_type": "In-State",
        "date": "2023-01-01",
        "due_date": "2023-01-11",
        "total": "$557",
        "balance": "$700",
        "status": "Paid"
    },

    {
        "invoice_id": 2,
        "client_name": "Sheldon Cooper",
        "client_type": "Out-State",
        "date": "2023-01-05",
        "due_date": "2023-01-16",
        "total": "$500",
        "balance": "$600",
        "status": "Paid"
    },

    {
        "invoice_id": 3,
        "client_name": "Angela Jonson",
        "client_type": "Out-State",
        "date": "2023-01-02",
        "due_date": "2023-01-13",
        "total": "$423",
        "balance": "$845",
        "status": "Draft"
    },


    {
        "invoice_id": 4,
        "client_name": "Jacob Ruben",
        "client_type": "In-State",
        "date": "2023-01-08",
        "due_date": "2023-01-19",
        "total": "$960",
        "balance": "$1350",
        "status": "Partial Payment"
    },

    {
        "invoice_id": 5,
        "client_name": "Antonov Poliovski",
        "client_type": "Out-State",
        "date": "2023-01-02",
        "due_date": "2023-01-13",
        "total": "$350",
        "balance": "$2030",
        "status": "Partial Payment"
    },


    {
        "invoice_id": 6,
        "client_name": "Billie Braine",
        "client_type": "Out-State",
        "date": "2023-01-06",
        "due_date": "2023-01-17",
        "total": "$674",
        "balance": "$800",
        "status": "Draft"
    },

    {
        "invoice_id": 7,
        "client_name": "Christine Howard",
        "client_type": "In-State",
        "date": "2023-01-09",
        "due_date": "2023-01-20",
        "total": "$500",
        "balance": "$950",
        "status": "Paid"
    },

    {
        "invoice_id": 8,
        "client_name": "Raghav Khandelwal",
        "client_type": "Out-State",
        "date": "2023-01-08",
        "due_date": "2023-01-19",
        "total": "$1100",
        "balance": "$4500",
        "status": "Paid"
    },

    {
        "invoice_id": 9,
        "client_name": "Connie Tucker",
        "client_type": "In-State",
        "date": "2023-01-03",
        "due_date": "2023-01-14",
        "total": "$200",
        "balance": "$450",
        "status": "Draft"
    },


    {
        "invoice_id": 10,
        "client_name": "Leonard Hofstadter",
        "client_type": "In-State",
        "date": "2023-01-04",
        "due_date": "2023-01-15",
        "total": "$730",
        "balance": "$800",
        "status": "Paid"
    },

    {
        "invoice_id": 11,
        "client_name": "Vaishnavi Kapoor",
        "client_type": "Out-State",
        "date": "2023-01-01",
        "due_date": "2023-01-12",
        "total": "$620",
        "balance": "$1245",
        "status": "Partial Payment"
    },


    {
        "invoice_id": 12,
        "client_name": "Bunaru Tiosaki",
        "client_type": "In-State",
        "date": "2023-01-03",
        "due_date": "2023-01-14",
        "total": "$710",
        "balance": "$900",
        "status": "Partial Payment"
    },

    {
        "invoice_id": 13,
        "client_name": "Galvin Gayman",
        "client_type": "In-State",
        "date": "2023-01-09",
        "due_date": "2023-01-20",
        "total": "$270",
        "balance": "$625",
        "status": "Draft"
    },

    {
        "invoice_id": 14,
        "client_name": "Robert Kirchoff",
        "client_type": "Out-State",
        "date": "2023-01-06",
        "due_date": "2023-01-17",
        "total": "680",
        "balance": "$850",
        "status": "Draft"
    },


    {
        "invoice_id": 15,
        "client_name": "Lester Carryl",
        "client_type": "In-State",
        "date": "2023-01-07",
        "due_date": "2023-01-18",
        "total": "550",
        "balance": "$750",
        "status": "Partial Payment"
    }

];
const table = document.getElementById("invoice-table");
const head = document.getElementById("table-head");

let toginv = "asc";
let cn = "asc";
let ct = "asc";
let dt = "asc";
let ddt = "asc";
let ttl = "asc";
let bal = "asc";
let st = "asc";

const display = () => {
    const size = invoiceData.length;

    for(let i=0; i<size; i++) {
        let ele = document.createElement("tr");
        ele.innerHTML = `
            <td>${invoiceData[i].invoice_id}</td>
            <td>${invoiceData[i].client_name}</td>
            <td>${invoiceData[i].client_type}</td>
            <td>${invoiceData[i].date}</td>
            <td>${invoiceData[i].due_date}</td>
            <td>${invoiceData[i].total}</td>
            <td>${invoiceData[i].balance}</td>
            <td>${invoiceData[i].status}</td>
        `;
        ele.setAttribute('id', invoiceData[i].invoice_id);
        table.appendChild(ele);
    }
    
}

display();



const compareDates = (d1, d2) => {
    let arr1 = d1.split("-");
    let arr2 = d2.split("-");

    if(parseInt(arr1[0]) < parseInt(arr2[0])) {
        return true;
    } else {
        if(parseInt(arr1[1]) < parseInt(arr2[1])) {
            return true;
        } else {
            if(parseInt(arr1[2]) < parseInt(arr2[2])) {
                return true;
            } else {
                return false;
            }
        }
    }
}

const compareDates2 = (d1, d2) => {
    let arr1 = d1.split("-");
    let arr2 = d2.split("-");

    if(parseInt(arr1[0]) > parseInt(arr2[0])) {
        return true;
    } else {
        if(parseInt(arr1[1]) > parseInt(arr2[1])) {
            return true;
        } else {
            if(parseInt(arr1[2]) > parseInt(arr2[2])) {
                return true;
            } else {
                return false;
            }
        }
    }
}


const applyFilters = () => {


    let sdate = document.getElementById("sdate").value.toString();
    let edate = document.getElementById("edate").value.toString();
    let status = document.getElementById("status").value.toString();
    let client = document.getElementById("client").value.toString();


    if(!sdate && !edate && !status && !client) {
        table.innerHTML = `<thead>${head.innerHTML}</thead>`;
        console.log("first");
        display();
        return;
    }

    const size = invoiceData.length;
    let arr = new Array();

    for(let i=0; i<size; i++) {
        arr.push(i);
    }

    if(sdate) {
        
        for(let i=0; i<size; i++) {
            console.log(compareDates(invoiceData[i].date, sdate));
            if(compareDates(invoiceData[i].date, sdate)) {
                let ind = arr.indexOf(i);
                if(ind != -1) {
                    arr.splice(ind, 1);
                }
            }
            
        }
    }

    if(edate) {
    
        for(let i=0; i<size; i++) {

            if(compareDates2(invoiceData[i].due_date, edate)) {
                
                let ind = arr.indexOf(i);
                if(ind != -1) {
                    arr.splice(ind, 1);
                }
               
            }
        }
        console.log(arr);
    }

    if(status) {
        for(let i=0; i<size; i++) {
            if(invoiceData[i].status != status) {
                let ind = arr.indexOf(i);
                if(ind != -1) {
                    arr.splice(ind, 1);
                }
            }
        }
        console.log(arr);
    }

    if(client) {
        for(let i=0; i<size; i++) {
            if(invoiceData[i].client_type != client) {
                let ind = arr.indexOf(i);
                if(ind != -1) {
                    arr.splice(ind, 1);
                }
            }
        }
        console.log(arr);
    }


    
    table.innerHTML = `<thead>${head.innerHTML}</thead>`;
    for(let i of arr) {
        let ele = document.createElement("tr");
        ele.innerHTML = `
            <td>${invoiceData[i].invoice_id}</td>
            <td>${invoiceData[i].client_name}</td>
            <td>${invoiceData[i].client_type}</td>
            <td>${invoiceData[i].date}</td>
            <td>${invoiceData[i].due_date}</td>
            <td>${invoiceData[i].total}</td>
            <td>${invoiceData[i].balance}</td>
            <td>${invoiceData[i].status}</td>
        `;

        ele.setAttribute("id", invoiceData[i].invoice_id);
        table.appendChild(ele);
    }

    return; 

}


function toggleInvoice() {
    if(toginv == "asc") {
        let items = table.children;
        items = Array.from(items);  // convert the HTMLCollection to an array
        items.shift();
        items.sort((a, b) => parseInt(a.children[0].innerText) - parseInt(b.children[0].innerText));  // sort the elements in ascending order

        table.innerHTML = `<thead>${head.innerHTML}</thead>`;
        for (let i = 0; i < items.length; i++) {
        table.appendChild(items[i]); 
        }
        toginv = "dsc";
    } else {

        let items = table.children;
        items = Array.from(items);  
        items.shift();
        items.sort((a, b) => parseInt(b.children[0].innerText) - parseInt(a.children[0].innerText));  

        table.innerHTML = `<thead>${head.innerHTML}</thead>`;
        for (let i = 0; i < items.length; i++) {
        table.appendChild(items[i]);  
        }
        toginv = "asc";

    }
}




function toggleCn() {
    if(cn == "asc") {
        let items = table.children;
        items = Array.from(items);  
        items.shift();
        items.sort((a, b) =>  a.children[1].innerText.localeCompare(b.children[1].innerText));  

        table.innerHTML = `<thead>${head.innerHTML}</thead>`;
        for (let i = 0; i < items.length; i++) {
        table.appendChild(items[i]);  
        }
        cn = "dsc";
    } else {

        let items = table.children;
        items = Array.from(items);  
        items.shift();
        items.sort((a, b) => b.children[1].innerText.localeCompare(a.children[1].innerText))  

        table.innerHTML = `<thead>${head.innerHTML}</thead>`;
        for (let i = 0; i < items.length; i++) {
        table.appendChild(items[i]);  
        }
        cn = "asc";

    }
}


function toggleCt() {
    if(ct == "asc") {
        let items = table.children;
        items = Array.from(items);  
        items.shift();
        items.sort((a, b) =>  a.children[2].innerText.localeCompare(b.children[2].innerText));  

        table.innerHTML = `<thead>${head.innerHTML}</thead>`;
        for (let i = 0; i < items.length; i++) {
        table.appendChild(items[i]);  
        }
        ct = "dsc";
    } else {

        let items = table.children;
        items = Array.from(items);  
        items.shift();
        items.sort((a, b) => b.children[2].innerText.localeCompare(a.children[2].innerText))  

        table.innerHTML = `<thead>${head.innerHTML}</thead>`;
        for (let i = 0; i < items.length; i++) {
        table.appendChild(items[i]);  
        }
        ct = "asc";

    }
}

function toggleDt() {
    if(dt == "asc") {
        let items = table.children;
        items = Array.from(items);  
        items.shift();
        items.sort((a, b) =>  a.children[3].innerText.localeCompare(b.children[3].innerText));  

        table.innerHTML = `<thead>${head.innerHTML}</thead>`;
        for (let i = 0; i < items.length; i++) {
        table.appendChild(items[i]);  
        }
        dt = "dsc";
    } else {

        let items = table.children;
        items = Array.from(items);  
        items.shift();
        items.sort((a, b) => b.children[3].innerText.localeCompare(a.children[3].innerText))  

        table.innerHTML = `<thead>${head.innerHTML}</thead>`;
        for (let i = 0; i < items.length; i++) {
        table.appendChild(items[i]); 
        }
        dt = "asc";

    }
}


function toggleDdt() {
    if(ddt == "asc") {
        let items = table.children;
        items = Array.from(items);  
        items.shift();
        items.sort((a, b) =>  a.children[4].innerText.localeCompare(b.children[4].innerText));  

        table.innerHTML = `<thead>${head.innerHTML}</thead>`;
        for (let i = 0; i < items.length; i++) {
        table.appendChild(items[i]);  
        }
        ddt = "dsc";
    } else {

        let items = table.children;
        items = Array.from(items);  
        items.shift();
        items.sort((a, b) => b.children[4].innerText.localeCompare(a.children[4].innerText))  

        table.innerHTML = `<thead>${head.innerHTML}</thead>`;
        for (let i = 0; i < items.length; i++) {
        table.appendChild(items[i]);  
        }
        ddt = "asc";

    }
}



function toggleTtl() {
    if(ttl == "asc") {
        let items = table.children;
        items = Array.from(items);  
        items.shift();
        items.sort((a, b) =>  parseInt(a.children[5].innerText.split("$")[1]) -   parseInt(b.children[5].innerText.split("$")[1]));  
        table.innerHTML = `<thead>${head.innerHTML}</thead>`;
        for (let i = 0; i < items.length; i++) {
        table.appendChild(items[i]);  
        }
        ttl = "dsc";
    } else {

        let items = table.children;
        items = Array.from(items);  
        items.shift();
        items.sort((a, b) => parseInt(b.children[5].innerText.split("$")[1]) -   parseInt(a.children[5].innerText.split("$")[1]));  

        table.innerHTML = `<thead>${head.innerHTML}</thead>`;
        for (let i = 0; i < items.length; i++) {
        table.appendChild(items[i]);  
        }
        ttl = "asc";

    }
}


function toggleBl() {
    if(bal == "asc") {
        let items = table.children;
        items = Array.from(items);  
        items.shift();
        items.sort((a, b) =>  parseInt(a.children[6].innerText.split("$")[1]) -   parseInt(b.children[6].innerText.split("$")[1]));  

        table.innerHTML = `<thead>${head.innerHTML}</thead>`;
        for (let i = 0; i < items.length; i++) {
        table.appendChild(items[i]);  
        }
        bal = "dsc";
    } else {

        let items = table.children;
        items = Array.from(items);  
        items.shift();
        items.sort((a, b) => parseInt(b.children[6].innerText.split("$")[1]) -   parseInt(a.children[6].innerText.split("$")[1]));  

        table.innerHTML = `<thead>${head.innerHTML}</thead>`;
        for (let i = 0; i < items.length; i++) {
        table.appendChild(items[i]);  
        }
        bal = "asc";

    }
}




function toggleSt() {
    if(st == "asc") {
        let items = table.children;
        items = Array.from(items);  
        items.shift();
        items.sort((a, b) =>  a.children[7].innerText.localeCompare(b.children[7].innerText));  

        table.innerHTML = `<thead>${head.innerHTML}</thead>`;
        for (let i = 0; i < items.length; i++) {
        table.appendChild(items[i]);  
        }
        st = "dsc";
    } else {

        let items = table.children;
        items = Array.from(items);  
        items.shift();
        items.sort((a, b) => b.children[7].innerText.localeCompare(a.children[7].innerText))  

        table.innerHTML = `<thead>${head.innerHTML}</thead>`;
        for (let i = 0; i < items.length; i++) {
        table.appendChild(items[i]); 
        }
        st = "asc";

    }
}





