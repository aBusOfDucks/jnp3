
import { useDispatch } from 'react-redux';
import {setNameFilter} from "../reducers.jsx";
import {fetchCities} from "../../map/overpass/reducer.jsx";

export default function NameFilters() {
    const dispatch = useDispatch();

    const changeFilter = (event) => {
        dispatch(setNameFilter(event.target.value));
        dispatch(fetchCities());
    };

    return (
        <input
            type="text"
            placeholder="Enter city name"
            onChange={changeFilter}
        />
    );
}