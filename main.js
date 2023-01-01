alert("Change it for you.");

// Create an object with the query parameters  
const searchParams = new URLSearchParams({
    apikey        :'GFVP3DNUKNQFS4DOOGZDQLOU3RIHOQOH',
    periodType    :'day',
    period        :'2',
    frequencyType :'minute',
    frequency     :'30'
  }).toString();

/*
periodType
Valid periodTypes:
day*, month, year, or ytd

period	
Valid periods by periodType:
day: 1, 2, 3, 4, 5, 10*
month: 1*, 2, 3, 6
year: 1*, 2, 3, 5, 10, 15, 20
ytd: 1*

frequencyType	
Valid frequencyTypes by periodType:
day: minute*
month: daily, weekly*
year: daily, weekly, monthly*
ytd: daily, weekly*

frequency	
Valid frequencies by frequencyType:
minute: 1*, 5, 10, 15, 30
daily: 1*
weekly: 1*
monthly: 1*
*/
const ticker='WDH';
url='https://api.tdameritrade.com/v1/marketdata/'+ticker+'/pricehistory?'+searchParams;

let placeholder="uhh"
fetch(url, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
.then(response => response.text())
.then(text => {placeholder=JSON.parse(text); console.log(placeholder)});
console.log(placeholder);
alert("Can you interpret?");


// var tdaclient = require('tdaclient');

// const tdaClient = tdaclient.TdaClient.from({
//     access_token: "DNUKNQFS4DOOGZDQLOU3RIHOQOHGFVP3",
//     client_id: "MY-CLIENT-ID",
//     refresh_token: "MY-REFRESH-TOKEN" // Optional: Refresh token is used to renew the access_token
// });

// const order = {
//   orderType: OrderType.LIMIT,
//   price: 100.0,
//   session: SessionType.NORMAL,
//   duration: DurationType.DAY,
//   orderStrategyType: OrderStrategyType.SINGLE,
//   orderLegCollection: [
//     {
//       instruction: InstructionType.BUY,
//       quantity: 1,
//       instrument: {
//         symbol: 'SPY',
//         assetType: AssetType.EQUITY,
//       },
//     },
//   ],
// }

// const placeOrdersResponse = await tdaClient.placeOrder(orderConfig);
// const orderId = placeOrdersResponse.orderId;



// function consolelog(log) {
//   logger=document.getElementById("consolelog")
//   logger.innerText=logger.innerText+log
// }
// consolelog(orderId);