const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        proxy: {
            "/api": {
                target: "http://localhost:8080",
            },
        },
    },
    chainWebpack: (config) => {
        const svgRule = config.module.rule("svg");

        svgRule.uses.clear();

        svgRule.use("babel-loader").loader("babel-loader").end().use("svg-vue3-loader").loader("svg-vue3-loader");
    },
});
