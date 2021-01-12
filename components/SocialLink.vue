<template>
    <div>
        <ul>
            <li v-for="(item, index) in social" :key="index">
                <a :href="item.href" target="_blank" class="dark:text-white text-base text-2xl hover:text-primary hover:animate-wiggle block transition duration-300">
                    <i :class="item.icon"></i>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            social: [
                {
                    icon: '"uil uil-google',
                    href: '#'
                },
                {
                    icon: 'uil uil-facebook-f',
                    href: '#'
                },
                {
                    icon: 'uil uil-linkedin',
                    href: '#'
                }
            ]
        }
    }
}
</script>