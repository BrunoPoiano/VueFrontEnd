<template>
 <div class="nav-bar">
    <div class="links">
        <router-link class="link" :to="{name: 'VuexPage'}">
            <span>
                Vuex Page
            </span>
        </router-link>
        <router-link class="link" :to="{name: 'NormalPage'}">
            <span>
                Normal Page
            </span>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style  lang='stylus'>
.nav-bar{
    background: #3e3e3e;
    display: flex;
    width: 100%;
    padding: 10px;
    justify-content: center;
    align-items: center;
    .links{
        width: 20%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .link{
            padding: 5px 10px;
            background: #2d2d2d;
            span{
                font-weight: 500;
                font-size: 14px;
                line-height: 20px;
                color: rgb(169 169 169);
            }
            border-radius: 15px;
        }

        .link:hover{
            background: black;
            span{
                color: white;
            }
        }
        .router-link-active{
            background: black;
            span{
                color: white;
            }
        }
    }
}
</style>