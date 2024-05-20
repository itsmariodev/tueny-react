import React from "react";
import { Button } from "semantic-ui-react";
import "./HeaderPage.scss";

export function HeaderPage(props) {
  const { titulo, btnTitulo, btnClick, btnTituloDos, btnClickDos } = props;
  return (
    <div className="header-page-admin">
      <h2>{titulo}</h2>

      <div>
        {btnTitulo && (
          <Button positive onClick={btnClick}>
            {btnTitulo}
          </Button>
        )}
        {btnTituloDos && (
          <Button negative onClick={btnClickDos}>
            {btnTituloDos}
          </Button>
        )}
      </div>
    </div>
  );
}
