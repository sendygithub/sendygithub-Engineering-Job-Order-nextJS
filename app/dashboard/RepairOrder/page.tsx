import React from 'react'
import RepairOrderForm from "@/app/components/FormInputKerusakan"
import TableRepairOrder from '@/app/components/table/TableRepairOrder'
import DialogRepairOrder from '@/app/components/dialog/DialogRepairOrder'

const page = () => {
  return (
    <div>
      <DialogRepairOrder/>
      <TableRepairOrder/>
     
    </div>
  )
}

export default page