import React from 'react';
import * as AllTasks from '../../util/task-categories';

class TaskSearchBar extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            queryString: '',
            isFocus: false,
            searchResults: ["Minor Home Repairs", "Cleaning", "Help Moving", "Event Planning"]
        }
    }

    handleChange(e){
        this.setState({
            queryString: e.currentTarget.value
        }, () => {
            console.log('run query here, then setState searchResult')
        })
    }

    handleFocus(){
        this.setState({
            isFocus: true
        })
    }

    handleBlur(){
        this.setState({
            isFocus: false
        })
    }

    render(){
        // let taskCategory = AllTasks.taskCategories[5];
        // AllTasks.taskImageLink[taskCategory]
        console.log(this.state);

        let renderResults = <div/>

        if (this.state.isFocus){

            renderResults = this.state.searchResults.map( (result, idx) => {
                return (
                    <div className="search-bar-result-box" key={`search-${idx}`}>
                        <img className="search-bar-result-image" src={AllTasks.taskImageLink[result]} />
                        <div className="search-bar-result-text">{result}</div>
                    </div>
                )
            })
        }

        return (
            <div>
                <input 
                    type="text" 
                    className="search-bar-input-field"
                    onChange={this.handleChange.bind(this)}
                    onFocus={this.handleFocus.bind(this)}
                    onBlur={this.handleBlur.bind(this)}
                    value={this.state.queryString} 
                    placeholder="&#xF002; Need something different?"
                />
                <div className="search-bar-result-root-container">
                    {renderResults}
                </div>
            </div>
        )
    }
}

export default TaskSearchBar;