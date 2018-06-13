sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/demo/model/formatter"
], function (Controller, JSONModel, formatter) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
        formatter: formatter,
        onInit: function () {
            var oViewModel = new JSONModel({
                currency: "INR"
            });
            this.getView().setModel(oViewModel, "view");
        }

    });
});