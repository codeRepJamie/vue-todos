import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Mock from 'mockjs'
import {
  getTodoLists,
  saveTodoList,
  getTodoById
} from './data/todo'

export default {
  start() {
    let mockAdapter = new MockAdapter(axios);

    mockAdapter.onGet('/todo/list').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            todos: getTodoLists() // 返回状态为200，并且返回todos数据
          }])
        }, 200);
      })
    });

    mockAdapter.onPost('/todo/addTodo').reply(config => {
      saveTodoList();

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200], {})
        }, 200);
      });
    });

    mockAdapter.onGet('/todo/listId').reply(config => {
      let todo = getTodoById(config.id)
      ;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {todo: todo}]);
        });
      });
    });

    mockAdapter.onPost('/todo/addRecord').reply(config => {
      let params = JSON.parse(config.data),
        todo = getTodoById(params.id)
      ;

      todo.record.push({
        text: params.text, // 随机内容
        isDelete: false, // 是否删除
        checked: false
      });

      saveTodoList({
        id: params.id,
        record: todo.record
      });

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {}]);
        });
      });
    });

  }
}
