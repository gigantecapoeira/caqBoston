# caqBoston
Capoeira Angola Quintal Boston website.

## Local server

    python -m SimpleHTTPServer
    localhost:8000

## Portuguese diacritics ( aka accents ) with OSX
	Acute		ó Ó	Option+E  
	Circumflex	ô Ô	Option+I  
	Grave		ò Ò	Option+`  
	Tilde		õ Õ	Option+N -- Only works with "n,N,o,O,a,A"
	Umlaut		ö Ö	Option+U 

## CSML ( Capoeira Song Markup Language )
An example:

	#CAMUNGERÊ
	
	Camungerê, como tá, como tá?
	*Camungerê
	
	Como vai vosmicê?
	*Camungerê
	
	Eu vou bem de saúde 
	*Camungerê
	
	Para mim é um prazer
	*Camungerê
	
	Como tá, como tá?
	*Camungerê
	
	Como vai vosmicê? 
	*Camungerê
	
	Eu vou bem de saúde
	*Camungerê
	
	Para mim é um prazer 
	*Camungerê...

How it works:

	# in front of the title.
	* in front of the chorus lines.
	Use spaces to group the lines into stanzas.
