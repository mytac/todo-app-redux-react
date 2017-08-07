// 清空存储
const resetStorage = () => {
  localStorage.clear();
};

// 重新赋值
const reassignStorage = (key = 'todo-app', value) => {
  resetStorage();
  localStorage.setItem(key, JSON.stringify(value));
};

const getStorage = (key = 'todo-app') => JSON.parse(localStorage.getItem(key));

export { resetStorage, reassignStorage, getStorage };
