import Mock from 'mockjs' // 导入mockjs 模块

export const getTodoLists = function () {
  return JSON.parse(localStorage.getItem('todos')) || []
};

export const getTodoById = function (id, todoLists = getTodoLists()) {
  return todoLists.find(todo => {
    return id && todo.id === id;
  })
};

export const saveTodoList = function (params = {}) {
  let todoLists = getTodoLists()
  ;

  if (params.id === undefined) {
    params.id = Mock.Random.guid();
    params.title = 'New List';
    params.isDelete = false;
    params.locked = false;
    params.count = 0;
    params.record = [];
    todoLists.push(params);
  } else {
    let todo = getTodoById(params.id, todoLists);

    Object.keys(params).forEach(key => {
      if (params[key] !== undefined) {
        todo[key] = params[key];
      }
    });
  }

  localStorage.setItem('todos', JSON.stringify(todoLists));
};
