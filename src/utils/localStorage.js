const storage = () => {
  const store = window.localStorage;

  const setStorage = (name, value) => {
    store.setItem(name, JSON.stringify(value));
  };

  const getStorage = (name) => {
    return JSON.parse(store.getItem(name));
  };

  return { setStorage, getStorage };
};

export default storage;
