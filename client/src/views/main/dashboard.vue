<template>
  <div class="row">
      <div class="col-md-12 col-lg-12">
         <div class="row row-cols-1">
            <div class="d-slider1 overflow-hidden swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
               <Swiper  id="swiper-wrapper-bb5b4e5553f7a9a4" aria-live="polite" :options="newoptions">
                  <SwiperSlide class="swiper-slide card card-slide swiper-slide-active" data-aos="fade-up" data-aos-delay="700" role="group" aria-label="1 / 7" style="width: 318px; margin-right: 32px;">
                     <div class="card-body">
                        <div class="progress-widget">
                           <div id="circle-progress-01" class="circle-progress-01 circle-progress circle-progress-primary text-center" data-min-value="0" data-max-value="100" data-value="90" data-type="percent" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="90">
                              <svg class="card-slie-arrow " width="24" height="24px" viewBox="0 0 24 24">
                                 <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z"></path>
                              </svg>
                              <svg version="1.1" width="100" height="100" viewBox="0 0 100 100" class="circle-progress"><circle class="circle-progress-circle" cx="50" cy="50" r="46" fill="none" stroke="#ddd" stroke-width="8"></circle><path d="M 50 4 A 46 46 0 1 1 22.96187839454623 12.785218258752423" class="circle-progress-value" fill="none" stroke="#00E699" stroke-width="8"></path><text class="circle-progress-text" x="50" y="50" font="16px Arial, sans-serif" text-anchor="middle" fill="#999" dy="0.4em">90%</text>
                              </svg>
                           </div>
                           <div class="progress-detail">
                              <p class="mb-2">Total Sales</p>
                              <h4 class="counter" style="visibility: visible;">$<Vue3autocounter  ref='counter' :startAmount='0' :endAmount='560'/>K</h4>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide card card-slide" data-aos="fade-up" data-aos-delay="1100" role="group" aria-label="5 / 7" style="width: 318px; margin-right: 32px;">
                     <div class="card-body">
                        <div class="progress-widget">
                           <div id="circle-progress-05" class="circle-progress-01 circle-progress circle-progress-primary text-center" data-min-value="0" data-max-value="100" data-value="50" data-type="percent" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50">
                              <svg class="card-slie-arrow " width="24px" height="24px" viewBox="0 0 24 24">
                                 <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z"></path>
                              </svg>
                           <svg version="1.1" width="100" height="100" viewBox="0 0 100 100" class="circle-progress"><circle class="circle-progress-circle" cx="50" cy="50" r="46" fill="none" stroke="#ddd" stroke-width="8"></circle><path d="M 50 4 A 46 46 0 0 1 50 96" class="circle-progress-value" fill="none" stroke="#00E699" stroke-width="8"></path><text class="circle-progress-text" x="50" y="50" font="16px Arial, sans-serif" text-anchor="middle" fill="#999" dy="0.4em">50%</text></svg></div>
                           <div class="progress-detail">
                              <p class="mb-2">Total Orders</p>
                              <h4 style="visibility: visible;"><Vue3autocounter  ref='counter' :startAmount='0' :endAmount='150'/>K</h4>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
                  <template v-slot:nav>
                    <div class="swiper-button swiper-button-next"></div>
                    <div class="swiper-button swiper-button-prev"></div>
                  </template>
               </Swiper>
            <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
         </div>
      </div>
      <div class="col-md-12 col-lg-8">
         <div class="row">
            <div class="col-md-12">
               <iq-card headerClass="flex-wrap" data-aos="fade-up" data-aos-delay="800">
                  <template v-slot:headerTitle>
                        <h4 class="card-title">$855.8K</h4>
                        <p class="mb-0">Gross Sales</p>
                  </template>
                  <template v-slot:headerAction>
                     <div class="dropdown">
                        <a href="#" class="text-secondary dropdown-toggle" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                        This Week
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton2">
                           <li><a class="dropdown-item" href="#">This Week</a></li>
                           <li><a class="dropdown-item" href="#">This Month</a></li>
                           <li><a class="dropdown-item" href="#">This Year</a></li>
                        </ul>
                     </div>
                  </template>
                  <template v-slot:body>
                     <ApexChart element="d-main" :chartOption="dmain" />
                  </template>
               </iq-card>
            </div>
            <div class="col-md-12 col-xl-6">
               <div class="card" data-aos="fade-up" data-aos-delay="1000">
                  <div class="card-header d-flex justify-content-between flex-wrap">
                     <div class="header-title">
                        <h4 class="card-title">Earnings</h4>
                     </div>
                     <div class="dropdown">
                        <a href="#" class="text-secondary dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                           This Week
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                           <li><a class="dropdown-item" href="#">This Week</a></li>
                           <li><a class="dropdown-item" href="#">This Month</a></li>
                           <li><a class="dropdown-item" href="#">This Year</a></li>
                        </ul>
                     </div>
                  </div>
                  <div class="card-body">
                     <div class="d-flex flex-wrap align-items-center justify-content-between">
                        <ApexChart element="myChart1" :chartOption="myChart1" classname="col-md-8 col-lg-8" />
                        <div class="d-grid gap col-md-4 col-lg-4">
                           <div class="d-flex align-items-start">
                              <svg class="mt-2" xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 24 24" fill="#3a57e8">
                                 <g>
                                    <circle cx="12" cy="12" r="8" fill="#3a57e8"></circle>
                                 </g>
                              </svg>
                              <div class="ms-3">
                                 <span class="text-secondary">Fashion</span>
                                 <h6>251K</h6>
                              </div>
                           </div>
                           <div class="d-flex align-items-start">
                              <svg class="mt-2" xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 24 24" fill="#4bc7d2">
                                 <g>
                                    <circle cx="12" cy="12" r="8" fill="#4bc7d2"></circle>
                                 </g>
                              </svg>
                              <div class="ms-3">
                                 <span class="text-secondary">Accessories</span>
                                 <h6>176K</h6>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-md-12 col-xl-6">
               <div class="card" data-aos="fade-up" data-aos-delay="1200">
                  <div class="card-header d-flex justify-content-between flex-wrap">
                     <div class="header-title">
                        <h4 class="card-title">Conversions</h4>
                     </div>
                     <div class="dropdown">
                        <a href="#" class="text-secondary dropdown-toggle" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
                           This Week
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton3">
                           <li><a class="dropdown-item" href="#">This Week</a></li>
                           <li><a class="dropdown-item" href="#">This Month</a></li>
                           <li><a class="dropdown-item" href="#">This Year</a></li>
                        </ul>
                     </div>
                  </div>
                  <div class="card-body">
                     <ApexChart element="dactivity1" :chartOption="dactivity1"/>
                  </div>
               </div>
            </div>
            <div class="col-md-12 col-lg-12">
               <iq-card bodyClass="p-0" headerClass="flex-wrap"  data-aos="fade-up" data-aos-delay="400">
                  <template v-slot:headerTitle>
                        <h4 class="card-title mb-2">Top selling products</h4>
                  </template>
                  <template v-slot:headerAction>
                     <div class="dropdown">
                        <span class="dropdown-toggle" id="dropdownMenuButton7" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                        </span>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton7">
                           <a class="dropdown-item " href="javascript:void(0);">Action</a>
                           <a class="dropdown-item " href="javascript:void(0);">Another action</a>
                           <a class="dropdown-item " href="javascript:void(0);">Something else here</a>
                        </div>
                     </div>
                  </template>
                  <template v-slot:body>
                     <div class="table-responsive mt-4">
                        <table id="basic-table" class="table table-striped mb-0" role="grid">
                           <thead>
                              <tr>
                                 <th>PRODUCT</th>
                                 <th>URL</th>
                                 <th>ORDER</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <td>
                                    <div class="d-flex align-items-center">
                                       <img class="bg-soft-primary rounded img-fluid avatar-40 me-3" src="@/assets/images/shapes/01.png" alt="profile">
                                       <h6>Addidis Sportwear</h6>
                                    </div>
                                 </td>
                                 <td>
                                    <div class="iq-media-group iq-media-group-1">
                                       <a href="#" class="iq-media-1">
                                          <div class="icon iq-icon-box-3 rounded-pill">SP</div>
                                       </a>
                                       <a href="#" class="iq-media-1">
                                          <div class="icon iq-icon-box-3 rounded-pill">PP</div>
                                       </a>
                                       <a href="#" class="iq-media-1">
                                          <div class="icon iq-icon-box-3 rounded-pill">MM</div>
                                       </a>
                                    </div>
                                 </td>
                                 <td>$14,000</td>
                              </tr>
                              <tr>
                                 <td>
                                    <div class="d-flex align-items-center">
                                       <img class="bg-soft-primary rounded img-fluid avatar-40 me-3" src="@/assets/images/shapes/05.png" alt="profile">
                                       <h6>Netflixer Platforms</h6>
                                    </div>
                                 </td>
                                 <td>
                                    <div class="iq-media-group iq-media-group-1">
                                       <a href="#" class="iq-media-1">
                                          <div class="icon iq-icon-box-3 rounded-pill">SP</div>
                                       </a>
                                       <a href="#" class="iq-media-1">
                                          <div class="icon iq-icon-box-3 rounded-pill">PP</div>
                                       </a>
                                    </div>
                                 </td>
                                 <td>$30,000</td>
                              </tr>
                              <tr>
                                 <td>
                                    <div class="d-flex align-items-center">
                                       <img class="bg-soft-primary rounded img-fluid avatar-40 me-3" src="@/assets/images/shapes/02.png" alt="profile">
                                       <h6>Shopifi Stores</h6>
                                    </div>
                                 </td>
                                 <td>
                                    <div class="iq-media-group iq-media-group-1">
                                       <a href="#" class="iq-media-1">
                                          <div class="icon iq-icon-box-3 rounded-pill">PP</div>
                                       </a>
                                       <a href="#" class="iq-media-1">
                                          <div class="icon iq-icon-box-3 rounded-pill">TP</div>
                                       </a>
                                    </div>
                                 </td>
                                 <td>$8,500</td>
                              </tr>
                              <tr>
                                 <td>
                                    <div class="d-flex align-items-center">
                                       <img class="bg-soft-primary rounded img-fluid avatar-40 me-3" src="@/assets/images/shapes/03.png" alt="profile">
                                       <h6>Bootstrap Technologies</h6>
                                    </div>
                                 </td>
                                 <td>
                                    <div class="iq-media-group iq-media-group-1">
                                       <a href="#" class="iq-media-1">
                                          <div class="icon iq-icon-box-3 rounded-pill">SP</div>
                                       </a>
                                       <a href="#" class="iq-media-1">
                                          <div class="icon iq-icon-box-3 rounded-pill">PP</div>
                                       </a>
                                       <a href="#" class="iq-media-1">
                                          <div class="icon iq-icon-box-3 rounded-pill">MM</div>
                                       </a>
                                       <a href="#" class="iq-media-1">
                                          <div class="icon iq-icon-box-3 rounded-pill">TP</div>
                                       </a>
                                    </div>
                                 </td>
                                 <td>$20,500</td>
                              </tr>
                              <tr>
                                 <td>
                                    <div class="d-flex align-items-center">
                                       <img class="bg-soft-primary rounded img-fluid avatar-40 me-3" src="@/assets/images/shapes/04.png" alt="profile">
                                       <h6>Community First</h6>
                                    </div>
                                 </td>
                                 <td>
                                    <div class="iq-media-group iq-media-group-1">
                                       <a href="#" class="iq-media-1">
                                          <div class="icon iq-icon-box-3 rounded-pill">MM</div>
                                       </a>
                                    </div>
                                 </td>
                                 <td>$9,800</td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                  </template>
               </iq-card>
            </div>
         </div>
      </div>
      <div class="col-md-12 col-lg-4">
         <div class="row">
            <div class="col-md-12 col-lg-12">
               <iq-card headerClass="flex-wrap" data-aos="fade-up" data-aos-delay="400" v-on:click="onClickActivityOverview" class="hoverable">
                  <template v-slot:headerTitle>
                        <h4 class="card-title mb-2">Activity overview</h4>
                        <p class="mb-0">
                           <svg class ="me-2" width="24" height="24" viewBox="0 0 24 24">
                              <path fill="#17904b" d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z" />
                           </svg>
                           16% this month
                        </p>
                  </template>
                  <template v-slot:body>
                     <div class=" d-flex profile-media align-items-top mb-2">
                        <div class="profile-dots-pills border-primary mt-1"></div>
                        <div class="ms-4">
                           <h6 class=" mb-1">$2400, Purchase</h6>
                           <span class="mb-0">11 JUL 8:10 PM</span>
                        </div>
                     </div>
                     <div class=" d-flex profile-media align-items-top mb-2">
                        <div class="profile-dots-pills border-primary mt-1"></div>
                        <div class="ms-4">
                           <h6 class=" mb-1">New order #8744152</h6>
                           <span class="mb-0">11 JUL 11 PM</span>
                        </div>
                     </div>
                     <div class=" d-flex profile-media align-items-top mb-2">
                        <div class="profile-dots-pills border-primary mt-1"></div>
                        <div class="ms-4">
                           <h6 class=" mb-1">Affiliate Payout</h6>
                           <span class="mb-0">11 JUL 7:64 PM</span>
                        </div>
                     </div>
                     <div class=" d-flex profile-media align-items-top mb-2">
                        <div class="profile-dots-pills border-primary mt-1"></div>
                        <div class="ms-4">
                           <h6 class=" mb-1">New user added</h6>
                           <span class="mb-0">11 JUL 1:21 AM</span>
                        </div>
                     </div>
                     <div class=" d-flex profile-media align-items-top mb-1">
                        <div class="profile-dots-pills border-primary mt-1"></div>
                        <div class="ms-4">
                           <h6 class=" mb-1">Product added</h6>
                           <span class="mb-0">11 JUL 4:50 AM</span>
                        </div>
                     </div>
                  </template>
               </iq-card>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
import iqCard from '@/components/bootstrap/Cards/iq-card.vue'
import ApexChart from '@/components/custom/charts/ApexChart'
import Swiper from '@/components/custom/slider/Swiper'
import Vue3autocounter from 'vue3-autocounter'
import SwiperSlide from '@/components/custom/slider/SwiperSlide'
import AOS from '@/plugins/aos/dist/aos.js'
export default {
  name: 'dashboard',
  components: {
    iqCard,
    ApexChart,
    Swiper,
    Vue3autocounter,
    SwiperSlide
  },
  data () {
    return {
      dmain: {
        series: [{
          name: 'total',
          data: [94, 80, 94, 80, 94, 80, 94],
          color: '#3a57e8'
        },
        {
          name: 'Lazada',
          data: [74, 40, 54, 20, 74, 20, 84],
          color: '#079aa2'
        },
        {
          name: 'Shopee',
          data: [24, 40, 34, 60, 24, 60, 14],
          color: '#f7b924'
        },
        {
          name: 'Tiki',
          data: [24, 40, 34, 50, 11, 5, 14],
          color: '#78f724'
        }
        ],
        chart: {
          fontFamily: '"Inter", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
          height: 245,
          type: 'area',
          toolbar: {
            show: false
          },
          sparkline: {
            enabled: false
          }
        },
        colors: ['#3a57e8', '#079aa2'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
          width: 3
        },
        yaxis: {
          show: true,
          labels: {
            show: true,
            minWidth: 19,
            maxWidth: 19,
            style: {
              colors: '#8A92A6'
            },
            offsetX: -5
          }
        },
        legend: {
          show: true
        },
        xaxis: {
          labels: {
            minHeight: 22,
            maxHeight: 22,
            show: true,
            style: {
              colors: '#8A92A6'
            }
          },
          lines: {
            show: false // or just here to disable only x axis grids
          },
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug']
        },
        grid: {
          show: true
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'vertical',
            shadeIntensity: 0,
            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
            inverseColors: true,
            opacityFrom: 0.4,
            opacityTo: 0.1,
            stops: [0, 50, 80],
            colors: ['#3a57e8', '#4bc7d2', '#f7b924']
          }
        },
        tooltip: {
          enabled: true
        }
      },
      myChart1: {
        series: [55, 75],
        chart: {
          height: 260,
          type: 'radialBar'
        },
        colors: ['#4bc7d2', '#3a57e8'],
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 10,
              size: '50%'
            },
            track: {
              margin: 10,
              strokeWidth: '50%'
            },
            dataLabels: {
              show: false
            }
          }
        }

      },
      dactivity1: {
        series: [{
          name: 'Successful deals',
          data: [30, 50, 35, 60, 40, 60, 60, 30, 50, 35]
        }, {
          name: 'Failed deals',
          data: [40, 50, 55, 50, 30, 80, 30, 40, 50, 55]
        }],
        chart: {
          type: 'bar',
          height: 230,
          stacked: true,
          toolbar: {
            show: false
          }
        },
        colors: ['#3a57e8', '#4bc7d2'],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '28%',
            endingShape: 'rounded',
            borderRadius: 5
          }
        },
        legend: {
          show: false
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S', 'M', 'T', 'W'],
          labels: {
            minHeight: 20,
            maxHeight: 20,
            style: {
              colors: '#8A92A6'
            }
          }
        },
        yaxis: {
          title: {
            text: ''
          },
          labels: {
            minWidth: 19,
            maxWidth: 19,
            style: {
              colors: '#8A92A6'
            }
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return '$ ' + val + ' thousands'
            }
          }
        }
      },
      newoptions: {
        centeredSlides: false,
        loop: false,
        slidesPerView: 4,
        autoplay: false,
        spaceBetween: 32,
        breakpoints: {
          320: { slidesPerView: 1 },
          550: { slidesPerView: 2 },
          991: { slidesPerView: 3 },
          1400: { slidesPerView: 4 },
          1500: { slidesPerView: 5 },
          1920: { slidesPerView: 6 },
          2040: { slidesPerView: 7 },
          2440: { slidesPerView: 8 }
        },
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },

        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar'
        }
      }

    }
  },
  mounted () {
    if (typeof AOS !== typeof undefined) {
      AOS.init({
        disable: function () {
          var maxWidth = 996
          return window.innerWidth < maxWidth
        },
        once: true,
        duration: 800
      })
    }
  },
  methods: {
    onClickActivityOverview () {
      this.$router.push('default/activity')
    }
  }
}
</script>
<style>
hoverable {
  cursor: pointer;
}
</style>
