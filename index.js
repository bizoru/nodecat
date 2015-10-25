var http = require('http');
var url = require('url');

var estrellita = "https://aescala.files.wordpress.com/2008/11/estrella-mario.jpg";
var carita = "http://www.ecbloguer.com/alimentandoaisabel/wp-content/uploads/2011/06/800px-Smiley_svg.png";
var carita_triste = "http://www.the-happy-manager.com/image-files/sad-button.jpg";
var estrella_triste = "http://rlv.zcache.fr/etoile_triste_de_kawaii_autocollant-r5acda49d52174fa9b572b90ba21b65f7_v9w09_8byvr_324.jpg";

var gato = "http://spb.fotolog.com/photo/43/2/46/mypet/1209934850_f.jpg";
var gato_triste = "http://www.qlocura.com/wp-content/uploads/2014/04/gatos-tristes-7.jpg";
var gato_furioso = "http://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/fd/fdfd7506bd6db265715c1a7ae7c3e8362e00ee27_full.jpg";
var gato_muerto = "http://www.dogguie.net/wp-content/uploads/2014/07/gato-gracioso-muerto-5.jpg";
var gato_zombie = "https://i.ytimg.com/vi/ftESZUGVafw/hqdefault.jpg";
var gato_vampiro = "http://static.notinerd.com/wp-content/uploads/2015/08/10101.jpg";
var gato_chocolate = "https://maru111.files.wordpress.com/2012/05/godiva_kitty-modcatlove.jpg";
var gato_astronauta = "http://i772.photobucket.com/albums/yy4/eeyamane/gatos/gato-astronauta-baloes.jpg";
var gato_policia = "http://spa.fotolog.com/photo/26/55/109/yamil_el_turco/1259113548757_f.jpg";
var gato_doctor = "https://s-media-cache-ak0.pinimg.com/236x/68/c6/a9/68c6a9bbee5df9717e4542e2aea37dd7.jpg";
var gato_minecraft = "http://1.bp.blogspot.com/-nsL5GI8SwwA/UF56HPlNz3I/AAAAAAAAAG4/ByH8YT1SEd0/s1600/0Jeli.png";
var gato_pirata = "http://www.eluniversal.com.co/sites/default/files/201510/gato_pirata.jpg";
var murcielago = "http://a2.assets.nationalgeographic.es/soc_photo/2328.600x450.jpg";
var rata = "http://k30.kn3.net/taringa/D/9/2/0/1/3/franxXY/473.gif";
var tigre = "http://imagenes-tiernas.net/wp-content/uploads/2012/11/tigres-bebe-e1352479669841.jpg";



function imagen(url){

  var img_placeholder = "<img src='{}'>";
  return img_placeholder.replace("{}",url);
}

var server = http.createServer(function(req,res){

  res.writeHead(200, { 'Content-Type': 'text/html' });
  requestobj = url.parse(req.url,true);



  if(requestobj.pathname == "/estrella" || requestobj.pathname == "/estrellita"){

    res.write(imagen(estrellita));

  }


  if(requestobj.pathname == "/cara" || requestobj.pathname == "/carita"){


    res.write(imagen(carita));

  }

  if(requestobj.pathname == "/tigre" || requestobj.pathname == "/tigresito"){


    res.write(imagen(tigre));

  }

  if(requestobj.pathname == "/rata" || requestobj.pathname == "/ratita"){


    res.write(imagen(rata));

  }

  if(requestobj.pathname == "/murcielago" || requestobj.pathname == "/murcielaguito"){


    res.write(imagen(murcielago));

  }

  if(requestobj.pathname == "/gato" || requestobj.pathname == "/gatito"){


    res.write(imagen(gato));

  }

  if(requestobj.pathname == "/cara/triste" || requestobj.pathname == "/carita/triste"){


    res.write(imagen(carita_triste));

  }

  if(requestobj.pathname == "/carita/feliz" || requestobj.pathname == "/cara/feliz"){


    res.write(imagen(carita));

  }


  if(requestobj.pathname == "/gato/feliz" || requestobj.pathname == "/gatito/feliz"){


    res.write(imagen(gato));

  }

  if(requestobj.pathname == "/gato/triste" || requestobj.pathname == "/gatito/triste"){


    res.write(imagen(gato_triste));

  }

  if(requestobj.pathname == "/gato/furioso" || requestobj.pathname == "/gatito/furioso"){


    res.write(imagen(gato_furioso));

  }

  if(requestobj.pathname == "/gato/muerto" || requestobj.pathname == "/gatito/muerto"){


    res.write(imagen(gato_muerto));

  }

  if(requestobj.pathname == "/gato/zombie" || requestobj.pathname == "/gatito/zombie"){


    res.write(imagen(gato_zombie));

  }


  if(requestobj.pathname == "/gato/vampiro" || requestobj.pathname == "/gatito/vampiro"){


    res.write(imagen(gato_vampiro));

  }

  if(requestobj.pathname == "/gato/chocolate" || requestobj.pathname == "/gatito/chocolate"){


    res.write(imagen(gato_chocolate));

  }

  if(requestobj.pathname == "/gato/astronauta" || requestobj.pathname == "/gatito/astronauta"){


    res.write(imagen(gato_astronauta));

  }

  if(requestobj.pathname == "/gato/policia" || requestobj.pathname == "/gatito/policia"){


    res.write(imagen(gato_policia));

  }

  if(requestobj.pathname == "/gato/doctor" || requestobj.pathname == "/gatito/doctor"){


    res.write(imagen(gato_doctor));

  }


  if(requestobj.pathname == "/gato/minecraft" || requestobj.pathname == "/gatito/minecraft"){


    res.write(imagen(gato_minecraft));

  }

  if(requestobj.pathname == "/gato/pirata" || requestobj.pathname == "/gatito/pirata"){


    res.write(imagen(gato_pirata));

  }

  if(requestobj.pathname == "/"){

    res.write("<h1 style='font-family: sans;'> Bienvenido a el mundo Animal!</h1>");
  }


  res.end();



});
server.listen(8000,'10.130.191.60');
