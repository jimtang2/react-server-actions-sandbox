"use client"
import {submitFormAction} from "@/lib/actions"

/*

From https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#passing-actions-as-props

```
'use server'
 
export async function create() {}
```


```
'use client'
 
import { create } from './actions'
 
export function Button() {
  return <button onClick={() => create()}>Create</button>
}
```

*/

export default function Button() {
  return (
    <button className="bg-blue-500"
      onClick={() => submitFormAction()}>Send</button>
  );
}

export function Button2({
  submitFormAction
}: {
  submitFormAction: (formData: FormData) => void
}) {
  return (
    <button className="bg-blue-500"
      onClick={submitFormAction} type="button">Send</button>
  );
}
