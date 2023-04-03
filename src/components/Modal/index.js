import React from "react"
import { ModalWrapper } from "./modal.styles"

const ModalMain = ({ open, content }) => (
  <ModalWrapper open={open}>
    <div className={`modal fade ${open ? "show" : ""}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">{content}</div>
        </div>
      </div>
    </div>
    <div className={`modal-backdrop fade ${open ? "show" : ""}`} />
  </ModalWrapper>
)

export default ModalMain
