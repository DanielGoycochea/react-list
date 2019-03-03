import React, {Component} from 'react'

class AddProject extends Component{
    state={
        title:"",
        decription:""
    }
handleFormSummit = event=>{
    event.preventDefault()
    const title = this.state.title
    const description =this.state.description
    const data = {
        title:title,
        description: description
    }
    const options={
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };

    fetch("http://localhost:3005/api/projects", options)
    .then(()=>{
        this.props.getData();//actualiza la informacion
        this.setState({
            title: "", 
            description: ""});
    })
    .catch(error=> console.log(error));
}
    handleChange = event =>{
        const {name, value}= event.target
        this.setState({[name]: value})
    }
    render (){
        return (
            <div>
                <form onSubmit={this.handleFormSummit}>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={this.state.title }onChange={e=>this.handleChange(e)}/>
                    <label htmlFor="descrption">Descripcion del  Proyecto</label>
                    <textarea name="description" value={this.state.description} onChange={e=>this.handleChange(e)}/>
                    <input type="submit" value="crear proyecto"/>
                </form>
            </div>
        )
    }
    
}

export default AddProject


