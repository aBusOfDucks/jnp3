import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { getUserLocationSuccess, getUserLocationFailure } from './reducer';
import {getUserLocation} from "./utils.jsx";

export const geolocationEpic = (action$) =>
    action$.pipe(
        ofType('geolocation/fetchUserLocation'),
        mergeMap(() =>
            from(getUserLocation()).pipe(
                map((position) => getUserLocationSuccess(position)),
                catchError((error) => of(getUserLocationFailure(error)))
            )
        )
    );