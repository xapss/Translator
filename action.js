$(document).ready(function() {
	var dictionary = {
		"Uw veiligheid": "Your security",
		"Meer informatie": "More information",
		"Heeft u geen toegang tot Rabo Internetbankieren?": "No access to Rabo Internetbanking?",
		"Gebruik bij het inloggen op Rabo Internetbankieren de I-toets van uw  Random Reader.": "Only use the 'I' button from your Random Reader for logging in to Rabo Internetbanking.",
		"Gebruik de S-toets alleen bij het verzenden.": "Only use the 'S' button if you want to send payments.",
		"Ziet u iets afwijkends? Bel direct de Helpdesk Internetbankieren:": "Do you see something weird? Call the Helpdesk Internetbanking (DUTCH):",
		"Aanvragen": "Request",
		"Met Rabo Internetbankieren kunt u altijd via Internet uw rekeningen inzien en transacties uitvoeren.": "With Rabo Internetbanking you can always access your bank account details and send payments.",
		"Informatie over Rabo Internetbankieren": "More information on Rabo Internetbanking (DUTCH)",
		"Bekijk de demo": "Watch the demo",
		"Waarom kan ik niet inloggen ?": "Why can't I log in? (DUTCH)",
		"Waarom krijg ik de melding (942)?": "Why do I get error code (942)? (DUTCH)",
		"Waarom krijg ik de melding (947)?": "Why do I get error code (947)? (DUTCH)",
		"Inloggen met de Random Reader": "Logging in with your Random Reader",
		"Vul alleen uw gegevens in wanneer de adresregel begint met": "Only fill in your data when the address bar starts with",
		"Alleen dan weet u zeker dat u inlogt op de site van de Rabobank": "Only then you know for sure that you are dealing with Rabobank",
		"De veiligheid van uw verbinding controleren": "Test the security of your connection (DUTCH)",
		"Lees meer over veiligheid": "Read more about security (DUTCH)",
	  "Vul het rekeningnummer van uw bankpas in": "Fill in your account number",
	  "Rekeningnummer": "Account number",
		"Rekeningnummer onthouden op deze computer": "Remember account number on this computer",
		"Vul het pasnummer van uw bankpas in": "Fill in your bank card number",
		"Pasnummer": "Card number",
		"Plaats uw bankpas in de Random Reader": "Put your bank card in the Random Reader",
		"Druk op ": "Press ",
		"(Inloggen)": "(Inloggen)",
		"Toets de pincode van uw bankpas in": "Press the pin code of your bank card",
		"Vul de toegangscode in die op uw Random Reader verschijnt": "Fill in the access code that appears on your Random Reader",
		"Toegangscode": "Access code",
		"Inloggen": "Log in",
		"Annuleren": "Cancel",
		// menu
		"Klantenservice": "Support",
		"Advies": "Advise",
		"Producten": "Products",
		"Internetbankieren": "Internet banking",
		"Bedrijven": "Companies",
		"Particulieren": "Individuals",
		// overall
		"U bent ingelogd als ": "You are logged in as ",
		"Uitloggen": "Log out",
		"Rekening": "Account",
		"Omschrijving": "Description",
		"Ten name van": "Name",
		"Saldo": "Balance",
		"Betalen & Sparen": "Paying & Saving",
		"Nieuwe opdracht invoeren": "Make new order",
		"Overboeken per acceptgiro": "Transfer per acceptgiro",
		"Overboeken per bankgiro": "Wire transfer to regular bank",
		"Overboeken tussen eigen rekeningen": "Wire transfer between own accounts",
		"Beleggingsorder plaatsen": "Place stock order",
		"Direct regelen": "Actions",
		"E-mailadres wijzigen": "Change email address",
		"Verzekeringen aanvragen": "Request insurance",
		"Autoverzekering aanvragen": "Request car insurance",
		"Adviesgesprek aanvragen": "Request advice",
		"Uw Persoonsgegevens wijzigen": "Change your personal information",
		"Digitaal Rekeningafschrift aanvragen": "Request digital receipt",
		"Rabo SMS Alerts instellen": "Set up Rabo SMS Alerts",
		"nieuwe berichten": "new messages",
		"Bekijk berichten": "View messages",
		"Beleggen": "Investing",
		"Verzekeren": "Insuring",
		"Lenen": "Borrowing",
		"Hypotheken": "Mortgages",
		"Rabo Mobiel": "Rabo Mobile",
		"Uw gegevens": "Your information",
		"Instellingen": "Settings",
		"Berichten": "Messages",
		"Rekeningoverzicht": "Account overview",
		"Per bankgiro": "Regular wire transfer",
		"Per acceptgiro": "Wire transfer with acceptgiro",
		"Eigen rekening": "Own accounts",
		"Te verwerken opdrachten": "Current orders",
		"Adresboek": "Address book",
		"Mededelingen": "Announcements",
		"Rekening- & pasgegevens": "Account- & card info",
		"Rekeningafschriften": "Receipts",
		"Verzenden opdrachten": "Send orders",
		"Rabo NotaBox": "Rabo Notabox",
		"Betalen IBAN en Buitenland": "Pay with IBAN/Foreign",
		"Geld Bestellen": "Order money",
		"Rabo Mobielbankieren": "Rabo Mobile Internetbanking",
		"Hulp bij deze pagina": "Support with this page (DUTCH)",
		"Vraag en antwoord": "FAQ",
		"Transactieoverzicht": "Transactions overview",
		"Selectie": "Filter",
		"Maak desgewenst een selectie op basis van verwerkingsdatum": "You can filter on dates",
		"Begindatum": "Begin date",
		"t/m Einddatum": "Until end date",
		"Uitgebreide selectie": "Apply filters",
		"Overzicht tonen": "Show all",
		"Volgend scherm": "Next page",
		"Rekeningdetails": "Account details",
		"Bestedingsruimte wijzigen": "Change spending limit",
		"Datum": "Date",
		"Bestedingsruimte": "Spending limit",
		"Rentedatum": "Date of interest",
		"Tegenrekening": "Counter account",
		"Naam / Omschrijving": "Name and description",
		"Bedrag": "Amount",
		// accounts
		"studentenpakket": "student package",
		"internetsparen": "internet saving",
		"Rekeningtype": "Account type",
		// nieuwe bankoverschrijving
		"Nieuwe bankgiro": "New bank transfer",
		"Over te schrijven": "The amount",
		"Uitvoerdatum": "Execution date",
		"Van rekening": "From account",
		"Naar rekening": "To account",
		"Kies uit adresboek": "Choose from address book",
		"Toevoegen aan adresboek": "Add to address book",
		"Spoed": "Urgent",
		"Periodiek": "Recurring",
		"Termijn": "Term",
		"Aantal": "Amount",
		"99=onbeperkt": "99=unlimited",
		"Nieuwe acceptgiro": "New transfer with acceptgiro",
		"Betalingskenmerk": "Transaction code",
		"Nieuwe overboeking tussen eigen rekeningen": "New booking between own accounts",
		"Uitleg betreffende de diverse statussen vindt u bij ": "For explanation regarding different statuses: ",
		"Opdrachten": "Orders",
		"Begunstigde": "To",
		"Wis": "Delete",
		"Wijzig": "Edit",
		"goedgekeurd": "accepted",
		"Adressen": "Contacts",
		"Verkorte naam": "Short name",
		"Er zijn geen te verzenden opdrachten": "There are no orders to be sent",
		// payment window
		"Te verzenden opdrachten": "To be sent orders",
		"Nieuw": "New",
		"Signeercode": "Signing code",
		"Ga alleen verder als de adresregel begint met https://bankieren.rabobank.nl/...": "Only continue when the URL bar starts with https://bankieren.rabobank.nl/...",
		"Hoe controleert u de veiligheid van uw verbinding?": "How to check the security of the connection (DUTCH)",
		"0900 - 0905 (lokaal tarief).": "0900-0905 (local tariff)"
	}

  function get_definition(str) {
    return dictionary[str] ? dictionary[str] : str;
  }
  var generatedReplace = [];
  for(var key in dictionary) {
      var word = key.replace(/([[^$.|?*+(){}])/g, '\\$1'); //Create RegExp
      generatedReplace.push(word)
  }
  generatedReplace = new RegExp("\\b(?:" + generatedReplace.join("|") + ")\\b", "g");
  $("body *").replaceText(generatedReplace, get_definition );

	$('body #wrapper table input[type="button"][value="Annuleren "]').val('Cancel');
	$('body #wrapper table input[type="button"][value="OK + bankgiro      "]').val('OK + bank transfer');
	$('body #wrapper table input[type="button"][value="OK + eigen rekening "]').val('OK + own accounts');	
	$('body #wrapper table input[type="button"][value="OK + verzenden  "]').val('OK + send');	
	$('body #wrapper table input[type="button"][value="Adres toevoegen"]').val('Add contact');
	$('#brt_but_verzenden').css('background-image', 'url('+chrome.extension.getURL("button-send.png")+')');
	$('#brt_but_verzenden').hover(function(){
		$(this).css('background-image', 'url('+chrome.extension.getURL("button-send-h.png")+')');
	}, function(){
		$('#brt_but_verzenden').css('background-image', 'url('+chrome.extension.getURL("button-send.png")+')');
	});
	$('#brt_but_annuleren').css('background-image', 'url('+chrome.extension.getURL("button-cancel.png")+')');
	$('#brt_but_annuleren').hover(function(){
		$(this).css('background-image', 'url('+chrome.extension.getURL("button-cancel-h.png")+')');
	}, function() {
		$('#brt_but_annuleren').css('background-image', 'url('+chrome.extension.getURL("button-cancel.png")+')');
	});
	var skiheight = $('img#skimage').height();
	if (skiheight >= 500) {
		skiheight = "243";
	} else {
		skiheight = "single";
	}
	$('img#skimage').before('<img src="'+chrome.extension.getURL("payment-"+skiheight+".png")+'" style="position: absolute; top: -55px; right: -600px;" />');
});