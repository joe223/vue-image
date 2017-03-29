import VueImage from "../lib/index.js";
import Vue from "vue";

Vue.use( VueImage );

let app = new Vue({
    el: "#app",
    data: function () {
        return {
            imgUrl1: "http://static.imxingzhe.com/webadm/1477483771000/d6a2bc5d734bb!lushuWebThumb",
            imgUrl2: "http://static.imxingzhe.com/webadm/1477483771000/d6a2bc5d734bb!lushuWebThumb",
            imgUrl3: "http://static.imxingzhe.com/webadm/1477483771000/d6a2bc5d734bb!lushuWebThumb",
        }
    },
    methods: {

    },
})
