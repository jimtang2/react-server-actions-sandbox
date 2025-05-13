import Form from "next/form";
import {submitFormAction} from "@/lib/actions"

export default function Home({
  submitFormAction
}: {
  submitFormAction: (formData: FormData) => void
}) {

  console.log(submitFormAction)

  return (
    <main>
      <p>Server action => page props</p>
      <p>submitFormAction === undefined: {`${submitFormAction === undefined}`}</p>

      <Form action={submitFormAction}>
        <label htmlFor="subject">Subject</label>
        <input type="text" name="subject" defaultValue="abc" required />

        <label htmlFor="message">Message</label>
        <textarea name="message" required defaultValue="def" />

        <label htmlFor="email">E-mail</label>
        <input type="text" name="email" required defaultValue="abc@def" />

        <button className="bg-blue-500">Submit</button>
      </Form>

    </main>
  );
}
