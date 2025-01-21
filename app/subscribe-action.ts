"use server"

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get("email")

  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 60))

  // Set a timeout for 60 seconds before the message disappears
  setTimeout(() => {
    console.log("Thank you message will disappear now.")
  }, 2000)

  return {
    success: true,
    message: `Thank you for subscribing!`,
  }
}
