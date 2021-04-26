import React, { useCallback } from "react"
import { Button, Col, Row } from "react-bootstrap"
import { useHistory } from "react-router-dom"

import Page, { PageContent, PageHeader } from "../../../Page"

const LogOut = () => {
  const history = useHistory()
  const handleLogOut = useCallback(() => {
    // if (creds === ok)

    history.push("/log-in")
  })

  const handleReturn = () => history.goBack()

  return (
    <Page>
      <PageHeader>Déconnexion</PageHeader>
      <PageContent>
        <Col
          style={{ minHeight: "60vh" }}
          className="d-flex align-items-center justify-content-center"
        >
          <div>
            <p>Souhaitez-vous vous déconnecter de l&apos;application ?</p>
            <Row className="d-flex align-items-center justify-content-center space-between">
              <Button
                size="md"
                variant="primary"
                onClick={handleReturn}
                className="w-40 p-3"
                block
              >
                Annuler
              </Button>

              <Button
                size="md"
                variant="danger"
                onClick={handleLogOut}
                className="w-40 p-3"
                block
              >
                Me déconnecter
              </Button>
            </Row>
          </div>
        </Col>
      </PageContent>
    </Page>
  )
}

export default LogOut
