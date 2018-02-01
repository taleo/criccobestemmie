var quotes = [
'Cristo Deriso e Oltraggiato!',
'Cristo alla Colonna!',
'Cristo Portacroce!',
'Cristo Pantocratore!',
'Cristo Giallo!',
'Cristo Morto con Vergine e Santi!',
'Cristo in Trono!',
'Cristo Dispensatore di Luce!',
'Cristo Giudice!',
'Cristo Deposto!',
'Cristo Bendato!',
'Cristo Flagellato!',
'Cristo Crocifisso!',
'Cristo Morto!',
'Cristo Imbalsamato!',
'Cristo Cristologico e Mosaico!',
'Cristo Raffaellesco!',
'Cristo sotto l’Ascella!',
'Cristo Sorridente!',
'Cristo Solitario!',
'Cristo Legato!',
'Madonna del Magnificat!',
'Madonna col Bambino e i Santi!',
'Madonna dal Collo Lungo!',
'Madonna del Prato!',
'Madonna del Cardellino!',
'Madonna delle Arpie!',
'Madonna del Belvedere!',
'Madonna di Manchester!',
'Madonna dei Pellegrini!',
'Madonna della Seggiola!',
'Madonna dell’Acqua!',
'Madonna Rucellai!',
'Madonna di Ognissanti!',
'Madonna degli Occhi Grossi!',
'Vergine Annunciata!',
'Vergine Accoccolata!',
'Vergine Tramortita!',
'Vergine Svenuta!'
]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];

}