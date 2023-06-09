import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import data from '../../mock/data.json';
import { addPosition } from './PositionsSlice';


export function useFetchPositions() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(addPosition(data))
      }, [dispatch]);
};

