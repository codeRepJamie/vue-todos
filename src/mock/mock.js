import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Mock from 'mockjs'
import {
  Todos
} from './data/todoList'

export default {
  start() {
    let mockAdapter = new MockAdapter(axios);
    //console.log(Todos);
    mockAdapter.onGet('/todo/list').reply(config => {
      return new Promise((resolve, reject) => {
        resolve([200, {
          todos: Todos // 返回状态为200，并且返回todos数据
        }])
      })
    });

    mockAdapter.onPost('/todo/addTodo').reply(config => {
      Todos.push({
        id: Mock.Random.guid(),
        title: 'New List',
        isDelete: false,
        locked: false,
        record: []
      });

      return new Promise((resolve, reject) => {
        resolve([200])
      });
    })
  }
}
