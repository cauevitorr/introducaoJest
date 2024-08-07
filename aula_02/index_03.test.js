/** Área do Quadrado */
// function retornaAreaDoQuadrado(altura, comprimentoBase) {
//  return altura * comprimentoBase
// }

// test("Área do quadrado", () => {
//  expect(retornaAreaDoQuadrado(2,2)).toBe(4)
//  expect(retornaAreaDoQuadrado(2,2)).toBeGreaterThan(3)
//  expect(retornaAreaDoQuadrado(2,2)).toBeLessThan(5)
// })


/** Média */
function media(nota1, nota2, nota3, divisor) {
 return (nota1 + nota2 + nota3) / divisor
}

test("Média", () => {
 expect(media(5,5,5,3)).toBeCloseTo(5.005)
 expect(media(5,5,5,3)).toBeCloseTo(4.995, 3)
})
