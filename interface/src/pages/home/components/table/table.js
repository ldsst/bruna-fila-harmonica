import React, { useEffect, useState } from 'react'
import { Row } from 'antd'
import { TBody, THead } from '..'
import api from '../../../../services/api'

const CustomTable = () => {
  const [apiData, setApiData] = useState([])
  const [filtredArr, setFiltredArr] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const handleFetch = async () => {
      try {
        setIsLoading(true)
        const { data } = await api.get(`/history`)
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
    item.name.toLowerCase().includes(value.toLowerCase()) ||
    item.compositor.toLowerCase().includes(value.toLowerCase()) ||
    item.obra.toLowerCase().includes(value.toLowerCase()) ||
    item.serie.toLowerCase().includes(value.toLowerCase()) ||
    item.regente.toLowerCase().includes(value.toLowerCase()) ||
    item.solista.toLowerCase().includes(value.toLowerCase()) ||
    item.cidade.toLowerCase().includes(value.toLowerCase()) ||
    item.local.toLowerCase().includes(value.toLowerCase()) ||
    item.arranjador.toLowerCase().includes(value.toLowerCase())

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
