import React from 'react'

import {
  // CCard,
  // CCardBody,
  // CCardHeader,
  // CCol,
  // CRow,
  CTable,
  CTableBody,
  // CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

const Dashboard = () => {
  return (
    <>
      <CTable bordered>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">No.</CTableHeaderCell>
            <CTableHeaderCell scope="col">Tanggal</CTableHeaderCell>
            <CTableHeaderCell scope="col">Jenis</CTableHeaderCell>
            <CTableHeaderCell scope="col">Kegiatan</CTableHeaderCell>
            <CTableHeaderCell scope="col">Deskripsi</CTableHeaderCell>
            <CTableHeaderCell scope="col">Anggaran</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableHeaderCell scope="row">1</CTableHeaderCell>
            <CTableDataCell>Mark</CTableDataCell>
            <CTableDataCell>Otto</CTableDataCell>
            <CTableDataCell>@mdo</CTableDataCell>
            <CTableDataCell>@mdo</CTableDataCell>
            <CTableDataCell>@mdo</CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </>
  )
}

export default Dashboard
