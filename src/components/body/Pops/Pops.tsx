import React from 'react';
import styled from 'styled-components';
import banner from '../../../assets/banners/reuniao.jpg'
import ContentArea2 from '../../utils/ContentArea2';
import pensamento from '../../../assets/organogramadco.jpg';
import "../InicioBody/body.css";
import { Banner, Button } from '../ConceitosBody/ConceitosBody';
import { SectionTitle } from '../SobreEmpresaBody/AboutBody';
import { Title } from '../SobreEmpresaBody/AboutBody2';

const BodyWrapper = styled.main`
  max-width: 1100px;
  margin: 1rem auto;
  padding: 0 1rem;
  font-size: 1.2rem;
  line-height: 1.8;
`;

const Section = styled.section`
  margin-bottom: 2rem;
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
            <ul className='mobileWidth'>
            <li>
      <p>
        LINK VENDA VIA P2E:{" "}
        <a href="https://drive.google.com/file/d/1PeopBtIRhBPhEbTFhcg8gFAuQxLlVxWL/view?usp=sharing" target="_blank">
          <u>https://drive.google.com/file/d/1PeopBtIRhBPhEbTFhcg8gFAuQxLlVxWL/view?usp=sharing</u>
        </a>
      </p>
    </li>

              <li><p>LINK COMPRA SEMINOVOS: <a href="https://drive.google.com/file/d/1coAbH55sFvxYHtt4Re5IZAIxlJ-ahjPo/view?usp=sharing" target="_blank"><u>https://drive.google.com/file/d/1coAbH55sFvxYHtt4Re5IZAIxlJ-ahjPo/view?usp=sharing</u></a></p></li>
              
              <li><p>LINK HONDA STORE: <a href="https://drive.google.com/file/d/1ncs5KcWqV0b2IswjYmngyixlzam-bjz_/view?usp=sharing" target="_blank"> <u>https://drive.google.com/file/d/1ncs5KcWqV0b2IswjYmngyixlzam-bjz_/view?usp=sharing</u></a></p></li>
              
              <li><p>LINK EFETIVAÇÃO: <a href="https://drive.google.com/file/d/1R46geK2eu7O2zyS_vpE0iqSwmWLjggda/view?usp=sharing" target="_blank"> <u>https://drive.google.com/file/d/1R46geK2eu7O2zyS_vpE0iqSwmWLjggda/view?usp=sharing</u></a></p></li>
              </ul>

            <h3>AUXILIAR DE VENDAS</h3>
            <ul>
              <li><p>LINK VENDA NO CLOUD: <a href="https://drive.google.com/file/d/16akR2-Q-5J4kfhYEoyBuwUbYB5qScJPH/view?usp=sharing" target="_blank"> <u>https://drive.google.com/file/d/16akR2-Q-5J4kfhYEoyBuwUbYB5qScJPH/view?usp=sharing</u></a></p></li>
            </ul>

            <h3>COORDENADOR DE LOGÍSTICA</h3>
            <ul>
              <li><p>LINK PROCESSO DE ENTRADA DE NOTAS FISCAIS: <a href="https://drive.google.com/file/d/17R9PthSLhxrULe6OT8ZqwuIdLW-oXu7G/view?usp=sharing" target="_blank"> <u>https://drive.google.com/file/d/17R9PthSLhxrULe6OT8ZqwuIdLW-oXu7G/view?usp=sharing</u></a></p></li>

              <li><p>LINK PROCESSO DE TRANSFERÊNCIA DE MOTOS ENTRE LOJAS: <a href="https://drive.google.com/file/d/12feGzi0qbrvWVXrrxQ76X5q45rpGvryu/view?usp=sharing" target="_blank"> <u>https://drive.google.com/file/d/12feGzi0qbrvWVXrrxQ76X5q45rpGvryu/view?usp=sharing</u></a></p></li>

            </ul>

            <h3>F&I</h3>
            <ul>
              <li><p>LINK FINANCIAMENTO: <a href="https://drive.google.com/file/d/1321OBR9I43RbgLBAfw5YFlPSd21_oCaC/view?usp=sharing" target="_blank"> <u>https://drive.google.com/file/d/1321OBR9I43RbgLBAfw5YFlPSd21_oCaC/view?usp=sharing</u></a></p></li>

              <li><p>LINK SEGURO: <a href="https://drive.google.com/file/d/1y2GExfR5idp2Eeq_1KPG7luuqmmk_lpf/view?usp=sharing" target="_blank"> <u>https://drive.google.com/file/d/1y2GExfR5idp2Eeq_1KPG7luuqmmk_lpf/view?usp=sharing</u></a></p></li>

            </ul>


            <SectionTitle>POPs VENDAS EXTERNAS</SectionTitle>
            <h3>PÓS-VENDA</h3>
            <ul>
              <li><p>LINK ADIMPLÊNCIA:<a href="https://drive.google.com/file/d/1sl1y_5nsj_0lFKSfq09Ym3AEEECZW6nR/view?usp=sharing" target="_blank"><u> https://drive.google.com/file/d/1sl1y_5nsj_0lFKSfq09Ym3AEEECZW6nR/view?usp=sharing</u></a></p></li>
              <li><p>LINK BORDERÔ: <a href="https://drive.google.com/file/d/14NzJyDpFmM8Kzyoy_zOs0PTB4ArK5DH8/view?usp=sharing" target="_blank"> <u>https://drive.google.com/file/d/14NzJyDpFmM8Kzyoy_zOs0PTB4ArK5DH8/view?usp=sharing</u></a></p></li>
              <li><p>LINK CANCELAMENTO: <a href="https://drive.google.com/file/d/1uXzAybpgpxOS902BwM42PbAinnMET4lH/view?usp=sharing" target="_blank"><u>https://drive.google.com/file/d/1uXzAybpgpxOS902BwM42PbAinnMET4lH/view?usp=sharing</u></a></p></li>
              <li><p>LINK RETENÇÃO: <a href="https://drive.google.com/file/d/1aP_KWWw3i6Qt5NHcGK5kM9PyEpbUZUyb/view?usp=sharing" target="_blank"><u>https://drive.google.com/file/d/1aP_KWWw3i6Qt5NHcGK5kM9PyEpbUZUyb/view?usp=sharing</u></a></p></li>
            </ul>

            <h3>ADMINISTRATIVO HSF</h3>
            <ul>
              <li><p>LINK CONSÓRCIO CONTEMPLAÇÃO:<a href="https://drive.google.com/file/d/1vrRGqh92ispRudanLma2BucJrg3-li8W/view?usp=sharing" target="_blank"><u> https://drive.google.com/file/d/1vrRGqh92ispRudanLma2BucJrg3-li8W/view?usp=sharing</u></a></p></li>
              <li><p>LINK TRANSFERÊNCIA SEM BEM:<a href="https://drive.google.com/file/d/1xviMfxkfHJIvivhGygR4D-nbc8GMwMoG/view?usp=sharing" target="_blank"><u> https://drive.google.com/file/d/1xviMfxkfHJIvivhGygR4D-nbc8GMwMoG/view?usp=sharing</u></a></p></li>
              <li><p>LINK TRANSFERÊNCIA COM O BEM:<a href="https://drive.google.com/file/d/1WldOT606XAdMbGDAa0l1wm21hB-UfXcK/view?usp=sharing" target="_blank"><u> https://drive.google.com/file/d/1WldOT606XAdMbGDAa0l1wm21hB-UfXcK/view?usp=sharing</u></a></p></li>
              <li><p>LINK NUMERÁRIO:<a href="https://drive.google.com/file/d/1JwaaZBYHK9Ziy3gNqT5msqfG6AShundK/view?usp=sharing" target="_blank"><u> https://drive.google.com/file/d/1JwaaZBYHK9Ziy3gNqT5msqfG6AShundK/view?usp=sharing</u></a></p></li>
              
            </ul>

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

