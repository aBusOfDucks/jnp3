import NameFilters from "./nameFilter/index.jsx";
import PopulationFilters from "./populationFilter/index.jsx";

export default function Filters() {
    return (
        <div>
            <NameFilters />
            <PopulationFilters />
        </div>
    );
}