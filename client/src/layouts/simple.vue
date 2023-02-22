<template>
    <loader />
    <div class="wrapper">
        <router-view/>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'simple',
  computed: {
    ...mapGetters({
      stateScheme: 'scheme',
      stateschemedir: 'schemeDir',
      stateThemeColor: 'themeColor',
      statePrimaryColor: 'themePrimaryColor',
      stateInfoColor: 'themeinfoColor'
    })
  },
  mounted () {
    this.rtlmode()
    this.colorMode()
    this.themeMode()
  },
  watch: {
    stateScheme (change) {
      this.onChangeMode(change)
    },
    stateschemedir (value) {
      this.onChangeDir(value)
    },
    stateThemeColor (change) {
      this.onThemeMode(change, this.statePrimaryColor, this.stateInfoColor)
    }
  },
  methods: {
    ...mapActions({
      schememodeChange: 'schemeModeAction',
      schemedirmodeChange: 'schemedirModeAction',
      themecolormodeChange: 'themecolorModeAction'
    }),
    onChangeMode (change) {
      switch (change) {
        case 'auto':
          document.body.classList.add('auto')
          document.body.classList.remove('dark')
          document.body.classList.remove('light')
          break
        case 'dark':
          document.body.classList.add('dark')
          document.body.classList.remove('auto')
          document.body.classList.remove('light')
          break
        case 'light':
          document.body.classList.add('light')
          document.body.classList.remove('dark')
          document.body.classList.remove('auto')
          break
      }
    },
    colorMode () {
      const schemeMode = sessionStorage.getItem('color-mode')
      if (schemeMode !== null) {
        this.onChangeMode(schemeMode)
        this.schememodeChange(schemeMode)
      } else {
        this.onChangeMode(this.stateScheme)
        this.schememodeChange(this.stateScheme)
      }
    },
    onThemeMode (change, primaryColor, InfoColor) {
      const elem = document.querySelector('html')
      switch (change) {
        case 'theme-color-blue':
          document.body.classList.add('theme-color-blue')
          document.body.classList.remove('theme-color-gray')
          document.body.classList.remove('theme-color-red')
          document.body.classList.remove('theme-color-yellow')
          document.body.classList.remove('theme-color-pink')
          document.body.classList.remove('theme-color-default')
          elem.setAttribute('style', '--bs-info:#573BFF;')

          break
        case 'theme-color-gray':
          document.body.classList.add('theme-color-gray')
          document.body.classList.remove('theme-color-blue')
          document.body.classList.remove('theme-color-red')
          document.body.classList.remove('theme-color-yellow')
          document.body.classList.remove('theme-color-pink')
          document.body.classList.remove('theme-color-default')
          elem.setAttribute('style', '--bs-info:#FD8D00;')
          break
        case 'theme-color-red':
          document.body.classList.add('theme-color-red')
          document.body.classList.remove('theme-color-blue')
          document.body.classList.remove('theme-color-gray')
          document.body.classList.remove('theme-color-yellow')
          document.body.classList.remove('theme-color-pink')
          document.body.classList.remove('theme-color-default')
          elem.setAttribute('style', '--bs-info:#366AF0;')
          break
        case 'theme-color-yellow':
          document.body.classList.add('theme-color-yellow')
          document.body.classList.remove('theme-color-blue')
          document.body.classList.remove('theme-color-gray')
          document.body.classList.remove('theme-color-red')
          document.body.classList.remove('theme-color-pink')
          document.body.classList.remove('theme-color-default')
          elem.setAttribute('style', '--bs-info:#6410F1;')
          break
        case 'theme-color-pink':
          document.body.classList.add('theme-color-pink')
          document.body.classList.remove('theme-color-blue')
          document.body.classList.remove('theme-color-gray')
          document.body.classList.remove('theme-color-red')
          document.body.classList.remove('theme-color-yellow')
          document.body.classList.remove('theme-color-default')
          elem.setAttribute('style', '--bs-info:#25C799;')
          break
        case 'theme-color-default':
          document.body.classList.add('theme-color-default')
          document.body.classList.remove('theme-color-blue')
          document.body.classList.remove('theme-color-gray')
          document.body.classList.remove('theme-color-red')
          document.body.classList.remove('theme-color-yellow')
          document.body.classList.remove('theme-color-pink')
          elem.setAttribute('style', '--bs-info:#079aa2;')
          break
      }
      const event = new CustomEvent('ColorChange', { detail: { detail1: primaryColor.trim(), detail2: InfoColor.trim() } })
      document.dispatchEvent(event)
    },
    themeMode () {
      const themecolorMode = sessionStorage.getItem('theme-mode')
      const themeprimarycolorMode = sessionStorage.getItem('themeprimary-mode')
      const themechartcolorMode = sessionStorage.getItem('colorcustomchart-mode')
      if (themecolorMode !== null && themeprimarycolorMode !== null && themechartcolorMode !== null && themecolorMode !== undefined && themeprimarycolorMode !== undefined && themechartcolorMode !== undefined) {
        this.onThemeMode(themecolorMode, themeprimarycolorMode, themechartcolorMode)
        this.themecolormodeChange({ p1: themecolorMode, p2: themeprimarycolorMode, p3: themechartcolorMode })
      } else {
        this.onThemeMode(this.stateThemeColor, this.statePrimaryColor, this.stateInfoColor)
        this.themecolormodeChange({ p1: this.stateThemeColor, p2: this.statePrimaryColor, p3: this.stateInfoColor })
      }
    },
    onChangeDir (value) {
      const elem = document.querySelector('html')
      switch (value) {
        case 'ltr':
          elem.setAttribute('dir', 'ltr')
          break
        case 'rtl':
          elem.setAttribute('dir', 'rtl')
          break
      }
    },
    rtlmode () {
      const dirMode = sessionStorage.getItem('dir-mode')
      if (dirMode !== null) {
        this.onChangeDir(dirMode)
        this.schemedirmodeChange(dirMode)
      } else {
        this.onChangeDir(this.stateschemedir)
        this.schemedirmodeChange(this.stateschemedir)
      }
    }
  }
}
</script>
