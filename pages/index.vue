<template>
  <div>
    <div>
      <TopComponent class="hidden lg:block" />
      <TopComponentSmall class="block lg:hidden" />
    </div>
    <div>
      <div class="flex justify-center ">
        <div class="flex justify-evenly p-5 w-[400px] md:w-[600px] lg:w-[700px]">
          <div class="uppercase text-5">Projects</div>
          <!-- <div class="w-[85px] h-[34px] bg-[#dee0e0] rounded-full relative">
            <input id="toogleA" type="checkbox" class="sr-only" />
            <div class="dot m-[4px] h-[25px] w-[25px] bg-[#adaeae] rounded-full absolute"></div>
          </div> -->
          <label for="toggleB" class="flex items-center cursor-pointer">
            <div class="relative">
              <input v-model="onPapers" type="checkbox" id="toggleB" class="sr-only">
              <div class="block w-[85px] h-[34px] bg-[#dee0e0] rounded-full"></div>
              <div class="dot absolute left-1 top-1 h-[26px] w-[26px] bg-[#adaeae] rounded-full transition"></div>
            </div>
          </label>
          <div class="uppercase text-5">Papers</div>
        </div>
      </div>
      <div id="projects-papers">
        <Transition name="papers">
          <PaperList ref="papers" v-if="onPapers" />
        </Transition>
        <Transition name="projects">
          <ProjectList ref="projects" v-if="!onPapers" />
        </Transition>

      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Sachin Parajuli"
    }
  },
  data() {
    return {
      onPapers: true,
      loaded: false
    }
  },
  mounted(){
    var onPapers = localStorage.getItem("onPapers")
    if (onPapers == "false") onPapers = false
    else onPapers = true
    this.onPapers = onPapers
    this.loaded = true
  },
  watch: {
    onPapers(value) {
      if (process.client && this.loaded) {
        localStorage.setItem("onPapers", value)
      }
    }
  }
}
</script>

<style scoped>
input:checked~.dot {
  transform: translateX(200%);
}

.papers-enter {
  margin-left: 30px;
  opacity: 0.5;
}

.projects-enter {
  margin-left: -30px;
  opacity: 0.5;
}

.projects-enter-active,
.papers-enter-active {
  transition: all 0.7s ease-in-out;
}

#projects-papers {
  scroll-behavior: smooth;
}
</style>
