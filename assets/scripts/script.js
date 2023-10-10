// Map your pins to your option value
var lookup = {
"AUB": [537016],
"ABK": [423826],
"Rajhi": [458838],
"BBK": [418056],
"Boubyan": [431199],
"Burgan": [402978],
"CBK": [537015],
"Doha": [419252],
"KNET": [`Eidity [KNET]`],
"GBK": [517419],
"KFH": [450778],
"KIB": [406464],
"NBK": [589160],
"Weyay": [543363],
"QNB": [519859],
"UNB": [457778],
"Warba": [541350]
};

// When an option is changed, search the above for matching pins
$('#banks').on('change', function () {
// Set selected option as variable
var selectValue = $(this).val();

// Empty the target field
$('#pins').empty();

// For each chocie in the selected option
for (i = 0; i < lookup[selectValue].length; i++) {
// Output choice in the target field
$('#pins').append("<option value='" + lookup[selectValue][i] + "'>" + lookup[selectValue][i] + "</option>");
}
});
