import Form from "next/form";

export default function Home() {
  async function submitFormAction(formData: FormData) {
    "use server"
    const subject = formData.get("subject")
    const message = formData.get("message")
    const email = formData.get("email")

    if (subject !== null && message !== null && email !== null) {
      console.log("this works!")
    }
  }

  return (
    <main>
      <Form action={submitFormAction}>
        <label htmlFor="subject">Subject</label>
        <input type="text" name="subject" defaultValue="abc" required />

        <label htmlFor="message">Message</label>
        <textarea name="message" required defaultValue="def" />

        <label htmlFor="email">E-mail</label>
        <input type="text" name="email" required defaultValue="abc@def" />

        <button className="bg-blue-500 my-4" >Send</button>
      </Form>
    </main>
  );
}
