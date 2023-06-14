import React, { useEffect, useState } from 'react'
import {Pagination} from '@mui/material'

export default function AppPagination({currentPage},{setCurrentPage}) {

  // const handleChange = (e,p) => {
  //   setCurrentPage(p)
  // }

  return (
    <>
        <Pagination count={10}  color="primary" ></Pagination>
        {console.log({currentPage})}
    </>
  )
}