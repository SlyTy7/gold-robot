(() => {
  const init = () => {
    if (!window.goldie) window.goldie = {};

    addWindowScrollListener();

    console.log("BEEP BOOP GOLD ROBOT BEEP");
  };


  const addWindowScrollListener = () => {
    const interval = 10;
    // scroll limiter; checks if scrolling every 50 ms
    setInterval(() => {
      if (window.goldie.scrolling) {
        const navigation = $("nav");
        const scrollPos = window.goldie.scrollEvent.currentTarget.scrollY;

        navFade(scrollPos);
        parallaxHero(scrollPos);
      }

      window.goldie.scrolling = false;
    }, interval);

    $(window).scroll(e => {
      window.goldie.scrolling = true;
      window.goldie.scrollEvent = e;
    });
  };

  const parallaxHero = scrollPos => {
    const hero = $(".hero-section");
    const parallaxPos = scrollPos / 5;

    hero.css({
      "background-position": `left ${parallaxPos}px`
    });
  }

  const navFade = scrollPos => {
    const nav = $("nav");
    if (scrollPos > 0) {
      nav.addClass("gr-dark-bg gr-shadow-2");
      nav.removeClass("gr-transparent-bg gr-shadow-none");
    } else {
      nav.addClass("gr-transparent-bg gr-shadow-none");
      nav.removeClass("gr-dark-bg gr-shadow-2");
    }
  }




  return init();
})()