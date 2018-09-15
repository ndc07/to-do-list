import React, { Component } from 'react';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            status: false
        };
        this.onCloseForm = this.onCloseForm.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }    

    onCloseForm() {
        this.props.onCloseForm();
    }

    onChange(event) {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if (name === 'status') {
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name] : value
        });
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        Add To Do
                        <p className="text-right" style={{float:'right'}}>
                            <i className="fa fa-times-circle" onClick={this.onCloseForm}></i>
                        </p>
                    </h3>
                </div>
                <div className="panel-body">
                    {/*Form Add*/}
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Name:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Status:</label>
                            <select 
                                className="form-control" 
                                name="status"
                                value={this.state.status}
                                onChange={this.onChange}
                            >
                                <option value={true}>Active</option>
                                <option value={false}>Hiden</option>
                            </select>
                        </div>
                        <div style={{textAlign:'center'}}>
                            <button type="submit" className="btn btn-success" style={{marginRight:'30px'}} name="btnSave">
                                <span className="fa fa-plus"></span>&nbsp;
                                Save
                            </button>
                            <button type="button" className="btn btn-default" name="btnCancel">
                                <span className="fa fa-close"></span>&nbsp;
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaskForm;
