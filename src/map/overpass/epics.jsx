import {ofType} from 'redux-observable';
import {from, of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {fetchDataFailure, fetchDataSuccess} from './reducer';
import {fetchCitiesData, fetchWeatherData} from './utils';
import {CITIES_LIMIT} from "../geolocation/const.jsx";
import {filtersNameFilter} from "../../filters/selectors.jsx";

export const overpassEpic = (action$, state$) =>
    action$.pipe(
        ofType('overpass/fetchCities'),
        mergeMap(() =>
            from(fetchCitiesData(state$.value.overpass.bounds)).pipe(
                map((cities) => {
                    return cities.filter((city) =>
                        city.tags.name.toLowerCase().includes((state$.value.filters.name_filter).toLowerCase())
                    ).filter((city) =>
                        Number(city.tags.population) >= state$.value.filters.population_filter_minimum &&
                        Number(city.tags.population) <= state$.value.filters.population_filter_maximum
                    ).slice().sort((a, b) => b.tags.population - a.tags.population).slice(0, CITIES_LIMIT);
                }),
                mergeMap((cities) =>
                    from(fetchWeatherData(cities)).pipe(
                        map((weather) => ({ cities: cities, weather: weather })),
                        catchError((error) => of({ cities, error }))
                    )
                ),
                map((results) => {
                    const c = results.cities;
                    const w = results.weather;
                    const ans = c.map((e, index) => ({city: e, weather: w[index]}));
                    return fetchDataSuccess(ans);
                }),
                catchError((error) => of(fetchDataFailure(error)))
            )
        )
    );