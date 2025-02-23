import React from 'react';
import styled from 'styled-components';
import banner from '../../../assets/banners/reuniao.jpg'
import ContentArea2 from '../../utils/ContentArea2';
import pensamento from '../../../assets/organogramadco.jpg';
import "../InicioBody/body.css";
import { Button } from '../ConceitosBody/ConceitosBody';
import { SectionTitle } from '../SobreEmpresaBody/AboutBody';
import { Link } from 'react-router-dom';

const BodyWrapper = styled.main`
  max-width: 1100px;
  margin: 1rem auto;
  padding: 0 1rem;
  font-size: 1.2rem;
  line-height: 1.8;
`;

const Title = styled.h1`
  color: #cc0000;
  font-size: 2.5rem;
  margin-bottom: 0;
  margin-top: 0;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.neutral.dark};
  position: relative; 
  text-decoration: none; 
  
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary};
  }

  &::after {
    content: ''; 
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%; 
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};  
    transform: scaleX(0); 
    transform-origin: bottom right;
    transition: transform 0.2s ease;  
  }

  &:hover::after,
  &:focus::after {
    transform: scaleX(1);  /* Expande a linha para a largura total quando em hover ou focus */
    transform-origin: bottom left;  /* Garante que a animação cresça da esquerda */
  }
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const Subtitle = styled.h2`
  color: #444;
  font-size: 1.8rem;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin: 1.5rem 0;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: flex-start; 
  gap: 1rem; 
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column; /* Empilha em telas menores */
    align-items: center; 
  }
`;

const LeftImage = styled.img`
  flex-shrink: 0; /* Garante que a imagem não encolha */
  width: 350px; 
  height: auto; 
  object-fit: contain;
`;

const TextContent = styled.div`
  flex: 1; 
  p, ul, li {
    margin: 0.5rem 0;
    font-size: 1.2rem;
    line-height: 1.8;
  }
`;

const Banner = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 2rem;
`;

export const Pops: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <Banner src={banner} alt="Banner Organograma e DCO" />
      <BodyWrapper>
        <ContentArea2>

        <Title>POPS (Procedimentos Operacionais Padrão)</Title>

        <Section>
          <SectionTitle>O que é um POP?</SectionTitle>
          <p>
          Os <strong>Procedimentos Operacionais Padrão (POPs)</strong> são tutoriais detalhados e passo a passo que orientam a execução de atividades e processos nos sistemas utilizados pela empresa, como o P2E, Cloud, IHS, entre outros. Eles garantem que todos os colaboradores sigam as mesmas práticas, assegurando consistência, eficiência e a redução de erros nas operações.
          </p>
        </Section>

        <Section>
          <FlexContainer>
            <LeftImage src={pensamento} />
            <TextContent>
              <p>Os POPs fornecem instruções claras para o uso dos sistemas, desde tarefas simples até processos mais complexos, facilitando a aprendizagem e o alinhamento entre as equipes. Ao seguir esses procedimentos, a Cirne Motos Honda assegura que todas as atividades sejam realizadas conforme os padrões estabelecidos, promovendo a eficácia e a qualidade em todas as áreas.
              </p>
            </TextContent>
          </FlexContainer>
        </Section>
        <Section>
          <Title>Acesso aos conteúdos</Title>
          <TextContent>
            <p>Acesse, clicando nos LINKS a seguir, os respectivos Procedimentos Operacionais Padrão para os setores comercial e administrativo:</p>
            <SectionTitle>POPs COMERCIAL</SectionTitle>
            {/* <ul style={{textDecoration: 'none'}}>
              <li style={{textDecoration: 'none'}}><h3>CARGO</h3></li>
            </ul> */}
            <h3>VENDEDOR</h3>
            <ul>
              <li><p>LINK VENDA VIA P2E: <a href="https://drive.google.com/file/d/1PeopBtIRhBPhEbTFhcg8gFAuQxLlVxWL/view?usp=sharing" target="_blank"><u>https://drive.google.com/file/d/1PeopBtIRhBPhEbTFhcg8gFAuQxLlVxWL/view?usp=sharing</u></a></p></li>

              <li><p>LINK COMPRA SEMINOVOS: <a href="https://drive.google.com/file/d/1_T9LiStRSVYfMSEB7qXcTIRETtavF_p3/view?usp=sharing" target="_blank"><u>https://drive.google.com/file/d/1_T9LiStRSVYfMSEB7qXcTIRETtavF_p3/view?usp=sharing</u></a></p></li>
              
              <li><p>LINK HONDA STORE: <a href="https://drive.google.com/file/d/1SSxQ-6qJ020lFxCg9jmQ3jccoloUlhbU/view?usp=sharing" target="_blank"> <u>https://drive.google.com/file/d/1SSxQ-6qJ020lFxCg9jmQ3jccoloUlhbU/view?usp=sharing</u></a></p></li>
              
              <li><p>LINK EFETIVAÇÃO: <a href="https://drive.google.com/file/d/15_K3ZdQtmzD83DU-vAz-5JzrukmxSPdh/view?usp=sharing" target="_blank"> <u>https://drive.google.com/file/d/15_K3ZdQtmzD83DU-vAz-5JzrukmxSPdh/view?usp=sharing</u></a></p></li>
              </ul>

            <h3>AUXILIAR DE VENDAS</h3>
            <ul>
              <li><p>LINK VENDA NO CLOUD: <a href="https://drive.google.com/file/d/1S_7Byox2jbLzB84yiak9ddX9xYZaU8K1/view?usp=sharing" target="_blank"> <u>https://drive.google.com/file/d/1S_7Byox2jbLzB84yiak9ddX9xYZaU8K1/view?usp=sharing</u></a></p></li>
            </ul>

            <h3>COORDENADOR DE LOGÍSTICA</h3>
            <ul>
              <li><p>LINK PROCESSO DE ENTRADA DE NOTAS FISCAIS: <a href="https://drive.google.com/file/d/17R9PthSLhxrULe6OT8ZqwuIdLW-oXu7G/view?usp=sharing" target="_blank"> <u>https://drive.google.com/file/d/17R9PthSLhxrULe6OT8ZqwuIdLW-oXu7G/view?usp=sharing</u></a></p></li>

              <li><p>LINK PROCESSO DE TRANSFERÊNCIA DE MOTOS ENTRE LOJAS: <a href="https://drive.google.com/file/d/12feGzi0qbrvWVXrrxQ76X5q45rpGvryu/view?usp=sharing" target="_blank"> <u>https://drive.google.com/file/d/12feGzi0qbrvWVXrrxQ76X5q45rpGvryu/view?usp=sharing</u></a></p></li>

            </ul>

            <h3>F&I</h3>
            <ul>
              <li><p>LINK FINANCIAMENTO: <a href="https://drive.google.com/file/d/1321OBR9I43RbgLBAfw5YFlPSd21_oCaC/view?usp=sharing" target="_blank"> <u>https://drive.google.com/file/d/1321OBR9I43RbgLBAfw5YFlPSd21_oCaC/view?usp=sharing</u></a></p></li>

              <li><p>LINK SEGURO: <a href="https://drive.google.com/file/d/1TrqZefxwOR5vS_-KiI5EZ467K0Jv1gnZ/view?usp=sharing" target="_blank"> <u>https://drive.google.com/file/d/1TrqZefxwOR5vS_-KiI5EZ467K0Jv1gnZ/view?usp=sharing</u></a></p></li>

            </ul>


            <SectionTitle>POPs ADMINISTRATIVO</SectionTitle>
            <h3>PÓS-VENDA</h3>
            <ul>
              <li><p>LINK ADIMPLÊNCIA:<a href="https://drive.google.com/file/d/1utv0LGeludQNbu9C5AavA01ysLzHKFel/view?usp=sharing" target="_blank"><u> https://drive.google.com/file/d/1utv0LGeludQNbu9C5AavA01ysLzHKFel/view?usp=sharing</u></a></p></li>
              <li><p>LINK BORDERÔ: <a href="https://drive.google.com/file/d/13yAlBAMneThDzuoFj7NPJh-zB5l7oDH0/view?usp=sharing" target="_blank"> <u>https://drive.google.com/file/d/13yAlBAMneThDzuoFj7NPJh-zB5l7oDH0/view?usp=sharing</u></a></p></li>
              <li><p>LINK CANCELAMENTO: <a href="https://drive.google.com/file/d/1erdeEjQVY3id17zALFhqQi0wRx-QgSbn/view?usp=sharing" target="_blank"><u>https://drive.google.com/file/d/1erdeEjQVY3id17zALFhqQi0wRx-QgSbn/view?usp=sharing</u></a></p></li>
              <li><p>LINK RETENÇÃO: <a href="https://drive.google.com/file/d/1RL29cMIdkkbt-u5v-Qf69k2UkND3uzgG/view?usp=sharing" target="_blank"><u>https://drive.google.com/file/d/1RL29cMIdkkbt-u5v-Qf69k2UkND3uzgG/view?usp=sharing</u></a></p></li>
            </ul>

            <h3>ADMINISTRATIVO HSF</h3>

          </TextContent>
        </Section>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <Button onClick={scrollToTop}>
              Voltar ao topo
            </Button>
          </div>
        </ContentArea2>

      </BodyWrapper>
    </div>
  );
};

