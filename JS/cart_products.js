let page = 1;

function show(i, page_number)
{
  let s;

  switch (i)
  {
    case 0:
      s = 'cart_1';
      break;
    case 1:
      s = 'cart_2';
      break;
    case 2:
      s = 'cart_3';
      break;
    case 3:
      s = 'cart_4';
      break;
    case 4:
      s = 'cart_5';
      break;
    case 5:
      s = 'cart_6';
  }

  let content = localStorage['cart'].split('^');
  content.pop();

  let img = document.getElementById(s + "_img");

  if ((page_number - 1) * 6 + i > content.length - 1)
    img.parentNode.style.display = "none";
  else
  {
    img.parentNode.style.display = "grid";
    img.style.backgroundImage = "url(" + content[(page_number - 1) * 6 + i].split('*')[0] + ")";
    img.style.backgroundSize = "100% 100%";
    img.style.backgroundRepeat = "no-repeat";

    document.getElementById(s + "_name").innerText = content[(page_number - 1) * 6 + i].split('*')[1];
    if (content[(page_number - 1) * 6 + i].split('*')[1].length <= 27)
    {
      document.getElementById(s + "_name").style.paddingTop = "21px";
      document.getElementById(s + "_name").style.height = "42px";
    }
    else if (content[(page_number - 1) * 6 + i].split('*')[1].length <= 54)
    {
      document.getElementById(s + "_name").style.paddingTop = "11px";
      document.getElementById(s + "_name").style.height = "52px";
    }
    else
    {
      document.getElementById(s + "_name").style.paddingTop = "3px";
      document.getElementById(s + "_name").style.height = "60px";
    }

    document.getElementById(s + "_cost").innerText = content[(page_number - 1) * 6 + i].split('*')[2];
  }
}

document.addEventListener("DOMContentLoaded", function() { for (let i = 0; i < 6; ++i) show(i, page); });

let removes = document.getElementsByClassName('remove');
for (let i = 0; i < removes.length; ++i)
  removes[i].addEventListener('click', function()
  {
    let id = removes[i].parentNode.id;
    let id0;
    switch (id)
    {
      case 'cart_1':
        id0 = 0;
        break;
      case 'cart_2':
        id0 = 1;
        break;
      case 'cart_3':
        id0 = 2;
        break;
      case 'cart_4':
        id0 = 3;
        break;
      case 'cart_5':
        id0 = 4;
        break;
      case 'cart_6':
        id0 = 5;
        break;
    }

    let sub = localStorage['cart'].split('^');
    localStorage['cart'] = "";

    for (let i = 0; i < sub.length - 1; ++i)
      if (i != id0)
        localStorage['cart'] += sub[i] + '^';

    document.location.reload(true);
  });

let pages = document.getElementById('cart_pages');
let next = document.getElementById('cart_next');
next.addEventListener("click", function() { if (page * 6 < localStorage['cart'].split('^').length - 1) { page += 1; for (let i = 0; i < 6; ++i) show(i, page); pages.innerText = 'Страница ' + page; } });
let previous = document.getElementById('cart_previous');
previous.addEventListener("click", function() { if (page > 1) { page -= 1; for (let i = 0; i < 6; ++i) show(i, page); pages.innerText = 'Страница ' + page; } });

let buys = document.getElementsByClassName('buy');
for (let i = 0; i < buys.length; ++i)
  buys[i].addEventListener('click', function()
  {
    let cost = document.getElementById(buys[i].parentNode.id + "_cost");

    if(localStorage['account'] >= (cost.innerText.substring(0, cost.innerText.length - 2) - 0))
    {
      localStorage['account'] -= cost.innerText.substring(0, cost.innerText.length - 2);
      window.parent.postMessage('account', '*');

      let id = removes[i].parentNode.id;
      let id0;
      switch (id)
      {
        case 'cart_1':
          id0 = 0;
          break;
        case 'cart_2':
          id0 = 1;
          break;
        case 'cart_3':
          id0 = 2;
          break;
        case 'cart_4':
          id0 = 3;
          break;
        case 'cart_5':
          id0 = 4;
          break;
        case 'cart_6':
          id0 = 5;
          break;
      }

      let sub = localStorage['cart'].split('^');
      localStorage['cart'] = "";

      for (let i = 0; i < sub.length - 1; ++i)
        if (i != id0)
          localStorage['cart'] += sub[i] + '^';

      document.location.reload(true);
    }
  });
