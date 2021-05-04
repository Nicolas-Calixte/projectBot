import React from "react"
import { Formik } from "formik"
import * as yup from "yup"
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
  Badge,
} from "react-bootstrap"
import { useHistory } from "react-router-dom"

import Page, { PageContent, PageHeader } from "../../../Page"

const ResetPasswordSettings = () => {
  const history = useHistory()

  const initialValues = {
    email: "",
  }

  const schema = yup.object().shape({
    email: yup.string().email("Adresse email invalide").required("Obligatoire"),
  })

  return (
    <Page>
      <PageHeader>Réinitialiser mon mot de passe</PageHeader>
      <PageContent className="d-flex align-items-center justify-content-center">
        <Row className="mt-3">
          <Col>
            <div
              style={{
                minHeight: "60vh",
              }}
            >
              <Formik
                validationSchema={schema}
                onSubmit={(values) => {
                  alert(JSON.stringify(values))
                  history.push(
                    "/dashboard/settings/reset-password/verification-password-code"
                  )
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
                    <FormGroup controlId="basicEmailForm">
                      <FormLabel>Identifiant</FormLabel>
                      <FormControl
                        values={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="email"
                        size="md"
                        type="text"
                        placeholder="Entrez votre email ou n° de téléphone"
                      />
                      {touched.email && errors.email ? (
                        <h5>
                          <Badge variant="danger">{errors.email}</Badge>{" "}
                        </h5>
                      ) : null}
                    </FormGroup>
                    <Button size="lg" variant="primary" type="submit" block>
                      Confirmer
                    </Button>
                  </Form>
                )}
              </Formik>
            </div>
          </Col>
        </Row>
      </PageContent>
    </Page>
  )
}

export default ResetPasswordSettings
