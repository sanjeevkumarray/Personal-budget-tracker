import { ErrorMessage, Field, Form, Formik, validateYupSchema } from 'formik'
import * as Yup from "yup";

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeSettings } from '../store/SettingsSlice';

export default function SettingsModal({setIsOpen}) {
    const dispatch = useDispatch()
    const {name , email , alert } = useSelector((state)=>state.settingsInfo)
    const validateYupSchema = Yup.object({
        name:Yup.string().min(3, 'Name should contain more than 3 char').max(20 , 'name cannot exceeds 20 characters').required('name is required'),
        email:Yup.string().email('Enter a valid email').required('Email is required'),
        currency:Yup.string().required('Please select the preffered currency')
    })
  return (
    
    <div className="mt-10 max-w-2xl mx-auto bg-gray-700 text-white p-6 rounded-2xl shadow-lg">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-semibold">Edit Profile</h3>
      <button
        onClick={() => setIsOpen(false)}
        className="text-gray-400 hover:text-red-500"
      >
        ✖
      </button>
    </div>
  
    <Formik
      initialValues={{ name, email, currency: "INR - Indian Rupee", alert }}
      validationSchema={validateYupSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        dispatch(changeSettings(values));
        setIsOpen(false);
        resetForm();
      }}
    >
      <Form className="space-y-4">
        <div>
          <label className="block text-gray-300 text-sm mb-1">Name</label>
          <Field
            type="text"
            name="name"
            placeholder="John Doe"
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <ErrorMessage name="name" component="div" className="text-red-400" />
        </div>
  
        <div>
          <label className="block text-gray-300 text-sm mb-1">Email</label>
          <Field
            type="email"
            name="email"
            placeholder="john@example.com"
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <ErrorMessage name="email" component="div" className="text-red-400" />
        </div>
  
        <div>
          <label className="block text-gray-300 text-sm mb-1">Default Currency</label>
          <Field
            as="select"
            name="currency"
            className="w-full text-gray-300 p-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          >
            <option className="bg-gray-700" value="">Select Currency</option>
            <option className="bg-gray-700" value="USD">USD - US Dollar</option>
            <option className="bg-gray-700" value="INR">INR - Indian Rupee</option>
            <option className="bg-gray-700" value="EUR">EUR - Euro</option>
          </Field>
          <ErrorMessage name="currency" component="div" className="text-red-400" />
        </div>
  
        <div className="flex items-center gap-2">
          <Field type="checkbox" name="alert" className="w-4 h-4 accent-blue-500" />
          <label className="text-gray-300 text-sm">Alert me when I overspend</label>
          <ErrorMessage name="alert" component="div" className="text-red-400" />
        </div>
  
        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-500 transition"
        >
          Save Changes
        </button>
      </Form>
    </Formik>
  </div>
  )
}
