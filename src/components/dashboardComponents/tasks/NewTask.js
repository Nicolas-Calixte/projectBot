import React from "react"
import { DropdownButton, Row } from "react-bootstrap"
import DropdownItem from "react-bootstrap/esm/DropdownItem"
import { useHistory } from "react-router"

import MainBackButton from "../../primaryComponents/MainBackButton"
import MainTitle from "../../primaryComponents/MainTitle"

const NewTask = () => {
  const history = useHistory()
  const handleHistory = history.goBack()

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <div>
        <Row>
          <MainBackButton onClick={handleHistory} />
          <MainTitle size="md" title="Nouvelle tâche" />
        </Row>
      </div>
      <div>
        <DropdownButton id="dropdown-shop" title="Magasin">
          <DropdownItem.Text>Choissisez votre magasin</DropdownItem.Text>
          <DropdownItem as="button">Auchan</DropdownItem>
          <DropdownItem as="button">Cdiscount</DropdownItem>
        </DropdownButton>
      </div>
    </div>
  )
}

export default NewTask
