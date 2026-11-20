const CONFIG = {
  ALUGUEL: 100,
  ASSINATURAS_SOFTWARES: 0,
  PLATAFORMAS_ECOMMERCE: 0,
  TAXA_MEI: 0,
  PUBLICIDADE_MINIMA_FIXA: 100,
  AMORTIZACAO: 0,
  CONDOMINIO: 0,
  OUTROS_CUSTOS_FIXOS: 0,
  HORAS_PRODUTIVAS_MENSAIS: 360,

  TINTA_ACRILICA: 20,
  PRIMER: 20,
  VERNIZ: 20,
  CONSUMO_PINTURA_SIMPLES_PCT: 5,
  CONSUMO_PINTURA_MEDIA_PCT: 10,
  CONSUMO_PINTURA_COMPLEXA_PCT: 20,
  MAO_DE_OBRA_PINTURA_POR_HORA: 10,  // mesmo valor do acabamento (não é pintura profissional)

  // MODELAGEM 3D (cobrada uma vez por pedido, sem markup)
  // Valores iniciais; podem ser alterados na tela a cada orçamento
  VALOR_HORA_MODELAGEM: 20,
  TAXA_FERRAMENTAS_IA_POR_PROJETO: 20,  // ChatGPT + Tripo3D
  HORAS_MODELAGEM_SIMPLES: 1,
  HORAS_MODELAGEM_MEDIA: 3,
  HORAS_MODELAGEM_COMPLEXA: 6,

  // Horas de pintura sugeridas por nível
  HORAS_PINTURA_SIMPLES: 0.5,
  HORAS_PINTURA_MEDIA: 1,
  HORAS_PINTURA_COMPLEXA: 2,

  // DESCONTO POR QUANTIDADE (a partir de "min" peças, "pct"% sobre o preço das peças)
  // O desconto sai do lucro: o preço nunca fica abaixo do custo. Modelagem não tem desconto.
  DESCONTO_QUANTIDADE: [
    { min: 5,  pct: 5 },
    { min: 10, pct: 10 },
    { min: 20, pct: 15 },
  ],

  RISCO_FALHAS_PCT: 10,

  CUSTO_KWH: 0.88,
  VALOR_IMPRESSORA: 5000,
  VIDA_UTIL_IMPRESSORA_HORAS: 10000,
  POTENCIA_IMPRESSORA_W: 100,
  CONSUMIVEIS_POR_HORA: 0.50,

  PERCENTUAL_SHOPEE: 20,
  TAXA_FIXA_SHOPEE: 4,
  PERCENTUAL_MERCADO_LIVRE: 19,
};
