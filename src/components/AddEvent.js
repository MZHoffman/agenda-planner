var React = require('react');

class AddEvent extends React.Component{
    state = {
      events: this.props.events,
    }
  handleSubmit = (e) => {
    e.preventDefault();
    var position = this.state.events[this.state.events.length-1].position+1;
    var start_time = this.state.events[this.state.events.length-1].end_time;
    var duration = "";
    var end_time = "";
    var text = "";
    var event = {
      position,
      start_time,
      duration,
      end_time,
      text
    };
    var events = this.state.events
    events.push(event);
    this.props.addRow(events)
    console.log(this.state.events);
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <button>Add</button>
      </form>
    )
  }
}
module.exports = AddEvent;