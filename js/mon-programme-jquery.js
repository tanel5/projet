(function( $ ) { 

    var block1 = $('.calculator');
    var block2 = $('.result');

$('#calcul').on('click', function(){
    var produit = $('#produit');
	var emballage = $('#emballage');
    var emissionProduit = parseFloat(produit.val());
	var emissionEmballage = parseFloat(emballage.val());
	const emissionGlobale = 0.748;
    var resultat = emissionProduit + emissionEmballage + emissionGlobale;

    block1.css("display", "none" );
    block2.css("display", "block");


    var myselectedtxt = produit.find("option:selected").text();
    var titleResult = $('#titleResult').text(myselectedtxt);
    

    if (myselectedtxt == 'Mix pommes, noix de pécan, raisins, cerises Bio Les Fadas'){
        $('#imageResult').attr("src", "images/LesFadas-PecanCerisePommeRaisin-2.jpg")
        $('#imageResult').attr("alt", "img1")

    } else if (myselectedtxt == 'Mix noix de cajou, amandes, raisins secs, noisettes Bio Les Fadas'){
        $('#imageResult').attr("src", "images/LesFadas-CajouAmandeNoisetteRaisin-2.jpg")
        $('#imageResult').attr("alt", "img2")

    } else if (myselectedtxt == 'Mix noisettes grillées, mûres blanches, courge, cranberries Bio Les Fadas'){
        $('#imageResult').attr("src", "images/LesFadas-NoisetteMureCranberiesCourge-1.jpg")
        $('#imageResult').attr("alt", "img3")

    } else if (myselectedtxt == 'Mix amandes, noix du brésil, coco, cranberries Bio Les Fadas'){
        $('#imageResult').attr("src", "images\/LesFadas-AmandeCranberriesCocoNoix-1.jpg")
        $('#imageResult').attr("alt", "img4")

    };

    var texte = "L'émission de CO2 produite par le parcours des fruits secs, depuis leur origine jusque chez nos clients, transformation inclue, est de " + resultat + " kg de Co2";
    $('#textResult').text(texte);
})

$('#retour').on('click', function(){
    location.reload();

})

})( jQuery );