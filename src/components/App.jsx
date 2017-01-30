import * as React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from './Main.jsx';
import * as actionCreators from '../actions/actionCreators';

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

function mapStateToProps(state) {  
  return {
    mediums: state.mediums
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default App;
