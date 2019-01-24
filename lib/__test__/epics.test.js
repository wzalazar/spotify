import { rootEpic } from '../epics'
import { isFunction } from 'lodash'

describe('Epics', () => {
  test('Should be rootEpic a function', () => {
    expect(isFunction(rootEpic)).toBeTruthy()
  })
})
