import ChooseTasker from './choose_tasker';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        tasker: state.entities.users
    }
}

export default connect(mapStateToProps, null)(ChooseTasker);