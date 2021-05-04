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
  FormText,
  Row,
  Badge,
} from "react-bootstrap"

import Page, { PageContent, PageHeader } from "../../../Page"

const VerificationPasswordCodeSettings = () => {
  const history = useHistory()

  const initialValues = {
    code: "",
  }

  const codeRegex = new RegExp(/^[0-9]+$/)

  const schema = yup.object().shape({
    code: yup
      .string()
      .matches(codeRegex, "Code invalide")
      .min(6, "Le code doit contenir au moins 6 chiffres")
      .max(6, "Le code ne doit contenir que 6 chiffres")
      .required("Obligatoire"),
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
                    "/dashboard/settings/reset-password/verification-password-code/new-password"
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
                    <FormGroup controlId="basicNumberForm">
                      <FormLabel>Entrez le code de validation</FormLabel>
                      <FormControl
                        values={values.code}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="code"
                        size="md"
                        type="text"
                        placeholder="Entrez le code à 6 chiffres"
                      />
                      {touched.code && errors.code ? (
                        <h5>
                          <Badge variant="danger">{errors.code}</Badge>{" "}
                        </h5>
                      ) : null}
                      <FormText>
                        Code non reçu ? <a href="#">Renvoyez le code</a>.
                      </FormText>
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

export default VerificationPasswordCodeSettings
