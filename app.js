jwplayer("container").setup({

    controls: true,
    displaytitle: true,
    fullscreen: "false",
    primary: 'html5',
    stretching: "exactfit",
    autostart: true,

    skin: {
        name: 'Netflix',
    },

    //sharing: {
        //sites: ["reddit","facebook","twitter"]
    //},
     
    captions: {
        color: '#FFF',
         fontSize: 14,
         backgroundOpacity: 0,
         edgeStyle: 'raised' 
    },

  playlist: [
,
{        
    title: "After: Amor infinito",
    description: "El amor de Tessa y Hardin nunca ha sido fácil. Mientras él permanece en Londres después de la boda de su madre y se hunde cada vez más en su propia oscuridad, ella regresa a Seattle. Tessa es la única capaz de entenderle y calmarle… él la necesita, pero ella ya no es la chica buena y dulce que era cuando llegó a la universidad. Deberá plantearse si lo que debe hacer ahora es salvar a Hardin y su relación con él, o si ha llegado el momento de pensar solo en ella. Si quieren que su amor sobreviva, primero tendrán que trabajar en sí mismos. ¿Pero será su destino seguir estando juntos?",
    image: "https://www.themoviedb.org/t/p/original/rwgmDkIEv8VjAsWx25ottJrFvpO.jpg",
    sources: [{
    file: "https://archive.org/download/pelis-n/Ver%20Amn%C3%A9sico.mp4",
      label: '4K',
      'type': 'mp4',
      primary: 'html5',

    },{
    file: "https://archive.org/download/pelis-n/Ver%20Amn%C3%A9sico.mp4",
      label: '1080p',
      'type': 'mp4',
      primary: 'html5',

    }],
    captions: [{
      file: "https://dl.dropboxusercontent.com/s/sp42dm2f7eeh8y9/After-2019-EN.srt?dl=0",
      label: 'Ingles',
      kind: "captions",
      "default": true,
    },{ 
      file: "https://dl.dropboxusercontent.com/s/f9kjsxlwx2almc0/After-2019-ES.srt?dl=0",
         label: 'Español',
         kind: "captions",
         }
    ],
    
  }]		    		    
    
});
jwplayer("container").setCaptions({
"back": true,
"backgroundOpacity": "32",
"edgeStyle": "dropshadow",
"fontSize": 14,
"fontOpacity": 100,
"fontScale": 0.05,
"windowOpacity": 0,
"color": "#ffff00"
});
