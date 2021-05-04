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

import Page, { PageContent, PageHeader } from "../components/Page"

const VerificationEmailCodePage = () => {
  const history = useHistory()

  const initialValues = {
    code: "",
  }

  const codeRegex = new RegExp(/^[0-9]+$/)

  const schema = yup.object().shape({
    code: yup
      .string()
      .matches(codeRegex, "Code invalide")
      .min(6, "Le code doit contenir 6 chiffres")
      .max(6, "Le code ne doit contenir que 6 chiffres")
      .required("Obligatoire"),
  })

  return (
    <Page>
      <PageHeader>Réinitialiser mon identifiant</PageHeader>
      <PageContent className="d-flex align-items-center justify-content-center">
        <Row className="mt-3">
          <Col>
            <Formik
              validationSchema={schema}
              onSubmit={(values) => {
                alert(JSON.stringify(values))
                history.push(
                  "/log-in/reset-email/verification-email-code/new-email"
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
                  <FormGroup>
                    <FormLabel>Entrez le code de vérification reçu</FormLabel>
                    <FormControl
                      values={values.code}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="code"
                      size="md"
                      type="text"
                      placeholder="Rentrez votre code à 6 chiffres"
                    />
                    {touched.code && errors.code ? (
                      <h5>
                        <Badge variant="danger">{errors.code}</Badge>{" "}
                      </h5>
                    ) : null}
                  </FormGroup>
                  <Button size="lg" variant="primary" type="submit" block>
                    Confirmer
                  </Button>
                </Form>
              )}
            </Formik>
            <p className="mt-3">
              Code non reçu ? <a href="#">Renvoyez un code</a>.
            </p>
          </Col>
        </Row>
      </PageContent>
    </Page>
  )
}

export default VerificationEmailCodePage
