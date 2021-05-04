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
  Row,
  Badge,
} from "react-bootstrap"

import Page, { PageContent, PageHeader } from "../../../Page"

const NewPasswordSettings = () => {
  const history = useHistory()

  const initialValues = {
    newPassword: "",
    confirmPassword: "",
  }

  const passwordRegex = new RegExp(
    /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/
  )

  const schema = yup.object().shape({
    newPassword: yup
      .string()
      .matches(
        passwordRegex,
        "Votre mot de passe doit contenir au moins 8 caractères, 1 Majuscule, 1 Minuscule, 1 chiffre et 1 caractère spécial"
      )
      .required("Obligatoire"),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("newPassword"), null],
        "Les mots de passes doivent être identiques"
      )
      .required("Veuillez confirmer votre mot de passe"),
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
                    <FormGroup controlId="formBasicPassword">
                      <FormLabel>Nouveau mot de passe</FormLabel>
                      <FormControl
                        values={values.newPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="newPassword"
                        size="lg"
                        type="password"
                        placeholder="Rentrez votre nouveau mot de passe"
                      />
                      {touched.newPassword && errors.newPassword ? (
                        <h5>
                          <Badge variant="danger">{errors.newPassword}</Badge>{" "}
                        </h5>
                      ) : null}
                    </FormGroup>

                    <FormGroup controlId="formBasicConfirmPassword">
                      <FormLabel>Confirmez le mot de passe</FormLabel>
                      <FormControl
                        values={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="confirmPassword"
                        size="lg"
                        type="password"
                        placeholder="Retapez votre mot de passe"
                      />
                      {touched.confirmPassword && errors.confirmPassword ? (
                        <h5>
                          <Badge variant="danger">
                            {errors.confirmPassword}
                          </Badge>{" "}
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

export default NewPasswordSettings
