<template>
  <div>
    <df-messenger
      intent="WELCOME"
      chat-title="Chatbot"
      agent-id="8c6e64b0-4819-48ca-97b6-2f7a7407be58"
      language-code="en"
      expand="true"
    ></df-messenger>
  </div>
</template>
<script>
export default {
  mounted () {
    const dialogflowScript = document.createElement('script')
    dialogflowScript.setAttribute('src', 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1')
    document.head.appendChild(dialogflowScript)

    // // Initialize Dialogflow Messenger
    // window.dfMessenger.init({
    //   dfConfig: {
    //     agentId: 'YOUR_AGENT_ID',
    //     languageCode: 'en',
    //     backgroundColor: '#FFFFFF'
    //   },
    //   onChatLoaded: function (chat) {
    //     chat.open()
    //   }
    // })
  }
}
</script>
<style lang="">

</style>
