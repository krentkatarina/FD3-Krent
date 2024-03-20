import React from "react";
import './filter-list.css';

class Filter extends React.Component {
    state = {
        filterValue: "",
        sorted: false,
        wordList: this.props.words.join("\n")
    };

    changeValue = (e) => {
        const string = e.target.value;
        this.setState({ 
            filterValue: string 
        });
        this.createList(this.state.sorted, string);
    };


    checkedValue = (e) => {
        const checked = e.target.checked;
        this.setState({ 
            sorted: checked 
        });
        this.createList(checked, this.state.filterValue);
    };

    createList = (checked, string) => {
        let list = this.props.words.filter((item) =>
            item.includes(string)
        );
        if (checked) list = list.sort();

        this.setState({ 
            wordList: list.join("\n") 
        });
    };

    deleteValues = () => {
        this.setState({
            sorted: false,
            filterValue: "",
            wordList: this.props.words.join("\n")
        });
    };

  render() {
    return (
      <div>
        <div className="filterRow">
          <input
            type="checkbox"
            checked={this.state.sorted}
            onChange={this.checkedValue} />
            
          <input
            type="text"
            value={this.state.filterValue}
            onChange={this.changeValue} />

          <input type="button" 
            className="filterButton"
            value="сброс" 
            onClick={this.deleteValues} />
        </div>

        <textarea 
            className="wordsBlock" 
            value={this.state.wordList} />
      </div>
    );
  }
}
export default Filter;