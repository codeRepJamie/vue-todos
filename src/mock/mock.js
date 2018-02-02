import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Mock from 'mockjs'
import {
  Todos
} from './data/todoList'

/**
 * mock start
 */
export default {
  start () {
    let mock = new MockAdapter(axios) // 创建 MockAdapter 实例

    mock.onGet('/todo/list').reply(config => {
      console.log(config.params);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, Todos])
        }, 2000)
      })
    })

    mock.onPost('/todo/addTodo').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            add: 'todo'
          }])
        }, 2000)
      })
    })
  }
}
