'use strict';

angular.module('galleryBooksApp')
  .controller('MainCtrl', function ($scope) {
    $scope.books = [
			{
				'name': 'Livro 01',
				'url': 'http://google.com',
				'description': 'Descrição livro'
			},
			{
				'name': 'Livro 02',
				'url': 'http://globo.com',
				'description': 'Descrição livro'
			},
			{
				'name': 'Livro 03',
				'url': 'http://yeoman.io',
				'description': 'Descrição livro'
			}
    ];
  });
