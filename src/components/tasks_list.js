import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';

class TasksList extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                Tasks
            </div>       
        )
    }  
}

function mapStateToProps(state){
    return { tasks: state.tasks }
}

export default connect(mapStateToProps)(TasksList);