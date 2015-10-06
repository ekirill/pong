
var React = require('react');
var VendorPrefix = require('react-vendor-prefix');


var ClockFace = React.createClass({
  render: function() {
    var d = this.props.date;
    var millis = d.getMilliseconds();
    var second = d.getSeconds() * 6;
    var minute = d.getMinutes() * 6 + second / 60;
    var hour = ((d.getHours() % 12) / 12) * 360 + 90 + minute / 12;

    return (
      <div className="clock">
        <div className="face">
          <div className="second" style={transform(rotate(second))} />
          <div className="hour" style={transform(rotate(hour))} />
          <div className="minute" style={transform(rotate(minute))} />
        </div>
      </div>
    );
  }
});

function transform(str) {
  vp = VendorPrefix.prefix({styles: { transform: str }});
  return vp.styles;
}

function rotate(deg) {
  return 'rotate(' + deg + 'deg)';
}

var AnalogClock = React.createClass({
  getInitialState: function() {
    return { date: new Date() };
  },
  componentDidMount: function() {
    this.start();
  },
  start: function() {
    var self = this;
    (function tick() {
      self.setState({ date: new Date() });
      requestAnimationFrame(tick);
    }());
  },
  render: function() {
    return <ClockFace date={this.state.date} />;
  }
});

module.exports = AnalogClock;
