import React, {Component} from 'react';
import {Link} from 'react-router-dom'
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

    renderEditForm = () =>{
        if(!this.state.title){
            this.getSingleProject();
        }else{
            return <EditProject theProject={this.state} getTheProject={this.getSingleProject} {...this.props}/> 
        }
    }
    
    deleteProject =(id) =>{
        const {params} = this.props.match;
        const options={
            method: "DELETE",
            };
        fetch(`http://localhost:3005/api/projects/${params.id}`,options)
        .then( responseFromApi =>{
            responseFromApi.json()
            this.props.history.push('/projects'); // !!!         
        })
        .catch((err)=>{
            console.log(err)
        })

    }


    render (){
        return (
            
            <div>
            
            <h1>{this.state.title}</h1>
            <p>{this.state.description}</p>
            <div>{this.renderEditForm()}</div>
            <button onClick={()=> this.deleteProject(this.state._id)}>delete</button>
            <Link to={'/projects'}>Back</Link>
            
            </div>)
    }
}

export default  ProjectDetail