var React = require('react');
var List = require('./components/List');


var events = [
  {
    position: 1,
    start_time: "12:00",
    duration: 25,
    end_time: "12:25",
    text: "start"
    },
  {
    position: 2,
    start_time: "12:25",
    duration: 22,
    end_time: "12:50",
    text: "First speech"
    }
]
class App extends React.Component {
  state = { events };

  updateCell = (e) => {
    console.log(e)
    var event = Object.assign({}, this.state.events[e.xxx], { [e.name]: e.value });
    this.state.events[e.xxx] = event;
    this.setState({ events });
  }
  makeForm = (events) => {this.setState({ events })}
  render() {
    return ( 
      <div className = 'container'>
        <List 
          updateCell = { this.updateCell.bind(this) } 
          makeForm = { this.makeForm.bind(this) } 
          events = { this.state.events }
        /> 
      </div>
    )
  }
}

export default App;