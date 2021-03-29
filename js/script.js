var app = new Vue ({
    el: '#app',
    data: {
       
       mail1: '',
       mail2: '',
       mail3: '',
       mail4: '',
       mail5: '',
       mail6: '',
       mail7: '',
       mail8: '',
       mail9: '',
       mail10: '',
       
    },
    mounted() {
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                console.log(response.data.response);
                this.mail1 = response.data.response;
                
            });
        
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                console.log(response.data.response);
                this.mail2 = response.data.response;
                
            });

        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                console.log(response.data.response);
                this.mail3 = response.data.response;
                
            });

        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                console.log(response.data.response);
                this.mail4 = response.data.response;
                
            });

        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                console.log(response.data.response);
                this.mail5 = response.data.response;
                
            });

        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                console.log(response.data.response);
                this.mail6 = response.data.response;
                
            });

        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                console.log(response.data.response);
                this.mail7 = response.data.response;
                
            });

        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                console.log(response.data.response);
                this.mail8 = response.data.response;
                
            });

        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                console.log(response.data.response);
                this.mail9 = response.data.response;
                
            });

        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                console.log(response.data.response);
                this.mail10 = response.data.response;
                
            });

    },
});