import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from "yup"
import apiClient, { handleError } from '../utils/axios'
import { notify } from '../utils/notification'
import {  Button, Checkbox, Typography } from '@material-tailwind/react'
import { Input } from '@material-tailwind/react'
import Card from '../component/types/Card'
import CardFooter from '../component/types/CardFooter'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../features/auth/authSlice'

const Login:React.FC = () => {
    // const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    //formik setUp
    const formik = useFormik({
        initialValues: {
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
          }),
        onSubmit: async (values, {setSubmitting}) =>{
            // setLoading(true)
            setSubmitting(true)
            try{
                console.log("yes", values)
                const response = await apiClient.post("/Login-user", values)
                console.log("Login Successful: ", response)
                localStorage.setItem("authToken", response.data.token);
                dispatch(loginSuccess({user: response.data.user, token: response.data.token}))
                notify("success", response.data.message)
                navigate("/")

                // const response = await apiClient.post("/Login-user", values)
                // notify("success", response.data.message)
                // console.log("response", response)
                // if(response.status === 201){
                //     localStorage.setItem("authToken", response.data.token);
                //     navigate("/")
                // }
            }catch(error){
                handleError(error)
                console.log("error", error)
            }finally{
                setSubmitting(false)
            }
        }
    })
  return (
    <div className='flex items-center  h-screen'>
        <form onSubmit={formik.handleSubmit}>
            <Card className=" w-screen bg-red-20 p-0 shadow-none ">
                <div className='flex flex-col gap-4 px-4 w-full'>
                <Typography variant='h1' className='text-3xl font-bold'>
                Welcome Back
            </Typography>
            <Typography
                className="mb-3 font-normal"
                variant="paragraph"
                color="gray"
              >
                Sign in to continue
            </Typography>

            {/* <div className=""> */}
            <Input
                label="Email"
                size="lg"
                id="email"
                // name="email"
                type="email"
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.email}
                {...formik.getFieldProps("email")}
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
                className="-mb-2"
                // name="password"
                type="password"
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.password}
                {...formik.getFieldProps("password")}
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
            {/* </div> */}
            {/* checkbox */}
            <div className="-ml-2.5 -mt-3 ">
                <Checkbox
                  id="rememberMe"
                  // name="rememberMe"
                  // onChange={formik.handleChange}
                  {...formik.getFieldProps("rememberMe")}
                  checked={formik.values.rememberMe}
                  label="Remember Me"
                />
              </div>
                {/* </CardBody> */}
                </div>
                <CardFooter className=''>
                <Button
                type="submit"
                variant="gradient"
                fullWidth
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? "Logging in" : "Log in"}
              </Button>
              <Typography className="mt-4 text-center">
              Don&apos;t have an account?
              <Link to="/register" className="ml-1 font-bold ">
                Register
              </Link>
            </Typography>
                </CardFooter>
            </Card>

        </form>
    </div>
  )
}

export default Login
