import Form from "next/form";
import {Button2} from "@/components/button"
import {submitFormAction} from "@/lib/actions"

export default function Home() {
  return (
    <main>
      <p>Server action => button props</p>
      <p></p>

      <Form action={() => {}}>
        <label htmlFor="subject">Subject</label>
        <input type="text" name="subject" defaultValue="abc" required />

        <label htmlFor="message">Message</label>
        <textarea name="message" required defaultValue="def" />

        <label htmlFor="email">E-mail</label>
        <input type="text" name="email" required defaultValue="abc@def" />

        <Button2 action={submitFormAction} />
      </Form>

    </main>
  );
}
