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

import Page, { PageContent, PageHeader } from "../components/Page"

const ResetEmailPage = () => {
  const history = useHistory()

  const initialValues = {
    phoneNumber: "",
  }

  const phoneNumberRegex = new RegExp(/^((\+|00)33\s?|0)[67](\s?\d{2}){4}$/)

  const schema = yup.object().shape({
    phoneNumber: yup
      .string()
      .matches(phoneNumberRegex, "Numéro de téléphone invalide")
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
                history.push("/log-in/reset-email/verification-email-code")
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
                    <FormLabel>Entrez votre numéro de téléphone</FormLabel>
                    <FormControl
                      values={values.phoneNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="phoneNumber"
                      size="md"
                      type="text"
                      placeholder="Entrez le n° de téléphone associé à votre compte "
                    />
                    {touched.phoneNumber && errors.phoneNumber ? (
                      <h5>
                        <Badge variant="danger">{errors.phoneNumber}</Badge>{" "}
                      </h5>
                    ) : null}
                    <FormText>
                      Un code de validation va vous être envoyé.
                    </FormText>
                  </FormGroup>
                  <Button size="lg" variant="primary" type="submit" block>
                    Confirmer
                  </Button>
                </Form>
              )}
            </Formik>

            <p className="mt-3">
              Vous n&apos;avez pas associé de n° de téléphone à votre compte ?{" "}
              <a href="mailto:nicolascalixte.pro@gmail.com">
                Contactez le support
              </a>
              .{" "}
            </p>
          </Col>
        </Row>
      </PageContent>
    </Page>
  )
}

export default ResetEmailPage
