import React, {Component, Fragment} from 'react';
import {changeDecoded, changeEncoded, changePassword, postToDecode, postToEncode} from "./store/actions";
import {connect} from "react-redux";

import './App.css';

class App extends Component {
  toEncode = (event, password, message) => {
    event.preventDefault();

    this.props.encode(password, message)
  };

  toDecode = (event, password, message) => {
    event.preventDefault();

    this.props.decode(password, message)
  };

  render() {
    return (
      <div className='App'>
        <form>
          <textarea
            value={this.props.decoded}
            onChange={(event) => this.props.changeDecoded(event.target.value)}
          />
          <input
            type="text"
            value={this.props.password}
            onChange={(event) => this.props.changePassword(event.target.value)}
          />
          <button onClick={(event) => this.toEncode(event, this.props.password, this.props.encoded)}>&uarr;</button>
          <button onClick={(event) => this.toDecode(event, this.props.password, this.props.decoded)}>&darr;</button>
          <textarea
            value={this.props.encoded}
            onChange={(event) => this.props.changeEncoded(event.target.value)}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  password: state.password,
  encoded: state.encoded,
  decoded: state.decoded
});

const mapDispatchToProps = dispatch => ({
  encode: (password, message) => dispatch(postToEncode(password, message)),
  decode: (password, message) => dispatch(postToDecode(password, message)),
  changePassword: newPassword => dispatch(changePassword(newPassword)),
  changeDecoded: newDecoded => dispatch(changeDecoded(newDecoded)),
  changeEncoded: newEncoded => dispatch(changeEncoded(newEncoded))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);