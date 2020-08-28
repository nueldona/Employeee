<template>
    <article>
        <Header />
        <main>
            <TopLayer />
            <SideLayout />
            <MainContent />
        </main>
    </article>
</template>

<script>
import Header from "./Header";
import TopLayer from "./TopLayer";
import SideLayout from "./SideLayout";
import MainContent from "./MainContent";
export default {
    components: {
        Header,
        TopLayer,
        SideLayout,
        MainContent
    }
};
</script>

<style lang="scss" scoped>
    main {
        width: 100%;
        height: 100%;
        padding: 1.2rem 3rem 0.4em 3rem;
    }
</style>
