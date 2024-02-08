import NameFilters from "./nameFilter/index.jsx";
import PopulationFilters from "./populationFilter/index.jsx";
import FilterButton from "./filterButton/index.jsx";

export default function Filters() {
    return (
        <div>
            <NameFilters />
            <PopulationFilters />
            <FilterButton />
        </div>
    );
}