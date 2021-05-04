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

const ResetEmailSettings = () => {
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
                    "/dashboard/settings/reset-email/verification-email-code"
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
                    <FormGroup controlId="basicPhoneNumberForm">
                      <FormLabel>Entrez votre n° de téléphone</FormLabel>
                      <FormControl
                        values={values.phoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="phoneNumber"
                        size="md"
                        type="text"
                        placeholder="Entrez le n° de téléphone associé à votre compte"
                      />
                      {touched.phoneNumber && errors.phoneNumber ? (
                        <h5>
                          <Badge variant="danger">{errors.phoneNumber}</Badge>{" "}
                        </h5>
                      ) : null}
                    </FormGroup>
                    <FormText className="mb-3">
                      Un code de validation va vous être envoyé.
                    </FormText>
                    <Button size="lg" variant="primary" type="submit" block>
                      Confirmer
                    </Button>
                  </Form>
                )}
              </Formik>
              <div className="d-flex align-items-center justify-content-center mt-3">
                <p>
                  Vous n&apos;avez pas associé de n° de téléphone à votre compte
                  ?{" "}
                  <a href="mailto:nicolascalixte.pro@gmail.com">
                    Contactez le support
                  </a>
                  .{" "}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </PageContent>
    </Page>
  )
}

export default ResetEmailSettings
