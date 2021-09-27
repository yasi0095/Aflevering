Vue.createApp({

    data() {

        return {

            myStr: null,
            myStr1: null,
            myStr2: null,
            message: null

        }

    },

    methods: {

        ShowWord(myStr) {
            if (!myStr)
                myStr = "Ord"



            this.message = myStr
        },



        myFunction1: function () {
            this.myStr1 =
                this.myStr.toLowerCase();
        },



        myFunction: function () {
            this.myStr2 =
                this.myStr.toUpperCase();
        }
    }

}).mount("#app")