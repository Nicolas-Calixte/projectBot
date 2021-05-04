import React from "react"
import { useHistory } from "react-router-dom"
import { Formik } from "formik"
import * as yup from "yup"
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Badge,
} from "react-bootstrap"

import Page, { PageContent, PageHeader } from "../../../Page"

const ContactUs = () => {
  const history = useHistory()

  const initialValues = {
    object: "",
    message: "",
  }

  const objectAndMessageRegex = new RegExp(/.*[^ ].*/)

  const schema = yup.object().shape({
    object: yup
      .string()
      .matches(objectAndMessageRegex, "Votre texte est invalide")
      .required("Obligatoire"),
    message: yup
      .string()
      .matches(objectAndMessageRegex, "Votre texte est invalide")
      .required("Obligatoire"),
  })

  return (
    <Page>
      <PageHeader>Nous contacter</PageHeader>
      <PageContent>
        <Col className="d-flex align-items-center justify-content-center mt-2">
          <Formik
            validationSchema={schema}
            onSubmit={(values) => {
              alert(JSON.stringify(values))
              history.push("/dashboard/settings")
            }}
            initialValues={initialValues}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <FormGroup controlId="formMessageObject">
                  <FormLabel>Objet :</FormLabel>
                  <FormControl
                    values={values.object}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="object"
                    size="lg"
                    type="text"
                    placeholder="Rentrez l'objet de votre message"
                  />
                  {touched.object && errors.object ? (
                    <h5>
                      <Badge variant="danger">{errors.object}</Badge>{" "}
                    </h5>
                  ) : null}
                </FormGroup>
                <FormGroup controlId="formMessage">
                  <FormLabel>Message :</FormLabel>
                  <FormControl
                    values={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="message"
                    size="lg"
                    as="textarea"
                    rows={20}
                    placeholder="Saissisez votre message"
                  />
                  {touched.message && errors.message ? (
                    <h5>
                      <Badge variant="danger">{errors.message}</Badge>{" "}
                    </h5>
                  ) : null}
                </FormGroup>
                <Button size="lg" variant="primary" type="submit" block>
                  Envoyer
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
      </PageContent>
    </Page>
  )
}

export default ContactUs
