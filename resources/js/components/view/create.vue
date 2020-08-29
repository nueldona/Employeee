<template>
    <div class="layout">
        <div class="container position-ref full-height">
            <div class="row">
                <div class="col-md-4 mx-auto">
                    <div class="myform form ">
                        <form action="" method="post" name="login">
                            <div class="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    class="form-control my-input"
                                    id="name"
                                    placeholder="Name"
                                />
                            </div>
                            <div class="form-group">
                                <input
                                    type="Postion"
                                    name="Postion"
                                    class="form-control my-input"
                                    id="Postion"
                                    placeholder="Postion"
                                />
                            </div>
                            <div class="form-group">
                                <input
                                    type="number"
                                    min="0"
                                    name="phone"
                                    id="phone"
                                    class="form-control my-input"
                                    placeholder="Salary"
                                />
                            </div>
                            <div class="form-group">
                                <input
                                    type="text"
                                    name="Status"
                                    class="form-control my-input"
                                    id="jobStatus"
                                    placeholder="job Status"
                                />
                            </div>
                            <div class="form-group">
                                <input
                                    type="text"
                                    name="Status"
                                    class="form-control my-input"
                                    id="Status"
                                    placeholder="Status"
                                />
                            </div>
                            <div class="form-group">
                                <input
                                    type="text"
                                    name="Status"
                                    class="form-control my-input"
                                    id="yearLength"
                                    placeholder="Duration"
                                />
                            </div>
                            <div class="text-center ">
                                <button
                                    type="submit"
                                    class=" btn btn-block send-button tx-tfm"
                                >
                                    submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>

.full-height {
    height: 100vh;
}



.position-ref {
    position: relative;
}

.send-button {
    background: #54c7c3;
    width: 100%;
    font-weight: 600;
    color: #fff;
    padding: 8px 25px;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
.my-input {
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
    cursor: text;
    padding: 8px 10px;
    transition: border 0.1s linear;
}

</style>
