import React from 'react'
import FormInputMesin from '../../components/FormInputMesin'
import TableMesin from '@/app/components/table/TableMesin'
import DialogMesin from '@/app/components/dialog/DialogMesin'

const page = () => {
  return (
    <div>
      <DialogMesin/>
      <TableMesin/>
    </div>
    
  )
}

export default page