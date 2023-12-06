const produtos = [
  { id: 1, nome: "ABACATE" },
  { id: 2, nome: "ABACAXI" },
  { id: 3, nome: "ABOBORA JAPONESA" },
  { id: 4, nome: "ABOBRINHA" },
  { id: 5, nome: "ACELGA" },
  { id: 6, nome: "ACEROLA" },
  { id: 7, nome: "AGRIAO" },
  { id: 8, nome: "AIPO" },
  { id: 9, nome: "ALECRIM" },
  { id: 10, nome: "ALFACE AMERICANA" },
  { id: 11, nome: "ALFACE CRESPA" },
  { id: 12, nome: "ALFACE FRANCESA" },
  { id: 13, nome: "ALFACE." },
  { id: 14, nome: "ALHO CABEÇA" },
  { id: 15, nome: "ALHO PORÓ" },
  { id: 16, nome: "ALMEIRÃO" },
  { id: 17, nome: "AMEIXA FRUTA NAC." },
  { id: 18, nome: "ASPARGOS" },
  { id: 19, nome: "ATEMÓIA" },
  { id: 20, nome: "BANANA COMPRIDA" },
  { id: 21, nome: "BANANA PRATA" },
  { id: 22, nome: "BAT. DOCE" },
  { id: 23, nome: "BAT. INGLÊSA" },
  { id: 24, nome: "BATATA SAUTÊ" },
  { id: 25, nome: "BERINGELA" },
  { id: 26, nome: "BETERRABA" },
  { id: 27, nome: "BRÓCOLOS JAPONES" },
  { id: 28, nome: "CAJÁ" },
  { id: 29, nome: "CAJÚ" },
  { id: 30, nome: "CARÁ S. TOMÉ" },
  { id: 31, nome: "CEBOLA" },
  { id: 32, nome: "CEBOLA ROXA" },
  { id: 33, nome: "CEBOLINHO" },
  { id: 34, nome: "CENOURA" },
  { id: 35, nome: "CEREJA" },
  { id: 36, nome: "CHICÓRIA" },
  { id: 37, nome: "CHUCHU" },
  { id: 38, nome: "COCO SECO" },
  { id: 39, nome: "CÔCO SECO RALADO" },
  { id: 40, nome: "COENTRO" },
  { id: 41, nome: "COUVE FLÔR" },
  { id: 42, nome: "COUVE FOLHA" },
  { id: 43, nome: "ERVILHA TORTA" },
  { id: 44, nome: "ESCAROLA" },
  { id: 45, nome: "ESPINAFRE" },
  { id: 46, nome: "FEIJÃO VERDE" },
  { id: 47, nome: "GENGIBRE" },
  { id: 48, nome: "GOIABA" },
  { id: 49, nome: "GOMA" },
  { id: 50, nome: "GRANOLA" },
  { id: 51, nome: "GRÃO DE BICO" },
  { id: 52, nome: "GRAVIOLA" },
  { id: 53, nome: "HORTELÃ MOLHO GRANDE" },
  { id: 54, nome: "HORTELÃ MOLHO PEQ." },
  { id: 55, nome: "INHAME" },
  { id: 56, nome: "JERIMUM" },
  { id: 57, nome: "JILÓ" },
  { id: 58, nome: "KIWI" },
  { id: 59, nome: "KIWI GOLD - BAND" },
  { id: 60, nome: "LARANJA BAIA" },
  { id: 61, nome: "LARANJA CRAVO TERRA" },
  { id: 62, nome: "LARANJA MIMO" },
  { id: 63, nome: "LIMÃO SICILIANO" },
  { id: 64, nome: "LIMÃO TAHITI" },
  { id: 65, nome: "MAÇÃ NACIONAL - UNID" },
  { id: 66, nome: "MAÇÃ VERDE" },
  { id: 67, nome: "MACAXEIRA" },
  { id: 68, nome: "MAMÃO CAIANO / FORMOSA" },
  { id: 69, nome: "MAMÃO HAVAÍ / PAPAIA" },
  { id: 70, nome: "MANDIOQUINHA" },
  { id: 71, nome: "MANGA ESPADA" },
  { id: 72, nome: "MANGA PALMIER" },
  { id: 73, nome: "MANGA ROSA" },
  { id: 74, nome: "MANGA TOMMY" },
  { id: 75, nome: "MARACUJÁ" },
  { id: 76, nome: "MAXIXE UND" },
  { id: 77, nome: "MEL ABELHA" },
  { id: 78, nome: "MELANCIA" },
  { id: 79, nome: "MELÃO REDINHA / REI" },
  { id: 80, nome: "MILHO VERDE" },
  { id: 81, nome: "MORANGO BANDEJA" },
  { id: 82, nome: "NABO" },
  { id: 83, nome: "NECTARINA" },
  { id: 84, nome: "OVOS BRANCO" },
  { id: 85, nome: "OVOS VERMELHO" },
  { id: 86, nome: "OVOS CAPOEIRA" },
  { id: 87, nome: "OVOS CODORNA" },
  { id: 88, nome: "PASSA BRANCA S/SEMENTE" },
  { id: 89, nome: "PASSA PRETA S/SEMENTE" },
  { id: 90, nome: "PEPINO" },
  { id: 91, nome: "PEPINO JAPONÊS" },
  { id: 92, nome: "PÊRA PORTUGUÊSA" },
  { id: 93, nome: "PESSEGO" },
  { id: 94, nome: "PIMENTÃO VERMELHO" },
  { id: 95, nome: "PINHA" },
  { id: 96, nome: "QUEIJO COALHO PE" },
  { id: 97, nome: "QUEIJO MANTEIGA" },
  { id: 98, nome: "QUIABO" },
  { id: 99, nome: "QUIABO UND" },
  { id: 100, nome: "RABANETE" },
  { id: 101, nome: "REPOLHO ROXO" },
  { id: 102, nome: "REPOLHO VERDE" },
  { id: 103, nome: "ROMÃ" },
  { id: 104, nome: "RÚCULA" },
  { id: 105, nome: "SALSA" },
  { id: 106, nome: "SALSÃO" },
  { id: 107, nome: "SAPOTI" },
  { id: 108, nome: "SERIGUELA" },
  { id: 109, nome: "TOMATE" },
  { id: 110, nome: "TOMATE SWEET GRAPE-BD" },
  { id: 111, nome: "UVA ROXA S / S" },
  { id: 112, nome: "UVA VERDE S / S" },
  { id: 113, nome: "VAGEM" },
  { id: 114, nome: "VAGEM FINA" },
];

export default produtos;
