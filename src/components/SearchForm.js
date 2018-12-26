import React from 'react'
import { connect } from 'react-redux'
import { fetchTableData } from '../actions/asyncActions'

let SearchForm = ({ dispatch, val }) => {
  let input;
  let handler = (e) => {
    e.preventDefault()
    if (!input.value.trim()) {
      return
    }
    dispatch(fetchTableData({ query: encodeURIComponent(input.value.trim())}))
  }

  return (
    <div>
      <form
       onChange = {e => {
        handler(e)
        }}
        onSubmit ={e => {
          handler(e)
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">Search TV Show</button>
      </form>
    </div>
  )
}
SearchForm = connect()(SearchForm)

export default SearchForm
