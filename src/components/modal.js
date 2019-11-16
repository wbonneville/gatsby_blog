import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  & .show {
    display: block;
  }

  & .hide {
    display: none;
  }
  & .overlay {
    background: #0000003a;
    transition: opacity 0.2s ease;
  }

  & .modal {
    width: 500px;

    background-color: #fff;
    border-radius: 2px;
    transform: translateY(100%);
    transition: transform 0.2s ease;
    box-shadow: 0 2px 8px 3px;
    font-family: Helvetica, Arial, sans-serif;
  }

  & .modal button {
    margin: 0 auto;
    border-radius: 50%;
    box-shadow: 1px 1px 1px #0000003a;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.562);
  }
`;

function Modal(props) {
  const { show, closeModal } = props;
  return (
    <Wrapper>
      <div className={show ? 'overlay' : 'hide'} onClick={closeModal} />
      <div className={show ? 'modal' : 'hide'}>
        <button onClick={closeModal}>X</button>
        <h1>Modal heading</h1>
        <p>This is modal content</p>
      </div>
    </Wrapper>
  );
}

export default Modal;
