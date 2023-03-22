import { useDispatch} from 'react-redux';
import { addFilter, removeFilter } from '../filter/filterSlice';
import { JobPosition } from './JobPosition';
import { useFetchPositions } from './useFetchPositions';
import { useFilterPositions } from './useFilterPositions';

const JobList = () => {

  useFetchPositions();
  const positions = useFilterPositions();

  const dispatch = useDispatch();

  const handlerAddFilter = (filter) => {
    dispatch(addFilter(filter))
  };

  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition 
        key={item.id} 
        {...item} 
        handlerAddFilter={handlerAddFilter}
        />
      ))}
    </div>
  )
};

export {JobList};