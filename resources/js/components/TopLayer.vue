<template>
  <div class="layer">
      <div class="inner__layer">
          <div class="text__lg">employee</div>
          <button class="btn btn__md">add employee</button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.layer {
    max-width: 100%;
    height: 100%;
    .inner__layer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 2rem 1.5em 2rem;
        .text__lg {
            font-size: 2rem;
            font-weight: 800;
            color: #000000;
        }
        .btn__md {
            background: #4fd4b3;
            color: #ffffff;
            padding: .7rem 2.5rem;
            font-size: 1rem;
            border-radius: 50px;
        }
    }
}
</style>
