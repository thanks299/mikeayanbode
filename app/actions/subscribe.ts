"use server"

export async function subscribeToNewsletter(formData: FormData) {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const email = formData.get("email") as string

  // Here you would typically send this email to your newsletter service
  console.log(`Subscribing email: ${email}`)

  // Return a success message
  return { message: "Thank you for subscribing!" }
}

