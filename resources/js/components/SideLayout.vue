<template>
    <aside class="layoutSidenav">
        <div class="inner__layout">
            <div class="top__content">
                <img src="/img/logo.jpg" alt="" />
                <p>all employee</p>
            </div>
            <div class="middle__content">
                <p class="text__md">PROJECT</p>
                <ul id="v-for-object" class="demo">
                    <li v-for="todo in todos" v-bind:key="todo.id">
                        <div class="user">{{ todo.title }}</div>
                        <p class="text__sm">{{ todo.msg }}</p>
                    </li>
                </ul>
            </div>
            <div class="bottom__content">
                <p class="text__md">STATUS</p>
                <ul id="v-for-object" class="demo">
                    <li v-for="period in periods" v-bind:key="period.id" class="li">
                        <div class="user">{{ period.title }}</div>
                        <p class="text__sm">{{ period.msg }}</p>
                    </li>
                </ul>
            </div>
            <div class="btn__box">
                <button class="btn btn__md">add project</button>
            </div>
        </div>
    </aside>
</template>

<script>
export default {
    data() {
        return {
            todos: [
                {
                    id: 1,
                    title: "AS",
                    msg: "Arena Sport"
                },
                {
                    id: 2,
                    title: "DS",
                    msg: "DSV"
                },
                {
                    id: 3,
                    title: "SM",
                    msg: "Seafood Mail"
                },
                {
                    id: 4,
                    title: "FS",
                    msg: "FireStar"
                },
                {
                    id: 5,
                    title: "ZB",
                    msg: "Zeta Bank"
                }
            ],
            periods: [
                {
                    id: 1,
                    title: "FT",
                    msg: "Full time"
                },
                {
                    id: 2,
                    title: "PT",
                    msg: "Part time"
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.layoutSidenav {
    width: 30%;
    float: left;
}

.inner__layout {
    width: 100%;
    height: 100%;
    background: #ffffff;
    padding: 2rem 2rem 3em 2rem;
    border-radius: 20px;
    position: relative;

    .top__content {
        display: flex;
        text-align: center;
        align-items: center;
        margin-bottom: 1.3rem;
        img {
            vertical-align: middle;
        }
        p {
            text-align: center;
            margin-bottom: 0rem;
            font-size: 1.1rem;
            font-weight: 400;
            text-transform: capitalize;
        }
    }

    .middle__content,
    .bottom__content {
        // padding: 1rem 1rem;
        ul {
            list-style-type: none;
            padding-inline-start: 0px;
            li {
                display: flex;
                align-items: center;
                padding: 1rem 1rem;
                &:hover {
                    background: #f1f1f1;
                    cursor: pointer;
                    border-radius: 10px;
                }
                .user {
                    width: 45px;
                    height: 45px;
                    color: #ffffff;
                    text-align: center;
                    font-size: 0.9rem;
                    padding-top: 10px;
                    border: 1px solid #b2bec3;
                    background: #b2bec3;
                    border-radius: 50px;
                }

                .text__sm {
                    font-weight: 400;
                    margin: 4px 0px 0px 10px;
                }
            }
            li:nth-child(3) {
                .user {
                    border: 1px solid #25CCF7;
                    background: #25CCF7;
                }

            }
            li:nth-child(4) {
                .user {
                    border: 1px solid #FD7272;
                    background: #FD7272;
                }

            }
            li:nth-child(5) {
                .user {
                    border: 1px solid #58B19F;
                    background: #58B19F;
                }

            }
            .li:nth-child(1) {
                .user {
                    border: 1px solid #1B9CFC;
                    background: #1B9CFC;
                }
            }
            .li:nth-child(2) {
                .user {
                    border: 1px solid #1dd1a1;
                    background: #1dd1a1;
                }
            }

        }

        .text__md {
            color: #b2bec3;
            font-size: 1rem;
            font-weight: 700;
        }
    }

    .btn__box {
        position: absolute;
        top: 96.4%;
        left: 20%;
        content: '';
        .btn__md {
            background: #5f27cd;
            color: #ffffff;
            padding: .8rem 4rem;
            font-size: 1.2rem;
            border-radius: 40px;
        }
    }

}

</style>
