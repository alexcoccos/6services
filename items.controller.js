angular.module('app').controller('ItemsCtrl', function ($scope,ItemSrv) {

    //1) SPOSTARE NEL SERVICE I SEGUENTI OGGETTI
    //2) CREARE NEL SERVICE I SEGUENTI METODI : LIST, GET, ADD, REMOVE

    $scope.listaArmi = ItemSrv.getArmi();
    $scope.addArma = function(){
      ItemSrv.addArma();
    }
    //oppure si riscrive la funzione per effettuare conrolli durante la chiamata
    // $scope.cercaArma = function(){
    //   $scope.armaTrovata= ItemSrv.cercaArma($scope.nome);
    // }

    $scope.$watch('nome',function(){
      $scope.armaTrovata = ItemSrv.cercaArma($scope.nome);
      console.log($scope.armaTrovata);
    })//la function $watch ci permette di fare la ricerca attiva

    $scope.eliminaArma = function(indice){
      ItemSrv.eliminaArma(indice);
    }



});
