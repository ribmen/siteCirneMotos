import React, { useState } from "react";
import styled from "styled-components";

interface DropdownProps {
  data: string; // Espera uma string com HTML (como data.text)
  label: string;
}

const Container = styled.div`
  margin: 20px;
`;

const Button = styled.button`
  background-color: #cc0000;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #910000;
  }
`;

const TextContent = styled.div<{ visible: boolean }>`
  overflow: hidden;
  max-height: ${(props) => (props.visible ? "20000px" : "0")}; /* Ajuste o valor máximo para comportar o texto */
  transition: max-height 0.5s ease, padding 0.3s ease; /* Transição suave */
  margin-top: ${(props) => (props.visible ? "10px" : "0")}; /* Evita deslocamento brusco */
  padding: ${(props) => (props.visible ? "15px" : "0 15px")};
  border: ${(props) => (props.visible ? "1px solid #ddd" : "none")};
  border-radius: ${(props) => (props.visible ? "5px" : "0")};
  background-color: ${(props) => (props.visible ? "#f9f9f9" : "transparent")};

  @media screen and (max-width: 1200px) {
    margin-left: -5%;
    width: 35%;
  }
`;

export const Dropdown: React.FC<DropdownProps> = ({ data, label }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <Container>
      <Button onClick={toggleVisibility}>
        {isVisible ? "Ocultar Texto " : label}
        {isVisible ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="currentColor"
              d="M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8l316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="currentColor"
              d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496"
            />
          </svg>
        )}
      </Button>
      <TextContent visible={isVisible}>
        <div dangerouslySetInnerHTML={{ __html: data }} />
      </TextContent>
    </Container>
  );
};
