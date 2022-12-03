import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Swal from 'sweetalert2'



export default class Postdata extends React.Component{

    constructor(props){
        super(props)
        this.state={
          employeearr:{ "firstname":"","lastname":"","email":"","address":"","salary":""}

        }
    }
    handleclick = async e =>{
      e.preventDefault();
  const{employeearr}=this.state
  var letters =  /^[a-zA-Z\s]*$/;
  var emailvalid=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
         const URL="http://localhost:8084/employee/addemployee"
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
          const response=await fetch(URL, {
            method: 'post',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify( employeearr)
          })

          if(response){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Data Added',
              showConfirmButton: false,
              timer: 1500
            })
            this.setState({employeearr:{"firstname":"","lastname":"","email":"","address":"","salary":""}})
  
          }
        }



       

       
                
           
         

      }
      catch(er)
      {
        console.log(er);

      } 
       
  }

onresetchange=()=>{
  this.setState({employeearr:{"firstname":"","lastname":"","email":"","address":"","salary":""}})

}


     handlechange=(e)=>{
      let { employeearr } = this.state;
      employeearr[e.target.name] = e.target.value
      this.setState({employeearr })

     }

    render(){
      console.log(this.state.studentarr)
      
const{employeearr}=this.state;
      
        return(<>
        
        
            

            


<div style={{marginLeft:"30%",width:"600px",marginTop:"5%"}}>
<h1 style={{marginLeft:"25%"}}> Add Employee Record</h1><br/>
<Card>
  <Card.Header>Featured</Card.Header>
  <Card.Body><div style={{marginLeft:"150px"}}>
  <form onSubmit={this.handleclick}>
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
              <Button variant="primary" type="submit">Add</Button>
              <Button variant="primary"  onClick={this.onresetchange}>Reset</Button>
             

      


            </form>
            
  </div>
  
   
    
  </Card.Body>
</Card>
</div>
   
            
            
        </>
        )   }

}