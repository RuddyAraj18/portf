let header = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
    header.classList[window.scrollY > 50 ? 'add' : 'remove']('scrolled')
})