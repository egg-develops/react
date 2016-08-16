// create seperate components for each functionality of App
// Single Responsiblity Principle:
// smaller, maintainable,...

// Message Component
// Presentational Components
var GreeterMessage = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Some H1</h1>
        <p>Some Paragraph</p>
      </div>
    );
  }
});

// Form Component
var GreeterForm = React.createClass({
  render: function() {
    return (
      <div>
      <form>
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
      msg: 'Default Message'
    };
  },
  getInitialState: function() {
    return {
      name: this.props.name
    };
  },

  onButtonClick: function(e) {
    e.preventDefault();

    var nameRef = this.refs.name;
    var name = nameRef.value;
    nameRef.value = '';

    if (typeof name === 'string' && name.length > 0) {
      this.setState({
        name: name
      });
    }
  },


  render: function() {
    var name = this.state.name;
    var msg = this.props.msg;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>My First React App</p>
        <p>{msg + ' !'}</p>

// Render (to screen) Message Component
// Same as ReactDOM.render
        <GreeterMessage/>


        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>

// Render (to screen) Initialize Form Component
// same as ReactDOM.render
        <GreeterForm/>

      </div>


    );
  }
});

var firstname = 'Ermias';

ReactDOM.render(
  <Greeter name={firstname}/>,
  document.getElementById('app')
);
