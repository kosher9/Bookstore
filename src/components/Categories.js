import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

export default function Categories() {
  const dispatch = useDispatch();

  const checkCategories = () => {
    dispatch(checkStatus());
  };
  return (
    <div className="category-list">
      <button type="button" onClick={checkCategories}>
        Check status
      </button>
    </div>
  );
}
