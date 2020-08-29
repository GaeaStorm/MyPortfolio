import PropTypes from 'prop-types'
import React from 'react';
import Typist from 'react-typist';

export default class TypistCycle extends React.Component {
  constructor(props) {
    super(props);

    this.totalCycles = this.props.numberOfCycles;
    this.isInfinite = (this.totalCycles < 0);

    this.lineDidFinish = this.lineDidFinish.bind(this);

    this.state = {
      currentLine: 0,
      cyclesCompleted: 0,
    };
  }

  lineDidFinish() {
    let nextLine = this.state.currentLine;
    if (nextLine >= this.props.content.length) {
      nextLine = 0;
    } else {
      nextLine += 1;
    }

    let nextCycle = this.state.cyclesCompleted;
    if (nextLine === 0) {
      nextCycle += 1;
    }

    setTimeout(() => {
      this.setState({
        currentLine: nextLine,
        cyclesCompleted: nextCycle,
      });
    }, this.props.segmentDelay * 1000);
  }

  render() {
    const shouldCallback = (this.state.cyclesCompleted < this.totalCycles || (this.isInfinite));
    const callback = shouldCallback ? this.lineDidFinish : null;

    const lineToPrint = this.props.content[this.state.currentLine];

    const typistKey = `typist-${this.state.currentLine}:${this.state.cyclesCompleted}`;

    return (
      <Typist
      style={{
        show: false,
        blink: false,
        element: "|"
      }}
      key={typistKey}
      onTypingDone={() => callback()}

      className={this.props.className}
      avgTypingDelay={this.props.avgTypingDelay}
      stdTypingDelay={this.props.stdTypingDelay}
      startDelay={this.props.startDelay}
      cursor={this.props.cursor}
      onCharacterTyped={this.props.onCharacterTyped}
      onLineTyped={this.props.onLineTyped}
      delayGenerator={this.props.delayGenerator}
      >
      <span>{lineToPrint}</span>
      <Typist.Backspace count={lineToPrint? lineToPrint.length: 0} delay={1000} />
      </Typist>
    );
  }
}
TypistCycle.propTypes = {
  ...Typist.propTypes,
  numberOfCycles: PropTypes.number,
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
  segmentDelay: PropTypes.number,
};
TypistCycle.defaultProps = {
  numberOfCycles: 1,
  segmentDelay: 0.44,
};
