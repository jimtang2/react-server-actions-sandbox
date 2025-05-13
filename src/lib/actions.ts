'use server'

export async function submitFormAction(formData: FormData) {
	console.log("from actions.ts")
	const subject = formData.get("subject")
	const message = formData.get("message")
	const email = formData.get("email")

  if (subject !== null && message !== null && email !== null) {
    console.log("this works!")
  }
}
