import React from 'react'
import FormInputMesin from '../../components/mesin/FormInputMesin'
import TableMesin from '@/app/components/mesin/TableMesin'
import DialogMesin from '@/app/components/mesin/DialogMesin'
const page = () => {
  return (
    <div>
      <DialogMesin/>
      <TableMesin/>
    </div>
    
  )
}

export default page