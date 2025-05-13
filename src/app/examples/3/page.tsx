import Form from "next/form";
import {submitFormAction} from "@/lib/actions"

export default function Home() {
  console.log(submitFormAction)
  return (
    <main>
      <Form action={submitFormAction}>
        <label htmlFor="subject">Subject</label>
        <input type="text" name="subject" defaultValue="abc" required />

        <label htmlFor="message">Message</label>
        <textarea name="message" required defaultValue="def" />

        <label htmlFor="email">E-mail</label>
        <input type="text" name="email" className="mb-4" required defaultValue="abc@def" />

        <button>Submit</button>
      </Form>

    </main>
  );
}
