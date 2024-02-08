
import { useDispatch } from 'react-redux';
import {setNameFilterTemp} from "../reducers.jsx";

export default function NameFilters() {
    const dispatch = useDispatch();

    const changeFilter = (event) => {
        dispatch(setNameFilterTemp(event.target.value));
    };

    return (
        <input
            type="text"
            placeholder="Enter city name"
            onChange={changeFilter}
        />
    );
}