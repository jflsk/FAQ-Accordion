const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
    const icon = faq.querySelector('.icon');
    const answer = faq.querySelector('.faq__answer');

    faq.addEventListener('click', function () {
        this.classList.toggle('active');
        if (this.classList.contains('active')) {
            icon.setAttribute('src', 'src/assets/images/icon-minus.svg');
            icon.classList.remove('hidden');
            answer.style.maxHeight = answer.scrollHeight + "px"; 
        } else {
            icon.setAttribute('src', 'src/assets/images/icon-plus.svg');
            icon.classList.add('hidden');
            setTimeout(() => {
                answer.style.maxHeight = null; 
            }, 0);
        }
    });
});
