<template>
    <div class="bg-white">
      <nav
        class="
          container
          px-8
          my-6
          mx-auto
          md:flex md:justify-between md:items-center
        "
      >
        <div class="flex items-center justify-between">
          <router-link
            to="/"
            class="
              text-xl
              font-bold
              text-gray-500
              md:text-2xl
              hover:text-rose-600
            "
            >Ben Agala
          </router-link>
          <!-- Mobile menu button -->
          <div @click="toggleNav" class="flex md:hidden">
            <button
              type="button"
              class="
                text-gray-500
                hover:text-gray-400
                focus:outline-none focus:text-gray-400
              "
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
  
        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul :class="showMenu ? 'flex' : 'hidden'"
          class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
          <li class="text-gray-500 hover:text-rose-600 font-medium">
            <a href="#" class="flex justify-between md:inline-flex p-4 items-center hover:bg-fuchsia-100 space-x-2">
                    <span>About</span>
                </a>
          </li>
          <li class="text-gray-500 hover:text-rose-600 font-medium">
            <a href="#" class="flex justify-between md:inline-flex p-4 items-center hover:bg-fuchsia-100 space-x-2">
                    <span>Portfolio </span>
                </a>
          </li>


          <li class="relative parent text-gray-500 hover:text-rose-600 font-medium">
            <a href="#" class="flex justify-between md:inline-flex p-4 items-center hover:bg-fuchsia-100 space-x-2">
                    <span>Services</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current pt-1" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
                </a>
            <ul class="child transition duration-300 md:absolute top-full right-0 md:w-48 bg-white md:shadow-lg md:rounded-b ">
                    <li>
                        <a href="#" class="flex px-4 py-3 hover:bg-fuchsia-100">
                            Web development
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex px-4 py-3 hover:bg-fuchsia-100">
                            Web Design
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex px-4 py-3 hover:bg-fuchsia-100">
                            Technical / IT Support
                        </a>
                    </li>
                </ul>
          </li>
          <li class="text-gray-500 hover:text-rose-600 font-medium">
            <a href="#" class="flex justify-between md:inline-flex p-4 items-center hover:bg-fuchsia-100 space-x-2">
                    <span>Contact</span>
                </a>
          </li>
        </ul>
      </nav>
    </div>
  </template>

<script>
    export default {
        setup() {
            let showMenu = ref(false);
            const toggleNav = () => (showMenu.value = !showMenu.value);
            return { showMenu, toggleNav };
        },     
    }
</script>

<style scoped>
    
@media only screen and (min-width: 768px){
.parent:hover .child {
  opacity:1;
  height:auto;
  overflow:none;
  transform: translateY(0);
}
.child {
  position: absolute;
  z-index: 2;
  opacity:0;
  height:0;
  overflow:hidden;
  transform: translateY(-10%);
  }
}

</style>