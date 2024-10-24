import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from "yup"
import apiClient, { handleError } from '../utils/axios'
import { notify } from '../utils/notification'
import {  Button, Typography } from '@material-tailwind/react'
import { Input } from '@material-tailwind/react'
import Card from '../component/types/Card'
import CardFooter from '../component/types/CardFooter'

const Register:React.FC = () => {
    const navigate = useNavigate()

    //formik setUp
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            rememberMe: false,
        },
        validationSchema: Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            password: Yup.string()
              .min(6, "Password must be at least 6 characters")
              .required("Password is required"),
            firstName: Yup.string().required("First Name is required"),
            lastName: Yup.string().required("Last Name is required"),
          }),
        onSubmit: async (values, {setSubmitting}) =>{
            setSubmitting(true)
            try{
                const response = await apiClient.post("/create-user", {
                    FirstName: values.firstName,
                    LastName: values.lastName,
                    Email: values.email,
                    Password: values.password,
                })
                notify("success", response.data.message)
                if(response.status === 201){
                    localStorage.setItem("authToken", response.data.token);
                    navigate("/")
                }

            }catch(error){
                handleError(error)
            }finally{
                setSubmitting(false)
            }
        }
    })
  return (
    <div className='flex items-center  h-screen'>
        <form onSubmit={formik.handleSubmit}>
            <Card className=" w-screen bg-red-20 p-0 shadow-none ">
                <div className='flex px-4 flex-col gap-4 w-full'>
                <Typography variant='h1' className='text-3xl font-bold'>
                Register
            </Typography>

            {/* firstname */}
            <Input
                label="FirstName"
                size="lg"
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                success={formik.touched.firstName && !formik.errors.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <Typography className="-mt-2.5" variant="small" color="red">
                  {formik.errors.firstName}
                </Typography>
              )}
            {/* <div className=""> */}
            <Input
                label="lastName"
                size="lg"
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                success={formik.touched.lastName && !formik.errors.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <Typography className="-mt-2.5" variant="small" color="red">
                  {formik.errors.lastName}
                </Typography>
              )}
            <Input
                label="Email"
                size="lg"
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                success={formik.touched.email && !formik.errors.email}
              />
              {formik.touched.email && formik.errors.email && (
                <Typography className="-mt-2.5" variant="small" color="red">
                  {formik.errors.email}
                </Typography>
              )}
              {/* password */}
              <Input
                label="Password"
                size="lg"
                id="password"
                name="password"
                type="password"
                className="-mb-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                success={formik.touched.password && !formik.errors.password}
              />
              {formik.touched.password && formik.errors.password && (
                <Typography className="-mt-2.5" variant="small" color="red">
                  {formik.errors.password}
                </Typography>
              )}

                </div>
                <CardFooter className=''>
                <Button
                type="submit"
                variant="gradient"
                fullWidth
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? "Registering" : "Register"}
              </Button>
              <Typography variant="small" className="mt-4 flex justify-center">
                Already have an account?
                <Link to="/login" className="ml-1 font-bold">
                Login
                </Link>
              </Typography>
                </CardFooter>
            </Card>

        </form>
    </div>
  )
}

export default Register
