import React from 'react';
import * as AllTasks from '../../util/task-categories';

class TaskSearchBar extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            queryString: '',
            isFocus: false,
            searchResults: ["Minor Home Repairs", "Cleaning", "Help Moving", "Event Planning"],
            noResultsFound: false
        }
    }

    handleChange(e){
        this.setState({
            queryString: e.currentTarget.value
        }, () => {
            
            let taskCategories = AllTasks.taskCategories // array of all task categories
            let searchResults = []; // items in this array will be rendered
            let category; // initialize category variable
            
            for (category of taskCategories){
                if (category.toLowerCase().includes(this.state.queryString.toLowerCase())
                    && searchResults.length < 6){
                    
                    searchResults.push(category);
                    searchResults.sort();
                    this.setState({ noResultsFound: false })
                    
                } else if (searchResults.length === 0){
                    this.setState( { noResultsFound: true} )
                }   
            }

            this.setState(
                { searchResults: searchResults }
            )

        // 1) run query logic, select all tasks that match the input letter',
        // 2) with return response, setState searchResult: response'
                
        })
    };

    handleFocus(){
        this.setState({
            isFocus: true
        })
    };

    handleBlur(){
        this.setState({
            isFocus: false,
            searchResults: ["Minor Home Repairs", "Cleaning", "Help Moving", "Event Planning"],
            noResultsFound: false
        })
    };

    handleClick(e){
        console.log(e)
        // let taskCategory;
        // this.props.initializeTask(taskCategory);
        // this.props.history.push('/task-form/new');
    }

    render(){
        // let taskCategory = AllTasks.taskCategories[5];
        // AllTasks.taskImageLink[taskCategory]

        let renderResults = <div/>

        if (this.state.isFocus && !this.state.noResultsFound){

            renderResults = this.state.searchResults.map( (result, idx) => {
                return (
                    <div onClick={console.log('this does not work', result)} className="search-bar-result-box" key={`search-${idx}`}>
                        <img className="search-bar-result-image" src={AllTasks.taskImageLink[result]} />
                        <div className="search-bar-result-text">{result}</div>
                    </div>
                )
            })
        }
        
        if (this.state.isFocus && this.state.noResultsFound){

            renderResults =
                <div className="search-bar-result-box-noresults">
                We apologize, "<b>{this.state.queryString}</b>" is not a recognized task. 
                <br/>Try us again later!
                </div>
        }

        return (
            <div className="search-bar-root-container">
                <input 
                    type="text" 
                    className="search-bar-input-field"
                    onChange={this.handleChange.bind(this)}
                    onFocus={this.handleFocus.bind(this)}
                    onBlur={this.handleBlur.bind(this)}
                    value={this.state.queryString} 
                    placeholder="&#xF002; What do you need help with?"
                />
                <div className="search-bar-result-root-container">
                    {renderResults}
                </div>
            </div>
        )
    }
}

export default TaskSearchBar;