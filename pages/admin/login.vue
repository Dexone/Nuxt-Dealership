<template>




    <form class="max-w-sm mx-auto">
        <label for="website-admin"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Админ-панель</label>
        <p id="helper-text-explanation" class="mb-2 text-sm text-gray-500 dark:text-gray-400">Введите ключ доступа</p>
        <div class="flex mb-2 space-x-2 rtl:space-x-reverse">
            <div>
                <input v-model="inp1" type="text" maxlength="1" id="code-1"
                    class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500">
            </div>
            <div>
                <input v-model="inp2" @keydown.delete=" inp3 = '', inp1focus()" type="text" maxlength="1" id="code-2"
                    class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 ">
            </div>
            <div>
                <input v-model="inp3" @keydown.delete=" inp3 = '', inp2focus()" type="text" maxlength="1" id="code-3"
                    class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500">
            </div>
            <div>
                <input v-model="inp4" @keydown.delete="inp4 = '', inp3focus()" type="text" maxlength="1" id="code-4"
                    class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500">
            </div>

        </div>

    </form>


    <!-- <div>
    <input v-model="state.name" type="text">
    <input v-model="state.color" type="text">
    <input v-model="state.size" type="text">
    <input v-model.number="state.count" type="range" min="0" step="0.01" max="1000">

    <pre >{{ text }}</pre>
  </div> -->


<input v-model="test">
</template>

<script setup>

import { useStorage } from '@vueuse/core'



// const theDefault = {
//   name: 'Banana',
//   color: 'Yellow',
//   size: 'Medium',
//   count: 0,
// }
// const state = useStorage('vue-use-local-storage', theDefault)
// const state2 = useStorage('vue-use-local-storage', theDefault)

// const text = state2

const test = ref()

const state = useStorage('vue-use-local-storage', test)
const state2 = useStorage('vue-use-local-storage', test)



const inp1 = ref()
const inp2 = ref()
const inp3 = ref()
const inp4 = ref()






watch([inp1, inp2, inp3, inp4], () => {
    test = "prov"
    if (inp1.value.length > 0) {
        inp2focus()
    }
    if (inp2.value.length > 0) {
        inp3focus()
    }
    if (inp3.value.length > 0) {
        inp4focus()
    }
});


function inp1focus() {
    document.getElementById('code-1').focus();  // sets the focus on the input
}

function inp2focus() {
    document.getElementById('code-2').focus();  // sets the focus on the input
}

function inp3focus() {
    document.getElementById('code-3').focus();  // sets the focus on the input
}

function inp4focus() {
    document.getElementById('code-4').focus();  // sets the focus on the input
}



</script>
