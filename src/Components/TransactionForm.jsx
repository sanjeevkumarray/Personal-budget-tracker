import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../store/TransactionSlice";
import { addAccountTransaction } from "../store/AccountSlice";
import { addSpent } from "../store/BudgetSlice";

export default function TransactionForm() {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    type: Yup.string().required("Transaction type is required"),
    name: Yup.string()
      .min(3, "Name should be more than 3 characters")
      .required("Name is required"),
    amount: Yup.number()
      .min(1, "Amount should be greater than 0")
      .required("Amount is required"),
    date: Yup.date()
      .required("Date is required")
      .max(new Date(), "Date cannot be in the future"),
    category: Yup.string().required("Category is required"),
  });

  return (
    <div className="max-w-md mt-4 mx-auto p-6 bg-gray-800 shadow-lg rounded-xl text-white">
      <h1 className="text-2xl font-bold text-center text-green-400 mb-2">
        Add Transaction
      </h1>
      <Formik
        initialValues={{
          type: "",
          name: "",
          amount: "",
          date: "",
          category: "",
        }}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values, { resetForm }) => {
          console.log("Form Submitted:", values);
          dispatch(addAccountTransaction(values));
          dispatch(addTransaction({ id: crypto.randomUUID(), ...values }));
          resetForm();
          if (values.type === "expense") {
            dispatch(addSpent(values));
          }
        }}
      >
        {({ setTouched, values }) => (
          <Form className="space-y-4 p-4 border border-gray-700 rounded-lg">
            <div>
              <label htmlFor="type" className="block font-medium">
                Type:
              </label>
              <Field
                onFocus={() => setTouched({})}
                id="type"
                as="select"
                name="type"
                className="border p-2 w-full bg-gray-700 text-white rounded"
              >
                <option value="" disabled>
                  Select Type
                </option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </Field>
              <ErrorMessage
                name="type"
                component="div"
                className="text-red-400 text-sm"
              />
            </div>

            <div>
              <label htmlFor="name" className="block font-medium">
                Name:
              </label>
              <Field
                onFocus={() => setTouched({})}
                type="text"
                name="name"
                id="name"
                className="border p-2 w-full bg-gray-700 text-white rounded"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-400 text-sm"
              />
            </div>

            <div>
              <label htmlFor="amount" className="block font-medium">
                Amount:
              </label>
              <Field
                onFocus={() => setTouched({})}
                type="number"
                name="amount"
                className="border p-2 w-full bg-gray-700 text-white rounded"
              />
              <ErrorMessage
                name="amount"
                component="div"
                className="text-red-400 text-sm"
              />
            </div>

            <div>
              <label htmlFor="date" className="block font-medium">
                Date:
              </label>
              <Field
                onFocus={() => setTouched({})}
                type="date"
                name="date"
                className="border p-2 w-full bg-gray-700 text-white rounded"
              />
              <ErrorMessage
                name="date"
                component="div"
                className="text-red-400 text-sm"
              />
            </div>

            <div>
              <label htmlFor="category" className="block font-medium">
                Category:
              </label>
              <Field
                onFocus={() => setTouched({})}
                as="select"
                name="category"
                className="border p-2 w-full bg-gray-700 text-white rounded"
              >
                <option value="" disabled>
                  Select Category
                </option>
                {values.type === "income" ? (
                  <>
                    <option value="Salary">Salary</option>
                    <option value="Freelancing">Freelancing</option>
                    <option value="Investment">Investment</option>
                    <option value="Stock Market Gains">
                      Stock Market Gains
                    </option>
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
                )}
              </Field>
              <ErrorMessage
                name="category"
                component="div"
                className="text-red-400 text-sm"
              />
            </div>

            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white p-2 rounded w-full transition"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
