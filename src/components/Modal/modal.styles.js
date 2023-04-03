import styled from "styled-components"

export const ModalWrapper = styled.div`
  .modal {
    display: block;
    pointer-events: none;

    &.show {
      pointer-events: all;
      opacity: 1;

      .modal-content,
      .modal-body {
        pointer-events: all;
      }
    }
  }

  .modal-backdrop {
    pointer-events: none;
    background-color: #000;

    &.show {
      pointer-events: all;
      opacity: 0.9;
    }
  }

  .modal-content {
    width: 100%;
    pointer-events: none;

    @media (min-width: 768px) {
      width: 570px;
    }
  }

  .modal-body {
    width: 100%;
    pointer-events: none;

    @media (min-width: 768px) {
      padding: 40px;
    }
  }
`
