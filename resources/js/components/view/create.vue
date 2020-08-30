<template>
    <div class="layout">
        <div class="container position-ref full-height pt-5">
            <div class="col-md-6 mx-auto text-center">
                <div class="header-title my-4">
                    <h1 class="wv-heading--title">
                    Create new Employee
                    </h1>

                </div>
            </div>
            <div class="row">
                <div class="col-md-4 mx-auto">
                    <div class="myform form ">
                        <form v-on:submit.prevent="createEmployee">
                            <div class="form-group">
                                <input
                                    v-model="employeeDate.name"
                                    type="text"

                                    class="form-control my-input"
                                    id="name"
                                    placeholder="Name"
                                />
                                <!-- <div class="invalid-feedback" v-if="errors.name">{{ error.name }}</div> -->
                            </div>
                            <div class="form-group">
                                <input
                                    v-model="employeeDate.position"
                                    type="Postion"

                                    class="form-control my-input"
                                    id="Postion"
                                    placeholder="Postion"
                                />
                                <!-- <div class="invalid-feedback" v-if="errors.name">{{ error.position }}</div> -->
                            </div>
                            <div class="form-group">
                                <input
                                    v-model="employeeDate.Salary"
                                    type="number"
                                    min="0"

                                    id="phone"
                                    class="form-control my-input"
                                    placeholder="Salary"
                                />
                                <!-- <div class="invalid-feedback" v-if="errors.name">{{ error.salary }}</div> -->
                            </div>
                            <div class="form-group">
                                <input
                                    v-model="employeeDate.jobStatus"
                                    type="text"

                                    class="form-control my-input"
                                    id="jobStatus"
                                    placeholder="job Status"
                                />
                                <!-- <div class="invalid-feedback" v-if="errors.name">{{ error.jobStatus }}</div> -->
                            </div>
                            <div class="form-group">
                                <input
                                    v-model="employeeDate.Status"
                                    type="text"

                                    class="form-control my-input"
                                    id="Status"
                                    placeholder="Status"
                                />
                                <!-- <div class="invalid-feedback" v-if="errors.name">{{ error.Status }}</div> -->
                            </div>
                            <div class="form-group">
                                <input
                                    v-model="employeeDate.yearLength"
                                    type="text"
                                    
                                    class="form-control my-input"
                                    id="yearLength"
                                    placeholder="Duration"
                                />
                                <!-- <div class="invalid-feedback" v-if="errors.name">{{ error.yearLength }}</div> -->
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
import * as employeeService from '../../services/employee_service';
export default {
    name : 'empolyee',
    data() {
        return {
            employeeDate : {
                name : "name",
                postion : "Postion",
                Salary : "Salary",
                jobStatus : "jobStatus",
                Status : "Status",
                yearLength : "yearLength"

            },
            methods: {
                createEmployee: async function() {
                    let formData = new formData();
                    formData.append('name', this.employeeDate.name),
                    formData.append('position', this.employeeDate.position),
                    formData.append('salary', this.employeeDate.Salary),
                    formData.append('name', this.employeeDate.jobStatus),
                    formData.append('name', this.employeeDate.Status),
                    formData.append('name', this.employeeDate.yearLength)

                    try {
                        const response = await this.employeeService.createEmployee(formData);
                        console.log(response);
                    } catch (error) {
                        alert('some error');
                    }
                }
            }
        }
    }
};
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
