import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Lock, Mail, Eye, EyeOff, User, Phone, MapPin } from 'lucide-react';

// Validation Schema
const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Full name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(
      /^[0-9]{1,4}[0-9]{1,4}[0-9]{1,9}$/,
      'Invalid phone number'
    )
    .max(12, 'Phone number is too long')
    .min(10, 'Phone number is too short')
    .required('Phone number is required'),
  address: Yup.string()
    .min(10, 'Address must be at least 10 characters')
    .required('Shipping address is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    )
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),
  agreeToTerms: Yup.boolean()
    .oneOf([true], 'You must accept the terms and conditions')
    .required('You must accept the terms and conditions')
});

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Registration submitted:', values);
    
    // Simulate API call
    setTimeout(() => {
      alert('Account created successfully! Please login to continue.');
      setSubmitting(false);
      resetForm();
      // Add your registration logic here
      // Example: navigate('/login');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
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
                <Form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
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
                            ? 'border-red-500'
                            : 'border-gray-700'
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
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
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
                            ? 'border-red-500'
                            : 'border-gray-700'
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
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                      <Field
                        type="tel"
                        id="phone"
                        name="phone"
                        className={`w-full bg-black border ${
                          touched.phone && errors.phone
                            ? 'border-red-500'
                            : 'border-gray-700'
                        } rounded-lg pl-11 pr-4 py-3 focus:outline-none focus:border-lime-400 transition`}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium mb-2">
                      Shipping Address *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
                      <Field
                        as="textarea"
                        id="address"
                        name="address"
                        rows="2"
                        className={`w-full bg-black border ${
                          touched.address && errors.address
                            ? 'border-red-500'
                            : 'border-gray-700'
                        } rounded-lg pl-11 pr-4 py-3 focus:outline-none focus:border-lime-400 transition resize-none`}
                        placeholder="123 Main St, City, State, ZIP"
                      />
                    </div>
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium mb-2">
                      Password *
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                      <Field
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        className={`w-full bg-black border ${
                          touched.password && errors.password
                            ? 'border-red-500'
                            : 'border-gray-700'
                        } rounded-lg pl-11 pr-12 py-3 focus:outline-none focus:border-lime-400 transition`}
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-lime-400 transition"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Must be at least 8 characters with uppercase, lowercase, and number
                    </p>
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                      Confirm Password *
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                      <Field
                        type={showConfirmPassword ? 'text' : 'password'}
                        id="confirmPassword"
                        name="confirmPassword"
                        className={`w-full bg-black border ${
                          touched.confirmPassword && errors.confirmPassword
                            ? 'border-red-500'
                            : 'border-gray-700'
                        } rounded-lg pl-11 pr-12 py-3 focus:outline-none focus:border-lime-400 transition`}
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-lime-400 transition"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>

                  <div className="pt-2">
                    <label className="flex items-start gap-2 text-sm cursor-pointer">
                      <Field
                        type="checkbox"
                        name="agreeToTerms"
                        className={`w-4 h-4 mt-1 accent-lime-400 ${
                          touched.agreeToTerms && errors.agreeToTerms
                            ? 'border-red-500'
                            : ''
                        }`}
                      />
                      <span className="text-gray-400">
                        I agree to the{' '}
                        <a href="/terms" className="text-lime-400 hover:underline">
                          Terms of Service
                        </a>{' '}
                        and{' '}
                        <a href="/privacy" className="text-lime-400 hover:underline">
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
                    className={`w-full bg-lime-400 text-black font-semibold py-3 rounded-lg hover:bg-lime-300 transition transform hover:scale-105 ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Creating Account...' : 'Create Account'}
                  </button>
                </Form>
              )}
            </Formik>

            <div className="mt-6 text-center text-sm">
              <span className="text-gray-400">Already have an account? </span>
              <a href="/login" className="text-lime-400 font-semibold hover:underline">
                Sign In
              </a>
            </div>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-900 text-gray-400">Or register with</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <button className="bg-black border border-gray-700 py-3 rounded-lg hover:border-lime-400 transition flex items-center justify-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-sm">Google</span>
              </button>
            </div>
          </div>

          <p className="text-center text-xs text-gray-500 mt-6">
            🔒 Your information is secure and encrypted. We respect your privacy.
          </p>
        </div>
      </div>
    </div>
  );
}