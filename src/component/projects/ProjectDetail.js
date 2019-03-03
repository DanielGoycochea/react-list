import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom'
import EditProject from './EditProject';


class ProjectDetail extends Component{
    state= {};
    componentDidMount(){
        this.getSingleProject();
    }

    getSingleProject=()=>{
        const {params} = this.props.match;
        fetch (`http://localhost:3005/api/projects/${params.id}`)
        .then(responseFromApi =>{
                responseFromApi.json()
                .then(datos=>{
                    const theProject = datos;
                    this.setState(theProject);
                })
            .catch(err=> console.log(err))
            }
        )
        
        
    }

    
    
    
    render (){
        return (
            
            <div>
            
            <h1>{this.state.title}</h1>
            <p>{this.state.description}</p>
            <Link to={'/projects'}>Back</Link>
            
            </div>)
    }
}
console.log(ProjectDetail)
export default  ProjectDetail