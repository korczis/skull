
define('init', ['ember', 'handlebars'], function (INIT) {
    var App = Ember.Application.create({
        LOG_TRANSITIONS: true
    });

    return App;
});

require(['init'], function(App) {

    App.Router.map(function(){
       this.resource('application', { path: '/'});
    });

    App.ApplicationRoute = Ember.Route.extend({

        model: function(){
            var apiCall = $.ajax({
                url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20('AAPL')%20order%20by%20MarketCapitalization&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=",
            }).done(function(data){
                
                return data.query.results.quote;
            });
            
            return JSON.stringify(apiCall);
        },

        renderTemplate: function() {
            this.render('application');
        }

    });

    App.ApplicationController = Ember.Controller.extend({

        hello: "Hello to you",

        dynoForm: null,

        init: function() {
            var controller = this;

            var newHello = controller.get('hello');
            console.log(newHello);
        },

        actions: {
            getDyno: function(inputVal) {
                var controller = this;
                var dynoValue = controller.get('dynoForm');
                console.log(dynoValue);
            }
        }
    });
});


