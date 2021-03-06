import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreator';
import Main from './Main';
import { withRouter } from 'react-router';

function mapStateToProps(state) {
    return {
        dinner: state.dinners,
        persons: state.person,
        loggedPerson: {},
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default App;