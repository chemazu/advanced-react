import React from 'react'
import Sample from './HOC/Sample'
import Callback from './useCallback'
import UseMemoExample from './useMemo/usememo.example'
import Todos from './useReducer'

export default function App() {
  return (
    <div>App
      <p>useMemo</p>
      <UseMemoExample/>
      <hr/>
    <p>useCallback</p>
    <Callback/>
    <hr/>
    <p>useReducer</p>
    <Todos/>
    <Sample data={"rds"}/>
    </div>
  )
}
