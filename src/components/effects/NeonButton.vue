<template>
<h1 class="title-neon-button">
  neon button
</h1>
<div class="neon-button-container">
    <div class="neon-button" v-for="(btn, index) in button" :key="index">
        <button class="neon">
            {{btn.name}}
        </button>
    </div>
</div>
</template>

<script>
export default {
    props:{
        button:{
            default: [
                {
                    name: 'Bruno'
                },
                {
                    name: 'button'
                },
                {
                    name: 'neon'
                },
            ]
        }
    }
}
</script>

<style lang="scss">

.title-neon-button {
  color: var(--clr-text-title);
}

.neon-button-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    gap: 2rem;
    > *{
        flex: 1;
        min-width: 10rem;
    }
}
.neon-button{
    display: grid;
    justify-content: center;
    align-content: center;

    .neon{
        cursor: pointer;
        display: inline-block;
        position: relative;

        font-size: 1rem;
        color: var(--clr-neon-button);
        background: none;
        border: var(--clr-neon-button) .125em solid;
        padding: .25em 1em;
        border-radius: .25em;

        text-shadow: 
            0 0 0.125em hsl(0 0% 100% / 0.25),
            0 0 0.125em var(--clr-neon-button);
    
        box-shadow: 
            inset 0 0 0.5em 0 var(--clr-neon-button),
            0 0 0.5em 0 var(--clr-neon-button);

        
    }

    .neon::before,
    .neon::after{
        content: '';
        position: absolute;
        top: 0%;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .neon::before{
        pointer-events: none;
        background: var(--clr-neon-button);
        top: 125%;

        transform: 
            perspective(1.4em) 
            rotateX(25deg);
        
        filter: blur(1em);
        opacity: 0.5;
    }

    .neon::after{
        box-shadow: 0 0 1em .5em var(--clr-neon-button);
        background: var(--clr-neon-button);

        opacity: 0;
        z-index: -1;
        transition: opacity 100ms linear;
    }

    .neon:hover,
    .neon:focus{
        color: var(--clr-body-bg);
        text-shadow: none;
    }

    .neon:hover::after,
    .neon:focus::after,
    .neon:hover::before,
    .neon:focus::before{
        opacity: 1;
    }
}
</style>