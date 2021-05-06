import React from "react"
import { useHistory } from "react-router-dom"
import { Formik } from "formik"
import * as yup from "yup"
import {
  Button,
  Col,
  Dropdown,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
  Badge,
} from "react-bootstrap"
import DropdownItem from "react-bootstrap/esm/DropdownItem"
import DropdownMenu from "react-bootstrap/esm/DropdownMenu"
import DropdownToggle from "react-bootstrap/esm/DropdownToggle"

import Page, { PageContent, PageHeader } from "../../Page"

const NewTask = () => {
  const history = useHistory()

  const initialValues = {
    shop: false,
    productUrl: "",
    quantity: "",
    street: "",
    city: "",
    zipcode: "",
  }

  const numbersRegex = new RegExp(/^\d+$/)

  const schema = yup.object().shape({
    shop: yup.bool().required("Obligatoire"),
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
                      <Dropdown>
                        <DropdownToggle variant="primary" id="dropdownShop">
                          Magasin
                        </DropdownToggle>

                        <DropdownMenu id="shop-menu" title="Magasin">
                          <DropdownItem
                            values={values.shop}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="shop"
                          >
                            Cdiscount
                          </DropdownItem>
                          {touched.shop && errors.shop ? (
                            <h5>
                              <Badge variant="danger">{errors.shop}</Badge>{" "}
                            </h5>
                          ) : null}
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                    <FormGroup>
                      <div
                        key={"default"}
                        className="d-flex space-around flex-direction-row mt-5 mb-4"
                      >
                        <FormCheck
                          name="createAccountMode"
                          type="radio"
                          id="create-account"
                          label="Créer un nouveau compte"
                          style={{ marginRight: "13px" }}
                          className="mr-2"
                        />

                        <FormCheck
                          name="InvitedMode"
                          type="radio"
                          id="lauch-as-invited"
                          label="Executer tant qu'invité"
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
                          placeholder="Rentrez l'adresse de votre domicile"
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
                          placeholder="Rentrez le nom de votre ville"
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
                          placeholder="Rentrez le code postal de votre ville"
                        />
                        {touched.zipcode && errors.zipcode ? (
                          <h5>
                            <Badge variant="danger">{errors.zipcode}</Badge>{" "}
                          </h5>
                        ) : null}
                      </FormGroup>
                    </div>
                    <FormGroup>
                      <div
                        key={"default"}
                        className="d-flex space-between flex-direction-row mb-5"
                      >
                        <FormCheck
                          name="lauchNow"
                          type="radio"
                          id="launch-now"
                          label="Lancer la tâche maintenant"
                          className="mr-2"
                        />

                        <FormCheck
                          name="lauchLater"
                          type="radio"
                          label="Lancer la tâche plus tard"
                          id="launch-later"
                        />
                      </div>
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

export default NewTask
