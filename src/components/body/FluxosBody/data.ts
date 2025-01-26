import emplacamento1 from '../../../assets/fluxogramas/Fluxograma-Emplacamento-e-Semi-novos-1.png'
import emplacamento2 from '../../../assets/fluxogramas/Fluxograma-Emplacamento-e-Semi-novos-2.png'
import faturamento from '../../../assets/fluxogramas/Fluxograma-Faturamento-2.png';
import venda from '../../../assets/fluxogramas/Processo-de-Venda-e-Apresentacao-da-Moto-COMERCIAL-1.png'
import apresentacao from '../../../assets/fluxogramas/Processo-de-Venda-e-Apresentacao-da-Moto-COMERCIAL-2.png'
import perseguicao from '../../../assets/fluxogramas/Fluxo-Comercial-Perseguição.png'
import entrega from '../../../assets/fluxogramas/Fluxo-Entrega-da-moto.png'

export const data = [
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

        <p><strong>Faturamento:</strong> Após aprovação, a nota fiscal é gerada e o faturamento é realizado no sistema pelo responsável pelo caixa</p>

        <p><strong>Levar papel faturado para auxiliar de oficina:</strong> O documento de faturamento é encaminhado ao auxiliar de oficina para registro e acompanhamento do processo de produção, a auxiliar vai registrar quando a montagem da mota vai acontecer.</p>

        <p><strong>Levar papel cadastrado para oficina:</strong> O documento registrado é levado à oficina, assegurando que o pedido esteja alinhado com a produção, nesse momento a oficina vai receber a data de quando a moto deve ser entregue para o cliente.</p>

        <p><strong>Levar papel cadastrado para o vendedor:</strong> O papel com os registros de venda é entregue ao vendedor, fechando o ciclo de faturamento com a confirmação de que tudo está devidamente documentado, dessa forma o vendedor entra em contato novamente com o cliente para retornar a data de quando poderá buscar a moto.</p>


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
      </div>
    `,
    textStyle: {},
  },
  
  { 
    id: 4,
    title: 'Processo de venda',
    src: venda,
    alt: 'Processo de venda',
    text: `
    <div style="line-height: 1.6; font-size: 1.2rem; color: ${({ theme }: any) => theme.colors.neutral.dark};">
    <p><strong>Mais informações no treinamento abaixo:</strong></p>
<p><a href="https://youtu.be/x2MHpIGjqTk" target="_blank"><u>https://youtu.be/x2MHpIGjqTk</u></a></p>

<p><strong>0. Preparação:</strong> Nesta etapa, é essencial estudar os modelos de motos, conhecer seus diferenciais e características, além de pesquisar sobre a concorrência para ter argumentos sólidos. Aproveite os treinamentos disponíveis e a Academia de Vendas para reforçar técnicas e garantir que esteja sempre preparado para esclarecer dúvidas e transmitir confiança ao cliente.</p>

<p><strong>1. Início da venda:</strong> Estar preparado para iniciar o atendimento ao cliente com prontidão.</p>

<p><strong>2. Apresentar-se ao cliente:</strong> Identificar-se para estabelecer conexão inicial.</p>

<p><strong>3. Perguntar o nome do cliente:</strong> Coletar o nome para personalizar o atendimento.</p>

<p><strong>4. Fazer sondagem:</strong> Identificar as necessidades e preferências do cliente.</p>

<p><strong>5. Apresentação do produto:</strong> Mostrar o produto e destacar seus benefícios (gera sub processo).</p>

<p><strong>6. Apresentação da proposta:</strong> Explicar as condições de venda, preço e vantagens através do registro no P2E.</p>

<p style="color:rgb(190, 161, 0);"><strong>7. Compra foi efetuada?</strong></p>
<p><strong>Decisão:</strong> Avaliar se o cliente aceitou a proposta.</p>
<ul>
  <li><strong>Não:</strong> Passar para o próximo passo (8).</li>
  <li><strong>Sim:</strong> Seguir para a conclusão da venda (10).</li>
</ul>

<p><strong>8. Resolver objeções:</strong> Tratar possíveis dúvidas ou barreiras que o cliente tenha para efetuar a compra.</p>
<p><a href="https://p2e.intersistemas.com.br/videoBiblioteca/treinamentoVendedores?offset=0&max=5&categoriaId=7&format=&dominio=VideoBiblioteca&listagem=treinamentoVendedores" target="_blank">Link para treinamento de objeções: <u>https://p2e.intersistemas.com.br/videoBiblioteca/treinamentoVendedores?offset=0&max=5&categoriaId=7&format=&dominio=VideoBiblioteca&listagem=treinamentoVendedores</u> </a></p>

<p style="color:rgb(190, 161, 0);"><strong>9. A objeção foi resolvida?</strong></p>
<p><strong>Decisão:</strong> Confirmar se o cliente está convencido.</p>
<ul>
  <li><strong>Não:</strong> Seguir para passo 11.</li>
  <li><strong>Sim:</strong> Prosseguir com a conclusão (10).</li>
</ul>

<p><strong>10. Concluir a venda:</strong> Finalizar os trâmites e formalizar a compra.</p>

<p><strong>11. Registrar como 'venda não efetuada' no P2E:</strong> Catalogar o cliente para ações futuras.</p>

<p><strong>12. Fim da venda:</strong> Encerrar o processo.</p>
</div>


    `,
    textStyle: {textAlign: 'center'},
  },
  { 
    id: 5,
    title: 'Processo de apresentação da moto',
    src: apresentacao,
    alt: 'Processo de apresentação da moto',
    text: `
    <div style="line-height: 1.6; font-size: 1.2rem; color: ${({ theme }: any) => theme.colors.neutral.dark};">
      <p><strong>Informações detalhadas do processo de apresentação disponíveis nos links abaixo:</strong></p>
<p><a href="https://academiadevendashonda.konviva.com.br/lms/#/home" target="_blank">Academia de Vendas: <u>https://academiadevendashonda.konviva.com.br/lms/#/home</u></a></p>
<p><a href="https://revistadigitalhonda.com.br/" target="_blank">Revista Digital: <u>https://revistadigitalhonda.com.br/</u></a></p>
<p><strong>Lembrar que esse processo é viável apenas caso o cliente possua CNH.</strong></p>

<p><strong>1. Início da apresentação:</strong> Iniciar a apresentação da moto, preparando o cliente para uma demonstração completa, destacando os principais aspectos.</p>

<p><strong>2. Apresentar pela frente da moto:</strong> Exibir a moto pela parte frontal, enfatizando os detalhes da estrutura, faróis, suspensão dianteira, sistema de freio, tipo de pastilhas, pneu dianteiro e demais componentes visíveis, explicando suas funções e benefícios.</p>

<p><strong>3. Apresentar a lateral direita da moto:</strong> Mostrar a lateral direita da moto, destacando elementos importantes, como a posição dos controles, design e acessórios específicos dessa parte do veículo como pedaleira, motor, metragem, escapamento.</p>

<p><strong>4. Apresentar a traseira da moto:</strong> Apresentar a traseira da moto, explicando características como suspensão, iluminação traseira, estrutura e outros aspectos relevantes como frenagem e garupa.</p>

<p><strong>5. Apresentar a lateral esquerda da moto:</strong> Demonstrar a lateral esquerda da moto, focando nos detalhes visíveis, como design, câmbio, e outros aspectos.</p>

<p><strong>6. Apresentar região superior da moto:</strong> Apresentar a parte superior da moto, incluindo o guidão, painel de controle, manetes e demais funcionalidades que o cliente deve conhecer. Apresentar detalhes do painel, manetes, freio, embreagem e comandos da moto.</p>

<p><strong>7. Orientar o cliente para a experiência física (sentar na moto, etc.):</strong> Orientar o cliente para que ele experimente fisicamente a moto, permitindo que se sente e explore outras funcionalidades como se estivesse utilizando o veículo.</p>

<p style="color:rgb(190, 161, 0);"><strong>8. Há disponibilidade desse modelo de moto para Test Ride?</strong></p>
<p><strong>Verificar:</strong> Se o modelo solicitado está disponível para Test Ride.</p>
<ul>
  <li><strong>Sim:</strong> Avança para o próximo passo (10).</li>
  <li><strong>Não:</strong> Direciona para o 9: Fim do processo ausente de Test Ride.</li>
</ul>

<p><strong>9. Fim do processo ausente de Test Ride:</strong> Finaliza o processo devido à indisponibilidade do modelo para Test Ride.</p>

<p><strong>10. Oferecer Test Ride ao cliente:</strong> Informar ao cliente sobre a possibilidade de realizar o Test Ride com o modelo disponível e esclarecer sobre o trajeto anexado abaixo:</p>
<p><strong>Percurso Test Ride:</strong></p>

<p style="color:rgb(190, 161, 0);"><strong>11. Cliente aceitou fazer o Test Ride?</strong></p>
<p><strong>Verificar:</strong> Se o cliente aceita realizar o Test Ride.</p>
<ul>
  <li><strong>Sim:</strong> Avança para o 12: Cliente realiza Test Ride.</li>
  <li><strong>Não:</strong> Direciona para o 13: Fim do processo.</li>
</ul>

<p><strong>12. Cliente realiza Test Ride:</strong> Permite ao cliente experimentar o modelo disponível, realizando o Test Ride. Vistoria da moto, cliente deve assinar ficha de teste.</p>

<p><strong>13. Fim do processo:</strong> Conclui o atendimento, seja com a realização do Test Ride ou apenas com a apresentação da moto.</p>
</div>

    `,
    textStyle: {textAlign: 'center'},
  },
  { 
    id: 6,
    title: 'Perseguição',
    src: perseguicao,
    alt: 'Perseguição',
    text: `
    <div style="line-height: 1.6; font-size: 1.2rem; color: ${({ theme }: any) => theme.colors.neutral.dark};">
      <p><strong>Mais informações no treinamento abaixo:</strong></p>
<p><a href="https://youtu.be/BfTSfMwFNDk" target="_blank"><u>https://youtu.be/BfTSfMwFNDk</u></a></p>

<p><strong>1. Início da Perseguição:</strong></p>

<p><strong>2. Identificar informações no sistema P2E:</strong> Identificar informações relevantes sobre o cliente e registrar um lembrete detalhado na plataforma P2E para controle e consulta futura.</p>

<p><strong>3. Iniciar contato estratégico:</strong> Entrar em contato com o cliente e mencionar um detalhe específico registrado no P2E para criar um vínculo personalizado e chamar sua atenção.</p>

<p><strong>4. Fazer uma pergunta de transição:</strong> Elaborar uma pergunta que toque no motivo inicial que levou o cliente a considerar a compra da moto, incentivando-o a refletir sobre sua necessidade ou desejo.</p>

<p><strong>5. Mexer na ferida do cliente:</strong> Abordar a dor ou problema que motivou a busca pela moto, ressaltando como a solução oferecida pela empresa pode atender a essa necessidade.</p>

<p><strong>6. Refutar objeções:</strong> Ouvir atentamente quaisquer objeções apresentadas pelo cliente e responder com argumentos claros e direcionados, eliminando dúvidas ou barreiras que impeçam o avanço no processo de compra.</p>

<p><strong>7. Criar uma isca atrativa:</strong> Apresentar um benefício exclusivo ou uma novidade parcial que desperte a curiosidade do cliente, sem revelar todos os detalhes para incentivá-lo a visitar a loja.</p>

<p><strong>8. Encerrar com reforço positivo:</strong> Finalizar a interação reafirmando o valor da solução proposta e mostrando-se disponível para atender o cliente da melhor forma possível.</p>
</div>
    `,
    textStyle: {textAlign: 'center'},
  },
  { 
    id: 7,
    title: 'Venda de seminovos',
    src: emplacamento2,
    alt: 'Venda de seminivos',
    text: `
    <div style="line-height: 1.6; font-size: 1.2rem; color: ${({ theme }: any) => theme.colors.neutral.dark};">
      <p><strong>Informações relevantes no Portal de Serviços do DETRAN:</strong></p>
<p><a href="https://portal.detran.rn.gov.br/#/servicos/home" target="_blank"><u>https://portal.detran.rn.gov.br/#/servicos/home</u></a></p>

<p><strong>1. Enviar Solicitação de Vistoria:</strong> Solicite a vistoria informando o modelo da moto e o código de segurança para abrir o ATPV.</p>

<p><strong>2. Solicitar Abertura de Recibo de Compra e Venda:</strong> Após a vistoria, solicite o recibo e apresente documentos exigidos ao Coordenador de Logística.</p>

<p><strong>3. Fazer Recibo de Compra e Venda:</strong> Formalize o recibo com as informações coletadas e assine junto com o comprador.</p>

<p><strong>4. Assinatura de Ambos:</strong> Vendedor e comprador assinam o recibo para oficializar a venda.</p>

<p><strong>5. Solicitar Abertura do Processo no Detran:</strong> Envie os documentos ao Coordenador, que abre o processo com um despachante.</p>

<p><strong>6. Pagar Taxas de Transferência:</strong> O Coordenador calcula as taxas e repassa o valor ao caixa para pagamento.</p>

<p><strong>7. Aguardar Confirmação do Detran:</strong> Aguarde a validação do Detran após o pagamento das taxas.</p>

<p><strong>8. Entregar a Moto:</strong> Após a transferência no sistema do Detran, entregue a moto ao novo proprietário.</p>

<p><strong>9. Fim do Processo:</strong> O processo finaliza com a entrega da moto e a conclusão de todas as etapas.</p>

</div>
    `,
    textStyle: {textAlign: 'center'},
  },
].map((image, index) => ({...image, id: index}));