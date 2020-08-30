<template>
    <article class="main">
        <li class="list-title">
            <div>
                <label class="custom__label">
                    <input type="checkbox" checked="checked" />
                    <span class="custom__checkbox"></span>
                </label>
            </div>
            <div>
                <P class="list__text">EMPLOYEE</P>
                <i class="fas fa-long-arrow-alt-up"></i>
            </div>
            <div>
                <P class="list__text">SALARY</P>
                <i class="fas fa-long-arrow-alt-up"></i>
            </div>
            <div>
                <P class="list__text">STATUS</P>
                <i class="fas fa-long-arrow-alt-down"></i>
            </div>
            <div>
                <P class="list__text">MANAGE</P>
            </div>
        </li>

        <ul id="items" class="list-group mt-4">
            <li class="list-group-item mb-2">
                <div class="d-flex alt__div">
                    <label class="custom__label">
                        <input type="checkbox" checked="checked" />
                        <span class="custom__checkbox"></span>
                    </label>
                    <img
                        src="/img/christopher-campbell-rDEOVtE7vOs-unsplash.jpg"
                        class="img"
                        alt=""
                    />
                    <!-- <div class="user">
                        <img src="/img/christopher-campbell-rDEOVtE7vOs-unsplash.jpg" alt="">
                    </div> -->
                </div>
                <div>
                    <P class="list__text__1">Ronny Asmo</P>
                    <small>Software engineer</small>
                </div>
                <div>
                    <P class="list__text__1">3,200 NOK</P>
                    <small>full time</small>
                </div>
                <div>
                    <P class="list__text__1">test period</P>
                    <small>2 months</small>
                </div>
                <div class="icon__group">
                    <i class="fas fa-pencil-alt"></i>
                    <span></span>
                    <i class="far fa-trash-alt"></i>
                </div>
            </li>

            <li class="list-group-item mb-5">
                <div class="d-flex alt__div">
                    <label class="custom__label">
                        <input type="checkbox" checked="checked" />
                        <span class="custom__checkbox"></span>
                    </label>
                    <img
                        src="/img/mohammad-khaksarmadani-4FDsNcCR8iQ-unsplash.jpg"
                        class="img"
                        alt=""
                    />
                </div>
                <div>
                    <P class="list__text__1">Tomas Lonsetteig</P>
                    <small>Business analyst</small>
                </div>
                <div>
                    <P class="list__text__1">4,000 NOK</P>
                    <small>full time</small>
                </div>
                <div>
                    <P class="list__text__1">test period</P>
                    <small>2 months</small>
                </div>
                <div class="icon__group">
                    <i class="fas fa-pencil-alt"></i>
                    <span></span>
                    <i class="far fa-trash-alt"></i>
                </div>
            </li>
        </ul>
    </article>
</template>

<script>
export default {
    name: "employee",
    data() {
        return {
            employee: {
                name: "",
                position: "",
                salary: "",
                jobStatus: "",
                status: "",
                yearLength: ""
            }
        };
    }
};
</script>

<style lang="scss" scoped>
.main {
    width: 67.5%;
    float: right;

    .list-title,
    .list-group-item {
        position: relative;
        display: grid;
        grid-template-columns: 15% repeat(3, 1fr) 15%;
        padding: 0.75rem 1.5rem;
    }

    .list-title {
        width: 100%;
        height: 30px;
        div {
            display: flex;
            text-align: center;
            p {
                font-size: 0.9rem;
                font-weight: 700;
            }
            .fa-long-arrow-alt-up {
                color: #b2bec3;
            }
            .fa-long-arrow-alt-down {
                color: #5f27cd;
            }
            i {
                font-size: 1.2rem;
                margin-left: 0.7rem;
            }
        }
    }

    .list-group-item {
        align-items: center;
        border-radius: 10px;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
        opacity: 0.9;
        &:hover {
            box-shadow: 0 0.7rem 1.2rem rgba(0, 0, 0, 0.15);
            opacity: 1;
        }
        .alt__div {
            .custom__label {
                margin-top: 12px;
            }
        }
        .icon__group {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            i {
                font-size: 1.5rem;
                color: #b2bec3;
            }

            span {
                display: block;
                width: 1px;
                height: 3.1rem;
                background: #b2bec3;
            }
        }
    }
}

.custom__label {
    display: block;
    position: relative;
    padding: 4px 0px 0px 35px;
    cursor: pointer;
    user-select: none;

    &:hover input ~ .custom__checkbox {
        background-color: #ffffff;
    }

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;

        &:checked ~ .custom__checkbox {
            background-color: #ffffff;
        }
        &:checked ~ .custom__checkbox:after {
            display: block;
        }
    }
    .custom__checkbox {
        position: absolute;
        top: 0;
        left: 0;
        height: 27px;
        width: 27px;
        background-color: #ffffff;
        border: 2px solid #dfdede;
        border-radius: 7px;
        &:after {
            content: "";
            position: absolute;
            display: none;
        }
        &:after {
            top: 1px;
            left: 7px;
            width: 9px;
            height: 15px;
            border: solid #3d4750;
            border-width: 0 3px 3px 0;
            transform: rotate(45deg);
        }
    }
}

.img {
    width: 55px;
    height: 55px;
    margin-left: 14px;
    object-fit: cover;
    max-width: 100%;
    border-radius: 50px;
}

.list__text__1 {
    font-size: 1rem;
    margin-bottom: 0px;
    font-weight: 600;
}

small {
    font-size: 0.8rem;
    font-weight: 500;
    color: #979696;
}
</style>
