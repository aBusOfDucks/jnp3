
import { useDispatch } from 'react-redux';
import {fetchCities} from "../../map/overpass/reducer.jsx";
import {setNameFilter, setPopulationFilterMaximum, setPopulationFilterMinimum} from "../reducers.jsx";

export default function filterButton() {
    const dispatch = useDispatch();

    const changeTheme = () => {
        dispatch(setNameFilter());
        dispatch(setPopulationFilterMinimum());
        dispatch(setPopulationFilterMaximum());
        dispatch(fetchCities());
    };

    return (
        <button onClick={changeTheme}>
            Filter
        </button>
    );
}