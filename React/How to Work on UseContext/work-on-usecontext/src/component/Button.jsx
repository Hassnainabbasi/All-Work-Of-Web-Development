import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/Contex'

export default function Button() {
    const counter = useContext(CounterContext)
  return (
    <div>{counter}</div>
  )
}
