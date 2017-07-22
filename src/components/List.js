var React = require('react');
var InlineForm = require('./InlineForm');
var AddEvent = require('./AddEvent');

class List extends React.Component {
    state = {
      events: this.props.events
    };
  handleClick = (e) => {
    var event = Object.assign({}, this.state.events[e.target.id], 
      {[e.target.title]:  <InlineForm 
                            updateCell={this.props.updateCell} 
                            name={e.target.title} 
                            value={e.target.innerText} 
                            xxx={e.target.id} 
                            events={this.state.events}/>
      });
    var events = this.state.events
    events[e.target.id] = event;
    this.props.makeForm(events);
  }
  render() {
    return (
      <div>
        <table>
        <tr><td>ID</td><td>Start</td><td>Duration</td><td>End</td><td>Name</td></tr><tbody>
        {this.props.events.map((ev) => {
           return(
             <tr key={ev.position}>
             <td>{ev.position}</td>
             <td id={ev.position-1} title = "start_time" onClick={this.handleClick}>{ev.start_time}</td>
             <td id={ev.position-1} title = "duration" onClick={this.handleClick}>{ev.duration}</td>
             <td id={ev.position-1} title = "end_time" onClick={this.handleClick}>{ev.end_time}</td>
             <td id={ev.position-1} title = "text" onClick={this.handleClick}>{ev.text}</td>
             </tr>
           ) 
        })}
        </tbody></table>
        <AddEvent events = { this.state.events } addRow={this.props.addRow} />
      </div>
    )
  }
}
module.exports = List;