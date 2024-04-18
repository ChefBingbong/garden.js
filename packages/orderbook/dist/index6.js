const n = (e) => {
  const t = e.status * 100 + e.initiatorAtomicSwap.swapStatus * 10 + e.followerAtomicSwap.swapStatus;
  return t === 200 ? "user can initiate" : t === 222 ? "user can redeem" : /\d3\d/.test(`${t}`) ? "user can refund" : t === 220 ? "counterparty can initiate" : t === 224 || t === 226 ? "counterparty can redeem" : /\d\d3/.test(`${t}`) ? "counterparty can refund" : "no action can be performed";
}, a = (e) => (e.startsWith("https://") || (e = "https://" + e), e += e.endsWith("/") ? "" : "/", e);
var r = /* @__PURE__ */ ((e) => (e.UserCanInitiate = "user can initiate", e.UserCanRedeem = "user can redeem", e.UserCanRefund = "user can refund", e.CounterpartyCanInitiate = "counterparty can initiate", e.CounterpartyCanRedeem = "counterparty can redeem", e.CounterpartyCanRefund = "counterparty can refund", e.NoAction = "no action can be performed", e))(r || {});
export {
  r as Actions,
  n as parseStatus,
  a as parseURL
};
