require.config({
    baseUrl: ".",
    paths: {
        'jquery': 'js/components/jquery/dist/jquery.min',
        'handlebars':'js/components/handlebars/handlebars.min',
        'bootstrap': 'js/components/bootstrap/dist/js/bootstrap',
        'ember': 'js/components/ember/ember.min',
    },
    shim: {
        'bootstrap': ['jquery'],
        'handlebars': ['bootstrap'],
        'ember': ['handlebars']
    },

    // main application module
    deps: ["js/app.js"]
});
