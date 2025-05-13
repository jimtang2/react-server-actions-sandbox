"use client"
import {submitFormAction} from "@/lib/actions"

export default function Home() {

  const handleOnClick = (event: React.SyntheticEvent<HTMLElement>) => {
    let formData = new FormData(event.target.form)
    submitFormAction(formData)
  }

  return (
    <main>
      <form>
        <label htmlFor="subject">Subject</label>
        <input type="text" name="subject" defaultValue="abc" required />

        <label htmlFor="message">Message</label>
        <textarea name="message" required defaultValue="def" />

        <label htmlFor="email">E-mail</label>
        <input type="text" name="email" required defaultValue="abc@def" />

        <button onClick={handleOnClick} type="button">Submit</button>
      </form>

    </main>
  );
}
