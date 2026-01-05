import React from 'react'
import RepairOrderForm from "@/app/components/FormInputKerusakan"
import TableRepairOrder from '@/app/components/table/TableRepairOrder'

const page = () => {
  return (
    <div>
      <TableRepairOrder/>
      <RepairOrderForm />
    </div>
  )
}

export default page