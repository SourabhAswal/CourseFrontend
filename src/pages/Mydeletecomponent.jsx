import React from 'react'
import { Card ,Button} from 'react-bootstrap'
import Swal from 'sweetalert2'


class Deleteapi extends React.Component{

    constructor(props){
        super(props)
        this.state={
            employee:[],
            employeearr:{id:null},
            
            
        }

    }

    componentDidMount=()=>{
        const url="http://localhost:8084/employee/showemployee";
        fetch(url).then((response) => response.json())
        .then(data => {this.setState({ employee: data });
            
        });

    }

    handlechange=(e)=>{
        const {employeearr}=this.state
        employeearr[e.target.name] = e.target.value
      this.setState({ employeearr })
        

    }


    handleclick = async e =>{
        e.preventDefault();
    const{employeearr}=this.state
    console.log(employeearr)

    const url="http://localhost:8084/employee/removeemployee/"
    try{
        const respone =await fetch(url+employeearr.id, { method: 'DELETE' })
       if(respone){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Employee removed successfully',
            showConfirmButton: false,
            timer: 1500
          })
          
       }

    }
    catch(er){
        console.log(er)
    }
    


}





        render(){
            const{studentarr,employee} =this.state

            return(<>
            <h1 style={{marginLeft:"30%",marginTop:"2%"}}>Remove Employee Record</h1><br/>
            <div style={{marginLeft:"30%",width:"500px",marginTop:"1%"}}>
            
<Card>
  <Card.Header>Featured</Card.Header>
  <Card.Body><div style={{marginLeft:"100px"}}>
  <form onSubmit={this.handleclick}>
      
  <label style={{textAlign:"left"}}> Employee Id :<select name="selectList" id="selectList" name="id" onChange={this.handlechange}>
                <option  selected="true" disabled="disabled">select id</option>
             {  employee.map(e=> <option value={e.id}>{e.id}</option> ) }           
                        
                </select></label><br/><br/>

  
              <Button style={{marginLeft:"100px"}} variant="primary" type="submit">Delete</Button>
            </form>
  </div>
  
   
    
  </Card.Body>
</Card>
</div>






            </>)


        }




    



}



export default Deleteapi