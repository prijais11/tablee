var values=[];
function submitValues()
{
    var id= document.getElementById('id').value ;
    var name= document.getElementById('name').value;
    var price= document.getElementById('price').value;
    isUnique(id,name,price);
    display();
}

function display()
{
    let result1="";
    for(var i=0;i<values.length;i++)
    {
        result1 += `<tr>
        <td> ${values[i].pid} </td>
        <td> ${values[i].pname} </td>
        <td> ${values[i].pprice} </td>
        </tr>`;
        console.log(values.length);
        
    }
    document.getElementById("result").innerHTML= `<table>
    <tr> 
        <th>Product Id</th>
        <th>Product Name</th>
        <th>Product Price</th>
    </tr>
    ${result1}
    </table>`;
}
function addValues(id,name,price)
{
    values.push({"pid" : id,
    "pname": name , "pprice" : price});
}
function isUnique(id,name,price)
{
    for(var i=0;i<values.length;i++)
    {
            if(id==values[i].pid)
            {
               alert("ID already exists");
               return;
            }
    }   
    addValues(id,name,price);
}