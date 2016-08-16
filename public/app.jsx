// create seperate components for each functionality of App
// Single Responsiblity Principle:
// smaller, testable, maintainable,...

// Message Component
// Presentational Components (don't maintain state (dummy compoenents))
var GreeterMessage = React.createClass({
  render: function () {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>Express your {message}</p>
      </div>
    );
  }
});

// Form Component
var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
      e.preventDefault();

      var name = this.refs.name.value;

      if (name.length > 0) {
        this.refs.name.value = '';
        this.props.onNewName(name);
      }
  },

  render: function() {
    return (
      <div>
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name"/>
        <button>Set Name</button>
      </form>
      </div>
    );
  }
});

// Main Greeter Component
// Container Component - maintains state render children
var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'Default Message'
    };
  },
  getInitialState: function() {
    return {
      name: this.props.name
    };
  },

  handleNewName: function(name) {
      this.setState({
        name: name
      });
  },


  render: function() {
    var name = this.state.name;
    var message = this.props.message;

    return (
      <div>
{/* Render (to screen) Message Component
  Same as ReactDOM.render*/}
        <GreeterMessage name={name} message={message}/>

{/*Render (to screen) Initialize Form Component
 Same as ReactDOM.render*/}
        <GreeterForm onNewName={this.handleNewName}/>
      </div>


    );
  }
});

var firstname = 'Ermias';

ReactDOM.render(
  <Greeter name={firstname}/>,
  document.getElementById('app')
);
