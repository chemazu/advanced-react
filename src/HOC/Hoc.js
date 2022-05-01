import React, {Component} from 'react';  
  
export default function Hoc(HocComponent,data){  
    console.log(data)
    
    return class extends Component{  
        render(){  
            return (  
                <div>  
                    <HocComponent></HocComponent>  
                </div>  
  
            );  
        }  
    }   
}  
