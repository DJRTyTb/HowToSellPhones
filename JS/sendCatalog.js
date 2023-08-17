let premium = document.getElementById('premium');
let apple = document.getElementById('Apple');
let samsung = document.getElementById('Samsung');
let xiaomi = document.getElementById('Xiaomi');
let cheap = document.getElementById('cheap');
let powerful = document.getElementById('powerful');
let android = document.getElementById('Android');
let camera = document.getElementById('camera');
let backtomain = document.getElementById('backtomain');
premium.addEventListener('click', function() { send('premium'); });
apple.addEventListener('click', function() { send('Apple'); });
samsung.addEventListener('click', function() { send('Samsung'); });
xiaomi.addEventListener('click', function() { send('Xiaomi'); });
cheap.addEventListener('click', function() { send('cheap'); });
powerful.addEventListener('click', function() { send('powerful'); });
android.addEventListener('click', function() { send('Android'); });
camera.addEventListener('click', function() { send('camera'); });
backtomain.addEventListener('click', function() { send('backtomain'); });

function send(catalog)
{
  switch (catalog)
  {
    case "premium":
      localStorage["catalog"] = "Премиум смартфоны";
      break;
    case "Apple":
      localStorage["catalog"] = "Смартфоны Apple iPhone";
      break;
    case "Samsung":
      localStorage["catalog"] = "Смартфоны Samsung";
      break;
    case "Xiaomi":
      localStorage["catalog"] = "Смартфоны Xiaomi";
      break;
    case "cheap":
      localStorage["catalog"] = "Недорогие смартфоны";
      break;
    case "powerful":
      localStorage["catalog"] = "Мощные смартфоны";
      break;
    case "Android":
      localStorage["catalog"] = "Смартфоны на Android";
      break;
    case "camera":
      localStorage["catalog"] = "Смартфоны с хорошей камерой";
      break;
    case "backtomain":
      localStorage["catalog"] = "Главная страница";
      break;
  }
  
  var iframe = document.getElementById('content');
  iframe.src = iframe.src;
}
