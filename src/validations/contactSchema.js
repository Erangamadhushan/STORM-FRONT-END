import * as Yup from "yup";

export const contactSchema = Yup.object({
  name: Yup.string()
    .min(2, "Too short")
    .required("Full name is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  subject: Yup.string().required("Select a subject"),
  message: Yup.string()
    .min(10, "Message is too short")
    .required("Message is required"),
});
