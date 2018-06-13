sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("sap.ui.demo.controller.App", {
        onShowHello: function () {
            // read msg from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sMsg = oBundle.getText("helloMsg2");
            // show message
            MessageToast.show(sMsg);
        }
    });
});