import React from 'react'
import UserForm from '../../components/FormInputUser'
import TableUser from '@/app/components/table/TableUser'
import DialogUser from '@/app/components/dialog/DialogUser'
import { Dialog } from 'radix-ui'

const page = () => {
  return (
    <div>
      <DialogUser/>
      <TableUser/>
      <UserForm />
    </div>
  )
}

export default page