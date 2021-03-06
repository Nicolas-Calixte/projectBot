import React from "react"
import { useHistory } from "react-router-dom"
import { Formik } from "formik"
import * as yup from "yup"
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  FormCheck,
  Col,
  Row,
  Button,
  Badge,
} from "react-bootstrap"

import Page, { PageContent, PageHeader } from "../components/Page"
import RequiredSign from "../components/RequiredSign"

const SignUpPage = () => {
  const history = useHistory()

  const initialValues = {
    lastName: "",
    firstName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    terms: false,
  }

  const nameRegex = new RegExp(
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð'-]+$/u
  )
  const phoneNumberRegex = new RegExp(/^((\+|00)33\s?|0)[67](\s?\d{2}){4}$/)
  const passwordRegex = new RegExp(
    /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d).*$/
  )

  const schema = yup.object().shape({
    lastName: yup
      .string()
      .matches(nameRegex, "Invalid lastname")
      .min(3, "Must be 3 characters or more")
      .max(37, "Must be 37 characters or less")
      .required("Required"),
    firstName: yup
      .string()
      .matches(nameRegex, "Invalid firstname")
      .min(3, "Must be 3 characters or more")
      .max(25, "Must be 37 characters or less")
      .required("Required"),
    email: yup.string().email("Invalid email adress").required("Required"),
    phoneNumber: yup
      .string()
      .matches(phoneNumberRegex, "Invalid phone number")
      .notRequired(),
    password: yup
      .string()
      .min(7, "Your password is too short")
      .max(32, "Your password is too long")
      .matches(
        passwordRegex,
        "Your password must contain 1 number and 1 special case character"
      )
      .required("Required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("You must confirm your password"),
    terms: yup.bool().oneOf([true], "The terms must be accepted").required(),
  })

  return (
    <Page>
      <PageHeader>Sign Up</PageHeader>
      <PageContent className="d-flex align-items-center justify-content-center gy-3">
        <div>
          <Formik
            validationSchema={schema}
            onSubmit={(values) => {
              alert(JSON.stringify(values))
              history.push("/sign-up/sign-up-verification")
            }}
            initialValues={initialValues}
          >
            {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              errors,
              touched,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Col className="">
                  <Row className="d-flex justify-content-center mt-2">
                    <FormGroup controlId="formLastName">
                      <FormLabel>
                        Lastname
                        <RequiredSign />{" "}
                      </FormLabel>
                      <FormControl
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="lastName"
                        size="lg"
                        type="text"
                        placeholder="Enter your lastname"
                      />
                      {touched.lastName && errors.lastName ? (
                        <h5>
                          <Badge variant="danger">{errors.lastName}</Badge>{" "}
                        </h5>
                      ) : null}
                    </FormGroup>

                    <FormGroup controlId="formFirstname">
                      <FormLabel>
                        Firstname
                        <RequiredSign />
                      </FormLabel>
                      <FormControl
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="firstName"
                        size="lg"
                        type="text"
                        placeholder="Enter you firstname"
                      />
                      {touched.firstName && errors.firstName ? (
                        <h5>
                          <Badge variant="danger">{errors.firstName}</Badge>{" "}
                        </h5>
                      ) : null}
                    </FormGroup>
                  </Row>

                  <Row className="d-flex justify-content-center mt-2">
                    <FormGroup controlId="formEmail">
                      <FormLabel>
                        Email
                        <RequiredSign />{" "}
                      </FormLabel>
                      <FormControl
                        values={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="email"
                        size="lg"
                        type="text"
                        placeholder="Enter your email adress"
                      />
                      {touched.email && errors.email ? (
                        <h5>
                          <Badge variant="danger">{errors.email}</Badge>{" "}
                        </h5>
                      ) : null}
                    </FormGroup>

                    <FormGroup controlId="FormPhoneNumber">
                      <FormLabel>Phone number</FormLabel>
                      <FormControl
                        values={values.phoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="phoneNumber"
                        size="lg"
                        type="text"
                        placeholder="Enter your phone number"
                      />
                      {touched.phoneNumber && errors.phoneNumber ? (
                        <h5>
                          <Badge variant="danger">{errors.phoneNumber}</Badge>{" "}
                        </h5>
                      ) : null}
                    </FormGroup>
                  </Row>

                  <Row className="d-flex justify-content-center mt-2">
                    <FormGroup controlId="FormPassword">
                      <FormLabel>
                        Password
                        <RequiredSign />
                      </FormLabel>
                      <FormControl
                        values={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="password"
                        size="lg"
                        type="password"
                        placeholder="Create your password"
                      />
                      {touched.password && errors.password ? (
                        <h5>
                          <Badge variant="danger">{errors.password}</Badge>{" "}
                        </h5>
                      ) : null}
                    </FormGroup>

                    <FormGroup controlId="FormConfirmPassword">
                      <FormLabel>
                        Confirm password
                        <RequiredSign />{" "}
                      </FormLabel>
                      <FormControl
                        values={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="confirmPassword"
                        size="lg"
                        type="password"
                        placeholder="Confirm your password"
                      />
                      {touched.confirmPassword && errors.confirmPassword ? (
                        <h5>
                          <Badge variant="danger">
                            {errors.confirmPassword}
                          </Badge>{" "}
                        </h5>
                      ) : null}
                    </FormGroup>
                  </Row>

                  <FormGroup className="d-flex align-items-center flex-column">
                    <FormCheck
                      values={values.terms}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="checkbox"
                      name="terms"
                      label="I accept the terms and conditions."
                      className="mb-3"
                    />
                    {touched.terms && errors.terms ? (
                      <h5 className="d-flex justify-content-center">
                        <Badge variant="danger">{errors.terms}</Badge>{" "}
                      </h5>
                    ) : null}
                  </FormGroup>
                  <Row>
                    <Button size="lg" variant="primary" type="submit" block>
                      Sign Up
                    </Button>
                  </Row>
                </Col>
              </Form>
            )}
          </Formik>

          <p className="text-center mt-3">
            An validation code will be sent to your email adress.
          </p>
        </div>
      </PageContent>
    </Page>
  )
}

export default SignUpPage
