<template>
  <div class="row">
      <div class="col-md-12 col-lg-12">
         <div class="row row-cols-1">
            <div class="d-slider1 overflow-hidden swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
               <Swiper  id="swiper-wrapper-bb5b4e5553f7a9a4" aria-live="polite" :options="newoptions">
                  <SwiperSlide class="swiper-slide card card-slide swiper-slide-active" data-aos="fade-up" data-aos-delay="700" role="group" aria-label="1 / 7" style="width: 318px; margin-right: 32px;">
                     <div class="card-body">
                        <div class="progress-widget">
                          <div id="circle-progress-01" class="circle-progress-01 circle-progress circle-progress-primary text-center" data-min-value="0" data-max-value="100" data-value="50" data-type="percent" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50">
                            <svg version="1.1" width="100" height="100" viewBox="0 0 100 100" class="circle-progress"><circle class="circle-progress-circle" cx="50" cy="50" r="46" fill="none" stroke="#ddd" stroke-width="8"></circle><path d="M 50 4 A 46 46 0 0 1 50 96" class="circle-progress-value" fill="none" stroke="#00E699" stroke-width="8"></path><text class="circle-progress-text" x="50" y="50" font="16px Arial, sans-serif" text-anchor="middle" fill="#999" dy="0.4em">100%</text></svg></div>

                          <div class="progress-detail">
                              <p class="mb-2">Total Sales</p>
                              <h4 class="counter" style="visibility: visible;">${{grossSales}}K</h4>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide card card-slide" data-aos="fade-up" data-aos-delay="1100" role="group" aria-label="5 / 7" style="width: 318px; margin-right: 32px;">
                     <div class="card-body">
                        <div class="progress-widget">
                           <div id="circle-progress-05" class="circle-progress-01 circle-progress circle-progress-primary text-center" data-min-value="0" data-max-value="100" data-value="50" data-type="percent" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50">
                           <svg version="1.1" width="100" height="100" viewBox="0 0 100 100" class="circle-progress"><circle class="circle-progress-circle" cx="50" cy="50" r="46" fill="none" stroke="#ddd" stroke-width="8"></circle><path d="M 50 4 A 46 46 0 0 1 50 96" class="circle-progress-value" fill="none" stroke="#00E699" stroke-width="8"></path><text class="circle-progress-text" x="50" y="50" font="16px Arial, sans-serif" text-anchor="middle" fill="#999" dy="0.4em">100%</text></svg></div>
                           <div class="progress-detail">
                              <p class="mb-2">Total Orders</p>
                              <h4 style="visibility: visible;">{{totalOrders}}</h4>
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
                        <h4 class="card-title">${{grossSales}}K</h4>
                        <p class="mb-0">Gross Sales</p>
                  </template>
                 <spinner className="spinner-border text-primary" role="status" v-if="!isTrendlineFetched">
                   <spinnercontent className="visually-hidden">Loading...</spinnercontent>
                 </spinner>
                  <template v-slot:body>
                     <ApexChart element="d-main" :chartOption="dmain" v-if="isTrendlineFetched"/>
                  </template>
               </iq-card>
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
                                 <th>ORDER</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr v-for="product in products" v-bind:key="product.product_id">
                                 <td>
                                    <div class="d-flex align-items-center">
                                       <img class="bg-soft-primary rounded img-fluid avatar-40 me-3" src="@/assets/images/shapes/01.png" alt="profile">
                                       <h6>{{product.title}}</h6>
                                    </div>
                                 </td>
                                 <td>${{product.price * product.quantity * 2}}</td>
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
              <Activity maxMessageSize=10></Activity>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
import iqCard from '@/components/bootstrap/Cards/iq-card.vue'
import ApexChart from '@/components/custom/charts/ApexChart'
import Swiper from '@/components/custom/slider/Swiper'
import SwiperSlide from '@/components/custom/slider/SwiperSlide'
import AOS from '@/plugins/aos/dist/aos.js'
import Activity from './Activity'
import axios from 'axios'
export default {
  name: 'dashboard',
  components: {
    Activity,
    iqCard,
    ApexChart,
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      salesData: {},
      totalSales: 0,
      totalOrders: 10000,
      grossSales: 0,
      colorLists: ['#3a57e8', '#079aa2', '#f7b924', '#78f724'],
      products: [],
      isTrendlineFetched: false,
      dmain: {
        series: [],
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
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
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
            colors: ['#3a57e8', '#4bc7d2']
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
  async mounted () {
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
    this.isTrendlineFetched = false
    // query the back-end server for coockie
    const res = await axios.post('https://www.stockit.live/api/auth/login', {
      email: 'vaun890@gmail.com',
      password: 'indigo890'
    })
    console.log(res)
    // query the activity endpoint
    const salesInfo = await axios.get('https://stockit.live/api/salesinfo')
    console.log(salesInfo)
    // iterate over salesInfo's totalGrossList and push the values into the chart's series
    let counter = 1
    salesInfo.data.totalGrossList.forEach((gross) => {
      this.dmain.series.push({
        name: gross.platform,
        data: gross.grossByMonthList.map(x => x.gross / 1000),
        color: this.colorLists[counter]
      })
      counter = counter + 1
    })
    console.log(this.dmain.series)
    // add "total" series by aggregating each platform's gross sales
    this.dmain.series.push({
      name: 'Total',
      data: salesInfo.data.totalGrossList[0].grossByMonthList.map((x, i) => {
        return salesInfo.data.totalGrossList.reduce((acc, curr) => {
          return acc + curr.grossByMonthList[i].gross
        }, 0) / 1000
      }),
      color: this.colorLists[0]
    })
    // get the sum of elements of total series
    this.grossSales = this.dmain.series[this.dmain.series.length - 1].data.reduce((acc, curr) => {
      return acc + curr
    }, 0)
    this.isTrendlineFetched = true
    // query products and select the first 10 products
    const products = this.fetchItemList()
    products.then((res) => {
      this.products = res.slice(0, 10)
    })
  },
  methods: {
    onClickActivityOverview () {
      this.$router.push('default/activity')
    },
    async fetchItemList () {
      const res = await axios.get('https://www.stockit.live/api/allproducts')
      return res.data
    }
  }
}
</script>
<style>
hoverable {
  cursor: pointer;
}
</style>
