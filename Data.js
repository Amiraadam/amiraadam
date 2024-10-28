// /static/survey.js
// survey.js
// survey.js
document.addEventListener('alpine:init', () => {
    Alpine.data('app', () => ({
        navigation: '',
        responseSpeed: '',
        satisfaction: '',
        recommend: '',
        improvements: '',
        
        init() {
            // Optional: any setup code can go here
            console.log('Survey component initialized');
        },

        submitSurvey() {
            // Log the survey data to the console
            console.log('app Data:', {
                navigation: this.navigation,
                responseSpeed: this.responseSpeed,
                satisfaction: this.satisfaction,
                recommend: this.recommend,
                improvements: this.improvements
            });

            // Show a confirmation message
            alert('Survey submitted successfully! Thank you for your feedback.');

            // Optionally reset the form
            this.resetForm();
        },

        resetForm() {
            this.navigation = '';
            this.responseSpeed = '';
            this.satisfaction = '';
            this.recommend = '';
            this.improvements = '';
        }
    }));
});
