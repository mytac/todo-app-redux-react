// 清空存储
const resetStorage = () => {
  localStorage.clear();
};

// 重新赋值
const reassignStorage = (key, value) => {
  resetStorage();
  localStorage.setItem(key, JSON.stringify(value));
};

const getStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export { resetStorage, reassignStorage, getStorage };
