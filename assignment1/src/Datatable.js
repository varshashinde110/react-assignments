import React, { PureComponent } from "react";
import { SimpleTable} from './SimpleTable'

export class Datatable extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            error:null,
            isLoading:false,
            data:[]
        }
    }
    componentDidMount(){
        fetch('https://reqres.in/api/users')
        .then (res => res.json())
        .then(
            result => this.setState({isLoading:true, data:result.data}),
            error => this.setState({isLoading:true, error:error})
        )
    }
    render(){
        const { error, isLoading, data } = this.state
        if(error) return <div>Error : {error.message}</div>
        else if(!isLoading) return <div>Loading...</div>
        else return (
            <SimpleTable border="1" cellPadding="30" cellSpacing="5" data={data} />
        )
    }
}
