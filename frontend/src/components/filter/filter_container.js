import {connect} from "react-redux";
import Filter from "./filter";
import { getListings } from "../../actions/listing_actions";

const mSTP = state => {
    return{
        listings: state.listings
    }
}

const mDTP = dispatch => {
    return {
        getListings: () => dispatch(getListings())
    }

}

export default connect(mSTP, mDTP)(Filter);