import { isAbbr, isRomanNumeral } from '.'

const capitalizeString = texto => {
  let prepos = ['da', 'do', 'das', 'dos', 'a', 'e', 'de']
  return texto
    .split(' ') // quebra o texto em palavras
    .map(palavra => {
      // para cada palavra
      if (isAbbr(palavra) || isRomanNumeral(palavra)) {
        return palavra
      }

      palavra = palavra.toLowerCase()
      if (prepos.includes(palavra)) {
        return palavra
      }
      return palavra.charAt(0).toUpperCase() + palavra.slice(1)
    })
    .join(' ') // junta as palavras novamente
}

export default capitalizeString
