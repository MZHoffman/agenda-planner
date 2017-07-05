var React = require('react');

class InlineForm extends React.Component{
    state = {
      events: this.props.events,
      value: this.props.value,
      name: this.props.name,
      xxx: this.props.xxx,
    }
  componentWillReceiveProps(nextProps) {
    this.setState({ events: nextProps.events });
  }
  handleChange = (event) => {
    this.setState({value: event.target.value});
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
      <form onSubmit={this.handleSubmit} onKeyUp={this.handleonKeyUp}>
        <input type="text" onBlur={this.handleonBlur} name={this.state.name} value={this.state.value} onChange={this.handleChange}/>
      </form>
    )
  }
}
module.exports = InlineForm;