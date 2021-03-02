import React, { Component } from 'react';

class AddTask extends Component {
    minDate = new Date().toISOString().slice(0, 10);
    state = { 
        text: '',
        checked: false,
        date: this.minDate
    }

    handleChange = (e) => {
        const name = e.target.name;
        const type = e.target.type;
        
        if(type === "text" || type === "date") {
            const value = e.target.value;
            this.setState({
                [name]: value
            });
        };

        if(type === "checkbox") {
            const value = e.target.checked;
            this.setState({
                [name]: value
            });
        };
    };

    handleClick = (e) => {
        e.preventDefault();
        const { text, date, checked } = this.state;
        const add = this.props.add(text, date, checked);
        if(add) {
            this.setState({
                text: '',
                checked: false,
                date: this.minDate
            });
        };
    };

    render() { 
        let maxDate = this.minDate.slice(0, 4) * 1 + 1;
        maxDate = maxDate + "-12-31";

        return (
            <div>
                <div className='form'>
                    <input 
                        type="text" 
                        placeholder="dodaj zadanie"
                        value={this.state.text} 
                        name="text" 
                        id="text"
                        onChange={this.handleChange}
                    />
                    <input 
                        type="checkbox" 
                        checked={this.state.checked}
                        name="checked"
                        id="checkbox"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="checkbox">priorytet</label>
                    <label htmlFor="date">Do kiedy zrobić</label>
                    <input 
                        type="date"
                        value={this.state.date}
                        name="date"
                        id="date"
                        onChange={this.handleChange}
                        min={this.minDate}
                        max={maxDate}
                    />
                    <button onClick={this.handleClick}>Dodaj</button>
                </div>
            </div>
          );
    }
}
 
export default AddTask;