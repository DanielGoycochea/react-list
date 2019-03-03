import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import AddProject from './AddProject'


class ProjectList extends Component{
    state={
        listOfProjects:[]
    }

    getAllProjects = () =>{
        fetch("http://localhost:3005/api/projects").then(responseFromAPI=>{
            responseFromAPI.json().then(json =>{
                this.setState({
                    listOfProjects: json
                })
                
            })
           

        })
    }
    componentDidMount(){
        this.getAllProjects();
    }
    render(){
        return (
            <div>

                <div style={{width:"60%", float:"left"}}>
                {this.state.listOfProjects.map((project, index)=>{
                    return(
                        <div key={project.id}>
                            <Link to={`/projects/${project._id}`}>
                            <h3>{project.title}</h3>
                            </Link>
                            <p style={{maxWidth:"40px"}}>{project.description} </p>


                        </div>
                    )
                })}
                </div>
                <div>
                    <AddProject getData={()=> this.getAllProjects()}/>
                </div>
            </div>
        )


       
    }

}

export default ProjectList 