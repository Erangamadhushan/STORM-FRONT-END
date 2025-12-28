import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Lock, Mail, Eye, EyeOff, User, Phone, MapPin } from "lucide-react";
import { userAuth } from "../services/api";
import BackButton from '../components/ui/BackButton';

// Validation Schema
const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Full name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  contactNumber: Yup.string()
    .matches(/^[0-9]{10,12}$/, "Invalid phone number")
    .max(12, "Phone number is too long")
    .min(10, "Phone number is too short")
    .required("Phone number is required"),
  shippingAddress: Yup.object().shape({
    addressLine1: Yup.string().required("Address Line 1 is required"),
    addressLine2: Yup.string(),
    city: Yup.string().required("City is required"),
    postalCode: Yup.string().matches(/^[0-9]{5}$/, "Invalid ZIP code").required("ZIP code is required"),
    state: Yup.string().required("State is required"),
    country: Yup.string().required("Country is required"),
  }),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
  agreeToTerms: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("You must accept the terms and conditions"),
});

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    contactNumber: "",
    shippingAddress: {
      addressLine1: "",
      addressLine2: "",
      city: "",
      postalCode: "",
      state: "",
      country: "",
    },
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  };

  const handleSubmit = async (values, { setSubmitting,setErrors, setFieldError, resetForm }) => {
    try {
      
      const {agreeToTerms,confirmPassword, ...userInfo} = values;
      //console.log(userInfo);
      await userAuth.register(userInfo);
      //console.log(result);

      alert("Account created successfully! Please login to continue.");
      setSubmitting(false);
      resetForm();
      navigate('/login');
      return;
      
    }
    catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed. Please try again.");
      setSubmitting(false);
      return;
    }

  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="">
        <div className="max-w-5xl mx-auto p-4">
            <BackButton />
        </div>
        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-5xl">
            <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-800">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">Create Your Account</h1>
                <p className="text-gray-400 text-sm">
                  Join Storm Watch and get your premium smartwatch
                </p>
              </div>

              <Formik
                initialValues={initialValues}
                validationSchema={RegisterSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, touched, errors }) => (
                  <div className="">
                    <Form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex flex-col gap-6 mt-[44px]">
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium mb-2"
                            >
                              Full Name *
                            </label>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                              <Field
                                type="text"
                                id="name"
                                name="name"
                                className={`w-full bg-black border ${
                                  touched.name && errors.name
                                    ? "border-red-500"
                                    : "border-gray-700"
                                } rounded-lg pl-11 pr-4 py-3 focus:outline-none focus:border-lime-400 transition`}
                                placeholder="John Doe"
                              />
                            </div>
                            <ErrorMessage
                              name="name"
                              component="div"
                              className="text-red-500 text-xs mt-1"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium mb-2"
                            >
                              Email Address *
                            </label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                              <Field
                                type="email"
                                id="email"
                                name="email"
                                className={`w-full bg-black border ${
                                  touched.email && errors.email
                                    ? "border-red-500"
                                    : "border-gray-700"
                                } rounded-lg pl-11 pr-4 py-3 focus:outline-none focus:border-lime-400 transition`}
                                placeholder="you@example.com"
                              />
                            </div>
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="text-red-500 text-xs mt-1"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="contactNumber"
                              className="block text-sm font-medium mb-2"
                            >
                              Phone Number *
                            </label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                              <Field
                                type="tel"
                                id="contactNumber"
                                name="contactNumber"
                                className={`w-full bg-black border ${
                                  touched.contactNumber && errors.contactNumber
                                    ? "border-red-500"
                                    : "border-gray-700"
                                } rounded-lg pl-11 pr-4 py-3 focus:outline-none focus:border-lime-400 transition`}
                                placeholder="+1 (555) 000-0000"
                              />
                            </div>
                            <ErrorMessage
                              name="contactNumber"
                              component="div"
                              className="text-red-500 text-xs mt-1"
                            />
                          </div>

                          

                          <div>
                            <label
                              htmlFor="password"
                              className="block text-sm font-medium mb-2"
                            >
                              Password *
                            </label>
                            <div className="relative">
                              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                              <Field
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                className={`w-full bg-black border ${
                                  touched.password && errors.password
                                    ? "border-red-500"
                                    : "border-gray-700"
                                } rounded-lg pl-11 pr-12 py-3 focus:outline-none focus:border-lime-400 transition`}
                                placeholder="••••••••"
                              />
                              <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-lime-400 transition"
                              >
                                {showPassword ? (
                                  <EyeOff className="w-5 h-5" />
                                ) : (
                                  <Eye className="w-5 h-5" />
                                )}
                              </button>
                            </div>
                            <ErrorMessage
                              name="password"
                              component="div"
                              className="text-red-500 text-xs mt-1"
                            />
                            <p className="text-xs text-gray-500 mt-1">
                              Must be at least 8 characters with uppercase,
                              lowercase, and number
                            </p>
                          </div>

                          <div>
                            <label
                              htmlFor="confirmPassword"
                              className="block text-sm font-medium mb-2"
                            >
                              Confirm Password *
                            </label>
                            <div className="relative">
                              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                              <Field
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                name="confirmPassword"
                                className={`w-full bg-black border ${
                                  touched.confirmPassword &&
                                  errors.confirmPassword
                                    ? "border-red-500"
                                    : "border-gray-700"
                                } rounded-lg pl-11 pr-12 py-3 focus:outline-none focus:border-lime-400 transition`}
                                placeholder="••••••••"
                              />
                              <button
                                type="button"
                                onClick={() =>
                                  setShowConfirmPassword(!showConfirmPassword)
                                }
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-lime-400 transition"
                              >
                                {showConfirmPassword ? (
                                  <EyeOff className="w-5 h-5" />
                                ) : (
                                  <Eye className="w-5 h-5" />
                                )}
                              </button>
                            </div>
                            <ErrorMessage
                              name="confirmPassword"
                              component="div"
                              className="text-red-500 text-xs mt-1"
                            />
                          </div>

                          
                        </div>
                        <div className="flex flex-col gap-2">
                          <div>
                            <h2 className="text-center text-lg font-semibold mb-2">
                              Shipping Information
                            </h2>
                          </div>
                          <div>
                            <label
                              htmlFor="addressLine1"
                              className="block text-sm font-medium mb-2"
                            >
                              Address Line 1 *
                            </label>
                            <div className="relative">
                              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                              <Field 
                                type="text"
                                id="addressLine1"
                                name="shippingAddress.addressLine1"
                                className={`w-full bg-black border ${
                                  touched.shippingAddress?.addressLine1 && errors.shippingAddress?.addressLine1
                                    ? "border-red-500"
                                    : "border-gray-700"
                                } rounded-lg pl-11 pr-4 py-3 focus:outline-none focus:border-lime-400 transition`}
                                placeholder="123 Main St"
                              />
                            </div>
                            <ErrorMessage
                              name="shippingAddress.addressLine1"
                              component="div"
                              className="text-red-500 text-xs mt-1"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="addressLine2"
                              className="block text-sm font-medium mb-2"
                            >
                              Address Line 2
                            </label>
                            <div className="relative">
                              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                              <Field
                                type="text"
                                id="addressLine2"
                                name="shippingAddress.addressLine2"
                                className={`w-full bg-black border ${
                                  touched.shippingAddress?.addressLine2 && errors.shippingAddress?.addressLine2
                                    ? "border-red-500"
                                    : "border-gray-700"
                                } rounded-lg pl-11 pr-4 py-3 focus:outline-none focus:border-lime-400 transition`}
                                placeholder="Apt, Suite, etc. (optional)"
                              />
                            </div>
                            <ErrorMessage
                              name="shippingAddress.addressLine2"
                              component="div"
                              className="text-red-500 text-xs mt-1"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="city"
                              className="block text-sm font-medium mb-2"
                            >
                              City *
                            </label>
                            <div className="relative">
                              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                              <Field
                                type="text"
                                id="city"
                                name="shippingAddress.city"
                                className={`w-full bg-black border ${
                                  touched.shippingAddress?.city && errors.shippingAddress?.city
                                    ? "border-red-500"
                                    : "border-gray-700"
                                } rounded-lg pl-11 pr-4 py-3 focus:outline-none focus:border-lime-400 transition`}
                                placeholder="New York"
                              />
                            </div>
                            <ErrorMessage
                              name="shippingAddress.city"
                              component="div"
                              className="text-red-500 text-xs mt-1"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="postalCode"
                              className="block text-sm font-medium mb-2"
                            >
                              ZIP / Postal Code *
                            </label>
                            <div className="relative">
                              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                              <Field
                                type="text"
                                id="postalCode"
                                name="shippingAddress.postalCode"
                                className={`w-full bg-black border ${
                                  touched.shippingAddress?.postalCode && errors.shippingAddress?.postalCode
                                    ? "border-red-500"
                                    : "border-gray-700"
                                } rounded-lg pl-11 pr-4 py-3 focus:outline-none focus:border-lime-400 transition`}
                                placeholder="10001"
                              />
                            </div>
                            <ErrorMessage
                              name="shippingAddress.postalCode"
                              component="div"
                              className="text-red-500 text-xs mt-1"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="state"
                              className="block text-sm font-medium mb-2"
                            >
                              State / Province *
                            </label>
                            <div className="relative">
                              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                              <Field
                                type="text"
                                id="state"
                                name="shippingAddress.state"
                                className={`w-full bg-black border ${
                                  touched.shippingAddress?.state && errors.shippingAddress?.state
                                    ? "border-red-500"
                                    : "border-gray-700"
                                } rounded-lg pl-11 pr-4 py-3 focus:outline-none focus:border-lime-400 transition`}
                                placeholder="NY"
                              />
                            </div>
                            <ErrorMessage
                              name="shippingAddress.state"
                              component="div"
                              className="text-red-500 text-xs mt-1"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="country"
                              className="block text-sm font-medium mb-2"
                            >
                              Country *
                            </label>
                            <div className="relative">
                              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                              <Field
                                type="text"
                                id="country"
                                name="shippingAddress.country"
                                className={`w-full bg-black border ${
                                  touched.shippingAddress?.country && errors.shippingAddress?.country
                                    ? "border-red-500"
                                    : "border-gray-700"
                                } rounded-lg pl-11 pr-4 py-3 focus:outline-none focus:border-lime-400 transition`}
                                placeholder="USA"
                              />
                            </div>
                            <ErrorMessage
                              name="shippingAddress.country"
                              component="div"
                              className="text-red-500 text-xs mt-1"
                            />
                            </div>
                          </div>
                        </div>
                        <div className="w-full max-w-lg mx-auto">
                          <div className="py-2">
                            <label className="flex items-start gap-2 text-sm cursor-pointer">
                              <Field
                                type="checkbox"
                                name="agreeToTerms"
                                className={`w-4 h-4 mt-1 accent-lime-400 ${
                                  touched.agreeToTerms && errors.agreeToTerms
                                    ? "border-red-500"
                                    : ""
                                }`}
                              />
                              <span className="text-gray-400">
                                I agree to the{" "}
                                <a
                                  href="/terms"
                                  className="text-lime-400 hover:underline"
                                >
                                  Terms of Service
                                </a>{" "}
                                and{" "}
                                <a
                                  href="/privacy"
                                  className="text-lime-400 hover:underline"
                                >
                                  Privacy Policy
                                </a>
                              </span>
                            </label>
                            <ErrorMessage
                              name="agreeToTerms"
                              component="div"
                              className="text-red-500 text-xs mt-1"
                            />
                          </div>

                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full bg-lime-400 text-black font-semibold py-3 rounded-lg transition transform ${
                              isSubmitting 
                                ? 'opacity-50 cursor-not-allowed'
                                : 'hover:bg-lime-300 hover:scale-105'
                            }`}
                          >
                            {isSubmitting ? (
                              <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                                Creating Account...
                              </span>
                            ) : (
                              'Create Account'
                            )}
                          </button>
                        </div>
                      </Form>
                    </div>
                )}
              </Formik>

              <div className="mt-6 text-center text-sm">
                <span className="text-gray-400">Already have an account? </span>
                <a
                  href="/login"
                  className="text-lime-400 font-semibold hover:underline"
                >
                  Sign In
                </a>
              </div>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-900 text-gray-400">
                    Or register with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <button className="bg-black border border-gray-700 py-3 rounded-lg hover:border-lime-400 transition flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="text-sm">Google</span>
                </button>
              </div>
            </div>

            <p className="text-center text-xs text-gray-500 mt-6">
              🔒 Your information is secure and encrypted. We respect your
              privacy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
