angular.module('ticketmonster').factory('TicketPriceResource', function($resource){
    var resource = $resource('../api/admin/ticketprices/:TicketPriceId',{TicketPriceId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});