import {themeDarkModeSelector} from "../theme/selectors.jsx";
import { useDispatch, useSelector } from 'react-redux';
import {setThemeDark, setThemeLight} from "../theme/recuders.jsx";

export default function DarkModeButton() {
    const dispatch = useDispatch();
    const darkMode = useSelector(themeDarkModeSelector);

    const changeTheme = () => {
        if (darkMode)
            dispatch(setThemeLight())
        else
            dispatch(setThemeDark());
    };

    return (
        <button onClick={changeTheme} class="darkModeButton">
            {darkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
        </button>
    );
};