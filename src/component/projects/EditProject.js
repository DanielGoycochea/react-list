import React, {Component} from 'react';

class EditProject extends Component{
    state ={
        title:this.props.theProject.title,
        description: this.props.theProject.description
    }

    handleFormSubmit =(event)=>{
        const title =this.state.title;
        const description= this.state.description;
        const data = {
            title:title,
            description: description
        }
        const options={
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };
        // console.log (options)
        event.preventDefault();
        
        fetch(`http://localhost:3005/api/projects/${this.props.theProject._id}`,options)
            .then(()=>{
                this.props.getTheProject()
                this.props.history.push('/projects');//redireccionaa a Projects
                
            })
            .catch( error => console.log(error) )
            }

    handleChangeTitle = (event)=>{
        this.setState({
            title: event.target.value
            })
        }
        handleChangeDesc=(event)=>{
            this.setState({
                description: event.target.value
            })
        }

        render (){
            return(
                <div>
                    <hr/>
                    <h3>Edit Form</h3>
                    <form onSubmit={this.handleFormSubmit}>
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" value={this.state.title} onChange={e => this.handleChangeTitle(e)}/>
                        <label htmlFor="description">Descripcion</label>
                        <textarea name="description" value= {this.state.description} onChange={e => this.handleChangeDesc(e)}></textarea>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            )
        }
    }

    export default EditProject

