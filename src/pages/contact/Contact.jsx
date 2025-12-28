import { Formik, Form, Field, ErrorMessage } from "formik";
import { contactSchema } from "../../validations/contactSchema";
import SectionWrapper from "../../components/SectionWrapper";
import PageHeader from "../../components/PageHeader";
import BackButton from "../../components/ui/BackButton";

export default function Contact() {
  return (
    <SectionWrapper>
      <div>
        <BackButton />
      </div>
      <PageHeader
        title="Contact Us"
        subtitle="We would love to hear from you! Please fill out the form below to get in touch."
      />
      <Formik
        initialValues={{
          name: "",
          email: "",
          subject: "",
          message: "",
        }}
        validationSchema={contactSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}
      >
        {() => (
          <Form className="max-w-2xl mx-auto space-y-6">
            <div>
              <Field name="name" placeholder="Full Name" className="input" />
              <ErrorMessage name="name" component="p" className="error" />
            </div>

            <div>
              <Field
                name="email"
                placeholder="Email Address"
                className="input"
              />
              <ErrorMessage name="email" component="p" className="error" />
            </div>

            <div>
              <Field as="select" name="subject" className="input">
                <option value="">Select Subject</option>
                <option value="support">Support</option>
                <option value="feedback">Feedback</option>
                <option value="order">Order</option>
                <option value="complaint">Complaint</option>
              </Field>
              <ErrorMessage name="subject" component="p" className="error" />
            </div>

            <div>
              <Field
                as="textarea"
                name="message"
                rows="4"
                placeholder="Your Message"
                className="input"
              />
              <ErrorMessage name="message" component="p" className="error" />
            </div>

            <button className="btn-primary w-full">Send Message</button>
          </Form>
        )}
      </Formik>
    </SectionWrapper>
  );
}
