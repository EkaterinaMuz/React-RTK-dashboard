import { useSelector, useDispatch } from 'react-redux';
import { clearFilters, removeFilter } from './filterSlice';
import { selectorFilters } from './filterSlice';
import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import { nanoid } from '@reduxjs/toolkit';


const FilterPanel = () => {

  const currentFilters = useSelector(selectorFilters);
  const dispatch = useDispatch();

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
       
        <Stack> 
        {
          currentFilters.map(filter => 
            <Badge
            key={nanoid}
            variant="clearable"
            onClear={() => dispatch(removeFilter(filter))}
            >{filter}</Badge>
          )
        }
        </Stack>

        <button onClick={() => dispatch(clearFilters())} className='link'>Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};