import initStore from '../initStore'
import { isObject, isFunction } from 'lodash'

describe('Init store', () => {
  describe('When NODE_ENV is not equal to development', () => {
    test('Should be initStore return object', () => {
      expect(isObject(initStore())).toBeTruthy()
    })

    test('Should be initStore contain functions dispatch, subscribe, getState, replaceReducer', () => {
      const { store } = initStore()
      expect(isFunction(store.dispatch)).toBeTruthy()
      expect(isFunction(store.subscribe)).toBeTruthy()
      expect(isFunction(store.getState)).toBeTruthy()
      expect(isFunction(store.replaceReducer)).toBeTruthy()
    })

    test('Should be add middlewares epicMiddleware and combineActionsMiddleware', () => {
      const { middlewareApplied } = initStore()
      const expected = [ 'epicMiddleware', 'combineActionsMiddleware' ]
      expect(middlewareApplied).toEqual(expect.arrayContaining(expected))
    })
  })

  describe('When NODE_ENV is equal to development', () => {
    beforeEach(() => {
      process.env.NODE_ENV = 'development'
    })

    afterEach(() => {
      process.env.NODE_ENV = 'test'
    })

    test('Should be add middlewares epicMiddleware, combineActionsMiddleware and logger', () => {
      const { middlewareApplied } = initStore()
      const expected = [ 'epicMiddleware', 'combineActionsMiddleware' ]
      expect(middlewareApplied).toEqual(expect.arrayContaining(expected))
    })
  })

  describe('When process is browser', () => {
    beforeEach(() => {
      process.browser = true
      window.devToolsExtension = () => {
        return (f) => f
      }
    })

    test('Should be add devToolsExtension', () => {
      const { middlewareApplied } = initStore()
      const expected = [ 'epicMiddleware', 'combineActionsMiddleware' ]
      expect(middlewareApplied).toEqual(expect.arrayContaining(expected))
    })
  })
})
