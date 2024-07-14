"use client"
import { SubmitButton } from '@/app/form/(component)/submit-button'
//import { createItem } from '@/app/actions'
import { createInvoice } from '@/server/actions';
 
// Server Component
export default async function Home() {

    // async function createInvoice(value: string) {
    //     'use server'
     
    //     // const rawFormData = {
    //     //   customerId: formData.get('field-name')
          
    //     // }
    //     console.log(value);
    // }
  return (
    <form   >
      <input type="text" name="field-name" onChange={(event) => {createInvoice(event.target.value)}} />
      <input type='file' name='file'></input>
      <SubmitButton />
    </form>
  )
}