<template>
  <div class="member col-12  col-md-6 col-xl-3" >
    <img :src="image" alt="member photo" class="member__photo"/>
    <h3 class="member__name">{{name}}</h3>
    <p class="member__position">{{position}}</p>
  </div>
</template>
<script>
export default {
  name: "TeaMadeCard",
  props: {
    image: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.member {
  display: block;
  text-align: center;
  color: $primary;
  //max-width: 310px;

  &__photo {
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 22px;
  }

  &__name {
    font-size: 25px;
    font-weight: 500;
    line-height: 30.48px;
    letter-spacing: 0.05em;
    margin-bottom: 10px;
    margin-top: 24px;
    text-transform: uppercase;
  }
  &__position{
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
  }
}
</style>