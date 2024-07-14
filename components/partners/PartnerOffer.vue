<template>
  <div class="offer-wrapper">
    <div class="offer-number">
      {{offerNumber}}
    </div>
    <div class="offer">
      <h3 class="sec-title">{{title}}</h3>
      <p class="description-paragraph">{{description}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "PartnerOffer",
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    offerNumber: {
      type: Number,
      required: true
    }
  }
}
</script>
<style scoped lang="scss">
.offer-wrapper{
  display: flex;
  align-items: flex-start;
  gap: 30px;

}
.offer-number{
  background: linear-gradient(180deg, #8D9972 0%, #BBCDAE 100%);
  width: 100%;
  max-width: 44px;
  height: 44px;
  padding: 7px 5px;
  text-align: center;
  vertical-align: center;
  font-size: 25px;
  font-weight: 500;
  line-height: 30.48px;
  letter-spacing: 0.05em;
  color: $white;
  border-radius: 4px;


}
</style>