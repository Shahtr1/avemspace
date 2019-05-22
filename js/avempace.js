function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if(this.scrollY <= 100) nav.className = ''; else nav.className = 'scroll';
};

