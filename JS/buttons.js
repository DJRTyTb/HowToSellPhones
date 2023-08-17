function handler(event)
{
  if (event.type == 'mouseover') event.target.style.background = 'rgba(228, 228, 228, 0.8)';
  if (event.type == 'mouseout') event.target.style.background = '';
}

let buttons = document.getElementsByClassName('button');

for(let i = 0; i < buttons.length; ++i)
{
  buttons[i].onmouseover = handler;
  buttons[i].onmouseout = handler;
  buttons[i].style.userSelect = "none";
}
