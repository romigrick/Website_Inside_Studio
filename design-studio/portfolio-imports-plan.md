# Plano de Importações do Portfolio

## Análise da Situação Atual
- O arquivo `src/data/index.js` possui imports incompletos/incorretos para imagens do portfolio
- Existem muitas subpastas em `src/portfolio/` com imagens que precisam ser importadas
- Alguns imports atuais estão quebrados (UTF2 sem arquivo específico, imgPost19 para arquivo inexistente)

## Estrutura das Subpastas do Portfolio Identificadas

### Projetos com Imagens:
1. **Bianchi/** - 6 arquivos (Bianchi1.png a Bianchi6.jpg)
2. **Chillpass/** - 1 arquivo (Chillpass1.png)
3. **Gicred/** - 9 arquivos (Gicred1.png a Gicred9.png)
4. **Giga4/** - 4 arquivos (Giga4-1.jpg a Giga4-4.jpg)
5. **Gordao/** - 4 arquivos (Gordao1.jpg a Gordao4.mp4)
6. **Impressos/** - 5 arquivos (11.png, v3.png, mockup.png, + 2 jpg)
7. **MASAMI/** - 5 arquivos (Masami1.png a Masami5.png)
8. **Orla/** - 5 arquivos + subpasta images/ com 7 arquivos
9. **Panter/** - 1 arquivo (harmonico-panter_01.jpg)
10. **Pato/** - 7 arquivos (Patô01.jpg a Patô07.mp4)
11. **Patobots/** - 9 arquivos (Bots1.jpg a Bots9.png)
12. **PPNEUS/** - 3 arquivos (PPneus1.png a PPneus3.png)
13. **Regelli/** - 2 arquivos (Regelli1.png, Regelli2.png)
14. **Rodeio/** - 3 arquivos (Rodeio1.png a Rodeio3.png)
15. **Sollo Sul/** - 4 arquivos (Sollosul1.jpg a Sollosul4.jpg)
16. **Solus/** - 4 arquivos (Solus1.jpg a Solus4.jpg)
17. **Sulshibuco/** - 2 arquivos (Sulshibuco1.png, Sulshibuco2.jpeg)
18. **UTFPR/** - 6 arquivos (UTF1.png a UTF6.jpg)

## Plano de Execução

### Etapa 1: Limpeza
- Remover imports quebrados/incompletos existentes
- Corrigir import do UTFPR (UTF2 está incompleto)

### Etapa 2: Adicionar Imports
- Criar imports organizados por projeto
- Manter nomenclatura consistente
- Importar tanto imagens quanto vídeos (.mp4)

### Etapa 3: Estruturação
- Agrupar imports por categoria/projeto
- Usar padrão de nomenclatura claro
- Adicionar comentários para organização

## Arquivos a Editar
- `src/data/index.js` - Adicionar todos os imports organizados

## Próximos Passos
1. Confirmar plano com usuário
2. Implementar imports organizados
3. Verificar se todas as imagens são importadas corretamente
