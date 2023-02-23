<template>
  <div>
    {{current_page}}
    {{from}}
    {{last_page}}

    <div v-for="(from, index) in last_page" :key="index">
        <button @click="$emit('currentPage', from)" :disabled="current_page == from">
            {{from}}
        </button>
    </div>
  </div>
</template>

<script>
export default {
    props:[
        'current_page',
        'from',
        'last_page',
    ],
}
</script>

<style>

</style>