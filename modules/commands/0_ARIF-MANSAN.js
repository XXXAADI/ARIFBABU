module.exports.config = {
  name: "goiadminv2",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU... ",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  usePrefix: true,
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61553634015672") {
    var aid = ["61553634015672"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg =["मेरा आरिफ़ बाबू सो गया है 😴👈", "देखो प्लीज मेरा आरिफ़ बाबू जॉब पर है तो प्लीज उसे परेशान ना करो 😐👈", "😘मेरे आरिफ बाबू ❤️_को सब बुलाते हैं हको तो कोई खास भी नहीं डालता है 🥺👈", "मेरा बॉस आरिफ़ बाबू सुसु करने गया है तो प्लीज उससे सुसु करने दे परेशान मत करो 😂👈", "मेरा आरिफ बॉस भाग गया लगता है 🤣👈" , " मेरे बॉस आरिफ़ बाबू को अभी मत बुलाओ कॉल पर क्योंकि वह भी चुम्मा लेने गया है 😁😂😄👈" , "मेरे बॉस आरिफ़ बाबू को भी परेशान मत करो वह आराम कर रहा है अभी समझ गए ना आप 🤨👈" , " जब देखो आरिफ़ बाबू कुछ काम भी कर लो 🤨👈" , "उसका रिचार्ज खत्म हो गया है जाओ रिचार्ज करवा उसका फिर बुलाना उसे ☹️👈" , " प्लीज आरिफ़ बाबू को मत बुलाओ वरना वह फिर मुझ पर गुस्सा करेगा और मुझे पीटेगा 😭👈" , " मेरे बॉस आरिफ़ बाबू के सर में दर्द हो रहा है तो उसे अभी सोने दो अभी 😐👈" , "सब मेरे आरिफ़ बाबू बॉस को बुलाते रहते हैं हमें तो कोई खास भी नहीं डालता 🥺👈" , "पहले मेरे आरिफ़ बाबू बॉस के लिए कॉफी बना कर लेकर आओ फिर बुलाना उसे 🤗👈" , "देखो मेरे आरिफ़ बाबू बॉस को मत बुलाओ तुम उसे डिस्टर्ब करोगी फिर वह मुझे पीटेगा 😭🥲👈" , "मेरे आरिफ़ बाबू बॉस को डिस्टर्ब ना करो वह अभी बिजी है रज्जो के साथ 🥰👈" , "मेरे आरिफ़ बाबू बॉस का डाटा खत्म हो गया 15 रिचार्ज करो अभी 😔👈"];









      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }