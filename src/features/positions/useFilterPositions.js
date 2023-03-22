import { useSelector } from "react-redux";
import { selectorFilterPositions } from "./PositionsSlice";
import { selectorFilters } from "features/filter/filterSlice";

export function useFilterPositions() {
    const currentFilters = useSelector(selectorFilters)
    const positions = useSelector(state => selectorFilterPositions(state, currentFilters));
    return positions;
};

