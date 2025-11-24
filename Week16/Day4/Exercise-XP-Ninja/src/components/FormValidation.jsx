import React from 'react'
import Input from './Input'
import ErrorBoundary from './ErrorBoundary'

export default function FormValidation() {
  return (
    <div>
        <form action="submit" className='formval'>
           

         

         
<ErrorBoundary>

   <Input labels="First Name" input_type="text" input_id='first_name' />
</ErrorBoundary>
<ErrorBoundary>

   <Input labels="Last Name" input_type="text" input_id='last_name' />
</ErrorBoundary>
<ErrorBoundary>

   <Input labels="Phone" input_type="tel" input_id='phone' />
</ErrorBoundary>
<ErrorBoundary>

   <Input labels="Email" input_type="email" input_id='email' />
</ErrorBoundary>
        </form>
    </div>
  )
}
