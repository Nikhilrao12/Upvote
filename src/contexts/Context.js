import React, { createContext, useState, useEffect } from "react";
export const Upvotec = createContext();

const Context = ({ children }) => {
  const getLocalItems = (key) => {
    let list = localStorage.getItem(key);
    return list ? JSON.parse(list) : [];
  };

  const initialState = {
    myValue: [],
    myValue2: [],
    myValue3: [],
  };

  const [items, setItems] = useState(initialState);
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if (!initialRender) {
      Object.entries(items).forEach(([key, value]) => {
        localStorage.setItem(key, JSON.stringify(value));
      });
    }
  }, [items, initialRender]);

  useEffect(() => {
    if (initialRender) {
      const localStorageItems = {
        myValue: getLocalItems("myValue"),
        myValue2: getLocalItems("myValue2"),
        myValue3: getLocalItems("myValue3"),
      };
      setItems(localStorageItems);
      setInitialRender(false);
    }
  }, [initialRender]);

  return (
    <Upvotec.Provider
      value={{
        items,
        setItems,
      }}
    >
      {children}
    </Upvotec.Provider>
  );
};
export default Context;
