angular.module('app').service('ItemSrv',function(){

  var dummyItem = {
      nome: 'Item #',
      descrizione: 'Praesent nec nisl a purus blandit viverra. Phasellus nec sem in justo pellentesque facilisis. Sed cursus turpis vitae tortor. Praesent blandit laoreet nibh. Cras ultricies mi eu turpis hendrerit fringilla.lhasellus ullamcorper ipsumore',
      image: 'http://www.placehold.it/800x600',
      slots: 2,
  }

  var armi = [{
      nome: 'Marco',
      descrizione: 'Non ha bisogno di descrizioni',
      image: 'https://ugc.kn3.net/i/760x/https://media.giphy.com/media/sv79kRU7jiiqI/giphy.gif',
      slots: 2
  }, {
      nome: 'Tarma',
      descrizione: 'Arma inizialmente usata dai Samurai e successivamente evolutasi con le arti Ninja.',
      image: 'https://s-media-cache-ak0.pinimg.com/originals/eb/a8/9e/eba89e7bb2121d9f066fbc7d616a0dc0.gif',
      slots: 4
  }, {
      nome: 'Pugnale',
      descrizione: 'Arma da taglio usata unicamente per gli scontri ravvicinati. Può essere nascosta, in modo da cogliere di sorpresa il nemico.',
      image: 'http://vignette2.wikia.nocookie.net/metalslug/images/7/71/Marco_grenades.gif/revision/latest?cb=20090105060845',
      slots: 3
  }, {
      nome: 'Shuriken',
      descrizione: 'Arma esclusivamente da lancio. Grazie alla forma e alla struttura, raggiunge può raggiungere una velocità impressionante.',
      image: 'http://i2.kym-cdn.com/photos/images/original/000/971/474/40c.gif',
      slots: 1
  }];

  var getArmi = function(){
    return armi;
  }
  var addArma = function(){
    var dummy = angular.copy(dummyItem);
    armi.push(dummy);
  }
  var cercaArma = function(nome){
    return armi.find(function(el){
      return el.nome == nome;
    })
  }

  return{
    getArmi: getArmi,
    addArma: addArma,
    cercaArma: cercaArma
  }
});
