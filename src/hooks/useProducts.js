import { useSelector } from 'react-redux';

const useProducts = () => useSelector(state => state.products) || [];

export default useProducts;
