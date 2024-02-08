import { useDispatch, useSelector } from 'react-redux';
import {setPopulationFilterMaximum, setPopulationFilterMinimum} from "../reducers.jsx";
import {fetchCities} from "../../map/overpass/reducer.jsx";
import {filtersPopulationMaximumFilter, filtersPopulationMinimumFilter} from "../selectors.jsx";
import {INPUT_STEP, MAX_POPULATION} from "./const.jsx";

export default function PopulationFilters() {
    const dispatch = useDispatch();
    const minimumFilter = useSelector(filtersPopulationMinimumFilter);
    const maximumFilter = useSelector(filtersPopulationMaximumFilter);

    const changeMinimalFilter = (event) => {
        dispatch(setPopulationFilterMinimum(parseInt(event.target.value)));
        if(minimumFilter > maximumFilter)
            dispatch(setPopulationFilterMaximum(minimumFilter));
        dispatch(fetchCities);
    };

    const changeMaximalFilter = (event) => {
        dispatch(setPopulationFilterMaximum(parseInt(event.target.value)));
        if (maximumFilter < minimumFilter)
            dispatch(setPopulationFilterMinimum(maximumFilter));
        dispatch(fetchCities);
    };

    return (
        <div>
            <label htmlFor="population-filter-slider">Minimal population filter: <br/> {minimumFilter}</label>
            <br/>
            <input
                type="range"
                min="0"
                max={MAX_POPULATION}
                step={INPUT_STEP}
                value={minimumFilter}
                onChange={changeMinimalFilter}
            />
            <br/>
            <label htmlFor="population-filter-slider">Maximal population filter: <br/> {maximumFilter}</label>
            <br/>
            <input
                type="range"
                min="0"
                max={MAX_POPULATION}
                step={INPUT_STEP}
                value={maximumFilter}
                onChange={changeMaximalFilter}
            />
        </div>
    );
}