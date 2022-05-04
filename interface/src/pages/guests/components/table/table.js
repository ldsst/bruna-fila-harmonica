import React, { useEffect, useState } from 'react'
import { Row } from 'antd'
import { TBody, THead } from '..'
import api from '../../../../services/api'

const CustomTable = () => {
  const [apiData, setApiData] = useState([])

  useEffect(() => {
    const handleFetch = async () => {
      const { data } = await api.get(`/guest`)
      data?.length && setApiData(data)
    }

    handleFetch()
  }, [])

  return (
    <Row>
      <THead />
      <TBody apiData={apiData} />
    </Row>
  )
}

export default CustomTable
