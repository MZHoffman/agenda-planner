var React = require('react');

class AddEvent extends React.Component{
    state = {
      events: this.props.events,
    }
  componentWillReceiveProps(nextProps) {
    this.setState({ events: nextProps.events });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }
  handleonKeyUp = (key) => {
    if (key.key === "Enter"){
      this.props.updateCell(this.state);
    }
  }
  handleonBlur = () => { 
    this.props.updateCell(this.state);
  };
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <button>Add</button>
        <input type="text" onBlur={this.handleonBlur} name={this.state.name} value={this.state.value}/>
      </form>
    )
  }
}
module.exports = AddEvent;