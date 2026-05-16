import React from 'react'
import { LoginPage } from '../../components/loginpage'

import DialogUser from '@/app/components/user/DialogUser'

const page = () => {
  return (
    <div>
      <DialogUser/>
      <LoginPage />
    </div>
  )
}

export default page