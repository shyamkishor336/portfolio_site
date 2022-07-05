<template>
  <div class="
      min-h-[700px]
      md:min-h-[800px]
      bg-[#454c5e]
      relative
      font-['Poppins',
      sans-serif]
    ">
    <div class="">
      <div class="absolute w-full lg:w-auto lg:right-[6vw]">
        <div class="flex flex-row w-full justify-evenly pt-[30px] text-xl">
          <nuxt-link to="/" class="
              transition
              ease-in-out
              delay-150
              lg:mx-[2vw]
              border-b-[1px] border-white
              text-white
              hover:scale-110
            ">Home</nuxt-link>
          <nuxt-link to="/#projects-papers" class="
              transition
              ease-in-out
              delay-150
              lg:mx-[2vw]
              border-b-[1px] border-white
              text-white
              hover:scale-110
            ">Projects/Papers</nuxt-link>
          <nuxt-link to="/" class="
              transition
              ease-in-out
              delay-150
              lg:mx-[2vw]
              border-b-[1px] border-white
              text-white
              hover:scale-110
            ">CV</nuxt-link>
        </div>
      </div>
    </div>
    <div class="pt-[100px]">
      <div class="flex flex-row justify-center">
        <div class="
            uppercase
            text-center text-xl
            sm:text-2xl
            md:text-3xl
            xl:text-4xl
            text-white
            w-[90vw]
            sm:w-[80vw]
            lg:w-[60vw]
          ">
          {{ work.title }}
        </div>
      </div>
      <div class="flex flex-row justify-center mt-[80px]">
        <div class="flex flex-col md:flex-row w-[70vw]">
          <div class="basis-[100%] lg:basis-[30%]">
            <div class="columns-2 text-center md:text-left">
              <div class="break-inside-avoid-column mt-[5px]" v-for="specification in work.specifications"
                :key="specification.title">
                <div class="text-sm text-white uppercase">
                  {{ specification.title }}
                </div>
                <div v-for="bullet in specification.bullets" :key="bullet">
                  <div class="text-xs text-[#c5c5c5]">{{ bullet }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="
              basis-[100%]
              lg:basis-[70%]
              flex
              justify-evenly
              flex-row
              w-full
              mt-[30px]
            ">
            <a v-for="button in work.buttons" :key="button.title" :href="button.redirect_to">
              <div class="
                  w-[80px]
                  h-[40px]
                  md:w-[100px] md:h-[50px]
                  p-[8px]
                  md:p-[12px]
                  text-center
                  uppercase
                  rounded-full
                  bg-[#454c5e]
                  border-[1px]
                  md:border-[2]
                  border-white
                  text-white
                  hover:bg-black hover:text-slate-200 hover:cursor-pointer
                ">
                {{ button.title }}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute w-full flex flex-row justify-center image">
      <div class="w-[80vw]
            md:w[70vw]
            lg:w-[60vw]">

        <img class="w-[80vw]
            md:w[70vw]
            lg:w-[60vw]
            h-[55vw]
            md:h-[45vw]
            lg:h-[35vw]
            xl:h-[32vw]
            rounded-xl
            bg-slate-300" :src="require('@/static/projects_papers/' + work.image)">
        <div class="mt-[50px]">
          <div v-for="detail in work.details" :key="detail.title" class="mt-5">
            <h3 class="text-base font-semibold md:text-lg text-[#718471] uppercase">{{ detail.title }}</h3>
            <h2 v-if="detail.subtitle != ''"
              class="text-lg font-bold md:text-2xl text-[#000000] tracking-wider uppercase mt-2">{{ detail.subtitle }}
            </h2>
            <div class="">
              <img v-if="detail.image != ''" :src="require('@/static/projects_papers/' + detail.image)" />
            </div>
            <div v-if="detail.type == 'paragraph'">
              <p v-for="each in detail.detail" :key="each" class="text-base font-light md:text-lg text-[#434138] mt-3">
                {{ each }}
              </p>
            </div>
            <div v-else>
              <ul>
                <li v-for="each in detail.detail" :key="each"
                  class="text-base font-light md:text-lg text-[#434138] mt-3">
                  <span class="font-normal">{{ each.title }}</span><span>{{ each.detail }}</span>
                </li>
              </ul>
            </div>
            <div v-if="detail.extraDetail != ''" class="text-base font-light md:text-lg text-[#434138] mt-3">
              {{ detail.extraDetail }}
            </div>
          </div>
        </div>
        <div class="flex flex-row md:block justify-center">
          <div class="flex flex-col md:flex-row justify-between max-w-fit md:max-w-full">
            <div class=" my-[30px]" v-for="button in work.next_page_buttons" :key="button.title">
              <p class="text-center"> {{ button.work_name }} </p>
              <a :href="button.redirect_to" >
                <div class="
                  w-[120px] h-[45px]
                  p-[11px]
                  text-center
                  uppercase
                  rounded-full
                  bg-white
                  border-[1px]
                  md:border-[2]
                  border-[#454c5e]
                  text-[#454c5e]
                  hover:bg-black hover:text-slate-200 hover:cursor-pointer
                ">
                  {{ button.title }}
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head(){
    return{
      title: this.work.title
    }
  },
  async asyncData({ params, store, redirect }) {
    if (store.state.works[params.work]) {
      return { work: store.state.works[params.work] };
    } else {
      redirect("/");
    }
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.image {
  top: calc(700px - 30vw);
}

@media (min-width: 640px) {
  .image {
    top: calc(700px - 28vw);
  }
}

@media (min-width: 768px) {
  .image {
    top: calc(700px - 26vw);
  }
}

@media (min-width: 1024px) {
  .image {
    top: calc(800px - 23vw);
  }
}
</style>