function switchTab(event, tabId){

    const forms = document.querySelectorAll('.form-content');
    forms.forEach(form => {
        form.classList.remove('active');
    });

    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(buttons =>{
        buttons.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}