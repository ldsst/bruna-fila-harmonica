import React, { useEffect, useState } from 'react'
import { Row } from 'antd'
import { TBody, THead } from '..'
import api from '../../../../services/api'

const CustomTable = () => {
  const [apiData, setApiData] = useState([])
  const [filtredArr, setFiltredArr] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const handleFetch = async () => {
      try {
        setIsLoading(true)
        const { data } = await api.get(`/people`)
        data?.length && setApiData(data)
      } catch (err) {
        setError(err.response.data)
      } finally {
        setIsLoading(false)
      }
    }

    handleFetch()
  }, [])

  useEffect(() => {
    setFiltredArr(apiData)
  }, [apiData])

  const searchFor = (value, item) =>
    item.nomeCompleto.toLowerCase().includes(value.toLowerCase()) ||
    item.email.toLowerCase().includes(value.toLowerCase())

  return (
    <Row>
      <THead setAux={setFiltredArr} searchFor={searchFor} data={apiData} />
      <TBody
        setApiData={setApiData}
        filtredData={filtredArr}
        isLoading={isLoading}
        hasError={error}
      />
    </Row>
  )
}

export default CustomTable
