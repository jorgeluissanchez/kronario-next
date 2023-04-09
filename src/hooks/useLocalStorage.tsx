"use client"
import { useState, useEffect } from 'react';

const useLocalStorage = (key: any, initialValue: any) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  const create = (data: any) => {
    if (Array.isArray(value)) {
      const newData = [...value, data];
      setValue(newData);
    } else {
      setValue(data);
    }
  };

  const read = () => {
    return value;
  };

  const update = (newData:any) => {
    if (Array.isArray(value)) {
      const index = value.findIndex((item) => item.id === newData.id);
      if (index !== -1) {
        const updatedData = [...value];
        updatedData[index] = { ...updatedData[index], ...newData };
        setValue(updatedData);
      }
    } else {
      setValue(newData);
    }
  };

  const remove = (id:any) => {
    if (Array.isArray(value)) {
      const filteredData = value.filter((item) => item.id !== id);
      setValue(filteredData);
    } else {
      setValue(null);
    }
  };

  return { create, read, update, remove};
};

export default useLocalStorage;
