import React, { useCallback } from "react"
import { useHistory } from "react-router-dom"
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
} from "react-bootstrap"
import DropdownItem from "react-bootstrap/esm/DropdownItem"
import DropdownMenu from "react-bootstrap/esm/DropdownMenu"
import DropdownToggle from "react-bootstrap/esm/DropdownToggle"

import Page, { PageContent, PageHeader } from "../../Page"

const NewTask = () => {
  const history = useHistory()
  const handleSubmit = useCallback(() => {
    // if (creds === ok)

    history.push("/dashboard/tasks")
  })

  return (
    <Page>
      <PageHeader>Nouvelle tâche</PageHeader>
      <PageContent className="d-flex align-items-center justify-content-center">
        <Row className="mt-3">
          <Col>
            <div className="d-flex justify-content-center">
              <Dropdown>
                <DropdownToggle variant="primary" id="dropdown-shop">
                  Magasin
                </DropdownToggle>

                <DropdownMenu id="shop-menu" title="Magasin">
                  <DropdownItem>Auchan</DropdownItem>
                  <DropdownItem>Cdiscount</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>

            <div className="mt-3">
              <Form>
                <div
                  key={"default"}
                  className="d-flex space-around flex-direction-row mb-5"
                >
                  <FormCheck
                    name="execute-mode"
                    type="radio"
                    id="create-account"
                    label="Créer un nouveau compte"
                    style={{ marginRight: "13px" }}
                    className="mr-2"
                  />

                  <FormCheck
                    name="execute-mode"
                    type="radio"
                    id="lauch-as-invited"
                    label="Executer tant qu'invité"
                  />
                </div>

                <div>
                  <FormGroup>
                    <FormLabel>URL du produit souhaité :</FormLabel>
                    <FormControl
                      size="sm"
                      type="text"
                      placeholder="Rentrez l'URL du produit"
                    />
                  </FormGroup>

                  <FormGroup>
                    <FormLabel>Quantité souhaité :</FormLabel>
                    <FormControl
                      size="sm"
                      type="number"
                      placeholder="Quantité souhaité"
                    />
                  </FormGroup>

                  <FormGroup>
                    <FormLabel>Adresse de livraison :</FormLabel>
                    <FormControl
                      size="sm"
                      type="text"
                      placeholder="Rentrez l'adresse de votre domicile"
                    />
                  </FormGroup>

                  <FormGroup>
                    <FormLabel>Ville de livraison :</FormLabel>
                    <FormControl
                      size="sm"
                      type="text"
                      placeholder="Rentrez le nom de votre ville"
                    />
                  </FormGroup>

                  <FormGroup>
                    <FormLabel>Code postal de la ville :</FormLabel>
                    <FormControl
                      size="sm"
                      type="number"
                      placeholder="Rentrez le code postal de votre ville"
                    />
                  </FormGroup>
                </div>
                <div
                  key={"default"}
                  className="d-flex space-between flex-direction-row mb-5"
                >
                  <FormCheck
                    name="execute-time"
                    type="radio"
                    id="launch-now"
                    label="Lancer la tâche maintenant"
                    className="mr-2"
                  />

                  <FormCheck
                    name="execute-time"
                    type="radio"
                    label="Lancer la tâche plus tard"
                    id="launch-later"
                  />
                </div>
                <Button
                  size="lg"
                  variant="primary"
                  onClick={handleSubmit}
                  block
                >
                  Confirmer
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </PageContent>
    </Page>
  )
}

export default NewTask
