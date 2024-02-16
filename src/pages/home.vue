<template>
  <div class="main-container">
    <section class="section section-header">
      <div class="section-bg section-header-bg" />
      <div class="section-bg section-content-bg" />
      <div class="container">
        <header class="header">
          <div class="header-box">
            <div class="avatar wow inShow no-print">
              <img
                src="../../public/img/icon.jpg"
                alt="logo"
                class="img-responsive"
              >
            </div>
            <h1 class="name text-center wow inShow no-print">
              {{ userInfo.nickname }}
            </h1>
            <h1 class="name text-center hide show-print-block">
              {{ userInfo.name }}
            </h1>
          </div>
        </header>
        <div class="section-content">
          <div class="content-box">
            <div class="name-slogan">
              <a href="#">
                <h2
                  class="wow inShow no-print"
                  data-wow-delay="0.1s"
                >
                  <span class="text-light">{{ userInfo.lastName }}</span>&nbsp;{{ userInfo.firstName }}
                </h2>
              </a>
              <div
                class="description wow inShow no-print"
                data-wow-delay="0.15s"
              >
                <i class="slogan">{{ userInfo.slogan }}</i>
              </div>
              <div
                class="description wow inShow printing"
                data-wow-delay="0.1s"
              >
                (Ctrl+p to print this resume)
              </div>
            </div>
            <div class="contact-info">
              <div class="row">
                <div class="col-md-6 col-lg-3 flex">
                  <div
                    class="item wow inShow"
                    data-wow-delay="0.3s"
                  >
                    <h4>Gender</h4>
                    <div class="info">
                      {{ userInfo.gender }}
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3 flex">
                  <div
                    class="item wow inShow"
                    data-wow-delay="0.45s"
                  >
                    <h4>Age</h4>
                    <div class="info">
                      {{ calcDate(userInfo.birthday) }}
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3 flex">
                  <div
                    class="item wow inShow"
                    data-wow-delay="0.5s"
                    :href="'mailto:'+userInfo.email"
                  >
                    <h4>Education</h4>
                    <div class="info">
                      {{ userInfo.education }}
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3 flex">
                  <a
                    class="item wow inShow"
                    data-wow-delay="0.55s"
                  >
                    <h4>College</h4>
                    <div class="info">OUHK</div>
                  </a>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 col-lg-3 flex">
                  <div
                    class="item wow inShow"
                    data-wow-delay="0.6s"
                  >
                    <h4>Phone</h4>
                    <address class="info">
                      {{ userInfo.phone }}
                    </address>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3 flex">
                  <div
                    class="item wow inShow"
                    data-wow-delay="0.65s"
                  >
                    <h4>Telegram</h4>
                    <div class="info">
                      {{ userInfo.telegram.number }}
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3 flex">
                  <h4>Website</h4>
                  <a
                    class="item wow inShow"
                    data-wow-delay="0.7s"
                    :href="'https://' + userInfo.website"
                    target="_blank"
                  >
                    <div class="info">{{ userInfo.website }}</div>
                  </a>
                </div>
                <div class="col-md-6 col-lg-3 flex">
                  <h4>Github</h4>
                  <a
                    class="item wow inShow"
                    data-wow-delay="0.75s"
                    :href="'https://' + userInfo.github"
                    target="_blank"
                  >
                    <div class="info">{{ userInfo.github }}</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="section-bg section-header-bg" />
        <div class="section-bg section-content-bg" />
        <header class="header">
          <div class="content-box">
            <h2 class="title">
              About me&nbsp;/&nbsp;
              <small><i>Intro</i></small>
            </h2>
            <div class="description">
              Tech Background
            </div>
          </div>
        </header>
        <div class="section-content">
          <div class="intro">
            <p
              v-for="(intro,idx) in userInfo.intro.content"
              :key="idx"
              v-html="intro"
            />
          </div>
          <!-- <div class="technology">
            <ul class="inline">
              <li><b>{{userInfo.intro.technology.title}}</b></li>
              <li v-for="item in userInfo.intro.technology.content" :key="item">{{item}}</li>
            </ul>
          </div> -->
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="section-bg section-header-bg" />
        <div class="section-bg section-content-bg" />
        <header class="header">
          <div class="content-box">
            <h2 class="title">
              Skills&nbsp;/&nbsp;
              <small><i>Skills</i></small>
            </h2>
            <div class="description">
              Language & Frameworks
            </div>
          </div>
        </header>
        <div class="section-content">
          <div class="row skill">
            <div
              v-for="skill in userInfo.skill"
              :key="skill.name"
              class="col-md-6"
            >
              <div class="item">
                <div class="text-info">
                  <span class="num text-light">{{ skill.percent }}</span>{{ skill.name }}
                </div>
                <div class="progress">
                  <div
                    class="progress-bar wow progressShow"
                    :style="'width:'+skill.percent"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="section-bg section-header-bg" />
        <div class="section-bg section-content-bg" />
        <header class="header">
          <div class="content-box">
            <h2 class="title">
              Projects&nbsp;/&nbsp;
              <small><i>Experience</i></small>
            </h2>
            <div class="description">
              Side projects
            </div>
          </div>
        </header>
        <div class="section-content">
          <div class="experience">
            <div
              v-for="(item,index) in userInfo.project"
              :key="item.title"
              class="item"
              :class="{printOnly: index ===2}"
            >
              <div class="row">
                <div class="col-md-5">
                  <div class="time">
                    {{ item.time }}
                  </div>
                  <div
                    class="title"
                    v-html="item.title"
                  />
                  <div class="description">
                    {{ item.intro }}
                  </div>
                </div>
                <div class="col-md-7">
                  <div class="content">
                    {{ item.description }}
                  </div>
                  <div
                    v-for="tip in item.tips"
                    :key="tip.title"
                    class="tips"
                  >
                    <b>{{ tip.title }}</b>
                    <ul>
                      <li
                        v-for="list in tip.content"
                        :key="list"
                        v-html="list"
                      />
                    </ul>
                  </div>
                  <div
                    v-for="tech in item.technology"
                    :key="tech.title"
                    class="technology"
                  >
                    <b>{{ tech.title }}</b>
                    <ul class="inline">
                      <li
                        v-for="(techItem,techItemIndex) in tech.content"
                        :key="techItemIndex"
                      >
                        {{ techItem }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section show-case">
      <img src="../../public/img/showcase-stock.jpg">
    </section>
    <section class="section show-case-app">
      <img
        v-for="(img,index) in stockAppImageList"
        :key="index"
        class="responsive-image"
        :src="require(`../../public/img/${img}`)"
      >
    </section>
    <section class="section no-print">
      <div class="container">
        <div class="section-bg section-header-bg" />
        <div class="section-bg section-content-bg" />
        <header class="header">
          <div class="content-box">
            <h2 class="title">
              Contact&nbsp;/&nbsp;
              <small><i>Contact</i></small>
            </h2>
            <div class="description">
              Contact me via the following info
            </div>
          </div>
        </header>
        <div class="section-content">
          <div class="contact">
            <div class="row">
              <div class="col-md-6 col-lg-3">
                <div class="item">
                  <h4>Phone</h4>
                  <div class="info">
                    {{ userInfo.phone }}
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-3">
                <div class="item">
                  <h4>Telegram</h4>
                  <div class="info">
                    {{ userInfo.telegram.number }}
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-3">
                <div class="item">
                  <h4>Location</h4>
                  <div class="info">
                    {{ userInfo.location }}
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-3">
                <a
                  class="item"
                  :href="'mailto:'+userInfo.email"
                >
                  <h4>Email</h4>
                  <div class="info">{{ userInfo.email }}</div>
                </a>
              </div>
            </div>
          </div>
          <div class="name-slogan">
            <a
              href="https://quhongqiang.com/"
              target="_blank"
            >
              <h2 class="wow inShow">
                <span class="text-light">{{ userInfo.lastName }}</span>&nbsp;{{ userInfo.firstName }}
              </h2>
            </a>
            <div
              class="description wow inShow"
              data-wow-delay="0.05s"
            >
              {{ userInfo.slogan }}
            </div>
            <div
              class="description wow inShow printing"
              data-wow-delay="0.1s"
            >
              ({{ userInfo.tips }})
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import data from '../../public/resume.json';

export default {
  name: 'Front',
  data() {
    return {
      userInfo: data,
      stockAppImageList: [
        'stock-app-1.png',
        'stock-app-2.png',
        'stock-app-3.png',
        'stock-app-4.png',
        'stock-app-5.png',
        'stock-app-6.png',
        'stock-app-7.png',
        'stock-app-8.png',
        'stock-app-9.png',
        'stock-app-11.png',
        'stock-app-12.png',
        'stock-app-13.png',
      ],
    };
  },
  methods: {
    calcDate(birthday) {
      const year = birthday.split('/')
        .pop();
      const todyDate = new Date();
      return todyDate.getFullYear() - year;
    },
  },
};
</script>

<style scoped>
.show-case {
  width: 100vw;

img {
  width: 100%;
}

}

.show-case-app {
  color: rgb(243, 243, 243);

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.responsive-image {
  width: 100%; /* Make images fill the available space */
  margin-bottom: 15px; /* Add some space between images */
}

@media (min-width: 768px) {
  .responsive-image {
    width: calc(50% - 15px); /* Show 2 images per row on laptops */
  }
}

@media (min-width: 1200px) {
  .responsive-image {
    width: calc(25% - 15px); /* Show 4 images per row on desktops */
  }
}
</style>
