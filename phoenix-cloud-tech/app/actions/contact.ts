"use server";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const company = formData.get("company") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const serviceInterest = formData.get("serviceInterest") as string;
  const message = formData.get("message") as string;

  if (!name || !company || !email || !message) {
    return { status: "error", message: "Please fill in all required fields." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  try {
    // In production, integrate with Resend or nodemailer here
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'noreply@phoenixcloudtech.com',
    //   to: 'info@phoenixcloudtech.com',
    //   subject: `New inquiry from ${name} at ${company}`,
    //   text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\nService: ${serviceInterest}\n\nMessage:\n${message}`,
    // });

    console.log("Contact form submission:", { name, company, email, phone, serviceInterest, message });

    return {
      status: "success",
      message: "Thank you for reaching out. A Phoenix practitioner will be in touch within 1 business day.",
    };
  } catch {
    return {
      status: "error",
      message: "Something went wrong. Please email us directly at info@phoenixcloudtech.com.",
    };
  }
}
