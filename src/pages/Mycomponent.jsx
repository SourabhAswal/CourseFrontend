import React from 'react'
import { MDBDataTable } from 'mdbreact';


export default class TestApiDemo extends React.Component{

    constructor(props){
        super(props)
        this.state={
           
            employee:[],
            columns: [
                {
                    label: 'Id',
                    field: 'id',
                    width: 150,
                   
                    },
                {
                  label: 'First Name',
                  field: 'firstname',
                  width: 150,
                 
                  },{
                    label: 'Last Name',
                    field: 'lastname',
                    width: 150,
                   
                    },
                  {
                    label: 'Email',
                    field: 'email',
                    width: 150,
                   
                    },
                    {
                        label: 'Address',
                        field: 'address',
                        width: 150,
                       
                        },
                        {
                            label: 'Salary',
                            field: 'salary',
                            width: 150,
                           
                            }
                ]
           
        }
    }


    componentDidMount(){
    

        document.querySelectorAll("#root > div:nth-child(3) > div > div:nth-child(2) > div > div > table > thead:nth-child(3)").item(0).remove()
        const URL="http://localhost:8084/employee/showemployee"
        fetch(URL).then((response) => response.json())
        .then(data => {this.setState({ employee: data });
            
        });
        

        
    }
   

    render(){
        console.log(this.state.course)
        const{employee,columns}=this.state        
        return(<>
        	
        <div style={{marginLeft:"20%",marginTop:"5%",width:"1000px"}}>
        
            <h1 style={{marginLeft:"25%"}}>Employee Record's</h1><br/>
            <MDBDataTable  striped
                    bordered
                    entriesOptions={[5, 10, 20, 50, 100]}
                    entries={5}
                    data={{ columns: columns, rows: employee }}
                    
                    searchTop
                   />
       </div> </>)
    }



}