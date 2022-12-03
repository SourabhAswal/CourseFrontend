import React from 'react'
import { Button,Card } from 'react-bootstrap'
import Swal from 'sweetalert2'


class UpdateApi extends React.Component{


    constructor(props){
        super(props)
        this.state={
            
            employee:[],
            employeearr:{ "id":null,"firstname":"","lastname":"","email":"","address":"","salary":""}

        }
    }



    componentDidMount=()=>{
        const url="http://localhost:8084/employee/showemployee";
        fetch(url).then((response) => response.json())
        .then(data => {this.setState({ employee: data });
            
        });


    }

handleclick=async e =>{
    e.preventDefault()
    const{employeearr}=this.state
    var letters =  /^[a-zA-Z\s]*$/;
    var emailvalid=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const url="http://localhost:8084/employee/updateemployee/"
    const request = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employeearr)
    };
try{

    if( employeearr.firstname=="" || employeearr.lastname=="" || employeearr.email=="" ||employeearr.address=="" || employeearr.salary==""   ){
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Field should not be empty',
          showConfirmButton: false,
          timer: 1500
        })

      }
      else if(!employeearr.firstname.match(letters)){
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'First Name should be alphabets',
          showConfirmButton: false,
          timer: 1500
        })
      }
      else if(!employeearr.lastname.match(letters)){
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Last Name should be alphabets',
          showConfirmButton: false,
          timer: 1500
        })
      }
      else if(!employeearr.email.match(emailvalid)){
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Invalid Email format',
          showConfirmButton: false,
          timer: 1500
        })

      }



      else{
        const response= await  fetch(url+employeearr.id, request)
        if(response){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Employee record update successfully',
                showConfirmButton: false,
                timer: 1500
              })
            this.setState({employeearr:{"id":"","firstname":"","lastname":"","email":"","address":"","salary":""}})
              
        }

      }
   
    

}catch(e){
    console.log(e)
}
   
        

}

handlechangeselect=(e)=>{
    let { employeearr,employee ,view} = this.state;
    employeearr[e.target.name] = e.target.value
    
    this.setState({ employeearr })

    for (var i = 0; i < this.state.employee.length; i++){

        if(this.state.employee[i].id==employeearr.id){

            this.setState({employeearr:{"id":employee[i].id,"firstname":employee[i].firstname,"lastname":employee[i].lastname,"email":employee[i].email,"address":employee[i].address,"salary":employee[i].salary}})
        }
    }


}

handlechange=(e)=>{

    let { employeearr } = this.state;
    employeearr[e.target.name] = e.target.value
    
    this.setState({ employeearr })
    console.log(employeearr)
}



    render(){
        const{employee,employeearr}=this.state
        
        return(<>
        <div style={{marginLeft:"30%",width:"600px",marginTop:"1%"}}>
        <h1 style={{marginLeft:"20%"}}>Update Employee Record</h1><br/>
<Card>
  <Card.Header>Featured</Card.Header>
  <Card.Body><div style={{marginLeft:"150px"}}>
  <form onSubmit={this.handleclick}>
      
                <select name="selectList" id="selectList" name="id" onChange={this.handlechangeselect}>
                <option  selected="true" disabled="disabled">select</option>
        {  employee.map((employeearr)=> <option value={employeearr.id}>{employeearr.id}</option>
                                                            
        
        ) }
                        
                </select><br/><br/>
                <span> First Name :<input type="text" name="firstname"  value={employeearr.firstname} placeholder="First name" onChange={this.handlechange}/></span>
              <br/><br/>
            <span>Last Name : <input type="text" name="lastname"  value={employeearr.lastname} placeholder="Last name" onChange={this.handlechange}/></span>  
              <br/><br/>
             <span> Email    :  <span style={{marginLeft:"35px"}}><input  type="text" name="email" value={employeearr.email} placeholder=" Email" onChange={this.handlechange} /></span>  </span> 
              <br/><br/>
              <span> Address : <span style={{marginLeft:"17px"}}><input type="text" name="address" value={employeearr.address} placeholder="Address" onChange={this.handlechange} /></span></span>
              <br/><br/>
             <span> Salary : <span  style={{marginLeft:"30px"}}><input type="number" name="salary" value={employeearr.salary}  placeholder="Salary" onChange={this.handlechange} /></span></span> 
              <br/><br/>
              <Button variant="primary" type="submit">Update</Button>
            </form>
  </div>
  
   
    
  </Card.Body>
</Card>
</div>
        


        </>)
    }


}



export default UpdateApi