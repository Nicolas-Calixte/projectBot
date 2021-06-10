import React from "react"
import { useHistory } from "react-router-dom"
import { Formik } from "formik"
import * as yup from "yup"
import {
  Button,
  Col,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
  Badge,
} from "react-bootstrap"

import Page, { PageContent, PageHeader } from "../../Page"

const NewTask = () => {
  const history = useHistory()

  const initialValues = {
    productUrl: "",
    quantity: "",
    street: "",
    city: "",
    zipcode: "",
  }

  const numbersRegex = new RegExp(/^\d+$/)

  const schema = yup.object().shape({
    productUrl: yup.string().url("URL invalide").required("Obligatoire"),
    quantity: yup
      .string()
      .matches(numbersRegex, "Ce champs doit contenir un chiffre")
      .max(2, "maximum: 99")
      .required("Obligatoire"),
    street: yup.string().required("Obligatoire"),
    city: yup.string().required("Obligatoire"),
    zipcode: yup
      .string()
      .matches(numbersRegex, "Ce champs doit contenir un nombre")
      .min(5, "Code postal invalide")
      .max(5, "Code postal invalide")
      .required("Obligatoire"),
  })

  return (
    <Page>
      <PageHeader>Nouvelle tâche</PageHeader>
      <PageContent className="d-flex align-items-center justify-content-center">
        <Row className="mt-3">
          <Col>
            <div className="mt-3">
              <Formik
                validationSchema={schema}
                onSubmit={(values) => {
                  alert(JSON.stringify(values))
                  history.push("/dashboard/tasks")
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
                    <div className="d-flex justify-content-center">
                      <div>
                        <select className="browser-default custom-select">
                          <option value="cdiscount">Cdiscount</option>
                        </select>
                      </div>
                      {touched.shop && errors.shop ? (
                        <h5>
                          <Badge variant="danger">{errors.shop}</Badge>{" "}
                        </h5>
                      ) : null}
                    </div>
                    <FormGroup>
                      <div className="d-flex justify-content-between mt-5 mb-4">
                        <FormCheck
                          name="createAccountMode"
                          type="radio"
                          label="Créer un nouveau compte"
                          className="mr-1"
                        />

                        <FormCheck
                          name="createAccountMode"
                          type="radio"
                          label="Executer en tant qu'invité"
                          defaultChecked
                        />
                      </div>
                    </FormGroup>

                    <div>
                      <FormGroup>
                        <FormLabel>URL du produit souhaité :</FormLabel>
                        <FormControl
                          values={values.productUrl}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="productUrl"
                          size="sm"
                          type="text"
                          placeholder="Rentrez l'URL du produit"
                        />
                        {touched.productUrl && errors.productUrl ? (
                          <h5>
                            <Badge variant="danger">{errors.productUrl}</Badge>{" "}
                          </h5>
                        ) : null}
                      </FormGroup>

                      <FormGroup>
                        <FormLabel>Quantité souhaité :</FormLabel>
                        <FormControl
                          values={values.quantity}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="quantity"
                          size="sm"
                          type="text"
                          placeholder="Quantité souhaité"
                        />
                        {touched.quantity && errors.quantity ? (
                          <h5>
                            <Badge variant="danger">{errors.quantity}</Badge>{" "}
                          </h5>
                        ) : null}
                      </FormGroup>

                      <FormGroup>
                        <FormLabel>Adresse de livraison :</FormLabel>
                        <FormControl
                          values={values.street}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="street"
                          size="sm"
                          type="text"
                          placeholder="ex: 12 rue de la Paix"
                        />
                        {touched.street && errors.street ? (
                          <h5>
                            <Badge variant="danger">{errors.street}</Badge>{" "}
                          </h5>
                        ) : null}
                      </FormGroup>

                      <FormGroup>
                        <FormLabel>Ville de livraison :</FormLabel>
                        <FormControl
                          values={values.city}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="city"
                          size="sm"
                          type="text"
                          placeholder="ex: Créteil"
                        />
                        {touched.city && errors.city ? (
                          <h5>
                            <Badge variant="danger">{errors.city}</Badge>{" "}
                          </h5>
                        ) : null}
                      </FormGroup>

                      <FormGroup>
                        <FormLabel>Code postal de la ville :</FormLabel>
                        <FormControl
                          values={values.zipcode}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="zipcode"
                          size="sm"
                          type="text"
                          placeholder="ex: 94000"
                        />
                        {touched.zipcode && errors.zipcode ? (
                          <h5>
                            <Badge variant="danger">{errors.zipcode}</Badge>{" "}
                          </h5>
                        ) : null}
                      </FormGroup>
                    </div>

                    <Button
                      size="lg"
                      variant="primary"
                      type="submit"
                      className="mt-4"
                      block
                    >
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

export default NewTask
