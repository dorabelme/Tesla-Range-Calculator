import TeslaClimate from '../components/TeslaClimate/TeslaClimate';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        value: state.config.wheels,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeWheels: (size) => {
            dispatch(changeWheel(size))
        }
    }
}

const TeslaWheelsContainer = connect(mapStateToProps, mapDispatchToProps)(TeslaWheels)

export default TeslaWheelsContainer;