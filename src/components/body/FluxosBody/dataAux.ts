import emplacamento1 from '../../../assets/fluxogramas/Fluxograma-Emplacamento-e-Semi-novos-1.png'
import emplacamento2 from '../../../assets/fluxogramas/Fluxograma-Emplacamento-e-Semi-novos-2.png'
import faturamento from '../../../assets/fluxogramas/Fluxograma-Faturamento-2.png';
import venda from '../../../assets/fluxogramas/Processo-de-Venda-e-Apresentacao-da-Moto-COMERCIAL-1.png'
import apresentacao from '../../../assets/fluxogramas/Processo-de-Venda-e-Apresentacao-da-Moto-COMERCIAL-2.png'
import perseguicao from '../../../assets/fluxogramas/Fluxo-Comercial-Perseguição.png'
import entrega from '../../../assets/fluxogramas/Fluxo-Entrega-da-moto.png'

export const dataAux = [
  { 
    id: 1,
    title: 'Faturamento',
    src: faturamento,
    alt: 'Faturamento',
    text: `
    <div style="line-height: 1.6; font-size: 1.2rem; color: ${({ theme }: any) => theme.colors.neutral.dark};">
        <p><strong>1. Início do processo de faturamento da moto.</p></strong>

        <p><strong>2. Vendedor repassa informações:</strong> O auxiliar recebe informações do vendedor para checar se a venda foi devidamente registrada no cloud.</p>

              <p>
          <span style="color:rgb(190, 161, 0); font-weight: bold;">3. Venda foi cadastrada no Cloud?</span>
        </p>
        <ul style="list-style-type: none; padding-left: 1.5rem;">
          <li>
            <strong>Decisão:</strong> Verificar se os dados da venda foram registrados no sistema Cloud.
          </li>
          <li style="margin-top: 0.5rem;">
            <strong>Sim:</strong> Segue para a próxima etapa (5).
          </li>
          <li style="margin-top: 0.5rem;">
            <strong>Não:</strong> Realiza o cadastro no sistema (atividade 4).
          </li>
        </ul>

        <p><strong>4. Cadastrar cliente no Cloud:</strong> Caso o cliente ainda não esteja no sistema, ele é cadastrado no Cloud, garantindo que todas as informações básicas estejam inseridas.</p>

        <span style="color:rgb(190, 161, 0); font-weight: bold;">5. Foi venda por financiamento?</span>
        
        <p>
        <strong style="color: rgb(190, 161, 0);">Decisão:</strong> Determina se a venda será por meio de financiamento.
      </p>
      <ul>
        <li><strong>Sim:</strong> Segue para a etapa de recebimento da documentação (atividade 6).</li>
        <li><strong>Não:</strong> Avança para o próximo passo de assinatura (atividade 7).</li>
      </ul>


        <p><strong>6. Baixar documentação de financiamento:</strong> Se a venda foi por financiamento, o vendedor recebe dados impressos do P2E pelo vendedor para preencher as informações de forma correta para o faturamento.</p>

        <p>
  <strong style="color: rgb(190, 161, 0);">Cliente assinou presencialmente?</strong> Confirma se o cliente assinou os documentos pessoalmente.
</p>
<ul>
  <li><strong>Sim:</strong> Prossegue para receber o comprovante de venda do vendedor (atividade 9).</li>
  <li><strong>Não:</strong> Envia o link para assinatura digital (atividade 8).</li>
</ul>


        <p><strong> 8. Enviar link:</strong> O link de assinatura de financiamento ao cliente</p> 

        <p><strong>9. Receber comprovante de venda pelo vendedor para fazer os tramites de faturamento</p></strong>

        <p><strong>10. Fazer proposta:</strong> Com os dados reunidos, é elaborada uma proposta de faturamento a ser enviada ao caixa para aprovação no cloud.</p>

        <p><strong>11. Esperar Aval do financeiro:</strong> A proposta é enviada para o financeiro que deve liberar a proposta para continuar os trâmites.</p> 

        <p><strong>12. Enviar proposta para o caixa:</strong> A proposta de faturamento é enviada ao departamento financeiro (caixa) para validação.</p>

        <p><strong>13. Faturamento:</strong> Após aprovação, a nota fiscal é gerada e o faturamento é realizado no sistema pelo responsável pelo caixa</p>

        <p><strong>14. Levar papel faturado para auxiliar de oficina:</strong> O documento de faturamento é encaminhado ao auxiliar de oficina para registro e acompanhamento do processo de produção, a auxiliar vai registrar quando a montagem da mota vai acontecer.</p>

        <p><strong>15. Levar papel cadastrado para oficina:</strong> O documento registrado é levado à oficina, assegurando que o pedido esteja alinhado com a produção, nesse momento a oficina vai receber a data de quando a moto deve ser entregue para o cliente.</p>

        <p><strong>16. Levar papel cadastrado para o vendedor:</strong> O papel com os registros de venda é entregue ao vendedor, fechando o ciclo de faturamento com a confirmação de que tudo está devidamente documentado, dessa forma o vendedor entra em contato novamente com o cliente para retornar a data de quando poderá buscar a moto.</p>


        <p><strong>17. Fim de faturamento:</strong>
        Acontece o fim do faturamento, com o auxiliar verificando todos os documentos que devem ser arquivados e entregando os arquivos para o responsável de arquivamento.</p>
    </div>
    `,
    textStyle: {textAlign: 'center'},
  },

  { 
    id: 2,
    title: 'Entrega da moto',
    src: entrega,
    alt: 'Entrega da moto',
    text: `
    <div style="line-height: 1.6; font-size: 1.2rem; color: ${({ theme }: any) => theme.colors.neutral.dark};">
      <p><strong>1.	Início</strong>
      Início do processo de entrega da moto.</p>

      <p><strong>2.	Imprimir checklist</strong>
      Auxiliar recebe informações de venda do vendedor para poder imprimir check list</p>

      <p><strong>3.	Conferir limpeza da moto</strong>
      Verificar o estado de limpeza da moto.</p>
      
      <p>
  <span style="color:rgb(190, 161, 0); font-weight: bold;">4. A moto está limpa?</span>
</p>
<ul style="list-style-type: none; padding-left: 1.5rem;">
  <li>
    <strong>Decisão:</strong> Avaliar se a moto está devidamente limpa.
  </li>
  <li style="margin-top: 0.5rem;">
    <strong>Sim:</strong> Seguir para a etapa de conferir o tanque da moto (7).
  </li>
  <li style="margin-top: 0.5rem;">
    <strong>Não:</strong> Solicitar limpeza (5).
  </li>
</ul>


      <p><strong>5. Solicitar limpeza da moto na oficina:</strong>
    Em caso de necessidade, solicitar que a oficina realize a limpeza da moto.</p>

<p><strong>6. Buscar moto limpa na oficina:</strong>
    Após a limpeza, buscar a moto na oficina para continuidade do processo.</p>

<p><strong>7. Conferir se tanque da moto está cheio:</strong>
    Fazer a conferência do tanque para entregá-lo cheio.</p>

<p><strong>8. Levar a moto para espaço de entrega:</strong>
    Transportar a moto até a área destinada para a entrega ao cliente.</p>

<p><strong>9. Entregar documentos para assinatura do cliente:</strong>
    Apresentar os documentos necessários ao cliente para assinatura.</p>

<p><strong>10. Assinar nota fiscal da compra:</strong>
    Proceder com a assinatura da nota fiscal de compra pelo cliente.</p>

<p><strong>11. Orientar ao cliente sobre as especificações da moto:</strong>
    Fornecer ao cliente as orientações pertinentes sobre o funcionamento e as especificações da moto.</p>

<p><strong>12. Apresentar a moto:</strong>
    Realizar a apresentação formal da moto ao cliente, destacando características e funcionalidades.</p>

<p><strong>13. Fim da entrega:</strong>
    Encerramento do processo de entrega da moto, concluindo a atividade.</p>
</div>
    `,
    textStyle: {textAlign: 'center'},
  },
  {
    id: 3,
    title: 'Emplacamento',
    src: emplacamento1,
    alt: 'Emplacamento',
    text: `
      <div style="line-height: 1.6; font-size: 1.2rem; color: ${({ theme }: any) => theme.colors.neutral.dark};">
        <p><strong>1. Início do emplacamento:</strong> Iniciar o processo de emplacamento do veículo, garantindo que todos os documentos e informações necessárias estejam disponíveis para prosseguir.</p>
        <p><strong>2. Buscar dados na nota fiscal:</strong> Localizar e extrair os dados pertinentes da nota fiscal do veículo, como número de série, modelo, e demais informações necessárias para o procedimento de emplacamento.</p>
        <p><strong>3. Anotar no caderno presente na oficina (caderno pessoal do auxiliar):</strong> Registrar as informações coletadas da nota fiscal no caderno pessoal do auxiliar de oficina, garantindo que todos os dados estejam anotados para controle e acompanhamento.</p>
        <p><strong>4. Oficina se encarrega do restante do trâmite com o Detran:</strong> A oficina realiza o envio das informações ao Detran e gerencia todo o trâmite burocrático necessário para o emplacamento do veículo, incluindo a solicitação do número de placa e demais etapas legais.</p>
        <p><strong>5. Fim do processo de emplacamento:</strong> Concluir o processo de emplacamento, após o Detran fornecer a placa do veículo, e garantir que todos os documentos relacionados ao emplacamento estejam devidamente registrados e arquivados.</p>
        <p><strong>Sobre documentação necessária: </strong></p>
        <ul>
          <li><strong>CNH</strong> de preferência baixar pelo <i>App Carteira Digital</i> se não tiver <strong>RG/CPF</strong>;
          <li><strong>PROCURAÇÃO PARA O DETRAN</strong> – que sai automático no P2E;</li>
          <li><strong>PROCURAÇÃO PARA EMPLACAMENTO</strong> — que sai automático no P2E se o emplacamento for com a loja;</li>
          <li><ul><strong>COMPROVANTE DE RENDA NO NOME DO COMPRADOR</strong>
            <li><u>1° Caso:</u> comprovantes de ÁGUA e LUZ não precisam autenticar em cartório.</li>
            <li><u>2° Caso:</u> se o comprovante não for no nome do comprador, é preciso autenticar no cartório e apresentar a declaração de endereço (essa que não precisa autenticar).
            </li>         
          </ul>
          </li>
        </ul>

      </div>
    `,
    textStyle: {},
  },
  
 
].map((image, index) => ({...image, id: index}));