alert("Change it for you.")

var yahooFinance = require("yahoo-finance");

yahooFinance.historical({
  symbol: 'AAPL',
  from: '2020-01-01',
  to: '2020-12-31',
  period: 'd',
}, function (err, quotes) {
  //...
});

alert("Can you interpret?")


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