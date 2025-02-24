import React from "react";
import styled from "styled-components";
import soichiro from "../../assets/soichiro-quote.jpg";

// Wrapper principal do componente
const QuoteWrapper = styled.blockquote`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, #f7f7f7, #e6e6e6);
  padding: 0rem 1rem 1rem 1.5rem;
  border-left: 5px solid #cc0000;
  border-radius: 2px;
  font-family: "Georgia", serif;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 2rem auto;
  gap: 1.5rem;

  @media (max-width: 932px) {
    flex-direction: column;
    text-align: center;
    gap: 0rem;
  }
`;

// Estilização da citação
const QuoteText = styled.div`
  flex: 3;
  p {
    padding: 1.5rem 0rem;
    font-size: 1.2rem;
    color: #444;
    line-height: 1.6;
    margin: 0 0 1rem;
  }

  cite {
    font-size: 1rem;
    text-align: left;
    font-weight: bold;
    color: #cc0000;
    display: block;
    margin-top: 1rem;
  }

  @media screen and (max-width: 932px) {
    p {
      font-size: 1.1rem;
      text-align: left;
    }
    
  }
`;

// Estilização da imagem
const QuoteImage = styled.img`
  flex: 1;
  max-width: auto;
  height: 100%;
  border-radius: 0 2px 2px 0px;
  object-fit: cover;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  margin-top: 1.5rem;

  @media screen and (max-width: 932px) {
    max-width: 90%;
    height: 90%;
  }
`;

export const SoichiroQuote: React.FC = () => {
  return (
    <QuoteWrapper>
      <QuoteImage src={soichiro} alt="Foto de Soichiro Honda" />
      <QuoteText>
        <p>
          “O que aprendemos com o fracasso torna-se uma parte preciosa de nós,
          fortalecendo-nos em tudo o que fazemos. Então deixe as coisas difíceis
          torná-lo mais forte.”
        </p>
        <cite>Soichiro Honda</cite>
      </QuoteText>
    </QuoteWrapper>
  );
};

