<template>
  <div class="app__container">
            <div class="container__bg">
            </div>
            <div class="container__content">
                <!-- logo svg -->
                <div class="container__content__logo">
                    <svg>
                        <text x="50%" y="50%" fill="transparent" text-anchor="middle">DEV</text>
                    </svg>
                </div>
                <!-- slogan -->
                <div class="container__content__slogan">
                    <p class="container__content__slogan__text">Join with me!</p>
                </div>

                <!-- button login and signup -->
                <ul class="container__content__join">
                    <li class="content__join__item">
                        <button class="content__join__item--link btn btn--primary btn--normal register--sw">Sign Up</button>
                    </li>
                    <li class="content__join__item">
                        <button class="content__join__item--link btn btn--normal login--sw">Log in</button>
                    </li>
                </ul>

                <div class="container__content__footer">
                    <ul class="footer__contact">
                        <li class="footer__item">
                            <a href="assets/pages/chat.html">Giới Thiệu</a>
                        </li>
                        <li class="footer__item">
                            <a href="assets/pages/404.html">Trợ Giúp</a>
                        </li>
                        <li class="footer__item">
                            <a href="assets/pages/404.html">Chính sách &amp; Điều khoản</a>
                        </li>
                    </ul>
    
                    <div class="footer__hello">
                        Build with <i class="heart-icon icofont-heart"></i> by Dev &copy;
                    </div>
                </div>
            </div>
            
        </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

  }
}
</script>
<style>
  .app__container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
}

.container__bg{
    background-image: url('../assets/images/bg-index.jpg');
    width: 50%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.container__content{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 50%;
    height: 100%;
    background-color: var(--background-index-color);
}

.container__content__logo{
    margin-top: 50px;
}

.container__content__logo svg{
    width: 100%;
    height: 120px;
}

.container__content__logo svg text{
    stroke: #bd1f0a;
    font-size: 8rem;
    font-weight: 700;
    stroke-width: 3;
    animation: text 5s infinite alternate;
}

@keyframes text {
    0%{
        stroke-dasharray: 0 50%;
    }
    100%{
        stroke-dasharray: 50% 0;
    }
}

.container__content__slogan__text{
    color: var(--white-color);
    font-size: 3rem;
    text-align: center;
}

.content__join__item{
    margin: 2rem 0;
    list-style: none;
}

.footer__contact{
    display: flex;
}

.footer__item{
    list-style: none;
}

.footer__item a{
    text-decoration: none;
    font-size: 1.6rem;
    list-style: none;
    padding-right: 12px;
    color: var(--white-color);
}

.footer__contact,
.footer__hello{
    color: var(--white-color);
}

.footer__hello{
    font-size: 1.2rem;
    margin-left: 40px;
}
</style>
