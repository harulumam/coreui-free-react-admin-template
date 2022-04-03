import React from 'react'
import {
  CCol,
  CRow,
  CForm,
  CFormInput,
  CFormSelect,
  CFormFloating,
  CFormTextarea,
  CFormLabel,
  CTimePicker,
  CDatePicker,
} from '@coreui/react'

const Input = () => {
  return (
    <CForm className="row g-3">
      <CDatePicker locale="en-US" />
      <CDatePicker date="2022/2/16" locale="en-US" />

      <CCol md={4}>
        <CFormSelect id="autoSizingSelect">
          <option>Pilih Jenis Acara</option>
          <option value="1">Seminar</option>
          <option value="2">Vaksinasi</option>
          <option value="3">Raker</option>
        </CFormSelect>
      </CCol>
      <CCol md={4}>
        <CFormInput placeholder="Kegiatan Acara" aria-label="Kegiatan Acara" />
      </CCol>
      <CCol md={4}>
        <CFormInput placeholder="Anggaran" aria-label="Anggaran" />
      </CCol>

      <CFormFloating>
        <CFormTextarea
          placeholder="Masukkan deskripsi disini ..."
          id="floatingTextarea2"
          style={{ height: '100px' }}
        ></CFormTextarea>
        <CFormLabel htmlFor="floatingTextarea2">Deskripsi</CFormLabel>
      </CFormFloating>
    </CForm>
  )
}

export default Input
