<template>
    <header>
        <section class="header__content">
            <div class="nav__brand">
                <a href="#" class="nav__brand__logo">
                    <img
                        src="/img/Capture.PNG"
                        alt="brand logo"
                        class="navbrand"
                    />
                </a>
            </div>
            <div class="nav__menu">
                <div class="menu__container">
                    <ul class="menu__list">
                        <li class="menu__list__item">
                            <a href="index.html" class="menu__list__link"
                                >Calendar</a
                            >
                        </li>
                        <li class="menu__list__item">
                            <a href="about.html" class="menu__list__link"
                                >Statistic</a
                            >
                        </li>
                        <router-link :to="{ name: 'home'}">
                        <li class="menu__list__item">
                            <a href="Employee_page" class="menu__list__link"
                                >Employee</a
                            >
                        </li>
                        </router-link>
                        <li class="menu__list__item">
                            <a href="contact-us.html" class="menu__list__link"
                                >Client</a
                            >
                        </li>
                        <li class="menu__list__item">
                            <a href="contact-us.html" class="menu__list__link"
                                >Equipment</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
            <div class="nav__user float-right">
                <a href="#" class="nav__button"><i class="far fa-bell"></i></a>
                <a href="#" class="nav__button"
                    ><i class="far fa-envelope"></i
                ></a>
                <a href="#" class="nav__button">
                    <img src="/img/dan-ROJFuWCsfmA-unsplash.jpg" class="img" alt="">
                </a>
            </div>
        </section>
    </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
}


header {
    max-width: 100%;
    height: 100%;
    background: #ffffff;
    .header__content {
        display: flex;
        align-items: center;
        padding: 1.2rem 3rem 0.4em 3rem;
        .navbrand {
            vertical-align: middle;
        }
    }
}

.nav__menu {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;

    .menu__container {
        display: flex;
        justify-content: center;
        align-items: center;
        .menu__list {
            display: flex;
            align-self: center;
            justify-content: center;
            align-items: center;
            list-style: none;
            padding: 0;
            .menu__list__item {
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0.8rem 0 0 2.4rem;
                .menu__list__link {
                    color: #b2bec3;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 1.1rem;
                    text-decoration: none;
                    position: relative;
                    &:hover {
                        color: #000000;
                        transition: 0.3s ease-in-out;
                        &:active, &::after{
                            position: absolute;
                            content: "";
                            top: 60px;
                            left: 0;
                            right: 0;
                            bottom: 0px;
                            width: 100%;
                            height: 3px;
                            background: #00b894;
                        }
                    }
                }
            }
        }
    }
}

.nav__user {
    width: 20%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .nav__button {
        color: #b2bec3;
        font-size: 1.5rem;
        text-decoration: none;
        margin: 0 0 0 1.5rem;
        .img {
            width: 55px;
            height: 55px;
            object-fit: cover;
            max-width: 100%;
            border-radius: 50px;
        }
    }
}

.hamburger-container {
    display: none;
}

.mobile-menu {
    display: none;
}
</style>
