localStorage['cart'] = '';
localStorage['account'] = 1000000;

window.addEventListener('message', function(event)
{
  if (event.data == "account")
    document.getElementById('account').contentWindow.postMessage('account', '*');

  if (event.data == "redcart")
  {
    for (let i = 1; i < 36; ++i)
      setTimeout(() =>
      {
        document.getElementById('cart').style.background = "rgba(" + (220 + i) + ", 220, 220, 0.6)";
      }, 5 * i);

    for (let i = 35; i >= 0; --i)
      setTimeout(() =>
      {
        document.getElementById('cart').style.background = "rgba(" + (220 + i) + ", 220, 220, 0.5)";
      }, 350 + 5 * (36 - i));
  }
});
