import { useDispatch, useSelector } from 'react-redux';
import {setPopulationFilterMaximumTemp, setPopulationFilterMinimumTemp} from "../reducers.jsx";
import {filtersPopulationMaximumFilterTemp, filtersPopulationMinimumFilterTemp} from "../selectors.jsx";
import {INPUT_STEP, MAX_POPULATION} from "./const.jsx";

export default function PopulationFilters() {
    const dispatch = useDispatch();
    const minimumFilter = useSelector(filtersPopulationMinimumFilterTemp);
    const maximumFilter = useSelector(filtersPopulationMaximumFilterTemp);

    const changeMinimalFilter = (event) => {
        dispatch(setPopulationFilterMinimumTemp(parseInt(event.target.value)));
        if(minimumFilter > maximumFilter)
            dispatch(setPopulationFilterMaximumTemp(minimumFilter));
    };

    const changeMaximalFilter = (event) => {
        dispatch(setPopulationFilterMaximumTemp(parseInt(event.target.value)));
        if (maximumFilter < minimumFilter)
            dispatch(setPopulationFilterMinimumTemp(maximumFilter));
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