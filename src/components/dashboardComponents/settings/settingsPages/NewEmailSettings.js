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
import { useHistory } from "react-router"

import Page, { PageContent, PageHeader } from "../../../Page"

const NewEmailSettings = () => {
  const history = useHistory()

  const initialValues = {
    email: "",
    newEmail: "",
  }

  const schema = yup.object().shape({
    email: yup.string().email("Adresse email invalide").required("Obligatoire"),
    newEmail: yup
      .string()
      .oneOf(
        [yup.ref("email"), null],
        "Les identifiants doivent être identiques"
      )
      .required("Vous devez confirmer votre identifiant"),
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
                    <FormGroup controlId="formBasicEmail">
                      <FormLabel>Rentrez votre nouvel identifiant</FormLabel>
                      <FormControl
                        values={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="email"
                        size="lg"
                        type="text"
                        placeholder="Entrez votre nouvel adresse email"
                      />
                      {touched.email && errors.email ? (
                        <h5>
                          <Badge variant="danger">{errors.email}</Badge>{" "}
                        </h5>
                      ) : null}
                    </FormGroup>

                    <FormGroup controlId="formBasicEmail">
                      <FormLabel>Confirmez votre nouvel identifiant</FormLabel>
                      <FormControl
                        values={values.newEmail}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="newEmail"
                        size="lg"
                        type="text"
                        placeholder="Confirmez votre adresse email"
                      />
                      {touched.newEmail && errors.newEmail ? (
                        <h5>
                          <Badge variant="danger">{errors.newEmail}</Badge>{" "}
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

export default NewEmailSettings
