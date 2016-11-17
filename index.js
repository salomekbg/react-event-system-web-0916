const React = require('react');

class Tickler extends React.Component {
  constructor() {
    super();

    this.tickle = this.tickle.bind(this);
  }

  tickle() {
    console.log('Tee hee!');
  }

  render() {
    return (
      hi
      // <button onClick={this.tickle}>Tickle me!</button>
    )
  }
}

module.exports = Tickler;
