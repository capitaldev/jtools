const request = require('request');

const api = '592709609:AAEaPvzFgijM0wWpwQaChzZs5AfhbnHi7jg';
const base_url = 'https://api.telegram.org/bot'
const method = 'sendMessage'


let url = `${base_url}${api}/${method}`;
let obj = `  "LDC (LEADCOIN)": 3.25,
  "FOXT (Fox Trading)": 6,
  "CSM (Consentium Coin)": 1,
  "TRX (Tronix)": 1068,
  "VLC (Value Chain)": 1559,
  "LCS (LocalCoinSwap Cryptoshare)": 35.55106581615102,
  "SDA (Six Domain Asset)": 330,
  "TKT (TKT)": 294,
  "VME (Verime Mobile)": 30,
  "THM (Themis Token)": 200,
  "INS (INS)": 1310842.7803703719,
  "SNGX (SingularX)": 3010128.235,
  "STORM (Storm)": 50111888,
  "DYN (Dyno)": 1000000000,
  "eosDAC (eosDAC Community Owned EOS Block Producer ERC20 Tokens)": 18.41,
  "DEEZ (DeezNuts)": 2,
  "UGC (UG Coin)": 348,
  "MST (民宿通)": 716,
  "EVC (EventChain)": 105,
  "PLAT (BitGuild PLAT)": 97.7,
  "XAP (Appics)": 1200,
  "NEC (Ethfinex Nectar Token)": 48494505.01859,
  "MANA (Decentraland)": 1200000,
  "PTT (Proton Token)": 864,
  "SGP (SGPay Token)": 2,
  "HCM (Hcmcoin)": 4,
  "TPI (ThaneCoin)": 100,
  "CRE (Cybereits Token)": 30,
  "ZIP (Zipper)": 199,
  "TIP (Tip)": 365,
  "MUC (MusicCoin)": 1,
  "0xBTC (0xBitcoin Token)": 0,
  "SW (Super Wallet Token)": 0.103531,
  "MILE (MILE)": 5000,
  "FTV (Filmtelevision(FTV) Chain)": 7,
  "VSC (vSport Coin)": 8,
  "JAJ (Just A Joke)": 2000,
  "ANT (Aragon)": 36192,
  "TheDAO (TheDAO)": 12163.268068413261,
  "DPY (Delphy Token)": 166666.01,
  "EOS (EOS)": 195873.7288,
  "GNO (Gnosis)": 1434.521564482`
const params = {
  chat_id: '@jtool',
  text: obj
}

request.post(
  url,
  { json: params },
  function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body)
    }
  }
);