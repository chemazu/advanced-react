import React from 'react'
import Callback from './useCallback'
import UseMemoExample from './useMemo/usememo.example'

export default function App() {
  return (
    <div>App
      <p>useMemo</p>
      <UseMemoExample/>
      <hr/>
    <p>useCallback</p>
    <Callback/>
    </div>
  )
}
