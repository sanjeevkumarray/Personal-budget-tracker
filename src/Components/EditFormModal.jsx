import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { editTranaction } from '../store/TransactionSlice';
import { addSpent } from '../store/BudgetSlice';

export default function EditFormModal({ setIsOpen, editFormData }) {
  console.log(editFormData);
  const dispatch = useDispatch();
  const { id, type, name, amount, date, category } = editFormData;

  const validationSchema = Yup.object({
    type: Yup.string().required('Transaction type is required'),
    name: Yup.string().min(3, "Name should be more than 3 characters").required('Name of transaction is required'),
    amount: Yup.number().min(1, "Amount should be greater than 0").required('Amount is required'),
    date: Yup.date().required("Date is required").max(new Date(), "Date cannot be in the future"),
    category: Yup.string().required("Category of transaction is required"),
  });

  return (
    <div className="absolute top-40 left-1/2 transform -translate-x-1/2 max-w-lg w-full mt-4 mx-auto p-8 bg-gray-900 text-white shadow-xl rounded-xl border border-gray-700">
      <h1 className="text-2xl font-bold text-center text-blue-400 mb-4">
        Edit Transaction
      </h1>
      <Formik
        initialValues={{ type, name, amount, date, category }}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values, { resetForm }) => {
          console.log("Form Submitted:", values);
          resetForm();
          dispatch(editTranaction({ ...values, id }));
          dispatch(addSpent(values));
          setIsOpen(false);
        }}
      >
        {({ setTouched, values }) => (
          <Form className="space-y-4 p-4 border border-gray-700 rounded-lg">
            <div>
              <label htmlFor='type' className="block text-sm font-medium text-gray-300">Type:</label>
              <Field onFocus={() => setTouched({})} id="type" as="select" name="type" className="border border-gray-600 bg-gray-800 text-white p-2 w-full rounded">
                <option value="" disabled>Select Type</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </Field>
              <ErrorMessage name="type" component="div" className='text-red-500 text-sm mt-1' />
            </div>

            <div>
              <label htmlFor='name' className="block text-sm font-medium text-gray-300">Name:</label>
              <Field onFocus={() => setTouched({})} type="text" name="name" id="name" className="border border-gray-600 bg-gray-800 text-white p-2 w-full rounded" />
              <ErrorMessage name="name" component="div" className='text-red-500 text-sm mt-1' />
            </div>

            <div>
              <label htmlFor='amount' className="block text-sm font-medium text-gray-300">Amount:</label>
              <Field onFocus={() => setTouched({})} type="number" name="amount" className="border border-gray-600 bg-gray-800 text-white p-2 w-full rounded" />
              <ErrorMessage name="amount" component="div" className='text-red-500 text-sm mt-1' />
            </div>

            <div>
              <label htmlFor='date' className="block text-sm font-medium text-gray-300">Date:</label>
              <Field onFocus={() => setTouched({})} type="date" name="date" className="border border-gray-600 bg-gray-800 text-white p-2 w-full rounded" />
              <ErrorMessage name="date" component="div" className='text-red-500 text-sm mt-1' />
            </div>

            <div>
              <label htmlFor='category' className="block text-sm font-medium text-gray-300">Category:</label>
              <Field onFocus={() => setTouched({})} as="select" name="category" className="border border-gray-600 bg-gray-800 text-white p-2 w-full rounded">
                <option value="" disabled>Select Category</option>
                {
                  values.type === 'income' ? (
                    <>
                      <option value="Salary">Salary</option>
                      <option value="Freelancing">Freelancing</option>
                      <option value="Investment">Investment</option>
                      <option value="Stock Market Gains">Stock Market Gains</option>
                    </>
                  ) : (
                    <>
                      <option value="Food">Food</option>
                      <option value="Transport">Transport</option>
                      <option value="Shopping">Shopping</option>
                      <option value="Bills">Bills</option>
                      <option value="Health & Fitness">Health & Fitness</option>
                      <option value="Others">Others</option>
                    </>
                  )
                }
              </Field>
              <ErrorMessage name="category" component="div" className='text-red-500 text-sm mt-1' />
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-500 transition-all">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
