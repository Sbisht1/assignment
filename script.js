var selectedrow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedrow === null)
    {
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm(); 

}

//Retrieve the data
function readFormData(){
    var formData = {};
    formData["Email"] = document.getElementById("Email").value;
    formData["username"] = document.getElementById("username").value; 
    return formData;
}

//insert the data
function insertNewRecord(data){
var table = document.getElementById("storelist").getElementsByTagName('tbody')[0];
var newRow = table.insertRow(table.length);
 cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Email;
 cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.username;
 cell3 = newRow.insertCell(2);
    cell3.innerHTML = `<button onClick="onEdit(this)"><img src="edit.png"></button> 
                       <button onclick="onDelete(this)"><img src="delete.png"></button>`;
}


//Edit the data
function onEdit(td) {
    selectedrow = td.parentElement.parentElement;
    document.getElementById("Email").value = selectedrow.cells[0].innerHTML;
    document.getElementById("username").value = selectedrow.cells[1].innerHTML;
}

function updateRecord(formData) {
    selectedrow.cells[0].innerHTML = formData.Email;
    selectedrow.cells[1].innerHTML = formData.username;

}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
       var row = td.parentElement.parentElement;
        document.getElementById('storeList');
          row.remove();
          resetForm();
    }
}


//Reset the data
function resetForm() {
    document.getElementById("Email").value = '';
    document.getElementById("username").value = '';
    document.getElementById("password").value = '';
    selectedrow = null;
}



