(() => {





  const params = {
    btnClassName: "js-header-dropdown-btn",
    dropClassName: "js-header-drop",
    activeClassName: "is-active",
    disabledClassName: "is-disabled"
  };

  function onDisable(evt) {
    if (evt.target.classList.contains(params.disabledClassName)) {
      evt.target.classList.remove(
        params.disabledClassName,
        params.activeClassName
      );
      evt.target.removeEventListener("animationend", onDisable);
    }
  }

  function setMenuListener() {
    document.body.addEventListener("click", (evt) => {
      const activeElements = document.querySelectorAll(
        `.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`
      );

      if (
        activeElements.length &&
        !evt.target.closest(`.${params.activeClassName}`)
      ) {
        activeElements.forEach((current) => {
          if (current.classList.contains(params.btnClassName)) {
            current.classList.remove(params.activeClassName);
          } else {
            current.classList.add(params.disabledClassName);
          }
        });
      }

      if (evt.target.closest(`.${params.btnClassName}`)) {
        const btn = evt.target.closest(`.${params.btnClassName}`);
        const path = btn.dataset.path;
        const drop = document.querySelector(
          `.${params.dropClassName}[data-target="${path}"]`
        );

        btn.classList.toggle(params.activeClassName);

        if (!drop.classList.contains(params.activeClassName)) {
          drop.classList.add(params.activeClassName);
          drop.addEventListener("animationend", onDisable);
        } else {
          drop.classList.add(params.disabledClassName);
        }
      }
    });
  }

  setMenuListener();


// форма поиска
  function setSearch(params) {
    const openBtn = document.querySelector(`.${params.openBtnClass}`);
    const search = document.querySelector(`.${params.searchClass}`);
    const closeBtn = search.querySelector(`.${params.closeBtnClass}`);

    search.addEventListener("animationend", function (evt) {
      if (this._isOpened) {
        this.classList.remove(params.activeClass);
        this.classList.remove(params.hiddenClass);
        this._isOpened = false;
      } else {
        this._isOpened = true;
      }
    });

    search.addEventListener('click', function(evt) {
      evt._isSearch = true;
    });

    openBtn.addEventListener("click", function (evt) {
      this.disabled = true;

      if (
        !search.classList.contains(params.activeClass) &&
        !search.classList.contains(params.hiddenClass)
      ) {
        search.classList.add(params.activeClass);
      }
    });

    closeBtn.addEventListener('click', function () {
      openBtn.disabled = false;
      search.classList.add(params.hiddenClass);
    });

    document.body.addEventListener('click', function (evt) {
      if (!evt._isSearch && search._isOpened) {
        openBtn.disabled = false;
        search.classList.add(params.hiddenClass);
      }
    });
  }

    setSearch({
      openBtnClass: "js-open-search", // класс кнопки открытия
      closeBtnClass: "js-close", // класс кнопки закрытия
      searchClass: "js-form", // класс формы поиска
      activeClass: "is-opened", // класс открытого состояния
      hiddenClass: "is-closed" // класс закрывающегося состояния (удаляется сразу после закрытия)
    });


    // menu

    function setBurger(params) {
      const btn = document.querySelector(`.${params.btnClass}`);
      const menu = document.querySelector(`.${params.menuClass}`);

      btn.setAttribute('aria-expanded', false);

      menu.addEventListener("animationend", function () {
        if (this.classList.contains(params.hiddenClass)) {
          this.classList.remove(params.activeClass);
          this.classList.remove(params.hiddenClass);
        }
      });

      btn.addEventListener("click", function () {

        this.classList.toggle(params.activeClass);

        if (
          !menu.classList.contains(params.activeClass) &&
          !menu.classList.contains(params.hiddenClass)
        ) {
          menu.classList.add(params.activeClass);
          document.body.style.overflow = 'hidden';
          btn.setAttribute('aria-expanded', true);
        } else {
          menu.classList.add(params.hiddenClass);
          document.body.removeAttribute('style');
          btn.setAttribute('aria-expanded', false);
        }
      });
    }

    // здесь мы вызываем функцию и передаем в нее классы наших элементов
    setBurger({
      btnClass: "burger", // класс бургера
      menuClass: "header__wrap", // класс меню
      activeClass: "is-opened", // класс открытого состояния
      hiddenClass: "is-closed" // класс закрывающегося состояния (удаляется сразу после закрытия)
    });

    function setSearch(params) {
      const openBtn = document.querySelector(`.${params.openBtnClass}`);
      const search = document.querySelector(`.${params.searchClass}`);
      const closeBtn = search.querySelector(`.${params.closeBtnClass}`);

      search.addEventListener("animationend", function (evt) {
        if (this._isOpened) {
          this.classList.remove(params.activeClass);
          this.classList.remove(params.hiddenClass);
          this._isOpened = false;
        } else {
          this._isOpened = true;
        }
      });

      search.addEventListener('click', function(evt) {
        evt._isSearch = true;
      });

      openBtn.addEventListener("click", function (evt) {
        this.disabled = true;

        if (
          !search.classList.contains(params.activeClass) &&
          !search.classList.contains(params.hiddenClass)
        ) {
          search.classList.add(params.activeClass);
        }
      });

      closeBtn.addEventListener('click', function () {
        openBtn.disabled = false;
        search.classList.add(params.hiddenClass);
      });

      document.body.addEventListener('click', function (evt) {
        if (!evt._isSearch && search._isOpened) {
          openBtn.disabled = false;
          search.classList.add(params.hiddenClass);
        }
      });
    }


}) ();

// scroll
document.querySelectorAll('.js-scroll-link').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();

      const href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const elementPosition = scrollTarget.getBoundingClientRect().top;

      document.body.removeAttribute('style');
      document.querySelector('.header__wrap').classList.add('header__wrap','is-closed');
      document.querySelector('.burger').classList.remove('is-opened');
      document.querySelector('.burger ').setAttribute('aria-expanded', false);
      window.scrollBy({
          top: elementPosition,
          behavior: 'smooth'
      });
  });
});
