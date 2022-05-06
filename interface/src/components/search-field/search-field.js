import React from 'react'
import { Input } from 'antd'

const SearchField = ({ searchFor, data, setAuxData }) => {
  const handleSearch = e => {
    const { value } = e.target
    const filtredData = data.filter(item => searchFor(value, item))
    setAuxData(filtredData)
  }

  return <Input placeholder='Pesquisar' onChange={handleSearch} style={{ width: 200 }} />
}

export default SearchField
