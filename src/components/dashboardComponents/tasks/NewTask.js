import React from "react"
import {
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
import { useHistory } from "react-router-dom"

import MainBackButton from "../../primaryComponents/MainBackButton"
import MainButton from "../../primaryComponents/MainButton"
import MainTitle from "../../primaryComponents/MainTitle"

const NewTask = () => {
  const history = useHistory()
  const handleHistory = () => history.goBack()

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <div>
        <Row>
          <MainBackButton onClick={handleHistory} />
          <MainTitle size="sm" title="Nouvelle tâche" />
        </Row>
      </div>
      <div>
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

      <div style={{ marginTop: "15px" }}>
        <Form>
          {["checkbox"].map(() => (
            <div
              key={"default"}
              className="mb-5"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <FormCheck
                id={"create-account"}
                label={"Créer un nouveau compte"}
                style={{ marginRight: "13px" }}
              />

              <FormCheck
                id={"lauch-as-invited"}
                label={"Executer tant qu'invité"}
              />
            </div>
          ))}

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
          {["checkbox"].map(() => (
            <div
              key={"default"}
              className="mb-5"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <FormCheck
                id={"launch-now"}
                label={"Lancer la tâche maintenant"}
                style={{ marginRight: "13px" }}
              />

              <FormCheck
                label={"Lancer la tâche plus tard"}
                id={"launch-later"}
              />
            </div>
          ))}
        </Form>
      </div>
      <MainButton to="/dashboard/tasks" />
    </div>
  )
}

export default NewTask
