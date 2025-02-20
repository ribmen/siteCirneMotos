import emplacamento1 from '../../../assets/fluxogramas/Fluxograma-Emplacamento-e-Semi-novos-1.png'
import emplacamento2 from '../../../assets/fluxogramas/Fluxograma-Emplacamento-e-Semi-novos-2.png'
import faturamento from '../../../assets/fluxogramas/Fluxograma-Faturamento-2.png';
import venda from '../../../assets/fluxogramas/Processo-de-Venda-e-Apresentacao-da-Moto-COMERCIAL-1.png'
import apresentacao from '../../../assets/fluxogramas/Processo-de-Venda-e-Apresentacao-da-Moto-COMERCIAL-2.png'
import perseguicao from '../../../assets/fluxogramas/Fluxo-Comercial-Perseguição.png'
import entrega from '../../../assets/fluxogramas/Fluxo-Entrega-da-moto.png'

export const dataVendedor = [
  { 
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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